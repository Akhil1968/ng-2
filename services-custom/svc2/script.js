//defining a service using module.service. begin with creating an independent function
angular.module('servicesApp', [])

// Main controller *********
.controller('MainCtrl', [function() {
    var self = this;
    self.tab = 'first';
    self.open = function(tab) {
      self.tab = tab;
    };
}]) //.controller('MainCtrl'

//service: add the function created to module.service
.service('addService', [addService])

//controller
.controller('SubCtrl', ['addService', function(addService) {
    var ctrlSelf = this;
    ctrlSelf.incrementNum = function(){addService.incrNum();};
    ctrlSelf.currentNum = function(){return addService.currNum();};
}])

// Sub controller *********
.controller('SubCtrl_orig', ['ItemService',
  function(ItemService) {
    var self = this;
    self.list = function() {
      return ItemService.list();
    };

    self.add = function() {
      ItemService.add({
        id: self.list().length + 1,
        label: 'Item ' + self.list().length
      });
    };
}]) //.controller('SubCtrl'

.factory('ItemService', [function() {
    var items = [
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ];
    return {
      list: function() {
        return items;
      },
      add: function(item) {
        items.push(item);
      }
    };
}]) //.factory('ItemService'

function addService(){
    var serviceSelf = this;
    var xNum = 0;

    serviceSelf.currNum = function(){
        return xNum;
    }
    serviceSelf.incrNum = function(){
        xNum++; 
    }
}

