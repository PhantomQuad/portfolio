import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactMe } from "./ContactMe";

describe("ContactMe", () => {
  it("should render the contact section", () => {
    render(<ContactMe />);
    const contactSection = screen.getByTestId("contact-section");
    expect(contactSection).toBeInTheDocument();
  });

  it("should render the title", () => {
    const { getByText } = render(<ContactMe />);
    const title = getByText("Contact Me");
    expect(title).toBeInTheDocument();
  });

  it("should render the LinkedIn icon", () => {
    const { getByAltText } = render(<ContactMe />);
    const linkedinIcon = getByAltText("LinkedIn Icon");
    expect(linkedinIcon).toBeInTheDocument();
  });

  it("should render the Github icon", () => {
    const { getByAltText } = render(<ContactMe />);
    const githubIcon = getByAltText("Github Icon");
    expect(githubIcon).toBeInTheDocument();
  });
});
