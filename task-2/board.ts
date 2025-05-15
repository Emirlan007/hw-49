const createBoard = (rows: number, cols: number) => {

   for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        row += '⬛';
      } else {
        row += '⬜';
      }
    }
    console.log(row);
  }
};

createBoard(8, 8);