function manufacture(gifts, materials) {
  const materialSet = new Set([...materials]);

  const possibleGifts = gifts.filter((gift) => {
    for (const char of gift) {
      if (!materialSet.has(char)) return false;
    }

    return true;
  });

  return possibleGifts;
}
