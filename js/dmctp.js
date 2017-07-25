//创建模块
var app=angular.module('mainIndex',['ng','ui.router','ui.bootstrap']);

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
        	.state('admin.commitChart', {
           	 	url: '^/myadmin.commitChart',
            	templateUrl: 'custom/committee/chart.html'
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
app.controller('mainParent',['$scope','$state',function($scope,$state){
	//定义跳转方法jump
	$scope.jump = function (desState, params) {
		console.log(' jump func is called ');
		$state.go(desState, params);
	};
    // $leadInto.getPath();
    // $leadInto.leadScript('/dcmtp_ng_demo/js/index_ctrl.js');
}]);
//自定义服务判断ie
app.service('$IsIe',function () {
    this.isIe=function () {
        if (!!window.ActiveXObject || "ActiveXObject" in window) {
            return true;
        } else {
            return false;
        }
    }
});
//自定义服务动态获取高度
app.service('$AutoHeight',function () {
    this.indexHeight=function () {
        //设置高度
        var container_height = $(window).height() - 90 + 'px';
        $('#section .container').height(container_height);
        $('#section .container .Menu').height(container_height);
        $('#context_show').height(container_height);
    };
    this.loginHeight=function () {
        var window_height=$(window).height();
        $('#login_content').height(window_height);
    }
});
//自定义文件引入服务
// app.service('$leadInto',function () {
//     this.getPath= function(){
// 		var pathName = document.location.pathname;
// 		var index = pathName.substr(1).indexOf("/");
// 		var path = pathName.substr(0,index+1);
// 		console.log(path);
// 		return path;
// 	};
//     this.leadScript=function (path) {
//         var context = this.getPath();
//         console.log(context);
//         document.write('<script type="text/javascript" src="'+context+path+'"></script>');
//     };
//     this.leadStyleSheet=function (path) {
//         var context = this.getPath();
//         document.write('<link rel="stylesheet" type="text/css" href="'+context+path+'">');
//     }
//
// });