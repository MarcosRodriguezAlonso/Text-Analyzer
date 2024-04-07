import { get } from "http";
import { text } from "stream/consumers";

const IsEmptyText = (text: string): boolean => {
  return text.trim() === "";
};

export const getParagraphsTotal = (text: string): number => {
  const paragraphTotal = text.split(/\n\n/);

  if (IsEmptyText(text)) {
    return 0;
  }

  return paragraphTotal.length;
};

export const getWordsTotal = (text: string): number => {
  const words = text.split(/[\s\n]/);
  const totalWords = words.filter((word) => !IsEmptyText(word));

  if (IsEmptyText(text)) {
    return 0;
  }

  return totalWords.length;
};

export const getCharactersTotal = (text: string): number => {
  const characters = text.split(``);

  return characters.length;
};

getCharactersTotal("Hola qué hase");
