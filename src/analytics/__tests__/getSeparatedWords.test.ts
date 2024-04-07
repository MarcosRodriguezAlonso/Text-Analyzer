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

const returnsSeparatedWords = () => {
  const separatedWords = getSeparatedWords(`Un perro y un gato.`);
  const expectedString = `Un,perro,y,un,gato.`;
  const isCorrect = separatedWords === expectedString;

  if (isCorrect) {
    console.log(`returns string separated by commas? ${isCorrect}`);
  }
};

returnsEmptyString();
returnsSeparatedWords();
