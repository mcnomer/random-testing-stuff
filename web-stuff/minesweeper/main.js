import './style.css'
import * as ort from 'onnxruntime-web/webgpu';

// init buttons
const resetButton = document.querySelector(".buttons > .reset");
resetButton.onclick = () => resetGame();
const solveButton = document.querySelector(".buttons > .solve");
solveButton.onclick = () => autoSolve();
const MLButton = document.querySelector(".buttons > .solve-ml");
MLButton.onclick = () => solveWithML();
const gameOverText = document.querySelector(".gameover");
const flagCounter = document.querySelector(".flagcounter > .counter");

const session = ort.InferenceSession.create('./test.onnx', { executionProviders: ['webgpu'], });

// init canvas
const canvas = document.querySelector(".main > .game > canvas");
const ctx = canvas.getContext("2d", {alpha: false});
const pixelRatio = window.devicePixelRatio || 1;
ctx.scale(pixelRatio, pixelRatio);
ctx.imageSmoothingEnabled = false;
ctx.textRendering = "optimizeLegibility";
window.debug = false;
window.verbose = false;


const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);

// tell the browser what size the canvas is? idk it just helps scaling things I think
const canvasSizePx = Math.min(window.screen.width, window.innerWidth, window.innerHeight-4*rem-5*rem);
[canvas.width, canvas.height] = [canvasSizePx*pixelRatio, canvasSizePx*pixelRatio];
canvas.style.width = canvasSizePx + 'px';
canvas.style.height = canvasSizePx + 'px';

// globals for game
const canvasSize = Math.min(canvas.clientWidth, canvas.clientHeight) * pixelRatio;
const gridSize = 20;
const cellSize = Math.floor(canvasSize / gridSize);
const minesGrid = Array(gridSize*gridSize).fill(0);
const clearedGrid = Array(gridSize*gridSize).fill(false);
const flaggedGrid = Array(gridSize*gridSize).fill(false);
const guessingGrid = Array(gridSize*gridSize).fill(0);
const gridPixelSize = gridSize*cellSize;
const outerMargin = ((canvasSize - gridPixelSize) / 2)/pixelRatio; // margin width around game region of canvas
let gameOver = false;
const numMines = 48;
let firstClick = true;
let guessingMode = false;
let gameWins = 0;
let gameLosses = 0;
let highlightedCellIndex = -1;

// init font to match cell size
ctx.font = `${cellSize}px sans-serif`;
ctx.textBaseline = "top";
ctx.textAlign = "center";
const fontColoursDict = {
  0: "transparent",
  1: "navy",
  2: "green",
  3: "maroon",
  4: "purple",
  5: "gold",
  6: "cyan",
  7: "olive",
  8: "grey"
}

