import { getShortWordsTotal } from "../index.js";

const returs0IfEmptyText = () => {
  const shortWordsTotal = getShortWordsTotal(``);
  console.log(`short words total = ${shortWordsTotal}`);
  const expectedWordsTotal = 0;
  console.log(`expected words total = ${expectedWordsTotal}`);
  const isCorrect = shortWordsTotal === expectedWordsTotal;

  if (isCorrect) {
    console.log(`total is 0 if empty text? ${isCorrect}`);
  }
};

//returs0IfEmptyText();

const returnsCorrectShortWordsAmount = () => {
  const shortWordsTotal = getShortWordsTotal(`Palabra 1 2 3`);
  const expectedShortWordsTotal = 3;
  const isCorrect = shortWordsTotal === expectedShortWordsTotal;

  if (isCorrect) {
    console.log(
      `short words total = ${shortWordsTotal} -- expected short words = ${expectedShortWordsTotal} -- returns correct short words amount ? ${isCorrect}`
    );
  }
};

returnsCorrectShortWordsAmount();
