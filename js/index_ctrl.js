


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
              {"imgUrl":"index_2.png","text":"审委会统计","jumpTip":"admin.commitList"}
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

app.controller('commitAddModalCtrl',['$scope','$modalInstance','items',function ($scope,$modalInstance,items) {
    $scope.items=items;
    $scope.selected = {
        item : $scope.items[0]
    };
    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}]);

//创建审委会列表控制器
app.controller('commitListCtrl',['$scope','$http','$stateParams','$httpParamSerializerJQLike','$modal',function($scope,$http,$stateParams,$httpParamSerializerJQLike,$modal){
    //向模态框传递值
    $scope.items=[];
    //模态框实例
    $scope.open=function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myModalAdd.html',
            controller: 'commitAddModalCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
        //模态框调用之后
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            alert('this is a test');
            console.log(selectedItem);
        });
    };
    $scope.commitList=[];
    //表格数据
    $http
        .get('data/casedatadate.json')
        .success(function(data){
            $scope.commitList=data;
        });
    //查询列表
    $scope.checkoutList={
        courtName:'',
    };
    //监听用户输入
    $scope.$watch('checkoutList.courtName', function () {
        if ($scope.checkoutList.courtName.length > 0) {
            console.log($scope.checkoutList.courtName);
            // $http.get('data/？' + $scope.$scope.checkoutList.courtName)
            //     .success(function (data) {
            //         if (data.length > 0) {
            //             $scope.commitList=data;
            //         }
            //     })
        }
    });
    //点击查询时，拿到用户的输入
    $scope.submitCheckout=function () {
        //将用户查询输入序列化发送给后台
        var str=$httpParamSerializerJQLike($scope.checkoutList);
        console.log(str);
        
    };
    //分页处理

}]);
