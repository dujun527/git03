define(["jquery","text!tpls/pieList.html","echarts"],function ($,pieList,echarts) {
    return function () {
        var data = [{value:0, name:'男'},
            {value:0, name:'女'}];

        $(".menu-content").html(pieList);

       $.ajax({
           url:"/api/teacher",
           success:function (ret) {
               // console.log(ret);
             ret.result.forEach(function (t) {
                 data[t.tc_gender].value++;
             });

               var dom = document.getElementById("container");
               var myChart = echarts.init(dom);

               var app = {};
               option = null;
               option =  {
                   backgroundColor: '#2c343c',

                   title: {
                       text: '黑马僵尸',
                       left: 'center',
                       top: 20,
                       textStyle: {
                           color: '#3177cc',
                           fontSize:'50'
                       }
                   },
                   tooltip: {
                       trigger: 'item',
                       formatter: "{a} <br/>{b}: {c} ({d}%)"
                   },
                   legend: {
                       orient: 'vertical',
                       x: 'left',
                       data:['女','男']
                   },
                   series: [
                       {
                           name:'教师男女比例',
                           type:'pie',
                           radius: ['40%', '70%'],
                           avoidLabelOverlap: false,
                           label: {
                               normal: {
                                   show: false,
                                   position: 'center'
                               },
                               emphasis: {
                                   show: true,
                                   textStyle: {
                                       fontSize: '70',
                                       fontWeight: 'bold'
                                   }
                               }
                           },
                           labelLine: {
                               normal: {
                                   show: false
                               }
                           },
                           data:data
                       }
                   ]
               };
               if (option && typeof option === "object") {
                   myChart.setOption(option, true);
               }

           }
       });




    };
});