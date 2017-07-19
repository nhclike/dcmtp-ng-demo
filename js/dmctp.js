//创建模块
var app=angular.module('procuratorate',['ng','ui.router','ngAnimate', 'ui.bootstrap']);

//配置状态
app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
			.state('login', {
				url: '/mylogin',
				views:{
					'main':{
						templateUrl: 'custom/user_login.html'
					}
				}
			})
			.state('courtAttend',{
				url:'/mycourtAttend',
				templateUrl:'custom/court_attend.html'
			})
			.state('admin', {
				url: '/myadmin',
				views:{
					'main':{
						templateUrl:'custom/index.html',
						controller: function($state){
							$state.go('admin.commitList');//默认显示第一个tab
						}
					}
				}
			})
			.state('admin.commitList', {
				url: '^/myadmin.commitList',
				templateUrl: 'custom/committee/list.html'
			})
			.state('admin.commitMeeting', {
				url: '^/myadmin.commitMeeting',
				templateUrl: 'custom/committee/meeting.html'
			})
			.state('admin.courtList', {
				url: '^/myadmin.courtList',
				templateUrl: 'custom/court/list.html'
			})
			.state('admin.courtMeeting', {
				url: '^/myadmin.courtMeeting',
				templateUrl: 'custom/court/meeting.html'
			})
	$urlRouterProvider.otherwise('/mylogin');
});


//创建父控制器
app.controller('parent',['$scope','$state',function($scope,$state){
	//定义跳转方法jump
	$scope.jump = function (desState, params) {
		console.log(' jump func is called ');
		$state.go(desState, params);
	};
}]);
