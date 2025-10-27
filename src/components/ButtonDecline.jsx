import React from "react";

export default function ButtonDecline({ label = "text", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#F7D4BD", // orange-light
        color: "black",
        height: "48px",
        width: "48px",
        borderRadius: "9999px",
        fontSize: "12px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "none",
        transition: "transform 100ms ease, filter 120ms ease",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.95)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      {label}
    </button>
  );
}
