import React, { useState } from "react";
import ChatUI from "./ChatUI";
import FormUI from "./FormUI";

function ToggleMode() {
  const [mode, setMode] = useState("chat");

  return (
    <div>
      <button onClick={() => setMode("chat")}>Chat Mode</button>
      <button onClick={() => setMode("form")}>Form Mode</button>

      {mode === "chat" ? <ChatUI /> : <FormUI />}
    </div>
  );
}

export default ToggleMode;