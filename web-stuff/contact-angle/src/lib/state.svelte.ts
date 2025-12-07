export const rem: number = parseFloat(getComputedStyle(document.documentElement).fontSize);

export class Drop {
	pos: number[];
	constructor(pos = [0, 0]) {
		this.pos = pos;
	}
}

// export class Queue<T> extends Array<T> {
//     constructor(private readonly maxLength: number, data?:T[]) {
//         super();
		
// 		if (data) {
// 			if (data.length > maxLength) {
// 				const startIdx = data.length - maxLength;
// 				super.push(...data.slice(startIdx));
// 			} else {
// 				super.push(...data);
// 			}
// 		}
//     }

//     push(...items:T[]): number {
//         while (this.length + items.length > this.maxLength) {
//             this.shift();
//         }
//         return super.push(...items);
//     }

// 	fromArray(arr:T[]) {
// 		return new Queue<T>(this.maxLength, arr);
// 	}
// }

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

export class HistoryQueue<T> {
	queue: Queue<T>;
	index: number;
	private maxLength: number;
	constructor(maxLength: number, managedValue?:T) {
		this.maxLength = maxLength;
		this.queue = new Queue(maxLength);
		this.index = -1;
	}

	undo(): T {
		if (this.index > 0) this.index--;
		return this.queue.data[this.index];
	}

	redo(): T {
		if (this.index < this.queue.length - 1) this.index++;
		return this.queue.data[this.index];
	}

	add(item: T): number {
		if (this.index < this.queue.length - 1) {
			const newHistory = this.queue.data.slice(0, this.index+1);
			this.queue = new Queue(this.maxLength, newHistory);
			console.log("rebuilding");
		};
		this.queue.push(item);
		this.index++;
		return this.index;
	}
}

export enum interactionModes {
	PlaceDrop,
	PlaceLine,
	DeleteDrop
}

export const userState = $state({
	interactionMode: interactionModes.PlaceDrop,
	dropHistory: new HistoryQueue(10)
});

// export function dropHistoryUndo() {
// 	if (userState.dropHistory.index > 0) userState.dropHistory.index--;
// 	return userState.dropHistory.queue[userState.dropHistory.index];
// }
// export function dropHistoryRedo() {
// 	if (userState.dropHistory.index < userState.dropHistory.queue.length - 1) userState.dropHistory.index++;
// 	return userState.dropHistory.queue[userState.dropHistory.index];
// }
// export function dropHistoryAdd(item: Drop[]) {
// 	if (userState.dropHistory.index < userState.dropHistory.queue.length - 1) {
// 		userState.dropHistory.queue = new Queue(userState.dropHistory.queue.length, userState.dropHistory.queue.slice(0, userState.dropHistory.index+1));
// 		console.log("rebuilding");
// 	};
// 	userState.dropHistory.queue.push(item);
// 	userState.dropHistory.index++;
// 	return userState.dropHistory.index;
// }