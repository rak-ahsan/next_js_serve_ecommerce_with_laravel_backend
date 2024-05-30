import React from "react";

const RakibsDetails: React.FC = () => {
  const profile: { name: string; occupation: string; level: string } = {
    name: "Rakib Ahsan",
    occupation: "React Developer",
    level: "Expert",
  };

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Occupation: {profile.occupation}</p>
      <p>Level: {profile.level}</p>
    </div>
  );
};

export default RakibsDetails;