// render grid
function renderGrid() {
  // set background colour
  ctx.fillStyle = "#1a1a1a";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const [adjX, adjY] = coordsToPixels(x, y);
      
      // add background checkerboard
      ctx.fillStyle = ((y+x) % 2 === 0) ? "bisque" : "burlywood";
      ctx.fillRect(adjX, adjY, cellSize, cellSize);
      
      // adding text
      if (minesGrid[y*gridSize+x] !== -1) {
        ctx.fillStyle = fontColoursDict[minesGrid[y*gridSize+x]];
        const [textOffX, textOffY] = getCentredTextOffsets(minesGrid[y*gridSize+x]);
        ctx.fillText(minesGrid[y*gridSize+x], adjX+(cellSize/2), adjY+(cellSize/2)+textOffY);
      } else {
        ctx.fillStyle = "maroon";
        ctx.fillRect(adjX, adjY, cellSize, cellSize);
      }

      // cover if not clear with foreground checkerboard
      if (!clearedGrid[y*gridSize+x]) {
        ctx.fillStyle = ((y+x) % 2 === 0) ? "#56B740" : "#238223";
        
        // highlight cell if hovered over
        if (highlightedCellIndex === y*gridSize+x) {
          ctx.fillStyle = ((y+x) % 2 === 0) ? "#8CCC7A" : "#7FC76B";
          // ctx.fillStyle = ((y+x) % 2 === 0) ? "rgba(201, 238, 191, 0.5)" : "rgba(201, 255, 185, 0.6)";
          // ctx.fillRect(adjX, adjY, cellSize, cellSize);
        }

        ctx.fillRect(adjX, adjY, cellSize, cellSize);
      }

      // add flags
      if (flaggedGrid[y*gridSize+x]) {
        ctx.fillStyle = "red";
        ctx.font = `${cellSize*0.8}px sans-serif`;
        const [textOffX, textOffY] = getCentredTextOffsets(minesGrid[y*gridSize+x]);
        ctx.fillText("🚩", adjX+(cellSize/2), adjY+(cellSize/2)+textOffY);
        ctx.font = `${cellSize}px sans-serif`;
      }

      // add debug text
      if (window.debug && guessingMode) {
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.font = `${cellSize*0.4}px sans-serif`;
        // ctx.fillText(Math.round(guessingGrid[y*gridSize+x]*10)/10,adjX+2, adjY+2);
        const guessValue = guessingGrid[y*gridSize+x];
        if (guessValue > 0) ctx.fillText(guessingGrid[y*gridSize+x],adjX+2, adjY+2);
        ctx.font = `${cellSize}px sans-serif`;
        ctx.textAlign = "center";
      }

      flagCounter.innerHTML = numMines - flaggedGrid.reduce((sum, x) => sum + x);
    }
  }
}

function coordsToPixels(x, y) {
  return [outerMargin+x*cellSize, outerMargin+y*cellSize];
}

function gridIndexToCoords(index) {
  const x = index % gridSize;
  const y = (index-x) / gridSize;
  return [x, y];
}

function getCentredTextOffsets(text) {
  const textMetrics = ctx.measureText(text);
  const height = textMetrics.actualBoundingBoxAscent-textMetrics.actualBoundingBoxDescent;
  return [
    textMetrics.width / 2,
    height / 2
  ];
}

function initMinesGrid() {
  for (let i = 0; i < numMines; i++ ) {
    let randCell = Math.floor(Math.random()*gridSize*gridSize);
    if (minesGrid[randCell] === -1) {
      i--;
    } else {
      minesGrid[randCell] = -1;
    }
  }
  
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (minesGrid[y*gridSize+x] !== -1) {
        minesGrid[y*gridSize+x] = getSurroundingCellCoords(x, y).reduce((partialSum, coords) => {
          return partialSum + (minesGrid[coords[1]*gridSize+coords[0]] === -1);
        }, 0);
      }
    }
  }
}

// get array of surrounding 8 cells' coords, omitting those outside the bounds of the grid
function getSurroundingCellCoords(x, y) {
  let surroundingCells = Array(9);
  let i = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      surroundingCells[i] = [x+dx, y+dy];
      i++;
    }
  }
  surroundingCells[4] = [-1, -1]; // make sure centre cell (itself) is removed from surroundings arr
  return surroundingCells.filter(coords => {
    return (coords[0] >= 0) && (coords[1] >= 0) && (coords[0] <= gridSize-1) && (coords[1] <= gridSize-1);
  })
}

function isPointerInDrawArea(pointerX, pointerY) {
  const pointerScaledX = (pointerX - (canvas.clientLeft+outerMargin/pixelRatio)) / (canvas.clientWidth - outerMargin*2);
  const pointerScaledY = (pointerY - (canvas.clientTop+outerMargin/pixelRatio)) /  (canvas.clientHeight - outerMargin*2)
  return (
    ((0 < pointerScaledX) && (pointerScaledX < 1) && (0 < pointerScaledY) && (pointerScaledY < 1))
  );
}

