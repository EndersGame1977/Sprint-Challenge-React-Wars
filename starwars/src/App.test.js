import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import People from "../src/components/PeopleList";

import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("<App />", () => {
  it("Should Match SnapShot", () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("<People />", () => {
  it("Should Match SnapShot", () => {
    const tree = renderer.create(<People />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
