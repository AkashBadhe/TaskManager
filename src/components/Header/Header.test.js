import React from "react";
import { shallow } from "enzyme";
import Header from "./index";

describe("Header", () => {
  let header = shallow(<Header />);
  it("Should mount `Header`", () => {
    expect(header).toMatchSnapshot();
  });

  it("Should have `#homeLink`", () => {
    expect(header.find("#homeLink").exists()).toBe(true);
  });

  it("Should have `#logo`", () => {
    expect(header.find("#logo").exists()).toBe(true);
  });

  it("Should have `#githubLink`", () => {
    expect(header.find("#githubLink").exists()).toBe(true);
  });
});
