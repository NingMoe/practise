var app=angular.module('myapp',[]);
app.controller('my-ctrl',function($scope){
	$scope.info={
		user:'hnz@sxuek.com',
		pwd:'hnz',
		autoLo:true
	};
	$scope.getInfo=function(){
		console.log($scope.info)
	};
	$scope.setInfo=function(){
		$scope.info={
			user:'allcky@qq.com',
			pwd:'123123',
			autoLo:false
		}
	};
	$scope.reset=function(){
		$scope.info={
			user:'hnz@sxuek.com',
			pwd:'hnz',
			autoLo:true
		}
	}
});