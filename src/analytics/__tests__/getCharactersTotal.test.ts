import { getCharactersTotal } from "../index.js";

const returns0IfEmptyText = () => {
  const charactersTotal = getCharactersTotal(``);
  const expectedCharactersTotal = 0;
  const isCorrect = charactersTotal === expectedCharactersTotal;

  if (isCorrect) {
    console.log(`Returns 0 if text is empty? ${isCorrect}`);
  }
};

const returnsCorrectCharactersAmount = () => {
  const charactersTotal = getCharactersTotal(`12 caracteres`);
  const expectedCharactersTotal = 12;
  const isCorrect = charactersTotal === expectedCharactersTotal;

  if (isCorrect) {
    console.log(
      `characters total: ${charactersTotal} -- expected characters: ${expectedCharactersTotal} -- test passed: ${isCorrect}`
    );
  }
};

//returns0IfEmptyText();
//returnsCorrectCharactersAmount();
