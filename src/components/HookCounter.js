// 1. create component
// 2. create state variable and initialize to 0
// 3. create method that is capable of setting state value

import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
