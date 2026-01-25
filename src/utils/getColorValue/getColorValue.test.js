import { expect, describe, it } from "vitest";
import { getColorValue } from "./getColorValue.js";

describe("Get Color value", () => {
  it("valid value", () => {
    // colorMap = [
    //   { name: "black", hex: "#0A0A0A" },
    //   { name: "red", hex: "#DC2626" },
    //   { name: "blue", hex: "#2563EB" },
    //   { name: "green", hex: "#314F4A" },
    //   { name: "gray", hex: "#6B7280" },
    //   { name: "white", hex: "#FEFEFE" },
    //   { name: "brown", hex: "#4F4631" },
    //   { name: "pink", hex: "#EC4899" },
    //   { name: "purple", hex: "#31344F" },
    //   { name: "yellow", hex: "#EAB308" },
    //   { name: "beige", hex: "#F5F5DC" },
    //   { name: "orange", hex: "#EA580C" },
    //   { name: "burgundy", hex: "#800020" },
    //   { name: "navy", hex: "#000080" },
    //   { name: "dark-blue", hex: "#00008B" },
    //   { name: "light-blue", hex: "#ADD8E6" },
    // ]
    expect(getColorValue("black")).toBe("#0A0A0A");
    expect(getColorValue("Black")).toBe("#0A0A0A");
    expect(getColorValue(" black ")).toBe("#0A0A0A");
    expect(getColorValue("Black ")).toBe("#0A0A0A");
  });

  it("invalid value", () => {
    expect(getColorValue("asdasdasd")).toBe("transparent");
    expect(getColorValue(1)).toBe("transparent");
    expect(getColorValue({})).toBe("transparent");
    expect(getColorValue([])).toBe("transparent");
    expect(getColorValue(true)).toBe("transparent");
    expect(getColorValue(null)).toBe("transparent");
    expect(getColorValue(undefined)).toBe("transparent");
    expect(getColorValue("")).toBe("transparent");
    expect(getColorValue(" ")).toBe("transparent");
  });
});
