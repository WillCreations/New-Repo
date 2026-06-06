const urlParser = (str) => {
  return str.includes("_")
    ? str.replace(/_/g, " ")
    : str.replace(/ /g, "_");
};

export default urlParser;

