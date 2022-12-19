import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import CommonJsTest from "./CommonJsTest";

function App() {
  return (
    <>
      <Button color="primary">Hello World</Button>
      {/* <CommonJsTest /> */}
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
