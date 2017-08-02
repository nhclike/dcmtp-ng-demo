$(function () {
    initDiscussTypeByDiscussEchart();
});
//讨论类型图表
function initDiscussTypeByDiscussEchart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('discussType'));

    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y:'center',
            data:['案件讨论','司法政策','规范性文件','其他']
        },
        grid:{
          x:"80%",
          y:"50%"
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
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
                    {value:335, name:'案件讨论'},
                    {value:310, name:'司法政策'},
                    {value:234, name:'规范性文件'},
                    {value:135, name:'其他'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

function initTypeByDiscussEchart() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('discussType'));

    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            y:'center',
            data:['案件讨论','司法政策','规范性文件','其他']
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
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
                    {value:335, name:'案件讨论'},
                    {value:310, name:'司法政策'},
                    {value:234, name:'规范性文件'},
                    {value:135, name:'其他'}
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//********************************地图************************************
var fourthChart = echarts.init(document.getElementById('zjmaps'));
option = {
};
fourthChart.setOption(option);
showProvince();
var provinces = ['zhejiang'];
var provincesText = [''];

function showProvince() {
    var name = 'zhejiang';

    $.get('../data/' + name + '.json', function (geoJson) {


        echarts.registerMap(name, geoJson);

        fourthChart.setOption(
            option = {

                title: {
                    text: provincesText[currentIdx],
                    left: 'center',
                    textStyle: {
                        color: '#fff',


                    }
                },
                tooltip: {
                    show: true,
                    trigger: 'item',
                    formatter: "{b}: {设备数：3} )"//"{b}: {案件数：888} ({666%})"
                },
                series: [
                    {
                        type: 'map',
                        mapType: name,
                        label: {

                            emphasis: {
                                textStyle: {
                                    left:'center',
                                    color: '#1164be',
                                    fontSize:20

                                }
                            }
                        },
                        markPoint: {
                            symbol: 'pin',
                            symbolSize:100,
                            label:{
                                normal:{
                                    show:true,
                                    formatter:function(d){return d.name}
                                }
                            },
                            data: [
                                {name: '海岩高院',coord:[120.550865,30.462653],itemStyle:{
                                    normal: {
                                        color:'#237ae5'
                                    }
                                }}
                            ]
                        },
                        itemStyle: {
                            normal: {
                                shadowOffsetY:4,
                                borderType:'solid',
                                shadowColor:'#348ac5',
                                shadowBlur:-100,
                                borderColor: '#d5eafb',
                                areaColor: '#b4daf8',
                                opacity:'1',
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
                                shadowOffsetY:0,
                                areaColor: '#89c5f5',
                                borderWidth: 2,
                                borderColor: '#b4daf8'

                            }

                        },
                        animation: false
                        // animationDurationUpdate: 1000,
                        // animationEasingUpdate: 'quinticInOut'
                    }
                ]
            });
    });
}

var currentIdx = 0;
