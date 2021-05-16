import React, { useState, useEffect, useContext } from 'react';
import pdfMake from 'pdfmake/build/pdfmake';

import { Alert, useAlertState } from '../../../components/Alert';
import { getDrawingPDF, DrawingHTML } from './Drawing';
import { getViews, getRealNumber } from '../../../helpers/utils';
import AuthContext from '../../../helpers/AuthContext';
import iconArrowLeft from '../../../assets/icons/arrow-left.png';
import iconArrowRight from '../../../assets/icons/arrow-right.png';

const Preview = ({ largo, ancho, opcion }) => {
  const { user } = useContext(AuthContext);
  const scale = 0.6;
  const marginTop = 10;
  const marginBottom = 10;
  const marginLeft = 10;
  const marginRight = 10;
  const pageWidth = 595 - marginLeft - marginRight;
  const pageHeight = 842 - marginTop - marginBottom;
  const drawWidth = opcion === "1" ? getRealNumber(largo) : getRealNumber(largo)*2;
  const drawHeight = opcion === "1" ? getRealNumber(ancho) : getRealNumber(ancho)*2;
  const [pages, setPages] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [alertState, setAlertState] = useAlertState({
    type: '',
    message: '',
  });

  const handleNext = () => {
    setPageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < pages.length) {
        return nextIndex;
      }
      return prevIndex;
    });
  };

  const handleBack = () => {
    setPageIndex((prevIndex) => {
      const backIndex = prevIndex - 1;
      if (backIndex >= 0) {
        return backIndex;
      }
      return prevIndex;
    });
  };

  const handleExportPDF = () => {
    if (!user) {
      setAlertState({
        type: 'error',
        message: 'Primero inicia sesión',
      });
    } else {
      const docDefinition = {
        pageSize: 'A4',
        pageMargins: [marginLeft, marginTop, marginRight, marginBottom],
        content: getDrawingPDF({ drawWidth, drawHeight, pageWidth, pageHeight }).map((page) => {
          return {
            svg: page,
          };
        }),
      };
      pdfMake.fonts = {
        Roboto: {
          normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
          bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
          italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
          bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
        },
      };
      pdfMake.createPdf(docDefinition).download();
    }
  };

  useEffect(() => {
    setPageIndex(0);
    const [views] = getViews({ drawWidth, drawHeight, pageWidth, pageHeight, scale });
    setPages(views);
  }, [drawWidth, drawHeight, pageWidth, pageHeight]);

  return (
    <div className="preview">
      <Alert {...alertState} />
      <DrawingHTML
        marginTop={marginTop}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginBottom={marginBottom}
        pageWidth={pageWidth}
        pageHeight={pageHeight}
        drawWidth={drawWidth}
        drawHeight={drawHeight}
        view={pages[pageIndex]}
        scale={scale}
      />
      <div className="buttons">
        <button onClick={handleBack}>
          <img
            className="icon"
            alt="arrow-left"
            src={iconArrowLeft}
          />
        </button>
        <p>{pageIndex + 1}</p>
        <button onClick={handleNext}>
          <img
            className="icon"
            alt="arrow-right"
            src={iconArrowRight}
          />
        </button>
        <button onClick={handleExportPDF}>Export PDF</button>
      </div>
    </div>
  );
};

export default Preview;
