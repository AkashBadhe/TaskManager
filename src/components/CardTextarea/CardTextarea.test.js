import React from "react";
import { shallow } from "enzyme";
import CardTextarea from "./index";

describe("CardTextarea", () => {
  let cardTextarea = shallow(<CardTextarea />);
  it("Should mount `CardTextarea`", () => {
    expect(cardTextarea).toMatchSnapshot();
  });

  it("Should have `Styled(TextareaAutosize)`", () => {
    expect(cardTextarea.find("Styled(TextareaAutosize)").exists()).toBe(true);
  });
});
