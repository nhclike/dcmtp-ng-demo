$(function () {
    initDiscussTypeByDiscussEchart();
    initTypeByMeetingEchart();
    initdiscussStatusEchart();
    initcommitStatusEchart();
  initDynamicsTimeEchart();
});
//饼图
function initDiscussTypeByDiscussEchart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('discussType'));

    // 指定图表的配置项和数据
    option = {
        title : {
            text: '委员意见',
            x:'left',
            textStyle:{
                color:'#3064C9',
                fontSize:'30',
                fontWeight:'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c}"+"次"
        },
        legend: {
            orient: 'vertical', // 'vertical'
            x : 'left',
            y : 'bottom',
            itemHeight:10,
            itemWidth:10,
            data:[
                {
                    name:'同意',
                    textStyle:{
                        fontSize:20,
                        color:'#FB497C'
                    }
                },{
                    name:'反对',
                    textStyle:{
                        fontSize:20,
                        color:'#FFC760'
                    }
                },{
                    name:'弃权',
                    textStyle:{
                        fontSize:20,
                        color:'#6EE520'
                    }
                }
            ]
        },
        series: [
            {
                type:'pie',
                radius: ['20%', '40%'],
                center : ['25%', 200],
                color: ['#FB497C', '#FFC760', '#6EE520'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:5, name:'同意'},
                    {value:10, name:'反对'},
                    {value:15, name:'弃权'}
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
// 南丁格尔玫瑰图
function initTypeByMeetingEchart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('meetingType'));

    // 指定图表的配置项和数据
    option = {
        title : {
            text: '年度',
            x:'left',
            textStyle:{
                color:'#3064C9',
                fontSize:'30',
                fontWeight:'normal'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{c}"+"次"
        },
        legend: {
            orient: 'vertical', // 'vertical'
            x : 'left',
            y : 'bottom',
            itemHeight:10,
            itemWidth:10,
            data:[
                {
                    name:'会议次数',
                    textStyle:{
                        fontSize:20,
                        color:'#FB497C'
                    }
                },{
                    name:'出席次数',
                    textStyle:{
                        fontSize:20,
                        color:'#FFC760'
                    }
                },{
                    name:'缺席次数',
                    textStyle:{
                        fontSize:20,
                        color:'#6EE520'
                    }
                }
            ]
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'半径模式',
                type:'pie',
                radius : [25, 80],
                center : ['25%', 200],
                roseType : 'radius',
                width: '40%',       // for funnel
                max: 40,            // for funnel
                legendHoverLink:true,
                color: ['#FB497C', '#FFC760', '#6EE520'],
                itemStyle : {
                    normal : {
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    },
                    emphasis : {
                        label : {
                            show : true
                        },
                        labelLine : {
                            show : true
                        }
                    }
                },
                data:[
                    {value:5, name:'会议次数'},
                    {value:10, name:'出席次数'},
                    {value:15, name:'缺席次数'}
                ]
            },
            {
                name:'面积模式',
                type:'pie',
                radius : [30, 90],
                center : ['75%', 200],
                roseType : 'area',
                x: '50%',               // for funnel
                max: 40,                // for funnel
                sort : 'ascending',     // for funnel
                data:[
                    {value:5, name:'会议次数'},
                    {value:10, name:'出席次数'},
                    {value:15, name:'缺席次数'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}
// 雷达面积图
function initdiscussStatusEchart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('discussStatus'));

    // 指定图表的配置项和数据
    option = {
        title : {
            text: '承办人评分',
            textStyle:{
                color:'#3064C9',
                fontSize:'30',
                fontWeight:'normal'
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        polar : [
            {
                center:['20%','50%'],
                radius:'25%',
                splitNumber: 1,
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#416FC9',
                        width: 2,
                        type: 'solid'
                    }
                },
                name : {
                    formatter:'{value}',
                    textStyle: {
                        color:'#000',
                        fontSize:'18'
                    }
                },
                splitArea : {
                    show : true,
                    areaStyle : {
                        color: ['#1B54C3']
                    }
                },
                indicator : [
                    { text: '逻辑严谨性', max:5},
                    { text: '', max:5},
                    { text: '报告清晰', max:5},
                    { text: '法条适用性', max:5},
                    { text: '', max: 5}
                ]
            },
            {
                center:['50%','50%'],
                radius:'25%',
                splitNumber: 1,
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#416FC9',
                        width: 2,
                        type: 'solid'
                    }
                },
                name : {
                    formatter:'{value}',
                    textStyle: {
                        color:'#000',
                        fontSize:'18'
                    }
                },
                splitArea : {
                    show : true,
                    areaStyle : {
                        color: ['#1B54C3']
                    }
                },
                indicator : [
                    { text: '逻辑严谨性', max:5},
                    { text: '', max:5},
                    { text: '报告清晰', max:5},
                    { text: '法条适用性', max:5},
                    { text: '', max: 5}
                ]
            },
            {
                center:['85%','50%'],
                radius:'25%',
                splitNumber: 1,
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#416FC9',
                        width: 2,
                        type: 'solid'
                    }
                },
                name : {
                    formatter:'{value}',
                    textStyle: {
                        color:'#000',
                        fontSize:'18'
                    }
                },
                splitArea : {
                    show : true,
                    areaStyle : {
                        color: ['#1B54C3']
                    }
                },
                indicator : [
                    { text: '逻辑严谨性', max:5},
                    { text: '', max:5},
                    { text: '报告清晰', max:5},
                    { text: '法条适用性', max:5},
                    { text: '', max: 5}
                ]
            }

        ],
        calculable : true,
        series : [
            {
                type: 'radar',
                itemStyle: {
                    normal: {
                        color:'rgba(103,155,212,.3)',
                        areaStyle: {type: 'default'}
                        }
                    },
                data : [
                    {
                        value : [4, 3, 4.5, 3.4,4.9],
                        name : '评分'
                    }
                ]
            },
            {
                type: 'radar',
                polarIndex : 1,
                itemStyle: {
                    normal: {
                        color:'rgba(103,155,212,.3)',
                        areaStyle: {type: 'default'}
                        }
                    },
                data : [
                    {
                        value : [3, 4, 4.5, 4.4,4.9],
                        name : '评分'
                    }
                ]
            },
            {
                type: 'radar',
                polarIndex : 2,
                itemStyle: {
                    normal: {
                        color:'rgba(103,155,212,.3)',
                        areaStyle: {type: 'default'}
                    }
                },
                data : [
                    {
                        value : [4.7, 4, 4.5, 4.4,4.9],
                        name : '评分'
                    }
                ],
                markPoint:{
                    symbol: 'circle',
                    symbolSize:30,
                    itemStyle:{
                      normal:{
                         color:'rgba(103,155,212,0)',
                          label:{
                             textStyle:{
                                 fontSize:'25'
                             }
                          }
                      }
                    },
                    data : [
                        {name : '得分', value :4.6, x:'20%', y:'50%'},
                        {name : '得分', value :4.8, x:'50%', y:'50%'},
                        {name : '得分', value :4.9, x:'85%', y:'50%'},
                    ]
                }
            }
        ],

    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
//折线图
function initcommitStatusEchart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('commitAdvise'));

    // 指定图表的配置项和数据
    option = {
        title : {
            text: '笔录意见数'
        },
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['3.5','3.6','3.7','3.8','3.9','3.10','3.11']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'成交',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[10, 12, 21, 54, 260, 830, 710]
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}
//加上时间轴的动态数据展示
function initDynamicsTimeEchart() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('dynamicData'));
  function randomData() {
    now = new Date(+now + oneDay);
    value = Math.random() * 100;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    }
  }

  var data = [];
  var now = +new Date(2017,1,1);
  var oneDay = 24 * 3600 * 1000;
  var value = Math.random() * 1000;
  for (var i = 0; i <12; i++) {
    data.push(randomData());
  }

  option = {
    title: {
      text: '结案率  /月',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        params = params[0];
        var date = new Date(params.name);
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
      },
      axisPointer: {
        animation: false
      }
    },
    toolbox: {
      show : true,
      feature : {
        mark : {show: true},
        dataView : {show: true, readOnly: false},
        magicType : {show: true, type: ['line', 'bar']},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    xAxis: {
      type: 'time',
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: '结案率',
      min: 0,
      max: 100,
      interval: 20,
      axisLabel: {
        formatter: '{value} %'
      },
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      }
    },
    series: [{
      name: '模拟数据',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data
    }]
  };

  setInterval(function () {

    for (var i = 0; i < 5; i++) {
      data.shift();
      data.push(randomData());
    }

    myChart.setOption({
      series: [{
        data: data
      }]
    });
  }, 20000);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
