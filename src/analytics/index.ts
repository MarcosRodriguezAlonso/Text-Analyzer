import { get } from "http";
import { text } from "stream/consumers";

const isEmptyText = (text: string): boolean => {
  return text.trim() === "";
};

export const getParagraphsTotal = (text: string): number => {
  const paragraphTotal = text.split(/\n\n/);

  if (isEmptyText(text)) {
    return 0;
  }

  return paragraphTotal.length;
};

export const getWordsTotal = (text: string): number => {
  const words = text.split(/[\s\n]/);
  const totalWords = words.filter((word) => !isEmptyText(word));

  if (isEmptyText(text)) {
    return 0;
  }

  return totalWords.length;
};

export const getCharactersTotal = (text: string): number => {
  const characters = text
    .split(``)
    .filter((character) => character !== `\n` && character !== " ");

  return characters.length;
};

export const getShortWordsTotal = (
  text: string,
  maxLength: number = 4
): number => {
  if (!text) {
    return 0;
  }

  const words: string[] = text.split(/\s/);
  const shortWords: string[] = words.filter(
    (word) => word.length <= maxLength && word !== ""
  );

  return shortWords.length;
};
