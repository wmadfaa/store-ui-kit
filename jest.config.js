module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/__mocks__"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(md)$": "<rootDir>/__mocks__/htmlMock.js",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
};
