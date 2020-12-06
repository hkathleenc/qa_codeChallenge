import { isMainThread } from "worker_threads";
import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

/*
Javascript switch syntax:
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/
describe("Calculator", () => {
  dataset.forEach(element => {
    let methodName = element.method;
    let x = element.x;
    let y = element.y;
    switch(element.method) {
      case "add":
        it("adds correctly", () => {
          expect(calculator[methodName](x, y)).toBe(x + y);
        });
        break;
      case "subtract":
        it("subtracts correctly", () =>{
          expect(calculator[methodName](x, y)).toBe(x - y);
        });
        break;
      case "multiply":
        it("multiplies correctly", () => {
          expect(calculator[methodName](x, y)).toBe(x * y);
        });
        break;
      case "divide": 
        it("divides correctly", () => {
          expect(calculator[methodName](x, y)).toBeCloseTo(x / y);
        });
        break;
        default:
          break;
    }
  });
});


