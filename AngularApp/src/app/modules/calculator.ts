import {Add, Pi} from './MathLib'

export function ShowComplexSum(x: number, y: number) {
    let result:number = Add(x, y) + Pi;
    console.log(`The sum is ${result}`);
}