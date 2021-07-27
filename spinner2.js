const spinnerAnimation = function (array) {
  for ( let i = 0; i <  2 * array.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${array[i % array.length]}`);
    }, 100 * (i * 2))
  }
};

spinnerAnimation(["|", "/", "-", "\\", "|"]);
