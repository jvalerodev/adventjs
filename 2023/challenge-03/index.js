function findNaughtyStep(original = "", modified = "") {
  if (original === modified) return "";

  const { longer, shorter } =
    original.length >= modified.length
      ? { longer: original, shorter: modified }
      : { longer: modified, shorter: original };

  for (let i = 0; i < longer.length; i++) {
    if (longer[i] !== shorter[i]) return longer[i];
  }

  return "";
}
