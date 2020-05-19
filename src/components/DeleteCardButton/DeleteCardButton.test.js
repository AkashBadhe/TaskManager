import React from "react";
import { shallow } from "enzyme";
import DeleteCardButton from "./index";

describe("DeleteCardButton", () => {
  let deleteCardButton = shallow(<DeleteCardButton />);
  it("Should mount `DeleteCardButton`", () => {
    expect(deleteCardButton).toMatchSnapshot();
  });

  it("Should have `styled.button`", () => {
    expect(deleteCardButton.find("FaTimesCircle").exists()).toBe(true);
  });
});
