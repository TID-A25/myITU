import React from "react";
import HorizontalScroller from "./HorizontalScroller";

/**
 * ProfileSection Component
 * Renders a title and a horizontal row of profiles
 */
export default function ProfileSection({ title, profiles }) {
  return (
    <section className="profile-section">
      <h2>People who also like <strong>{title}</strong></h2>
      <HorizontalScroller profiles={profiles} />
    </section>
  );
}