import React from 'react';
import CustomButton from './CustomButton';

const StylesPicker = ({ selectedStyle, handleStyleChange }) => {
    const styles = [
      {
        name: 'Style 1',
        image: require('../components/images/image1.png').default,
        color: 'red',
      },
      {
        name: 'Style 2',
        image: require('../components/images/image2.png').default,
        color: 'blue',
      },
      {
        name: 'Style 3',
        image: require('../components/images/image3.png').default,
        color: 'green',
      },
      {
        name: 'Style 4',
        image: require('../components/images/image4.png').default,
        color: 'yellow',
      },
    ];
  

return (
    <div className="styles-picker-container">
        {styles.map((style) => (
        <div
            key={style.name}
            className={`style-item ${selectedStyle === style.name ? 'active' : ''}`}
            onClick={() => handleStyleChange(style.name, style.color)}
        >
            <img src={style.image} alt={style.name} className="style-image" />
            <p className="style-name">{style.name}</p>
            <p className="style-color">Recommended color: {style.color}</p>
        </div>
        ))}
    </div>
    );
};

export default StylesPicker;