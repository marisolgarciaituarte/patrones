import { getViews } from '../../../helpers/utils';

export const getDrawingPDF = ({
  drawWidth,
  drawHeight,
  pageWidth,
  pageHeight,
  scale = 1,
}) => {
  const pages = [];
  const views = getViews({
    drawWidth,
    drawHeight,
    pageWidth,
    pageHeight,
    scale,
  });
  for (let view of views) {
    pages.push(`
      <svg width="${pageWidth}" height="${pageHeight}" viewBox="${view}">
        <rect
          x="0"
          y="0"
          width="${drawWidth}"
          height="${drawHeight}"
          fill="transparent"
          stroke="black"
          stroke-width="1"
        />
      </svg>
    `);
  }
  return pages;
};

export const DrawingHTML = ({
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  pageWidth,
  pageHeight,
  drawWidth,
  drawHeight,
  view,
  scale = 1,
}) => (
  <svg
    className="card preview-card p-0"
    width={(pageWidth + marginLeft + marginRight) * scale}
    height={(pageHeight + marginTop + marginBottom) * scale}
    viewBox={view}
    fill="transparent"
    style={{
      paddingTop: marginTop,
      paddingLeft: marginLeft,
      paddingRight: marginRight,
      paddingBottom: marginBottom,
    }}
  >
    <rect
      x="0"
      y="0"
      width={drawWidth}
      height={drawHeight}
      transform={`scale(${scale})`}
      fill="transparent"
      stroke="black"
      strokeWidth="1"
    />
  </svg>
);
