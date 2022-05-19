export function secondsToTimer(seconds) {
  const minutes = `0${Math.floor(seconds / 60)}`.slice(-2); // 050 00
  const sec = `0${seconds % 60}`.slice(-2);
  return [minutes, sec];
}
