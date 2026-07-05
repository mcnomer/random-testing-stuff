export function getCurrentDir() {
    return (
        window.history.state ||
        new URLSearchParams(new URL(window.location.href).search).get("dir") ||
        "web-stuff"
    );
}

export function getParentDir(dir: string): string {
    let lastSlashIdx = dir.lastIndexOf("/");
    if (lastSlashIdx > 0) {
        let newDir = dir.substring(0, lastSlashIdx);
        return newDir;
    }
    return "web-stuff";
}

export function getDirName(dir: string): string {
    let parts = dir.split("/");
    if (parts.length > 0) {
        let lastPart = parts[parts.length - 1];
        return lastPart;
    }
    return dir;
}

export function getBreadcrumbsArray(dir: string): Array<string> {
    let parts = dir.split("/");
    for (let i = 0; i < parts.length - 1; i++) {
        parts[i] += "/";
    }
    return parts;
}
