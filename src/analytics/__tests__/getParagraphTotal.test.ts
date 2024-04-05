import { getParagraphsTotal } from "../index.js";

const expectedResult = 0;
let givenResult = getParagraphsTotal("");

let testPassed = expectedResult === givenResult;

console.log(testPassed);
