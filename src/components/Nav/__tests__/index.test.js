import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders the Nav component", () => {
    render(<Nav />);
  });

  // snapshot test
  it("matches snapshot DOM node structure", () => {
    const { asFragment } = render(<Nav />);
    // assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });

  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  })
});
