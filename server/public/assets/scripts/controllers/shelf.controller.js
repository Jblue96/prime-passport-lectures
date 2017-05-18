myApp.controller('shelfController', ['$http', '$location', function($http, $location) {
  console.log('shelfController loaded');
    var vm = this;

  vm.addShelfItem = function(userName){
       var objectToSend = {
         description: vm.descriptionIn,
         imgUrl: vm.imgUrlIn,
         userName: userName
       };
       console.log("in objectToSend-->", objectToSend);
       $http ({
         method: 'POST',
         url: '/shelf',
         data: objectToSend
       }).then (function(response){
         console.log('back from server:', response);
         
       });
  };//end addShelfItem func





}]);//end shelfController
