import React from 'react';
import './right-image.scss'
import chartImage from '../../assets/clients/dubai.avif'; // Adjust the path if necessary

const RightImage: React.FC = () => {
  return (
    <div className="rightImageContainer">
      <img src={chartImage} alt="Chart presentation" className="image" />
    </div>
  );
};

export default RightImage;
