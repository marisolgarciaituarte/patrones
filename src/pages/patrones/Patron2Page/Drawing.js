import { getViews } from '../../../helpers/utils';

export const getDrawingPDF = ({
  drawWidth,
  drawHeight,
  pageWidth,
  pageHeight,
  scale = 1,
}) => {
  let c = 0;
  const pages = [];
  const [views, markers] = getViews({
    drawWidth,
    drawHeight,
    pageWidth,
    pageHeight,
    scale,
  });
  for (let view of views) {
    let [x, y] = view.split(' ');
    x = parseFloat(x);
    y = parseFloat(y);
    pages.push(`
      <svg width="${pageWidth}" height="${pageHeight}" viewBox="${view}">
        <text x="${x + pageWidth / 2}" y="${y + pageHeight / 2}" font-size="55" fill="rgba(0, 0, 0, 0.25)">${c + 1}</text>
        <path d="M${x} ${y} l0 10 l10 -10 z" fill="rgba(0, 0, 0, 0.25)" />
        <text x="${x + 12}" y="${y + 24}" font-size="12" fill="rgba(0, 0, 0, 0.25)">${markers[c][0]}</text>
        <path d="M${x + pageWidth} ${y} l0 10 l-10 -10 z" fill="rgba(0, 0, 0, 0.25)" />
        <text x="${x + pageWidth - 24}" y="${y + 24}" font-size="12" fill="rgba(0, 0, 0, 0.25)">${markers[c][1]}</text>
        <path d="M${x} ${y + pageHeight} l0 -10 l10 10 z" fill="rgba(0, 0, 0, 0.25)" />
        <text x="${x + 12}" y="${y + pageHeight - 12}" font-size="12" fill="rgba(0, 0, 0, 0.25)">${markers[c][2]}</text>
        <path d="M${x + pageWidth} ${y + pageHeight} l0 -10 l-10 10 z" fill="rgba(0, 0, 0, 0.25)" />
        <text x="${x + pageWidth - 24}" y="${y + pageHeight - 12}" font-size="12" fill="rgba(0, 0, 0, 0.25)">${markers[c][3]}</text>
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
    c += 1;
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
