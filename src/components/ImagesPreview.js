import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImagesPreview = ({
  sources = [''],
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <aside className="images">
      <div className="list-images">
        {sources.map((source, index) => (
          <img
            key={source}
            alt={source}
            src={source}
            onClick={() => setSelectedImage(index)}
            style={{
              width: 80,
              height: 120,
              objectFit: 'cover',
              borderWidth: selectedImage === index ? 4 : 0,
              borderColor: '#0E7ECD',
              borderStyle: 'solid',
            }}
          />
        ))}
      </div>
      <div className="selected-image">
        <ReactImageMagnify
          smallImage={{
            alt: sources[selectedImage],
            isFluidWidth: true,
            src: sources[selectedImage],
            width: 392,
            height: 392,
            sizes: '(max-width: 768px) 100vw',
          }}
          largeImage={{
            src: sources[selectedImage],
            width: 800,
            height: 800,
          }}
        />
      </div>
    </aside>
  );
};

export default ImagesPreview;