function pointerEventToGridCoords(pointerX, pointerY) {
  const pointerGridX = Math.floor(((pointerX - (canvas.clientLeft+outerMargin/pixelRatio)) / (canvas.clientWidth - outerMargin*2)) * gridSize);
  const pointerGridY = Math.floor(((pointerY - (canvas.clientTop+outerMargin/pixelRatio)) /  (canvas.clientHeight - outerMargin*2)) * gridSize);
  if (pointerGridX < 0 || pointerGridY < 0 || pointerGridX > gridSize-1 || pointerGridY > gridSize-1) console.log("POINTER ERROR OUT OF BOUNDS, pos: ", pointerGridX, pointerGridY);
  return [pointerGridX, pointerGridY];
}

canvas.onclick = e => {
  e.preventDefault();
  if (gameOver) resetEndGameOverlay();

  // check the pointer coords are in the 
  if (!isPointerInDrawArea(e.offsetX, e.offsetY)) return;

  // transform pointer coords into cell coords
  const [pointerGridX, pointerGridY] = pointerEventToGridCoords(e.offsetX, e.offsetY);
  clearCellsOnClick(pointerGridX, pointerGridY);
  renderGrid();
}

canvas.oncontextmenu = e => {
  e.preventDefault();

  // check the pointer coords are in the 
  if (!isPointerInDrawArea(e.offsetX, e.offsetY)) return;
  
  const [pointerGridX, pointerGridY] = pointerEventToGridCoords(e.offsetX, e.offsetY);
  toggleFlag(pointerGridX, pointerGridY);
  renderGrid();
}

canvas.onpointermove = e => {
  if (e.pointerType !== "mouse") return;
  if (gameOver) return (highlightedCellIndex = 0);
  if (isPointerInDrawArea(e.offsetX, e.offsetY)) {
    const [pointerGridX, pointerGridY] = pointerEventToGridCoords(e.offsetX, e.offsetY);
    // console.log(pointerEventToGridCoords(e.offsetX, e.offsetY))
    highlightedCellIndex = pointerGridY * gridSize + pointerGridX;
    requestAnimationFrame(renderGrid);
  } else {
    canvasLeaveHandler();
  }
};

canvas.onpointerleave = canvasLeaveHandler;

function clearCellsOnClick(x, y) {
  if (gameOver) return;

  // checking the cell isn't flagged
  if (flaggedGrid[y*gridSize+x] === true) return;

  if (firstClick) {
    for (let i = 0; i < 1000; i++) {
      if (minesGrid[y*gridSize+x] === 0) break;
      if (window.verbose) console.log(`regen attempt #${i}.`);
      resetGame();
      if (window.verbose && (i === 0)) console.log("(just making sure you don't lose on the first turn)");
    }
    firstClick = false;
  }

  if (minesGrid[y*gridSize+x] === -1) {
    endGame(false);
    return;
  }
  
  // check for empty adjacent cells and recursively clear them and their neighbours
    let neighbours = new Set().add(y*gridSize+x);
    let justCleared = new Set();
    for (let neighbour of neighbours) {
      if (minesGrid[neighbour] === 0) {
        for (let nextNeighbour of getSurroundingCellCoords(...gridIndexToCoords(neighbour)).map(e => e[1]*gridSize+e[0])) {
          if ((!justCleared.has(nextNeighbour)) && (minesGrid[nextNeighbour] !== -1)) neighbours.add(nextNeighbour);
        }
      }
      justCleared.add(neighbour);
    }
    for (let neighbour of neighbours) {
      clearedGrid[neighbour] = true;
    }

  checkForWin();
}

function toggleFlag(x, y) {
  if (gameOver) return;
  // checking the cell isn't cleared
  if (clearedGrid[y*gridSize+x] === true) return;
  flaggedGrid[y*gridSize+x] = !flaggedGrid[y*gridSize+x];
  checkForWin();
}

function canvasLeaveHandler() {
  highlightedCellIndex = -1;
  requestAnimationFrame(renderGrid);
}

