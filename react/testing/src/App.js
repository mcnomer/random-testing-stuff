import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [tree, setTree] = useState(null);
  const [dir, setDir] = useState(
    window.history.state ||
    sessionStorage.getItem("dir") ||
    new URLSearchParams(new URL(window.location.href).search).get("dir") ||
    "web-stuff"
  );
  useEffect(() => {
    fetch("https://cool-api.herokuapp.com/tree")
    .then(response => {
      if (response.ok) {
        return response;
      }
    })
    .then(response => response.json())
    .then(responseTree => {
      setTree(responseTree);
    });
  }, []);
  window.onpopstate = () => {
      const tempDir = window.history.state ||
      new URLSearchParams(new URL(window.location.href).search).get("dir") ||
      "web-stuff";
    setDir(tempDir);
    sessionStorage.setItem('dir', tempDir);
  };
  return (
    <div className="app">
      <header>
        <a href="/" onClick={() => sessionStorage.setItem('dir', "web-stuff")}>
          <img src="/favicons/icon-144.png" alt="Logo"/>  
        </a>
      </header>
      <Explorer tree={tree} dir={dir} setDir={setDir}></Explorer>
    </div>
  );
}

function Explorer({tree, dir, setDir}) {
  if (tree === null) return <div></div>;
  let elements = parseTree(tree, dir).map(f => {
    if (f.type === "tree") return <Folder key={f.sha} folder={f} setDir={setDir}></Folder>
    else return <File key={f.sha} file={f} dir={dir}></File>
  });
  // add back button if not in root
  if (dir !== "web-stuff") elements.unshift(
    <div key="back" className="item" onClick={() => window.history.back()}>
      <img className="item-icon" src="/icons/back.svg" alt="back"></img>
    </div>
  );
  return (
    <main className="explorer">
      {elements}
    </main>
  );
}

function Folder({folder, setDir}) {
  return (
    <div className="item" onClick={() => {
      setDir(folder.path);
      sessionStorage.setItem('dir', folder.path);
      window.history.pushState(folder.path, "Testing - " + folder.path, `?dir=${encodeURIComponent(folder.path)}`);
    }}>
      <img className="item-icon" src="/icons/folder.svg" alt="folder"></img>
      <span className="item-name">{folder.path.split("/").pop()}</span>
    </div>
  );
}

function File({file, dir}) {
  return (
    <a href={"/" + file.path} onClick={() => sessionStorage.setItem('dir', dir)}>
      <div className="item">
        <img className="item-icon" src="/icons/file.svg" alt="file"></img>
        <span className="item-name">{file.path.split("/").pop()}</span>
        <span className="item-size">{fileSizeToString(file.size)}</span>
      </div>
    </a>
  );
}

function parseTree(tree, dir) {
  const currentDirChildren = [];
  const treeDepth = dir.split("/").length + 1;
  for (let i = 0; i < tree.length; i++) {
    // if on same branch at same depth then add to array for display
    if (tree[i].path.startsWith(dir) && tree[i].path.split("/").length === treeDepth) {
      currentDirChildren.push(tree[i]);
    }
  };
  return currentDirChildren;
}

function fileSizeToString(fileSize) {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  const pow = Math.max(Math.min(Math.floor(Math.log10(fileSize) / 3), 5), 0);
  return Math.round((fileSize / (1000**pow))*100)/100 + units[pow];
}