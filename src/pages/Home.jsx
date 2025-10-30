import React from "react";
import { mockProfileData } from "../data/mockProfiles.js";
import ProfileSection from "../components/ProfileSection.jsx";
import "../App.css"; // Load global styles here

export default function Home() {
  // Group profiles by interest
  const profilesByInterest = mockProfileData.reduce((acc, profile) => {
    if (!acc[profile.interest]) {
      acc[profile.interest] = [];
    }
    acc[profile.interest].push(profile);
    return acc;
  }, {});

  return (
    <div>
      {/* Render all interest sections */}
      {Object.entries(profilesByInterest).map(([interest, profiles]) => (
        <ProfileSection key={interest} title={interest} profiles={profiles} />
      ))}
    </div>
  );
}