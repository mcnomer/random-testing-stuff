import { userState } from "./state.svelte";

const rotationStep = 5;

function isShotUsable(points: number[][], targetIdx:number, centreTolerance: number, cameraViewWidth: number, offsetY: number, sinTheta: number, cosTheta: number) {
    const targetY = points[targetIdx][0] * sinTheta + points[targetIdx][1] * cosTheta + offsetY;
    if (targetY > centreTolerance || targetY < -centreTolerance) return false; // first make sure that target is actually centred

    let numPointsInView = 0;
    for (let i = 0; i < points.length; i++) {
        const [px, py] = points[i];
        const y = px * sinTheta + py * cosTheta + offsetY;
        if (y < (cameraViewWidth / 2) && y > -(cameraViewWidth / 2)) numPointsInView++;
        if (numPointsInView > 1) return false; // quit early as soon as more than one drop is in view of the camera
    }
    if (numPointsInView === 1) {
        const [px, py] = points[targetIdx];
        const x = px * cosTheta - py * sinTheta;
        // if (x < userState.wafer.radius) return true; // make sure wafer can move on x-axis to focus traget drop
        // extra temp stuff for tool range of movement
        const y = px * sinTheta + py * cosTheta;
        if (
            userState.settings.stage.xRange.min < x &&
            x < userState.settings.stage.xRange.max &&
            userState.settings.stage.yRange.min < y &&
            y < userState.settings.stage.yRange.max
        ) {
            return true;
        }
    }
    return false;
}

function checkPoint(points: number[][], targetIdx:number, centreTolerance: number, cameraViewWidth: number, yStep: number) {
    const radius = userState.wafer.radius;
    for (let theta = 0; theta < 360; theta += rotationStep) {
        const t = theta * (Math.PI/180); // deg2rad
        const sinTheta = Math.sin(t);
        const cosTheta = Math.cos(t);
        for (let y = -radius; y <= radius; y += yStep) {
            if (isShotUsable(points, targetIdx, centreTolerance, cameraViewWidth, y, sinTheta, cosTheta)){
                return true;
            }
        }
    }
    return false;
}

export function check(points: number[][], centreTolerance=2, cameraViewWidth=10, yStep = 5): boolean[] {
    let distanceFromCentre = points.map(p => Math.hypot(p[0], p[1]));
    let indices = Array.from(distanceFromCentre.keys());
    indices.sort((a, b) => distanceFromCentre[a] - distanceFromCentre[b]);
    let sortedPoints = [];
    for (let i = 0; i < points.length; i++) {
        sortedPoints.push(points[indices[i]]);
    }

    const results = []
    for (let i = 0; i < sortedPoints.length; i++) {
        let currentSlice = sortedPoints.slice(0, i+1);
        results.push(checkPoint(currentSlice, i, centreTolerance, cameraViewWidth, yStep));
    }

    if (yStep > 1 && (!results.every(e => e))) return check(points, centreTolerance, cameraViewWidth, 1); // try harder if failed

    let resultsIndices = Array.from(results.keys());
    resultsIndices.sort((a, b) => indices[a] - indices[b]);
    let sortedResults = [];
    for (let i = 0; i < sortedPoints.length; i++) {
        sortedResults.push(results[resultsIndices[i]]);
    }
    return sortedResults;
}


// old readable versions

// function isShotUsable(points: number[][], targetIdx:number, centreTolerance: number, cameraViewWidth: number) {
//     const centreLineDistance = points.map(p => Math.abs(p[1]));
//     if (centreLineDistance[targetIdx] > centreTolerance) return false;

//     let numPointsInView = 0;
//     for (let i = 0; i < points.length; i++) {
//         if (centreLineDistance[i] < cameraViewWidth) numPointsInView++;
//     }
//     return (numPointsInView === 1);
// }

// function checkPoint(points: number[][], targetIdx:number, centreTolerance: number, cameraViewWidth: number) {
//     const radius = userState.wafer.radius;
//     for (let theta = 0; theta < 360; theta += rotationStep) {
//         // theta = theta * (Math.PI/180); // deg2rad
//         // const sinTheta = Math.sin(theta);
//         // const cosTheta = Math.cos(theta);
//         const rotatedPoints = points.map(p => rotateVec2(p, theta));
//         // const rotatedPoints = points.map(p => funkyRotVec2(p, sinTheta, cosTheta));
//         for (let y = -radius; y <= radius; y += yStep) {
//             const offsetPoints = rotatedPoints.map(p => [p[0], p[1]+y]);
//             if (isShotUsable(offsetPoints, targetIdx, centreTolerance, cameraViewWidth)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }