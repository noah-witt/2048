function Score(grid)
{
  this.grid = grid;
  //console.log(grid);
}

Score.prototype.result = function()
{
  //console.log(this);
  var that = this;
  var downScore=0;
  var rightScore=0;
  that.grid.eachCell(function(x,y,state){
    if(state != null)
    {
      var val = state.value;
      //console.log(x+","+y+":"+val);

      //down
      if(y<3&&
        that.grid.cells[x][y+1]!=null&&
        val==that.grid.cells[x][y+1].value)
      {
        downScore=downScore+val;
        //console.log("DOWN add score"+val+" iterating at("+x+","+y+")");
      }
      else if(y<2&&
        that.grid.cells[x][y+1]==null&&
        that.grid.cells[x][y+2]!=null&&
        that.grid.cells[x][y+2].value==val)
      {
        downScore=downScore+val;
      }
      else if(y<1&&
        that.grid.cells[x][y+1]==null&&
        that.grid.cells[x][y+2]==null&&
        that.grid.cells[x][y+3]!=null&&
        that.grid.cells[x][y+3].value==val)
      {
        downScore=downScore+val;
      }

      //right
      if(x<3&&
        that.grid.cells[x+1][y]!=null&&
        val==that.grid.cells[x+1][y].value)
      {
        rightScore=rightScore+val;
        //console.log("RIGHT add score"+val+" iterating at("+x+","+y+")");
      }
      else if(x<2&&
        that.grid.cells[x+1][y]==null&&
        that.grid.cells[x+2][y]!=null&&
        that.grid.cells[x+2][y].value==val)
        {
          rightScore=rightScore+val;
        }
        else if(x<1&&
          that.grid.cells[x+1][y]==null&&
          that.grid.cells[x+2][y]==null&&
          that.grid.cells[x+3][y]!=null&&
          that.grid.cells[x+3][y].value==val)
        {
          rightScore=rightScore+val;
        }
    }
  });
  return {
    "rightScore": rightScore,
    "downScore": downScore
  }
};
