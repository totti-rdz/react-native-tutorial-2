export default function generateRandomNumBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
