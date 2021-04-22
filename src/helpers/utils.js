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
