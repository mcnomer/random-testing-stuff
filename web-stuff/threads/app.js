import mainThread from "./data.json" with { type: "json" };

const root = document.querySelector("#root");
const startTime = Temporal.PlainDate.from("2003-01-01");
const endTime = Temporal.PlainDate.from("2030-12-31");

class thread {
    /** @public */
    constructor(name, start = null, end = null, branches = null, knots = null) {
        /**@type {string} @public */
        this.name = name; //
        /**@type {string|null} @public */
        this.start = start;
        /**@type {string|null} @public */
        this.end = end;
        /**@type {thread[]|thread[][]|null} @public */
        this.branches = branches;
        /**@type {string[]|null} @public */
        this.knots = knots;
    }
}

/**
 * @param {thread[]} threadGroup
 * @param {Element} parentElement
 */
function displayThreadGroup(threadGroup, parentElement, depth) {
    let container = document.createElement("div");
    container.className = "thread-container";
    container.setAttribute("data-depth", depth);
    parentElement.appendChild(container);

    for (let thread of threadGroup) {
        displayThread(thread, container, depth + 1);
    }
}

/**
 * @param {thread} thread
 * @param {Element} parentElement
 */
function displayThread(thread, parentElement, depth = 0) {
    let element = document.createElement("div");
    element.className = "thread";
    element.setAttribute("data-depth", depth);
    element.style.setProperty(
        "--data-start",
        thread.start
            ? Temporal.PlainDate.from(thread.start).since(startTime).days /
                  365.25
            : 0,
    );
    element.style.setProperty(
        "--data-end",
        Temporal.PlainDate.from(thread.end ? thread.end : endTime).since(
            startTime,
        ).days / 365.25,
    );
    element.title = thread.name;

    if (depth == 0) {
        element.className = "thread main-thread";
    }

    parentElement.appendChild(element);

    if (thread.knots) {
        for (let knot of thread.knots) {
            console.log(`knot: ${knot}`);
        }
    }

    if (thread.branches) {
        for (let branch of thread.branches) {
            if (Array.isArray(branch)) {
                displayThreadGroup(branch, parentElement, depth);
            } else {
                displayThread(branch, parentElement, depth + 1);
            }
        }
    }

    console.log(thread);
}

displayThreadGroup(mainThread, root, 0);

const currentYear = Temporal.Now.plainDateISO().year;
let yearMarkers = document.querySelectorAll("ul.year-markers > li");
for (let yearMarker of yearMarkers) {
    if (yearMarker.textContent === currentYear.toString()) {
        yearMarker.scrollIntoView({ block: "center" });
    }
}
