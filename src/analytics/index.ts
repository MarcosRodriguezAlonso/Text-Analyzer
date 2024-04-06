export const getParagraphsTotal = (text: string): number => {
  const paragraphTotal = text.split(/\n\n/);
  const EmptyText = text === "";

  if (EmptyText) {
    return 0;
  }

  return paragraphTotal.length;
};
