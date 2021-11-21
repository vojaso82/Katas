function iqTest(numbers) {
  return (
    1 +
    numbers
      .split(" ")
      .findIndex(
        (x, idx, arr) => arr.filter((y) => y % 2 === x % 2).length === 1
      )
  );
}