function checkForWin() {
  let allClearedWin = true;
  let allFlaggedWin = true;
  for (let i = 0; i < minesGrid.length; i++) {
    if ((minesGrid[i] !== -1) && (clearedGrid[i] !== true)) allClearedWin = false;
  }
  for (let i = 0; i < minesGrid.length; i++) {
    if ((minesGrid[i] === -1) && (flaggedGrid[i] !== true)) allFlaggedWin = false;
  }
  allFlaggedWin = (allFlaggedWin && ((numMines - flaggedGrid.reduce((sum, x) => sum + x)) >= 0));
  const won = allClearedWin || allFlaggedWin;
  if (!won) return;
  endGame(true);
}

function endGame(won = false) {
  if (won) {
    gameOverText.innerHTML = "You Win!";
    gameWins++;
  } else {
    gameLosses++;
  }
  if (window.debug) console.log(`Win rate: ${gameWins}/${gameWins+gameLosses}, ${Math.round((gameWins*10000)/(gameWins+gameLosses))/100}%`);
  canvas.style.filter = "blur(5px)";
  gameOverText.style.display = "block";
  gameOver = true;
}

function resetEndGameOverlay() {
  canvas.style = "";
  canvas.style.width = canvasSizePx + 'px';
  canvas.style.height = canvasSizePx + 'px';
  gameOverText.style = "";
  gameOverText.innerHTML = "Game Over";
}

function resetGame() {
  minesGrid.fill(0);
  clearedGrid.fill(false);
  flaggedGrid.fill(false);
  guessingGrid.fill(0);
  initMinesGrid();
  resetEndGameOverlay();
  hideGuessUI();
  renderGrid();
  gameOver = false;
  firstClick = true;
}

function autoSolve() {
  if (gameOver) return;
  if (guessingMode) return runGuessingSolver();
  if (firstClick) {
    requestAnimationFrame(() => {
      clearCellsOnClick(Math.floor((gridSize-1)/2), Math.floor((gridSize-1)/2));
      renderGrid();
      requestAnimationFrame(() => solverIteration(0, true));
    });
  } else {
    requestAnimationFrame(() => solverIteration(0, true));
  }
}

function solverIteration(iterationNumber = 0, loop = false) {
  let numActionsTakenBefore = clearedGrid.reduce((sum, a) => sum+a)+flaggedGrid.reduce((sum, a) => sum+a);
  // clear all possible unflagged cells
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if ((clearedGrid[y*gridSize+x] === true) && (minesGrid[y*gridSize+x] > 0)) {
        let n = minesGrid[y*gridSize+x];
        let neighbours = getSurroundingCellCoords(x,y);
        let unclearedNeighbours = neighbours.filter(coords => (!clearedGrid[coords[1]*gridSize+coords[0]]));
        let flaggedNeighbours = neighbours.filter(coords => (flaggedGrid[coords[1]*gridSize+coords[0]]));
        if (n === flaggedNeighbours.length) {
          for (let neighbour of unclearedNeighbours.filter(coords => (!flaggedGrid[coords[1]*gridSize+coords[0]]))) {
            clearCellsOnClick(neighbour[0], neighbour[1]);
          }
        }
      }
    }
  }
  renderGrid();
  //set up flags
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if ((clearedGrid[y*gridSize+x] === true) && (minesGrid[y*gridSize+x] > 0)) {
        let n = minesGrid[y*gridSize+x];
        let neighbours = getSurroundingCellCoords(x,y);
        let unclearedNeighbours = neighbours.filter(coords => (!clearedGrid[coords[1]*gridSize+coords[0]]));
        if (n === unclearedNeighbours.length) {
          for (let neighbour of unclearedNeighbours.filter(coords => (!flaggedGrid[coords[1]*gridSize+coords[0]]))) {
            toggleFlag(neighbour[0], neighbour[1]);
          }
        }
      }
    }
  }
  renderGrid();
  let numActionsTakenAfter = clearedGrid.reduce((sum, a) => sum+a)+flaggedGrid.reduce((sum, a) => sum+a);
  let numActionsThisStep = numActionsTakenAfter-numActionsTakenBefore;
  if ((numActionsThisStep === 0) && !gameOver) showGuessUI();
  if (numActionsThisStep === 0) return 1;
  if (gameOver) return 1;
  if (loop) requestAnimationFrame(() => solverIteration(iterationNumber+1, true));
  return 0;
}

