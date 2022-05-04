import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";

import HookCounterTwo from "./components/HookCounterTwo";
import ClassCounterTwo from "./components/ClassCounterTwo";

import HookCounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
      {/*---------- useState Hook */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}

      {/*---------- useState with previous state */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounterTwo /> */}

      {/*---------- useState with object */}
      <HookCounterThree/>
    </div>
  );
}

export default App;
