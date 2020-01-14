
// Implement an alarm clock / timer which will beep after a specified amount of time has passed.
// The user can specify an unlimited number of alarms using command line arguments

let input = process.argv.splice(2);

input = input.filter(num => !NaN && num > 0)
            .sort((a, b) => a -b)
            .map(x => x * 1000);

for (let i = 0; i < input.length; i++){
  let time = input[i];
  if (!input) {
    return;
  } 
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time);
  time = input[i + 1];
}
