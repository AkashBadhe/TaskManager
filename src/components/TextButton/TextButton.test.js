import React from "react";
import { shallow } from "enzyme";
import ListTitleButton from "./index";

describe("ListTitleButton", () => {
  let textButton = shallow(<ListTitleButton text="Add" />);
  it("Should mount `ListTitleButton`", () => {
    expect(textButton).toMatchSnapshot();
  });
});
