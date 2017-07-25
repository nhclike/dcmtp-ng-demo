//创建模块
var app=angular.module('meetingIndex',['ng','ui.router']);

//创建父控制器
app.controller('meetingParent',['$scope',function($scope){
 $scope.test='this is a test';
}]);

app.service('$Sidebar',function ($AutoHeight) {
    this.active=function () {
        $('.subMenu').on('click', 'li', function () {
            $('.mainMenu').find('li').removeClass('chosen');
            $(this).addClass('chosen');
        });
    };
    this.init=function () {
        $AutoHeight.indexHeight();
        $('.subMenu').find('li').first().addClass('chosen');
        $('.mainMenu').on('click', '.titleMenu', function () {
            $(this).next('.subMenu').slideToggle().parent().siblings('.subMenu').slideUp();
        });
    }

});
//创建Header控制器
app.controller('HeaderCtrl',['$scope',function($scope){
    // $GetPath.getpath();
    //定义header显示信息列表
    $scope.userList={time:'上午',userName:'developer',userImg:'developer.png'};
    //定义显示用户名还是退出
    $scope.isshow=true;
    if(sessionStorage['courtName']){
        $scope.isshow=false;
    }
}]);
//创建admin.sidebar控制器
app.controller('adminSidebarCtrl',['$scope','$Sidebar','$state',function($scope,$Sidebar,$state){
    $Sidebar.init();
    $scope.clickToggle=function (desState, params) {
        console.log(' jump func is called ');
        $state.go(desState, params);
        $Sidebar.active();
    };
    //定义左边栏显示内容数据
    $scope.showList = [
        {
            "imgUrl":"commit.png",
            "text":"审委会",
            "content":[
                {"imgUrl":"index_2.png","text":"审委会管理","jumpTip":"admin.commitList"},
                {"imgUrl":"index_2.png","text":"会议列表","jumpTip":"admin.commitMeeting"},
                {"imgUrl":"index_2.png","text":"审委会统计","jumpTip":"admin.commitChart"}
            ]
        },
        {
            "imgUrl":"court.png",
            "text":"法院",
            "content":[
                {"imgUrl":"index_2.png","text":"法院管理","jumpTip":"admin.courtList"},
                {"imgUrl":"index_2.png","text":"部门管理","jumpTip":"admin.courtMeeting"},
                {"imgUrl":"index_2.png","text":"用户管理","jumpTip":"admin.courtList"}
            ]
        }
    ];
}]);