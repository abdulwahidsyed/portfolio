export const toHyphenated = (str) => str.trim().replace(/\s+/g, "-");

export const toTitleCase = (str) => {
  return (
    str
      // Add space before uppercase letters (camelCase → words)
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Capitalize first letter of each word
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
};
