//constructor
function GridSim()
{
  this.init=true;
}

//create varius variables, and declare type for consumers.
GridSim.prototype.init = false;
GridSim.prototype.tableInited = false;
GridSim.prototype.grid = null;
GridSim.ptototype.type = "GridSimV1";

//allows for normal insertian from the Game Manager's grid object.
GridSim.prototype.insert = function(from)
{
  var that = this;
  that.grid = [];
  for(var i=0;i<4;i++)
  {
    that.grid[i] =[];
  }
  from.eachCell(function(x,y,cell){
    if(cell!=null)
    {
      that.grid[x][y] = cell.value;
    }
    else
    {
      that.grid[x][y]=0;
    }
  });
  this.tableInited = true;
  console.log(that.grid);
};

//allows for duplication. for internal use only.
GridSim.prototype.insertFromArray = function(from)
{
  that = this;
  that.grid = [];
  for(var x=0;x<4;x++)
  {
    that.grid[x] =[];
    for(var y=0;y<4;y++)
    {
      that.grid[x][y] = from[x][y];
    }
  }
  this.tableInited = true;
};

//returns a duplicate object that
//can be modified without effecting the original.
GridSim.prototype.duplicate = function()
{
  var r = new GridSim();
  r.insertFromArray(this.grid);
  return r;
};


//runs a function on each cell. f(x,y,cell Value);
GridSim.prototype.eachCell = function(callback)
{
  that = this;
  for(var x=0;x<4;x++)
  {
    for(var y=0;y<4;y++)
    {
      callback(x,y,that.grid[x][y]);
    }
  }
};


//returns weather or not a given cell is empty
//will return true if it is empty or false if it is filled.
GridSim.prototype.isEmpty = function(x,y)
{
  if(!this.tableInited)
  {
    throw "Table not inited.";
  }
  return this.grid[x][y]===0;
};
