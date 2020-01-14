const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key < 9 && key > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (key * 1000));
  } else if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});