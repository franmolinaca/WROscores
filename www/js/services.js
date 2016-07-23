angular.module('starter.services', ["ionic", "firebase"])


//Categorie factory, gives a JSON with all the categories from firebase
.factory('Cats', function($firebaseArray) {

  var allin = new Firebase("https://wroscores-92a9c.firebaseio.com/Categories/");
  var cats = [];

    allin.on("value", function(snapshot) {
      //saves the snapshot of the firebase
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key();
      //console.log("Cats:"+key);
      // childData will be the actual contents of the child
      cats.push(childSnapshot.val());
      //push every child in the cats array with an id, this can be optimized
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
//factory returns the whole array or just one when called with get and an id
  return {
    all: function() {
      return cats;
    },
  //needed to know which category is accesed
    get: function(catId) {
      for (var i = 0; i < cats.length; i++) {
        if (cats[i].id === parseInt(catId)) {
          return cats[i];
        }
      }
      return null;
    }
  };
})

.factory('Tables', function($firebaseArray,$stateParams) {
  // Might use a resource here that returns a JSON array
  function getnew() {
  var tables = [];
  var allin1 = new Firebase("https://wroscores-92a9c.firebaseio.com/Categories/"+$stateParams.catname+"/Mesas/");
    allin1.on("value", function(snapshot) {
    //This is not used, just for reference and debug
    snapshot.forEach(function(childSnapshot) {
      // childData will be the actual contents of the child
      tables.push(childSnapshot.val());
      console.log("Snaps:"+childSnapshot.val().name);
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  return tables; // convert to an object
  }

  return {
    all: function() {
      return getnew();
    }
  };
})


.factory('Teams', function($firebaseArray,$stateParams) {
  // Might use a resource here that returns a JSON array
  function getteams() {
  var teams = [];
  var allteams = new Firebase("https://wroscores-92a9c.firebaseio.com/Teams");
    allteams.on("value", function(snapshot) {

    snapshot.forEach(function(childSnapshot) {
      // Check all teams of the firebase
      console.log("Catx:"+childSnapshot.val().category);
      console.log("CatStatex:"+$stateParams.catname);
      //if child is on the category then add it to the local base
      if(childSnapshot.val().category==$stateParams.catname&&childSnapshot.val().table==$stateParams.tableId){
      teams.push(childSnapshot.val());
      console.log("Teamx:"+childSnapshot.val().name);
      }
    });
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  return teams; // return the teams from the table of the category
  }

  return {
    all: function() {
      return getteams();
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
