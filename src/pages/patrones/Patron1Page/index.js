import React, { useState } from 'react';

import ImagesPreview from '../../../components/ImagesPreview';
import Preview from './Preview';
import { formSubmitBehavior, getTextNumber } from '../../../helpers/utils';

const Patron1Page = () => {
  const [largo, setLargo] = useState(200);
  const [ancho, setAncho] = useState(200);
  const [opcion, setOpcion] = useState('LETTER');
  const [previewState, setPreviewState] = useState({
    largo,
    ancho,
    opcion,
  });

  const handleChangeLargo = (event) => {
    const newLargo = getTextNumber(event.target.value);
    setLargo(newLargo);
    setPreviewState({ largo: newLargo, ancho, opcion });
  };

  const handleChangeAncho = (event) => {
    const newAncho = getTextNumber(event.target.value);
    setAncho(newAncho);
    setPreviewState({ largo, ancho: newAncho, opcion });
  };

  const handleChangeOpcion = (event) => {
    const newOpcion = event.target.value;
    setOpcion(newOpcion);
    setPreviewState({ largo, ancho, opcion: newOpcion });
  };

  const handleSubmit = (event) => {
    formSubmitBehavior(event);
  };

  return (
    <main className="main-container d-flex flex-wrap justify-content-center">
      <ImagesPreview
        sources={[
          'https://source.unsplash.com/800x800/?clothing',
          'https://source.unsplash.com/800x800/?clothes',
          'https://source.unsplash.com/800x800/?clothe',
        ]}
      />
      <form
        className="card panel-card"
        onSubmit={handleSubmit}
      >
        <h3>Lorem ipsum.</h3>
        <p>Lorem ipsum dolor sit.</p>
        <div className="controls">
          <div className="options">
            <label className="m-bottom">Ingresa medidas:</label>
            <div className="d-flex align-items-center">
              <img
                alt="largo"
                src="https://www.mapeihome.com/uploads/images/area-of-wall.png"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: 'contain',
                }}
              />
              <div>
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
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img
                alt="ancho"
                src="https://www.mapeihome.com/uploads/images/area-of-wall.png"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: 'contain',
                }}
              />
              <div>
                <label htmlFor="ancho">Ancho</label>
                <input
                  id="ancho"
                  type="number"
                  value={ancho}
                  onChange={handleChangeAncho}
                />
              </div>
            </div>
            <div className="d-flex flex-column gap m-top m-bottom">
              <div className="d-flex align-items-center">
                <input
                  className="m-0"
                  id="option-1"
                  type="radio"
                  name="option"
                  value="LETTER"
                  checked={opcion === 'LETTER'}
                  onChange={handleChangeOpcion}
                  style={{
                    maxWidth: 32,
                    maxHeight: 32,
                  }}
                />
                <label
                  className="user-select-none"
                  htmlFor="option-1"
                >
                  Tamaño carta
                </label>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="m-0"
                  id="option-2"
                  type="radio"
                  name="option"
                  value="A4"
                  checked={opcion === 'A4'}
                  onChange={handleChangeOpcion}
                  style={{
                    maxWidth: 32,
                    maxHeight: 32,
                  }}
                />
                <label
                  className="user-select-none"
                  htmlFor="option-2"
                >
                  Tamaño A4
                </label>
              </div>
              <div className="d-flex align-items-center">
                <input
                  className="m-0"
                  id="option-3"
                  type="radio"
                  name="option"
                  value="A0"
                  checked={opcion === 'A0'}
                  onChange={handleChangeOpcion}
                  style={{
                    maxWidth: 32,
                    maxHeight: 32,
                  }}
                />
                <label
                  className="user-select-none"
                  htmlFor="option-3"
                >
                  Tamaño A0
                </label>
              </div>
            </div>
          </div>
          <Preview {...previewState} />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit netus, integer nisl ullamcorper torquent tempor molestie iaculis ridiculus, natoque nulla suscipit aliquet fringilla etiam sed. Blandit pellentesque taciti cubilia vestibulum diam dictumst aliquam, suspendisse magna tristique pulvinar luctus est dis, rhoncus habitasse tempus ultricies platea curabitur. Laoreet venenatis vivamus integer odio interdum litora orci, tristique lectus primis gravida ac curae eros in, posuere praesent porta fames tellus maecenas.</p>
      </form>
    </main>
  );
};

export default Patron1Page;
