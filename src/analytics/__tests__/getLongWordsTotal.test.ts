import { getLongWordsTotal } from "../index.js";

const returns0IfEmptyText = () => {
  const longWordsTotal = getLongWordsTotal(``).toString;
  const expectedLongWordsTotal = 0;
  const isCorrect = longWordsTotal.length === expectedLongWordsTotal;

  if (isCorrect) {
    console.log(`returns 0 if empty text = ${isCorrect}`);
  }
};

const returnsLongWordsCorrectAmount = () => {
  const longWordsTotal = getLongWordsTotal(`12345678, 8765432109, abc`).length;
  const expectedLongWordsTotal = 2;
  const isCorrect = longWordsTotal === expectedLongWordsTotal;
  if (isCorrect) {
    console.log(`returns correct amount of long words = ${isCorrect}`);
  }
};

//returns0IfEmptyText();
returnsLongWordsCorrectAmount();
