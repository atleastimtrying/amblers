amblers.App = function(){
  this.events = new amblers.Events();
  this.input = new amblers.Input(this.events);
  this.controller = new amblers.AmblerController(this.events);
};
