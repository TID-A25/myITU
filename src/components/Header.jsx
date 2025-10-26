import React from "react";

/**
 * Header - sticks to top of the page
 */
export default function Header() {
  return (
    <header className="app-header">
      <h1>mITU</h1>
      <nav>
        <span className="active">Profiles</span>
        <span>|</span>
        <span>Events</span>
      </nav>
    </header>
  );
}