describe("AmblerController", function() {

  it("is defined", function(){
    expect(window.amblers.AmblerController).toBeDefined();
  });

  describe("as an instance", function(){
    beforeAll(function(){
      this.events = new amblers.Events();
      this.controller = new amblers.AmblerController(this.events);
    });

    it("subscribes to the get_all event", function(){
      var get_all = this.events.open()['get_all'];
      expect(get_all).toBeDefined();
    });

    it("subscribes to the tick event", function(){
      var tick = this.events.open()['tick'];
      expect(tick).toBeDefined();
    });
  });
});
