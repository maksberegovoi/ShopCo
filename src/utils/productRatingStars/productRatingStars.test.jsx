import { describe, it, expect } from "vitest";
import { renderRatingStars } from "./productRatingStars.jsx";
import { render } from "@testing-library/react";

vi.mock("../../../assets/icons/sprite.svg", () => ({
  default: "sprite.svg",
}));

describe("renderRatingStars", () => {
  it("renders 5 full stars for rating 5", () => {
    const { container } = render(<>{renderRatingStars(5)}</>);

    const uses = container.querySelectorAll("use");
    expect(uses.length).toBe(5);
    uses.forEach((use) => {
      expect(use.getAttribute("href")).toBe("sprite.svg#icon-star");
    });
  });

  it("renders full and half stars correctly", () => {
    const { container } = render(<>{renderRatingStars(3.5)}</>);

    const uses = container.querySelectorAll("use");
    expect(uses.length).toBe(4);

    expect(uses[0].getAttribute("href")).toBe("sprite.svg#icon-star");
    expect(uses[1].getAttribute("href")).toBe("sprite.svg#icon-star");
    expect(uses[2].getAttribute("href")).toBe("sprite.svg#icon-star");
    expect(uses[3].getAttribute("href")).toBe("sprite.svg#icon-starHalf");
  });

  it("renders only half star for rating 0.5", () => {
    const { container } = render(<>{renderRatingStars(0.5)}</>);

    const uses = container.querySelectorAll("use");
    expect(uses.length).toBe(1);
    expect(uses[0].getAttribute("href")).toBe("sprite.svg#icon-starHalf");
  });

  it("renders no stars for rating 0", () => {
    const { container } = render(<>{renderRatingStars(0)}</>);

    const uses = container.querySelectorAll("use");
    expect(uses.length).toBe(0);
  });

  it("never renders more than 5 stars", () => {
    const { container } = render(<>{renderRatingStars(10)}</>);

    const uses = container.querySelectorAll("use");
    expect(uses.length).toBe(5);
  });
});
