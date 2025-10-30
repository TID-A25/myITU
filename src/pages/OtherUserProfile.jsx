import React from "react";
import { mockProfileData } from "../data/mockProfiles.js";
import ProfileHeader from "../components/ProfileHeader.jsx";
import ProfileInfo from "../components/ProfileInfo.jsx";
import ProfileInterests from "../components/ProfileInterests.jsx";
import chadPic from "../assets/Chad.jpg";
import { useNavigate } from "react-router-dom";

export default function OtherUserProfilePage() {
  const profile = mockProfileData[1];
  const navigate = useNavigate();

  return (
    <div>
      <ProfileHeader
        profilePicture={chadPic}
        showSettings={false}
        //navigates to bump page
        onBump={() => navigate("/bump-sent")}
      />
      <ProfileInfo profile={profile} />
      <ProfileInterests
        interests={profile.interests || profile.interest}
      />
    </div>
  );
}
