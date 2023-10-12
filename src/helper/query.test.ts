// helperFunctions.test.js

import { objectToQueryString } from "./query"; // Update with the correct path

describe("objectToQueryString", () => {
  test("it should convert an object to a valid query string", () => {
    const inputObject = {
      q1: "value1",
      q2: 42,
      q3: "special characters: &?#",
    };

    const result = objectToQueryString(inputObject);

    expect(result).toBe(
      "q1=value1&q2=42&q3=special%20characters%3A%20%26%3F%23"
    );
  });

  test("it should handle an empty object", () => {
    const inputObject = {};

    const result = objectToQueryString(inputObject);

    expect(result).toBe("");
  });
});
