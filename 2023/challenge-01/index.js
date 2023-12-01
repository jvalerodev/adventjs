function findFirstRepeated(gifts) {
  const index = gifts.findIndex((id, index) => gifts.indexOf(id) !== index);
  return gifts[index] ?? -1;
}
