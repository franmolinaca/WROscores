angular.module('starter.controllers', [])


.controller('Cat1Ctrl', function($scope,$stateParams, Cats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.cats = Cats.all();
})

.controller('TableCtrl', function($scope, $stateParams, Tables) {
  console.log("Lalala:"+$stateParams.catname);
  $scope.lastcat = $stateParams.catname; //save the category on stateparam for the next controlles
  $scope.tables = Tables.all();

})


.controller('EnterCtrl', function($scope, $stateParams, Teams) {
  lastcat = $scope.lastcat;//save the last category, copied to stateParams
  //$scope.lasttabid = $stateParams.tableId;
  $scope.teams = Teams.all();//call all teams from the category and table


  var ref = new Firebase("https://wroscores-92a9c.firebaseio.com/Teams");
  $scope.total=0;
  $scope.redsout=0;
  $scope.round=0;
  $scope.blues=0;


  $scope.update1 = function() {
    console.log("selectedteam:"+$scope.selecteam);
    console.log("reds:"+$scope.redsout);
    $scope.total=$scope.redsout*5;

  }
  $scope.savescore = function() {
    switch($scope.round) {//me dio pereza cargar otro factory entonces puse un switch
    case 1:
        break;
    case 2:
        break;
    case 3:

        break;
    default:
        break;
    }
    ref.child($scope.selecteam).update({
    best: $scope.redsout/*,
    bluesR1: $scope.blues,
    bluesR1: $scope.blues,
    redsinR1: $scope.redsin,
    areaR1: $scope.area,
    compR1: $scope.comp,
    barrR1: $scope.barr*/
  });
  };
})

.controller('Cat2Ctrl', function($scope, $stateParams, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ResultsCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
