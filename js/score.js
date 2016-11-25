function Score(grid)
{
  this.grid = grid;
  //console.log(grid);
}

//Atomaticaly selcts the method to check.
Score.prototype.go = function()
{
  if(this.grid.type!==null&&this.grid.type=="GridSimV1")
  {
    return this.resultSim();
  }
  else
  {
    return this.result();
  }
};

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
  };
};

Score.prototype.resultSim = function()
{
  var that = this;
  var downScore=0;
  var rightScore=0;
  that.grid.eachCell(function(x,y,state){
    if(state != null)
    {
      var val = state;
      //console.log(x+","+y+":"+val);

      //down
      if(y<3&&
        that.grid.grid[x][y+1]!==0&&
        val==that.grid.grid[x][y+1])
      {
        downScore=downScore+val;
        //console.log("DOWN add score"+val+" iterating at("+x+","+y+")");
      }
      else if(y<2&&
        that.grid.grid[x][y+1]===0&&
        that.grid.grid[x][y+2]!==0&&
        that.grid.grid[x][y+2]==val)
      {
        downScore=downScore+val;
      }
      else if(y<1&&
        that.grid.grid[x][y+1]===0&&
        that.grid.grid[x][y+2]===0&&
        that.grid.grid[x][y+3]===0&&
        that.grid.grid[x][y+3]==val)
      {
        downScore=downScore+val;
      }

      //right
      if(x<3&&
        that.grid.grid[x+1][y]!==0&&
        val==that.grid.grid[x+1][y])
      {
        rightScore=rightScore+val;
        //console.log("RIGHT add score"+val+" iterating at("+x+","+y+")");
      }
      else if(x<2&&
        that.grid.grid[x+1][y]===0&&
        that.grid.grid[x+2][y]!==0&&
        that.grid.grid[x+2][y]==val)
        {
          rightScore=rightScore+val;
        }
        else if(x<1&&
          that.grid.grid[x+1][y]===0&&
          that.grid.grid[x+2][y]===0&&
          that.grid.grid[x+3][y]!==0&&
          that.grid.grid[x+3][y]==val)
        {
          rightScore=rightScore+val;
        }
    }
  });
  return {
    "rightScore": rightScore,
    "downScore": downScore
  };
};
