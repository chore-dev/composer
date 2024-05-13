export const isValidCheckboxAnswer = (answers: unknown) => {
  return !!(answers && typeof answers === 'object' && Object.values(answers).some(Boolean));
};
