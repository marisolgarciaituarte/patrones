import React, { useState } from 'react';

import Preview from '../components/Preview';
import { formSubmitBehavior, getTextNumber } from '../helpers/utils';

const PanelPage = () => {
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
    <main className="d-flex flex-row justify-content-center">
      <form
        className="card panel-card"
        onSubmit={handleSubmit}
      >
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
      </form>
    </main>
  );
};

export default PanelPage;
