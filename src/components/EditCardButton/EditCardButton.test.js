import React from "react";
import { shallow } from "enzyme";
import EditCardButton from "./index";

describe("EditCardButton", () => {
  let editCardButton = shallow(<EditCardButton />);
  it("Should mount `EditCardButton`", () => {
    expect(editCardButton).toMatchSnapshot();
  });

  it("Should have `styled.button`", () => {
    expect(editCardButton.find("FaEdit").exists()).toBe(true);
  });
});
