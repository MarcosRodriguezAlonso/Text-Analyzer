export const getParagraphsTotal = (text: string): number => {
  let paragraphTotal = text.trim().split(/\n/);

  if (!text) {
    return 0;
  }

  return paragraphTotal.length;
};
