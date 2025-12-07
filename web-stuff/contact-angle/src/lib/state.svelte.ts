import { innerWidth, innerHeight } from 'svelte/reactivity/window';

export enum interactionModes {
	PlaceDrop,
	PlaceLine,
	DeleteDrop
}

export enum checkStatuses {
    NotChecked,
    Failed,
    Passed
}

export const rem: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

export class Drop {
	pos: number[];
	constructor(pos = [0, 0]) {
		this.pos = pos;
	}
    feasibilityPassed = $state(checkStatuses.NotChecked);
}

const canvasSize = $derived.by(() => {
    const width = innerWidth.current ?? 0;
    const height = innerHeight.current ?? 0;
    const minScreenSize = Math.min(width, height);
    return minScreenSize * 0.5 - 2*rem;
});
let waferCanvasDiameter = $derived(canvasSize - 6*rem);
let waferCanvasRadius = $derived(waferCanvasDiameter / 2);

export class Wafer {
	pos = $state([0, 0]);
	rot = $state(0);
	readonly diameter = 200;
	readonly radius = this.diameter / 2;
	readonly scale = $derived(waferCanvasRadius / this.radius);
	readonly notchPos = $derived([0, this.radius * this.scale]);
	drops:Drop[] = $state([]);
}

export class Queue<T> {
	data: T[];
    constructor(private readonly maxLength: number, init?:T[]) {
        this.data = [];
		
		if (init) {
			if (init.length > maxLength) {
				const startIdx = init.length - maxLength;
				this.data.push(...init.slice(startIdx));
			} else {
				this.data.push(...init);
			}
		}
    }

    push(...items:T[]): number {
        while (this.data.length + items.length > this.maxLength) {
            this.data.shift();
        }
        return this.data.push(...items);
    }

	get length() {
		return this.data.length;
	}
}

export class DropHistory {
	queue: Queue<Drop[]>;
	index: number;
	maxLength: number;
	constructor(maxLength: number) {
		this.maxLength = maxLength;
		this.queue = new Queue(maxLength);
        this.queue.push([]);
		this.index = $state(0);
	}

	undo(): Drop[] {
        if (this.index > 0) this.index--;
		return this.queue.data[this.index];
	}
    
	redo(): Drop[] {
        if (this.index < this.queue.length - 1) this.index++;
		return this.queue.data[this.index];
	}
    
	add(item: Drop[]): number {
        if (this.index < this.queue.length - 1) {
            const newHistory = this.queue.data.slice(0, this.index+1);
			this.queue = new Queue(this.maxLength, newHistory);
		};
		this.queue.push([...item]);
		if (this.index < this.maxLength - 1) this.index++;
		return this.index;
	}
}

export const userState = $state({
	interactionMode: interactionModes.PlaceDrop,
    checkStatus: checkStatuses.NotChecked,
	dropHistory: new DropHistory(64),
    wafer: new Wafer(),
    historyUpdateCallback: undefined as Function|undefined,
    settings: {
        numLinePts: 10,
        DropDeleteDistanceThreshold: 5,
        WaferUnusedEdgeThickness: 10,
        centreTolerance: 2,
        cameraViewWidth: 10,
    }
});