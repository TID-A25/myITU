import React from "react";
/**
 * ProfileCard Component
 * @param {Object} profile - contains name, degree, image
 */
export default function UserProfileInfo({ profile }) {
  return (
    <div className="profile-card">
      <div
        className="user-profile-photo"
        style={{ backgroundImage: `url(${profile.image})` }}
      >

        <div className="profile-info">
          <h3>{profile.name}</h3>
          <p>{profile.degree}</p>
        </div>
      </div>

    </div>
  );
}