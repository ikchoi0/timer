const alarmArr = process.argv.slice(2);

for (let i = 0; i < alarmArr.length; i++) {
  if (!alarmArr[i] || Number(alarmArr[i]) < 0 || Number(alarmArr[i]) === NaN) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\x07");
    process.stdout.write(`alarm at ${alarmArr[i]} seconds\n`);
  }, 1000 * Number(alarmArr[i]));
}
