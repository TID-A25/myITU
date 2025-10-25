import React from 'react';
import './ProfileCard.css';

export default function ProfileCard({ profile }) {
  return (
    <div className="profile-card">
      <div className="profile-photo-placeholder" />
      <h3>{profile.name}</h3>
      <p>{profile.degree}</p>
      <div className="interests">
        <button>Interest</button>
        <button>Interest</button>
        <button>Interest</button>
      </div>
    </div>
  );
}