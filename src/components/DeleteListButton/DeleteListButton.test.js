import React from "react";
import { shallow } from "enzyme";
import DeleteListButton from "./index";

describe("DeleteListButton", () => {
  let deleteListButton = shallow(<DeleteListButton />);
  it("Should mount `DeleteListButton`", () => {
    expect(deleteListButton).toMatchSnapshot();
  });

  it("Should have `styled.button`", () => {
    expect(deleteListButton.find("FaTimesCircle").exists()).toBe(true);
  });
});
