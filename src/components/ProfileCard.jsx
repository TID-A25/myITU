import React from "react";

/**
 * ProfileCard Component
 * @param {Object} profile - contains name and info
 */
export default function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      {/* Placeholder for user image */}
      <div className="profile-photo" />

      {/* Basic user info */}
      <h3>{profile.name}</h3>
      <p>{profile.degree}</p>

      {/* Interests (static for now) */}
      <div className="interests">
        <button>Interest</button>
        <button>Interest</button>
        <button>Interest</button>
      </div>
    </div>
  );
}