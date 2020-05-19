import React from "react";
import { shallow } from "enzyme";
import { ListAdder } from "./index";

describe("ListAdder", () => {
  const boardId = 1;
  const numberLeft = 5;
  let listAdder = shallow(<ListAdder boardId={boardId} numLeft={numberLeft} />);
  it("Should mount `ListAdder`", () => {
    expect(listAdder).toMatchSnapshot();
  });

  it("Should have `Button` with text", () => {
    expect(listAdder.find("Button").props().text).toBe(
      `Add a new list (${numberLeft})`
    );
  });
});
