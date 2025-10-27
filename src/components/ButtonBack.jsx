import React from "react";

export default function ButtonBack({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#E0E0E0", // gray
        color: "black",
        height: "48px",
        width: "48px",
        borderRadius: "9999px", //round
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
      aria-label="Back"
    >
      {/* Arrow pointing left */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        style={{ width: "22px", height: "22px" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
