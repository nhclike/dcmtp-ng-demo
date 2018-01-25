function loadBar(title,legendData,datax,online,offline,Chart){
  option = {
    title:{
      show:true,
      text:title+'使用情况',
      left:10,
      textStyle:{
        color:'#237AE5',
        fontWeight:400,

      }
    },
    tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data:legendData,
      right:20
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    color:['#11CFF7','#77F2D2'],
    xAxis : [
      {
        type : 'category',
        data : datax,
        axisLabel:{
          show:true,
          color:'#237AE5',
          fontSize:14
        }
      },
      {
        type : 'category',
        data : datax,
        axisLabel:{
          show:true,
          color:'#237AE5',
          fontSize:14
        }
      }
    ],
    yAxis : [
      {
        type : 'value',
        axisLabel:{
          show:true,
          color:'#237AE5',
          fontSize:14
        }
      }
    ],
    series :[

      {
        name:'在线'+title,
        type:'bar',
        stack: title,
        data:online,
        barCategoryGap:'40%',
        barMaxWidth:50,
        barMinHeight:10,
        label:{
          normal: {
            show: true,
            position: 'insideTop',
            color:'#fff'
          }
        }
      },
      {
        name:'离线'+title,
        type:'bar',
        stack: title,
        data:offline,
        label:{
          normal: {
            show: true,
            position: 'top',
            color:'#E59D04'
          }
        }
      }
    ]
  };
  Chart.setOption(option);

  Chart.on('click', function(param){
    console.log(param)
  });

}