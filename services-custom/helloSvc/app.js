angular.module('helloSvcApp', [])
  .controller('SvcCtrl', ['helloService', 'helloFactory',
      function(hs, hf) {
    var self = this;
    self.hello1 = hs.sayHello("Ram");
    self.hello2 = hf.sayHello("Shyam");
  }])
  
  .service('helloService', [function() {
    this.sayHello = function(name) {
       return "Hi " + name + "!";
    };
  }])

 .factory('helloFactory', [function() {
  return {
    sayHello : function(name) {
      return "Hi " + name + "!";
    }
  }
 }]);
