import { getParagraphsTotal } from "../index.js";

const givenResult = getParagraphsTotal("");
const expectedResult = 0;

const testPassed = expectedResult === givenResult;

if (testPassed) {
  console.log(`text is empty equal 0: ${testPassed}`);
}

const givenResult2 = getParagraphsTotal("Hola");
const expectedResult2 = 1;

const testPassed2 = expectedResult2 === givenResult2;

if (testPassed) {
  console.log(testPassed2);
}
