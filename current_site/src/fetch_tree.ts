import { Octokit } from "octokit";
import type { Endpoints } from "@octokit/types";
import type { components } from "@octokit/openapi-types";

type ContentDirectory = components["schemas"]["content-directory"];
type ContentDirectoryItem = ContentDirectory[number];
type ContentFile = components["schemas"]["content-file"];
type ContentSymlink = components["schemas"]["content-symlink"];
type RepoContents =
    Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"];

const octokit = new Octokit();

export async function fetchTree(dir: string): Promise<ContentDirectory> {
    for (let i = 0; i < 3; i++) {
        // 3 attempts
        let response = await octokit.request(
            "GET /repos/{owner}/{repo}/contents/{path}",
            {
                owner: "mcnomer",
                repo: "random-testing-stuff",
                path: dir,
            },
        );
        if (response.status === 200) {
            return parseTree(response.data, dir);
        }
    }
    throw new Error("Failed to fetch tree after 3 attempts");
}

function parseTree(tree: RepoContents, dir: string): ContentDirectory {
    const currentDirChildren = [];
    const treeDepth = dir.split("/").length + 1;
    if (Array.isArray(tree)) {
        for (let treeItem of tree) {
            if (
                treeItem.path.startsWith(dir) &&
                treeItem.path.split("/").length === treeDepth
            ) {
                currentDirChildren.push(treeItem);
            }
        }
    } else {
        currentDirChildren.push(tree);
    }
    return currentDirChildren;
}

export function fileSizeToString(fileSize: number): string {
    const units = ["B", "kB", "MB", "GB", "TB", "PB"];
    let magnitude = Math.floor(Math.log10(fileSize) / 3);
    magnitude = Math.max(Math.min(magnitude, units.length - 1), 0); // clamp to units length
    return (fileSize / 1000 ** magnitude).toPrecision(3) + units[magnitude];
}
