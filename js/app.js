var app = angular.module('isolateApp',[]);

	app.controller('AppCtrl',function($scope,$element){
        
//        $scope.useMove = function(obj)
//        {
//            console.log(obj);
//        }
	});

app.directive("employee",function(){
    return{
        restrict: 'E',
        scope:{
            name: "@",
            image: "@"
        },
        templateUrl: 'partials/shield_isolate.html'
    }
    
});

var myApp = angular.module('myApp',[]);
 myApp.controller('myController',function($scope){
     $scope.logChore = function(chore){
         alert(chore+" is done")
     }
 });
myApp.directive('kid',function(){
  return{
      scope:{
          done:"&"
      },
      restrict:"E",
      template:'<input type="text" ng-model="chore">'
                +'{{chore}}'+
                '<button class="button" ng-click="done({chore:chore})">Im done!</button>'
  }  
});



//Rootscope Example

var newApp = angular.module('newApp',[]);

    newApp.controller('myContainer',['$scope','$rootScope',
                    function($scope,$rootScope){
					   $scope.name='Harsh';
					   $rootScope.department = 'Altimetrik'
				    }
			]);

    newApp.controller('listController',['$scope',function($scope){
					$scope.names=['saurav','Abhishek','Kholi'];
				}
			
			]);