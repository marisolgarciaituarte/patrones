import React, { useState } from 'react';

import ImagesPreview from '../../components/ImagesPreview';
import Preview from '../../components/Preview';
import { formSubmitBehavior, getTextNumber } from '../../helpers/utils';

const Patron1Page = () => {
  const [largo, setLargo] = useState(200);
  const [ancho, setAncho] = useState(200);
  const [previewState, setPreviewState] = useState({
    largo,
    ancho,
  });

  const handleChangeLargo = (event) => {
    setLargo(getTextNumber(event.target.value));
  };

  const handleChangeAncho = (event) => {
    setAncho(getTextNumber(event.target.value));
  };

  const handleSubmit = (event) => {
    formSubmitBehavior(event);
    setPreviewState({ largo, ancho });
  };

  return (
    <main className="main-container d-flex flex-row flex-wrap justify-content-center">
      <ImagesPreview
        sources={[
          'https://source.unsplash.com/300x300/?clothing',
          'https://source.unsplash.com/300x300/?clothes',
          'https://source.unsplash.com/300x300/?clothe',
        ]}
      />
      <form
        className="card panel-card"
        onSubmit={handleSubmit}
        style={{
          flex: '1 1 728px',
        }}
      >
        <h3>Lorem ipsum.</h3>
        <p>Lorem ipsum dolor sit.</p>
        <div className="controls">
          <div className="options">
            <label htmlFor="largo">
              Largo
            </label>
            <input
              className="m-bottom"
              id="largo"
              type="number"
              value={largo}
              onChange={handleChangeLargo}
            />
            <label htmlFor="ancho">Ancho</label>
            <input
              id="ancho"
              type="number"
              value={ancho}
              onChange={handleChangeAncho}
            />
            <button type="submit">
              Go
            </button>
          </div>
          <Preview {...previewState} />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, integer nisl ullamcorper torquent tempor molestie iaculis ridiculus, natoque nulla suscipit aliquet fringilla etiam sed. Blandit pellentesque taciti cubilia vestibulum diam dictumst aliquam, suspendisse magna tristique pulvinar luctus est dis, rhoncus habitasse tempus ultricies platea curabitur. Laoreet venenatis vivamus integer odio interdum litora orci, tristique lectus primis gravida ac curae eros in, posuere praesent porta fames tellus maecenas.</p>
      </form>
    </main>
  );
};

export default Patron1Page;
