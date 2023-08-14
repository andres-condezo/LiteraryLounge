export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('readingList');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return err;
  }
};

export const saveState = (readingList) => {
  try {
    const serializedState = JSON.stringify(readingList);
    localStorage.setItem('readingList', serializedState);
  } catch {
    // ignore write errors
  }
};
