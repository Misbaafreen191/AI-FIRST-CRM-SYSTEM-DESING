import React, { useState, useEffect } from "react";

function FormUI() {
  const [form, setForm] = useState({
    hcp_name: "",
    interaction_type: "",
    product: "",
    summary: "",
    follow_up: "",
    sentiment: "",
  });

  const inputStyle = {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    width: "100%",
  };

  useEffect(() => {
    const handler = (e) => {
      setForm((prev) => ({
        ...prev,
        ...e.detail,
      }));
    };

    window.addEventListener("fillForm", handler);

    return () => window.removeEventListener("fillForm", handler);
  }, []);

  const handleSave = () => {
    if (!form.hcp_name || !form.product || !form.summary) {
      alert("Please fill required fields");
      return;
    }

    console.log(form);

    setForm({
      hcp_name: "",
      interaction_type: "",
      product: "",
      summary: "",
      follow_up: "",
      sentiment: "",
    });

    alert("Saved!");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      
      <input
        style={inputStyle}
        placeholder="HCP Name *"
        value={form.hcp_name}
        onChange={(e) =>
          setForm({ ...form, hcp_name: e.target.value })
        }
      />

      <select
        style={inputStyle}
        value={form.interaction_type}
        onChange={(e) =>
          setForm({ ...form, interaction_type: e.target.value })
        }
      >
        <option value="">Interaction Type</option>
        <option>Call</option>
        <option>Meeting</option>
        <option>Email</option>
      </select>

      <input
        style={inputStyle}
        placeholder="Product *"
        value={form.product}
        onChange={(e) =>
          setForm({ ...form, product: e.target.value })
        }
      />

      <textarea
        style={inputStyle}
        placeholder="Summary *"
        value={form.summary}
        onChange={(e) =>
          setForm({ ...form, summary: e.target.value })
        }
      />

      <textarea
        style={inputStyle}
        placeholder="Follow-up"
        value={form.follow_up}
        onChange={(e) =>
          setForm({ ...form, follow_up: e.target.value })
        }
      />

      <select
        style={inputStyle}
        value={form.sentiment}
        onChange={(e) =>
          setForm({ ...form, sentiment: e.target.value })
        }
      >
        <option value="">Sentiment</option>
        <option>Positive</option>
        <option>Neutral</option>
        <option>Negative</option>
      </select>

      <button onClick={handleSave}>
        Save Interaction
      </button>
    </div>
  );
}

export default FormUI;