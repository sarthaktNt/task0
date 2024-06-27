import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";

const InputHandler = ({ onSubmit, editMode = false, initialData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (editMode && initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    }
  }, [editMode, initialData]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage("Name and email are required.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email format.");
      return;
    }
    onSubmit({ name, email });
    setErrorMessage("");
    setName("");
    setEmail("");
  };

  return (
    <div
      className="header-box"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "350px",
        margin: "0 auto",
        marginTop: "30px",
      }}
    >
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 8, width: "100%" }}
      />
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 8, width: "100%" }}
      />
      <Button type="primary" onClick={handleSubmit} style={{ width: "100%" }}>
        {!!editMode ? "Edit user" : "Add user"}
      </Button>
      {errorMessage && (
        <div style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>
      )}
    </div>
  );
};

export default InputHandler;
