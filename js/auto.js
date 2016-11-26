//PLAYS GAME Atomaticaly
//var timesOfIt=0;
function auto(gm)
{
  this.init = 0;
  this.GameManagerHolder = gm;
  this.testGrid = null;
}
auto.prototype.go= function()
{
  //setInterval(this.internalRun,1);
  setInterval(this.internalRun3,1);
};

auto.prototype.internalRun = function()
{
  if(gmGlobal.isGameTerminated())
  {
    if(gmGlobal.won)
    {
      console.log("Continuing Game past 2048");
      gmGlobal.keepPlaying();
    }
    else
    {
      if(gmGlobal.score>=2048)
      {
        console.log("restart "+gmGlobal.score);
      }
      gmGlobal.restart();
    }
  }
  var r= Math.floor(Math.random()*4);
  //console.log("CONT"+r);
  gmGlobal.move(r);

  //Benchmarking.
  /*
  if(timesOfIt%1000==0)
  {
    console.log(timesOfIt);
    if(timesOfIt==0)
    {
      console.time("benchMark");
    }
    else
    {
      console.timeEnd("benchMark");
    }

  }
  timesOfIt++;
  */
};

//smarter ai
auto.prototype.internalRun2 = function()
{
  if(gmGlobal.isGameTerminated())
  {
    if(gmGlobal.won)
    {
      console.log("Continuing Game past 2048");
      gmGlobal.keepPlaying();
    }
    else
    {
      if(gmGlobal.score>=2048)
      {
        console.log("restart "+gmGlobal.score);
      }
      gmGlobal.restart();
    }
  }

  var downScore=0;
  var rightScore=0;
  gmGlobal.grid.eachCell(function(x,y,state){
    if(state != null)
    {
      var val = state.value;
      //console.log(x+","+y+":"+val);

      //down
      if(y<3&&
        gmGlobal.grid.cells[x][y+1]!=null&&
        val==gmGlobal.grid.cells[x][y+1].value)
      {
        downScore=downScore+val;
        //console.log("DOWN add score"+val+" iterating at("+x+","+y+")");
      }
      else if(y<2&&
        gmGlobal.grid.cells[x][y+1]==null&&
        gmGlobal.grid.cells[x][y+2]!=null&&
        gmGlobal.grid.cells[x][y+2].value==val)
      {
        downScore=downScore+val;
      }
      else if(y<1&&
        gmGlobal.grid.cells[x][y+1]==null&&
        gmGlobal.grid.cells[x][y+2]==null&&
        gmGlobal.grid.cells[x][y+3]!=null&&
        gmGlobal.grid.cells[x][y+3].value==val)
      {
        downScore=downScore+val;
      }

      //right
      if(x<3&&
        gmGlobal.grid.cells[x+1][y]!=null&&
        val==gmGlobal.grid.cells[x+1][y].value)
      {
        rightScore=rightScore+val;
        //console.log("RIGHT add score"+val+" iterating at("+x+","+y+")");
      }
      else if(x<2&&
        gmGlobal.grid.cells[x+1][y]==null&&
        gmGlobal.grid.cells[x+2][y]!=null&&
        gmGlobal.grid.cells[x+2][y].value==val)
        {
          rightScore=rightScore+val;
        }
        else if(x<1&&
          gmGlobal.grid.cells[x+1][y]==null&&
          gmGlobal.grid.cells[x+2][y]==null&&
          gmGlobal.grid.cells[x+3][y]!=null&&
          gmGlobal.grid.cells[x+3][y].value==val)
        {
          rightScore=rightScore+val;
        }
    }
  });

  //console.log("d:"+downScore+" r:"+rightScore);

  if(downScore>=rightScore&&downScore!==0)
  {
    gmGlobal.move(2);
    //console.log("Move down");
  }
  else if(rightScore>downScore)
  {
    gmGlobal.move(1);
    //console.log("Move right");
  }
  else
  {
    //console.log("move random");
    gmGlobal.move(Math.floor(Math.random()*4));
  }
};

//impoved ai V2;
auto.prototype.internalRun3 = function()
{
  if(gmGlobal.isGameTerminated())
  {
    if(gmGlobal.won)
    {
      console.log("Continuing Game past 2048");
      gmGlobal.keepPlaying();
    }
    else
    {
      if(gmGlobal.score>=2048)
      {
        console.log("restart "+gmGlobal.score);
      }
      gmGlobal.restart();
    }
  }
  var s = new Score(gmGlobal.grid);
  var r = s.result();
  //console.log(r);
  var downScore = r.downScore;
  var rightScore = r.rightScore;

  //console.log("d:"+downScore+" r:"+rightScore);

  if(downScore>=rightScore&&downScore!==0)
  {
    gmGlobal.move(2);
    //console.log("Move down");
  }
  else if(rightScore>downScore)
  {
    gmGlobal.move(1);
    //console.log("Move right");
  }
  else
  {
    //console.log("move random");
    gmGlobal.move(Math.floor(Math.random()*4));
  }
};
