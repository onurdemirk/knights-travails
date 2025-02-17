export const knightMoves = (start, end) => {
  const queue = [[start]];
  const visited = [start];

  while (queue.length > 0) {
    let path = queue.shift();
    let [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) {
      console.log(`** theodinproject.com, the code is poetry - the onur was here.`);
      console.log(`> knightMoves([${path[0]}],[${path[path.length - 1]}])`);
      console.log(`=> You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((move) => console.log(`    [${move[0]},${move[1]}]`));
      console.log(`----------------------------------------------------`);
      return path;
    }

    const moves = [
      [x - 1, y + 2],
      [x + 1, y + 2],
      [x - 1, y - 2],
      [x + 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x + 2, y - 1],
      [x + 2, y + 1],
    ];

    for (const [oX, oY] of moves) {
      if (
        oX >= 0 &&
        oX <= 7 &&
        oY >= 0 &&
        oY <= 7 &&
        !visited.some(([x, y]) => x === oX && y === oY)
      ) {
        visited.push([oX, oY]);
        queue.push([...path, [oX, oY]]);
      }
    }
  }
};
