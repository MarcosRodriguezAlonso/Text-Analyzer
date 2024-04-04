export const getParagraphsTotal = (text: string): number => {
  const textSplitted = text.split(/\n\n/);

  if (!text) {
    return 0;
  } else {
    return textSplitted.length;
  }
};

export const getSentenceWordsTotal = (text: string): number => {
  const splittedSentence = text.split(" ");
  return splittedSentence.length;
};