//********************************地图************************************
var myChart = echarts.init(document.getElementById('zjmaps'));
var name = 'hubei';
    $.get('../data/' + name + '.json', function (geoJson) {
        echarts.registerMap(name, geoJson);
        var option = {
            //标题样式
            title: {
                text: 'map',
                x: 'center',
                textStyle: {
                    color:'#3064C9',
                    fontSize:'30',
                    fontWeight:'normal'
                }
            },
            // 提示框样式
            tooltip: {
                show: true,
                trigger: 'item',
                backgroundColor : '#1164be',
                borderColor : '#fff',
                borderRadius : 8,
                borderWidth: 2,
                padding: 10,
                textStyle : {
                    color: '#fff',
                    decoration: 'none',
                    fontSize: 15,
                    fontWeight: 'bold'
                },
                 formatter: "（{b}: {设备数：3} )"//"{b}: {案件数：888} ({666%})"
            },
            //工具箱
            toolbox: {
                show : true,
                orient: 'vertical',      // 布局方式，默认为水平布局，可选为：
                                           // 'horizontal' ¦ 'vertical'
                x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
                                           // 'center' ¦ 'left' ¦ 'right'
                                           // ¦ {number}（x坐标，单位px）
                y: 'center',                  // 垂直安放位置，默认为全图顶端，可选为：
                                           // 'top' ¦ 'bottom' ¦ 'center'
                                           // ¦ {number}（y坐标，单位px）
                color : ['#1e90ff','#22bb22','#4b0082','#d2691e'],
                backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
                borderColor: '#ccc',       // 工具箱边框颜色
                borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
                padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
                showTitle: true,
                feature : {
                    saveAsImage : {
                        show : true,
                        title : '保存为图片',
                       //icon:'image://../asset/ico/favicon.png',
                        type : 'jpeg',
                        lang : ['点击本地保存']
                    }

                }
            },
            series: [
                {
                    name:'hubei',
                    type: 'map',
                    mapType: name,
                    selectedMode: 'multiple',
                    //地图的放大缩小
                    roam:true,
                    scaleLimit:{
                      max:2,
                      min:.9
                    },

                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth:1,
                            areaColor: '#b4daf8',
                            label:{
                                show:true,
                                textStyle: {
                                    left:'center',
                                    color: '#1164be',
                                    fontSize:20
                                }
                            }
                        },
                        emphasis: {
                            areaColor: '#89c5f5',
                            label:{
                                show:true,
                                textStyle: {
                                    left:'center',
                                    color: '#fff',
                                    fontSize:20
                                }
                            }
                        }

                    },
                    markPoint: {
                        symbol: 'pin',
                        symbolSize: 50,
                        effect: {
                            show: true,
                            type: 'bounce',
                            loop: true,
                            period: 5,
                            //scaleSize : 2,
                            bounceDistance: 10,
                            color: null,
                            shadowColor: null,
                            shadowBlur: 0
                        },
                        label: {
                            normal: {
                                show: true,
                                formatter: function (d) {
                                    return d.name
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#1164be'
                            }
                        },
                        data: [
                            {name: '法院', coord:[114.2363,30.1572]}
                        ]
                    }
                }

            ]
        };
      myChart.setOption(option);

    });

myChart.on('click', function (params) {
    console.log('params'+params);
    console.log(params);
  var city = params.name;
  alert(city);
});

