import { getWordsTotal } from "../index.js";

const returns0ifEmptyText = () => {
  const wordsTotal1 = getWordsTotal("");
  const expectedWords1 = 0;
  const isCorrect1 = wordsTotal1 === expectedWords1;

  if (isCorrect1) {
    console.log(`Returns 0 if text is empty? ${isCorrect1}`);
  }
};

const returnsTotalWords = () => {
  const wordsTotal2 = getWordsTotal("Aquí hay 4 palabras");
  const expectedWords2 = 4;
  const isCorrect2 = wordsTotal2 === expectedWords2;

  if (isCorrect2) {
    console.log(`returns correct amount of words? ${isCorrect2}`);
  }
};

//returns0ifEmptyText()
//returnsTotalWords();
