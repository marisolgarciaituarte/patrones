export const getSizeFormat = (format) => {
  switch(format) {
    case 'LETTER':
      return [612, 791];
    case 'A4':
      return [595, 842];
    case 'A0':
      return [2384, 3370];
    default:
      return [612, 791];
  }
};

export const getViews = ({
  drawWidth,
  drawHeight,
  pageWidth,
  pageHeight,
  scale = 1,
}) => {
  const views = [];
  const markers = [];
  const x = Math.ceil(drawWidth/pageWidth);
  const y = Math.ceil(drawHeight/pageHeight);
  for (let i = 0; i < y; i += 1) {
    for (let k = 0; k < x; k += 1) {
      views.push(`${k*pageWidth*scale} ${i*pageHeight*scale} ${pageWidth*scale} ${pageHeight*scale}`);
      markers.push([
        i * x + i + k + 1,
        i * x + i + k + 2,
        i * x + i + k + x + 2,
        i * x + i + k + x + 3,
      ]);
    }
  }
  return [views, markers];
};

export const blurChildren = (target) => {
  for (let k = 0; k < target.length; k += 1) {
    target[k].blur();
  }
};

export const formSubmitBehavior = (event) => {
  event.preventDefault();
  blurChildren(event.target);
};

export const isNumber = (text) => {
  return !isNaN(text);
};

export const getTextNumber = (text) => {
  return text && isNumber(text) ? parseFloat(text) : '';
};

export const getRealNumber = (text) => {
  return text && isNumber(text) ? parseFloat(text) : 0;
};
