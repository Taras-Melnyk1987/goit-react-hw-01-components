function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRundomColor() {
    const color = `rgb(${getRndInteger(0, 230)}, ${getRndInteger(
      0,
      255,
    )}, ${getRndInteger(0, 255)})`;
    return color;
  }

  export default getRundomColor;

  