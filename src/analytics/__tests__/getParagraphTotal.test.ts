import { getParagraphsTotal } from "../index.js";

const returns0test = () => {
  const paragraphsTotal = getParagraphsTotal("");
  const expectedParagraphsTotal = 0;
  const isCorrect1 = paragraphsTotal === expectedParagraphsTotal;

  if (isCorrect1) {
    console.log(`Shows 0 if there is no text? ${isCorrect1}`);
  }
};

const returns1test = () => {
  const paragraphsTotal2 = getParagraphsTotal("Hola");
  const expectedParagraphsTotal2 = 1;

  const isCorrect2 = expectedParagraphsTotal2 === paragraphsTotal2;

  if (isCorrect2) {
    console.log(`Shows 1 if there is only 1 paragraph? ${isCorrect2}`);
  }
};

const returnsParagraphsCorrectNumber = () => {
  const paragraphsTotal3 = getParagraphsTotal(`Hola

Adiós`);

  const expectedParagraphsTotal3 = 2;
  const isCorrect3 = expectedParagraphsTotal3 === paragraphsTotal3;

  if (isCorrect3) {
    console.log(`Shows correct number of paragraphs? ${isCorrect3}`);
  }
};

//returns0test
//returns1test
//returnsParagraphsCorrectNumber();
