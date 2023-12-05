function decode(message) {
  const stack = [];
  let text = "";

  for (const char of message) {
    if (char === "(") {
      stack.push(text);
      text = "";
    } else if (char === ")") {
      text = stack.pop() + text.split("").reverse().join("");
    } else {
      text += char;
    }
  }

  return text;
}
