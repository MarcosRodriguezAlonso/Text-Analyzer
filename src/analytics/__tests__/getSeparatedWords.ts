import { getSeparatedWords } from "../index.js";

const returnsEmptyString = () => {
  const emptyString = getSeparatedWords("");
  const expectedString = "";
  const isCorrect = emptyString === expectedString;

  if (isCorrect) {
    console.log(`returns empty string if empty string given = ${isCorrect}`);
  } else {
    console.log(`test failed`);
  }
};

//returnsEmptyString();
