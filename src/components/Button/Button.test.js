import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe("Button", () => {
  let button = shallow(<Button text={"Add"} />);
  it("shoud mount the Button", () => {
    expect(button).toMatchSnapshot();
  });
  it("should render Add button", () => {
    let addButton = shallow(<Button text={"Add"} variant="add" />);
    expect(addButton.props().variant).toBe("add");
    expect(addButton.text()).toBe("Add");
  });
});
