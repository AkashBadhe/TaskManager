import React from "react";
import { shallow } from "enzyme";
import ListTitleTextarea from "./index";

describe("ListTitleTextarea", () => {
  let listTitleTextarea = shallow(<ListTitleTextarea />);
  it("Should mount `ListTitleTextarea`", () => {
    expect(listTitleTextarea).toMatchSnapshot();
  });
});
