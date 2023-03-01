const getCameraSize = function() {
  const resolution = window.devicePixelRatio;
  let w = window.innerWidth;
  const h = window.innerHeight;
  // if (h / w < 0.5) {
  //   w = h / 0.5;
  // }
  var w2 = Math.round(w * resolution);
  var h2 = Math.round(h * resolution);
  return {
    width: w2 % 2 === 0 ? w2 : w2 - 1,
    height: h2 % 2 === 0 ? h2 : h2 - 1
  };
};

export default getCameraSize;
