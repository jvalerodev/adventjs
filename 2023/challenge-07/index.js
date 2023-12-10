function drawGift(size, symbol) {
  let gift = " ".repeat(size - 1) + "#".repeat(size) + "\n";

  // Top
  for (let i = 1; i < size; i++) {
    const spaces = " ".repeat(size - i - 1);
    const middle =
      i !== size - 1 ? symbol.repeat(size - 2) : "#".repeat(size - 2);
    const side = symbol.repeat(i - 1);

    gift += spaces + "#" + middle + "#" + side + "#\n";
  }

  // Bottom
  for (let i = size - 1; i >= 1; i--) {
    const middle = i !== 1 ? symbol.repeat(size - 2) : "#".repeat(size - 2);
    const side = symbol.repeat(Math.max(i - 2, 0));
    const end = i !== 1 ? "#\n" : "\n";

    gift += "#" + middle + "#" + side + end;
  }

  return gift;
}
