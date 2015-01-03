amblers.Events = function(){
  var data = {};

  var subscribe = function(name, callback){
    if(!data[name]){
      data[name] = [callback];
    }else{
      data[name].push(callback);
    }
  };

  var publish = function(name, options){
    if(data[name]){
      data[name].forEach(function(fn){
        fn(options);
      });
    }
  };

  var subscribe_collection = function(collection){
    for(event_name in collection){
      var subscribers = collection[event_name];
      if(subscribers.forEach){
        subscribers.forEach(function(subscriber){
          subscribe(event_name, subscriber);
        });
      }else{
        subscribe(event_name, subscribers);
      }
    }
  };

  var open = function(){
    return data;
  };

  return {
    subscribe: subscribe,
    subscribe_collection: subscribe_collection,
    publish: publish,
    sub: subscribe,
    pub: publish,
    open: open
  };
};
