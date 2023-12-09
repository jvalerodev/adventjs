function maxDistance(movements) {
  const steps = { ">": 0, "<": 0, "*": 0 };

  for (const movement of movements) {
    steps[movement]++;
  }

  const { ">": right, "<": left, "*": neutral } = steps;
  const isRightGreater = right >= left;

  return isRightGreater ? right - left + neutral : left - right + neutral;
}
