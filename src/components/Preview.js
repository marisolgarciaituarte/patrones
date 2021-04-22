import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake';

import { getRealNumber } from '../helpers/utils';

const Preview = ({ largo, ancho }) => {
  const svgWidth = 250;
  const svgHeight = 250;
  const largoReal = getRealNumber(largo);
  const anchoReal = getRealNumber(ancho);
  const x = svgWidth/2 - largoReal/2;
  const y = svgWidth/2 - anchoReal/2;

  const handlePrint = () => {
    const docDefinition = {
      pageMargins: [0, 0, 0, 0],
      content: [{
        svg: `
          <svg width="${svgWidth}" height="${svgHeight}">
            <rect
              x="${x}"
              y="${y}"
              width="${largoReal}"
              height="${anchoReal}"
              fill="transparent"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        `,
      }],
    };
    pdfMake.createPdf(docDefinition).download();
  };

  return (
    <div className="preview">
      <svg className="card preview-card p-0" width={svgWidth} height={svgHeight}>
        <rect
          x={x}
          y={y}
          width={largoReal}
          height={anchoReal}
          fill="transparent"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
      <button onClick={handlePrint}>Export PDF</button>
    </div>
  );
};

export default Preview;
