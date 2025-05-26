// src/pages/RedirectInstagram.jsx
import React, { useEffect } from "react";

export default function RedirectInstagram() {
  useEffect(() => {
    window.location.href = "https://www.instagram.com/seu_usuario"; // Substitua pelo seu link
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Redirecionando para o Instagram...</h1>
    </div>
  );
}
