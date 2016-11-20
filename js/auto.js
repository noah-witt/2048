//PLAYS GAME ATONUMSULY
//var timesOfIt=0;
function auto(gm)
{
  this.init = 0;
  this.GameManagerHolder = gm;
}
auto.prototype.go= function()
{
  setInterval(this.internalRun,1);
}

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
}