function indexOfSmallestNonZero(arr) {
  let lowest = 0;
  let firstNonZeroValueFound = false;
  for (let i = 1; i < arr.length; i++) {
    if (!(firstNonZeroValueFound) && (arr[i] > 0)) {
      firstNonZeroValueFound = true;
      lowest = i;
    }
    if ((arr[i] > 0) && (arr[i] < arr[lowest])) lowest = i;
  }
  return lowest;
}

function indexOfHighest(arr) {
  let highest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[highest]) highest = i;
  }
  return highest;
}

function runGuessingSolver() {
  requestAnimationFrame(() => {
    guessingStep(true);
    solverIteration(0, true);
  });
}

function guessingStep(flag = false) {
  guessingGrid.fill(0);
  // calculate number of potential mine cells and weight them accordingly
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if ((clearedGrid[y*gridSize+x] === true) && (minesGrid[y*gridSize+x] > 0)) {
        let n = minesGrid[y*gridSize+x];
        let neighbours = getSurroundingCellCoords(x,y);
        let unclearedNeighbours = neighbours.filter(coords => (!clearedGrid[coords[1]*gridSize+coords[0]]));
        let flaggedNeighbours = neighbours.filter(coords => (flaggedGrid[coords[1]*gridSize+coords[0]]));
        if (unclearedNeighbours.length > flaggedNeighbours.length) {
          let potentialMines = unclearedNeighbours.filter(coords => (!flaggedGrid[coords[1]*gridSize+coords[0]]));
          for (let pm of potentialMines) {
            guessingGrid[pm[1]*gridSize+pm[0]] += n/potentialMines.length;
          }
        }
      }
    }
  }

  if (!flag) {
    // clear lowest-weighted cell
    const lowestWeightedCell = indexOfSmallestNonZero(guessingGrid);
    clearCellsOnClick(...gridIndexToCoords(lowestWeightedCell));

  } else {
    // flag highest-weighted cell
    const lowestWeightedCell = indexOfHighest(guessingGrid);
    toggleFlag(...gridIndexToCoords(lowestWeightedCell));
  }
  renderGrid();
  // console.log(indexOfSmallestNonZero(guessingGrid), gridIndexToCoords(indexOfSmallestNonZero(guessingGrid)));
  // console.log(guessingGrid[lowestWeightedCell]);  
}

function showGuessUI() {
  solveButton.innerHTML = "Guess";
  solveButton.style.background = "coral";
  guessingMode = true;
}

function hideGuessUI() {
  solveButton.innerHTML = "Solve";
  solveButton.style = "";
  guessingMode = false;
}

async function solveWithML() {
  if (gameOver) return;
  let local_session = await session;
  const state = new Float32Array(gridSize*gridSize);
  for (let i = 0; i < gridSize*gridSize; i++) {
    if (clearedGrid[i]) {
      state[i] = minesGrid[i] / 8;
    } else {
      state[i] = -1
    }
  }
  let stateTensor = new ort.Tensor('float32', state, [gridSize, gridSize])
  stateTensor = stateTensor.reshape([1, 1, gridSize, gridSize])
  const result = await local_session.run({"input": stateTensor})
  const action_probs = result.output.data
  for (let i = 0; i < gridSize*gridSize; i++) {
    if (clearedGrid[i]) {
      action_probs[i] = -Infinity;
    }
  }
  let action = action_probs.indexOf(Math.max(...action_probs))
  if (action < 0) action = Math.floor(gridSize*gridSize / 2) + Math.floor(gridSize/2)
  requestAnimationFrame(() => {
    clearCellsOnClick(...gridIndexToCoords(action))
    renderGrid();
  });
  console.log(action)
  if (!gameOver) {
    solveWithML()
  }
}

initMinesGrid(); // intermediate
console.time("render");
renderGrid();
console.timeEnd("render");
