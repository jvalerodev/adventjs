function cyberReindeer(road = "", time = 0) {
  const paths = [road];
  let path = [...road];
  let sledIndex = path.indexOf("S");

  road = road.replace("S", ".");

  for (let i = 1; i < time; i++) {
    const isOpen = i >= 5;

    if (isOpen) {
      path = path.join("").replaceAll("|", "*").split("");
      road = road.replaceAll("|", "*");
    }

    if (road[sledIndex + 1] === ".") {
      path[sledIndex + 1] = "S";
      path[sledIndex] = road[sledIndex];
      sledIndex++;
    } else if (road[sledIndex + 1] === "*" || isOpen) {
      path[sledIndex + 1] = "S";
      path[sledIndex] = road[sledIndex];
      sledIndex++;
    }

    paths.push(path.join(""));
  }

  return paths;
}
