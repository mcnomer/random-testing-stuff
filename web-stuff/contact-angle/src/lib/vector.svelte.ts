/**
 * Outputs a new Vec2 array, rotated anticlockwise around 0,0
 * @param vec The Vec2 to rotate
 * @param theta The angle to rotate
 * @returns The rotated Vec2
 */
export function rotateVec2(vec: number[], theta: number) {
    theta = theta * (Math.PI/180); // deg2rad
    let x = vec[0] * Math.cos(theta) - vec[1] * Math.sin(theta);
    let y = vec[0] * Math.sin(theta) + vec[1] * Math.cos(theta);
    return [x, y];
}

export function funkyRotVec2(vec: number[], sinTheta: number, cosTheta: number) {
    let x = vec[0] * cosTheta - vec[1] * sinTheta;
    let y = vec[0] * sinTheta + vec[1] * cosTheta;
    return [x, y];
}

const lerp1D = (x:number, y:number, a:number) => x * (1 - a) + y * a;
export function lerpVec2(from: number[], to: number[], a: number) {
    let x = lerp1D(from[0], to[0], a);
    let y = lerp1D(from[1], to[1], a);
    return [x, y];
}