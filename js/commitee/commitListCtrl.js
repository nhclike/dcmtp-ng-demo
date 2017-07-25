//创建审委会列表控制器
app.controller('commitListCtrl',['$scope','$http','$stateParams','$httpParamSerializerJQLike',function($scope,$http,$stateParams,$httpParamSerializerJQLike){
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