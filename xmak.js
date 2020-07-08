const finalPosition (moves) {
  const coord = [0, 0];
  
  for (const move of moves) {
    switch(move) {
      case 'north':
        coordinates[1] += 1;
        break;
      case 'south':
        coordinates[1] -= 1;
        break;
      case 'east':
        coordinates[0] += 1;
        break;
      case 'west':
        coordinates[0] -= 1;
        break;
      default:
        break;
    }
  });
  return coordinates;
}
