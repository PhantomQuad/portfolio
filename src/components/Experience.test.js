import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("should render the correct number of items", () => {
    render(<Experience />);
    const items = screen.getAllByTestId("experience-item");
    expect(items.length).toEqual(20);
  });

  it("renders the title", () => {
    render(<Experience />);
    const title = screen.getByText("Experience");
    expect(title).toBeInTheDocument();
  });
});
