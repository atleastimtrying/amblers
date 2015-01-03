window.amblers.AmblerController = function(events){
  var amblers = [];

  var add = function(){
    amblers.push(new amblers.Ambler());
  };

  var find = function(id){
    amblers.filter(function(ambler){
      return ambler.id === id;
    });
  };

  var get_all = function(callback){
    callback(amblers);
  };

  var tick = function(){
    console.log('tick');
  };

  events.subscribe_collection({
    'tick':tick,
    'get_all': get_all
  });
};
