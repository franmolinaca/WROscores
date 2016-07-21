angular.module('starter.services', [])


.factory('Cats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var cats = [{
    id: 0,
    name: 'Elementary',
    face: 'img/reg.png'
  }, {
    id: 1,
    name: 'Junior High',
    face: 'img/reg.png'
  }, {
    id: 2,
    name: 'Senior High',
    face: 'img/reg.png'
  }, {
    id: 3,
    name: 'Gen II Football',
    face: 'img/gen2.png'
  }, {
    id: 4,
    name: 'University',
    face: 'img/univ.png'
  }];

  return {
    all: function() {
      return cats;
    },
    remove: function(cat) {
      cats.splice(cats.indexOf(cat), 1);
    },
    get: function(catId) {
      for (var i = 0; i < chats.length; i++) {
        if (cats[i].id === parseInt(catId)) {
          return cats[i];
        }
      }
      return null;
    }
  };
})

.factory('Tablesa', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var tablesa = [{
    id: 0,
    name: 'Mesa 1',
    face: 'img/reg.png'
  }, {
    id: 1,
    name: 'Mesa 2',
    face: 'img/reg.png'
  }, {
    id: 2,
    name: 'Mesa 3',
    face: 'img/reg.png'
  }];

  return {
    all: function() {
      return tablesa;
    },
    remove: function(tablea) {
      tablea.splice(tablea.indexOf(tablea), 1);
    },
    get: function(tableaId) {
      for (var i = 0; i < tablesa.length; i++) {
        if (tablesa[i].id === parseInt(tableaId)) {
          return tablesa[i];
        }
      }
      return null;
    }
  };
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
