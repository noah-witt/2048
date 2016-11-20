//PLAYS GAME Atomaticaly
//var timesOfIt=0;
function auto(gm)
{
  this.init = 0;
  this.GameManagerHolder = gm;
}
auto.prototype.go= function()
{
  //setInterval(this.internalRun,1);
  setInterval(this.internalRun2,1);
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

  var upScore =0;
  var leftScore=0;
  var downScore=0;
  var rightScore=0;
  gmGlobal.grid.eachCell(function(x,y,state){
    if(state != null)
    {
      var val = state.value;
      //console.log(x+","+y+":"+val);

      //down
      if(x<3&&gmGlobal.grid.cells[x+1][y]!=null&&val==gmGlobal.grid.cells[x+1][y].value)
      {
        downScore=downScore+val;
      }

      //up
      if(x>0&&gmGlobal.grid.cells[x-1][y]!=null&&val==gmGlobal.grid.cells[x-1][y].value)
      {
        upScore=upScore+val;
      }

      //right
      if(y<3&&gmGlobal.grid.cells[x][y+1]!=null&&val==gmGlobal.grid.cells[x][y+1].value)
      {
        rightScore=rightScore+val;
      }

      //left
      if(y>0&&gmGlobal.grid.cells[x][y-1]!=null&&val==gmGlobal.grid.cells[x][y-1].value)
      {
        leftScore=leftScore+val;
      }
    }
  });

  //console.log("d:"+downScore+" u:"+upScore+" r:"+rightScore+" l:"+leftScore);
  if(upScore>leftScore&&upScore>downScore&&upScore>rightScore)
  {
    move(0);
  }
  else if(leftScore>upScore&&leftScore>downScore&&leftScore>rightScore)
  {
    move(3);
  }
  else if(downScore>upScore&&downScore>leftScore&&downScore>rightScore)
  {
    move(2);
  }
  else if(rightScore>upScore&&rightScore>leftScore&&rightScore>downScore)
  {
    move(1);
  }
  else
  {
    gmGlobal.move(Math.floor(Math.random()*4));
  }
};
