import React from 'react';
import CustomButton from './CustomButton';

const RecommendedStyles = ({ handleStyleClick }) => {
  return (
    <div className="recommended-styles-container">
      <CustomButton
        type="outline"
        title="Recommended Styles"
        handleClick={handleStyleClick}
        customStyles="text-xs"
      />
    </div>
  );
};

export default RecommendedStyles;