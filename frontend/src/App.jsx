import React from "react";
import ChatUI from "./components/ChatUI";
import FormUI from "./components/FormUI";

function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Inter" }}>
      <h2>Log HCP Interaction</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px"
      }}>
        
        <div style={card}>
          <FormUI />
        </div>

        <div style={card}>
          <ChatUI />
        </div>

      </div>
    </div>
  );
}

const card = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

export default App;