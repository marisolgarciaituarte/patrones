export const blurChildren = (target) => {
  for (let k = 0; k < target.length; k += 1) {
    target[k].blur();
  }
};

export const formSubmitBehavior = (event) => {
  event.preventDefault();
  blurChildren(event.target);
};
