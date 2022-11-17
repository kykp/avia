export const containsNumbers = (str: string) => {
  if (str === "") {
    return true;
  } else {
    return /[0-9]/.test(str);
  }
};
