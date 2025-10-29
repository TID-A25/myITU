// src/pages/BumpReceived.jsx
import React from "react";
import { mockProfileData } from "../data/mockProfiles.js";
import profilePicture from "../assets/Athena.jpg";
import otherProfilePicture from "../assets/Chad.jpg";
import confetti from "../assets/Confetti.svg";
import buttonBig from "../assets/Button_Big.svg";
import buttonSmall from "../assets/Button_Small.svg";
import buttonDecline from "../assets/Button_Decline.svg";
import InterestCard from "../components/InterestCard.jsx";

export default function BumpReceived() {
  return (
    <div>
      <h1>Chad bumped into you!</h1>
    </div>
  );
}
