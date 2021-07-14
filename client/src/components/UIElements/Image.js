import React from 'react';

import './Image.scss';

const Image = ({
  image,
  alt,
  width,
  imageLoaded,
  className,
  style,
  onClick,
}) => {
  return (
    <div className={`Image ${className || ''}`} style={style}>
      <img
        src={image}
        alt={alt}
        style={{ width: width, height: width }}
        onLoad={() => imageLoaded && imageLoaded()}
        onClick={onClick}
      />
    </div>
  );
};

export default Image;
