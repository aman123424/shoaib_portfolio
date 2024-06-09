import React from 'react';
import './left-image.scss';
import teamImage from '../../assets/logos/logo.png'; // Adjust the path if necessary

const LeftImage: React.FC = () => {
  return (
    <div className="leftImageContainer">
      <img src={teamImage} alt="Team collaboration" className="left-image" />
    </div>
  );
};

export default LeftImage;
