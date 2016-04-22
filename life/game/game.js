module.exports = {

  gameOfLife: function(board){
    return board.map(function(array, arrayindex){
      return array.map(function(cell, cellindex){
        var count = 0;
        if(array[cellindex+1]===1){ // if the cell to the right of the current cell in the current array
          count++;
        }
        if(array[cellindex-1]===1){ // if the cell to the left of the current cell in the current array
          count++;
        }
        if(arrayindex > 0 && board[arrayindex-1][cellindex-1]===1){ // if its the second array to the top left == 1
          count++;
        }
        if(arrayindex > 0 && board[arrayindex-1][cellindex]===1){ // the one directly above
          count++;
        }
        if(arrayindex > 0 && board[arrayindex-1][cellindex+1]===1){ // if the one above and top right
          count++;
        }
        if(arrayindex < 4 && board[arrayindex+1][cellindex-1]===1){ // if its the second to last row and bottom left
          count++;
        }
        if(arrayindex < 4 && board[arrayindex+1][cellindex]===1){ // if its directly below
          count++;
        }
        if(arrayindex < 4 && board[arrayindex+1][cellindex+1]===1){ // if its below and to the left
          count++;
        }
        return logic(count, cell)
      })
    })
  },

  logic: function(neighborCount, cellStatus){
    if(neighborCount > 1 && neighborCount < 4 && cellStatus===1){ // if the cell is alive and is going to live
      return 1;
    }else if(cellStatus===0 && neighborCount===3){ // if hte cell status is dead but will become alive
      return 1;
    }else{
      return 0;
    }
  },
}

function logic(neighborCount, cellStatus){
  if(neighborCount > 1 && neighborCount < 4 && cellStatus===1){ // if the cell is alive and is going to live
    return 1;
  }else if(cellStatus===0 && neighborCount===3){ // if hte cell status is dead but will become alive
    return 1;
  }else{
    return 0;
  }
}
