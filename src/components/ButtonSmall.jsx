import React from "react";

export default function ButtonSmall({ label = "text", onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#AEF1D2", // teal primary
        color: "black",
        height: "48px",
        width: "48px",
        borderRadius: "9999px", // makes it round
        fontSize: "12px",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        border: "none",
        transition: "transform 100ms ease, filter 120ms ease",
      }}
      // makes button smaller when clicked
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.95)")}
      onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
    >
      {label}
    </button>
  );
}
