export const getParagraphsTotal = (text: string): number => {
  let paragraphTotal = text.trim().split(/\n/);

  if (!text) {
    return 0;
  }

  return paragraphTotal.length;
};

export const getSentenceWordsTotal = (text: string): number => {
  const splittedSentence = text.split(" ");
  return splittedSentence.length;
};
