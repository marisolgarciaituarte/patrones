import React, { useState } from 'react';

const ImagesPreview = ({
  sources = [''],
}) => {
  const [selectedImage, setSelectedImage] = useState(sources[0]);

  return (
    <aside
      className="d-flex flex-row align-items-start justify-content-center gap p"
      style={{
        flex: '1 1 520px',
      }}
    >
      <div className="d-flex flex-column gap">
        {sources.map((source) => (
          <img
            key={source}
            alt={source}
            src={source}
            onClick={() => setSelectedImage(source)}
            style={{
              width: 80,
              height: 120,
              objectFit: 'cover',
              borderWidth: selectedImage === source ? 4 : 0,
              borderColor: '#0E7ECD',
              borderStyle: 'solid',
            }}
          />
        ))}
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img
          alt={selectedImage}
          src={selectedImage}
          style={{
            width: 392,
            height: 392,
            objectFit: 'contain',
          }}
        />
      </div>
    </aside>
  );
};

export default ImagesPreview;
