import React from "react";
import { profilesByInterest } from "../Data/mockProfiles.js";
import ProfileSection from "../Components/ProfileSection.jsx";
import "../App.css"; // Load global styles here

export default function Home() {
  return (
    <div>
      {/* Render all interest sections */}
      {Object.entries(profilesByInterest).map(([interest, profiles]) => (
        <ProfileSection key={interest} title={interest} profiles={profiles} />
      ))}
    </div>
  );
}