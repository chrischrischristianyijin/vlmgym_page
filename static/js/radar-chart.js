// Radar Chart Comparison using ECharts
(function() {
  function initRadarChart() {
    var chartDom = document.getElementById('radarChart');
    if (!chartDom) return;
    
    var myChart = echarts.init(chartDom);
    
    var option = {
      color: [
        '#003262', // VisGym - Berkeley Blue
        '#9CA3AF', // OSWorld - Gray
        '#10B981', // LIBERO - Green
        '#8B5CF6', // VideoGameBench - Purple
        '#EC4899', // LMGame-Bench - Pink
        '#F59E0B', // VLABench - Orange
        '#EF4444', // VLM-Gym - Red
        '#06B6D4', // KORGym - Cyan
        '#84CC16', // VisualAgentBench - Lime
        '#F97316'  // VAGEN - Orange Red
      ],
      title: {
        text: 'Capability Comparison',
        left: 'center',
        top: 20,
        textStyle: { 
          color: '#1d1d1f', 
          fontSize: 20,
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 700
        }
      },
      tooltip: { 
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderColor: '#003262',
        borderWidth: 1,
        textStyle: {
          color: '#ffffff',
          fontFamily: 'Karla, sans-serif',
          fontSize: 13
        },
        formatter: function(params) {
          var value = params.value;
          var status = value === 100 ? '✓' : (value === 25 ? '✗' : value + '%');
          return '<div style="padding: 4px 0;"><strong>' + params.seriesName + '</strong><br/>' + 
                 params.name + ': ' + status + '</div>';
        }
      },
      legend: {
        bottom: 10,
        data: ['VisGym (Ours)', 'OSWorld', 'LIBERO', 'VideoGameBench', 'LMGame-Bench', 'VLABench', 'VLM-Gym', 'KORGym', 'VisualAgentBench', 'VAGEN'],
        textStyle: {
          fontFamily: 'Karla, sans-serif',
          fontSize: 12,
          color: '#424245'
        },
        itemGap: 15,
        type: 'scroll',
        orient: 'horizontal',
        left: 'center'
      },
      radar: {
        indicator: [
          { name: 'Struct. Obs', max: 100 },
          { name: 'Non-struct. Obs', max: 100 },
          { name: 'POMDP', max: 100 },
          { name: 'Multi-Domain', max: 100 },
          { name: 'Scalable Episodes', max: 100 },
          { name: 'SFT', max: 100 },
          { name: 'Online RL', max: 100 }
        ],
        shape: 'polygon',
        splitNumber: 4,
        radius: '70%',
        center: ['50%', '55%'],
        axisName: {
          color: '#424245',
          fontWeight: 'bold',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 13
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(255, 255, 255, 0)', 'rgba(248, 249, 250, 0.5)', 'rgba(255, 255, 255, 0)', 'rgba(248, 249, 250, 0.5)'],
            shadowColor: 'rgba(0, 0, 0, 0.05)',
            shadowBlur: 10
          }
        },
        splitLine: {
          lineStyle: {
            color: '#e2e8f0',
            width: 1
          }
        },
        axisLine: {
          lineStyle: {
            color: '#d1d5db',
            width: 1
          }
        }
      },
      series: [
        {
          name: 'Framework Comparison',
          type: 'radar',
          data: [
            {
              value: [100, 100, 100, 100, 100, 100, 100],
              name: 'VisGym (Ours)',
              areaStyle: { 
                color: 'rgba(0, 50, 98, 0.5)' // Semi-transparent Berkeley Blue
              },
              lineStyle: { 
                width: 3,
                color: '#003262'
              },
              itemStyle: {
                color: '#003262'
              }
            },
            {
              value: [100, 25, 100, 25, 25, 25, 25],
              name: 'OSWorld',
              areaStyle: { 
                color: 'rgba(156, 163, 175, 0.2)' // Gray
              },
              lineStyle: { 
                type: 'dashed',
                width: 1.5,
                color: '#9CA3AF'
              },
              itemStyle: {
                color: '#9CA3AF'
              }
            },
            {
              value: [25, 100, 100, 25, 100, 25, 25],
              name: 'LIBERO',
              areaStyle: { 
                color: 'rgba(16, 185, 129, 0.2)' // Green
              },
              lineStyle: { 
                type: 'dashed',
                width: 1.5,
                color: '#10B981'
              },
              itemStyle: {
                color: '#10B981'
              }
            },
            {
              value: [100, 100, 100, 25, 25, 25, 25],
              name: 'VideoGameBench',
              areaStyle: { 
                color: 'rgba(139, 92, 246, 0.2)' // Purple
              },
              lineStyle: { 
                type: 'dashed',
                width: 1.5,
                color: '#8B5CF6'
              },
              itemStyle: {
                color: '#8B5CF6'
              }
            },
            {
              value: [100, 100, 100, 25, 25, 25, 25],
              name: 'LMGame-Bench',
              areaStyle: { 
                color: 'rgba(236, 72, 153, 0.2)' // Pink
              },
              lineStyle: { 
                type: 'dashed',
                width: 1.5,
                color: '#EC4899'
              },
              itemStyle: {
                color: '#EC4899'
              }
            },
            {
              value: [25, 100, 100, 25, 100, 100, 100],
              name: 'VLABench',
              areaStyle: { 
                color: 'rgba(245, 158, 11, 0.2)' // Orange
              },
              lineStyle: { 
                type: 'dotted',
                width: 1.5,
                color: '#F59E0B'
              },
              itemStyle: {
                color: '#F59E0B'
              }
            },
            {
              value: [100, 25, 25, 25, 100, 100, 100],
              name: 'VLM-Gym',
              areaStyle: { 
                color: 'rgba(239, 68, 68, 0.2)' // Red
              },
              lineStyle: { 
                type: 'dotted',
                width: 1.5,
                color: '#EF4444'
              },
              itemStyle: {
                color: '#EF4444'
              }
            },
            {
              value: [100, 25, 100, 25, 100, 25, 100],
              name: 'KORGym',
              areaStyle: { 
                color: 'rgba(6, 182, 212, 0.2)' // Cyan
              },
              lineStyle: { 
                type: 'dotted',
                width: 1.5,
                color: '#06B6D4'
              },
              itemStyle: {
                color: '#06B6D4'
              }
            },
            {
              value: [100, 100, 100, 100, 25, 100, 100],
              name: 'VisualAgentBench',
              areaStyle: { 
                color: 'rgba(132, 204, 22, 0.2)' // Lime
              },
              lineStyle: { 
                type: 'dotted',
                width: 1.5,
                color: '#84CC16'
              },
              itemStyle: {
                color: '#84CC16'
              }
            },
            {
              value: [100, 100, 100, 100, 100, 25, 100],
              name: 'VAGEN',
              areaStyle: { 
                color: 'rgba(249, 115, 22, 0.2)' // Orange Red
              },
              lineStyle: { 
                type: 'dotted',
                width: 1.5,
                color: '#F97316'
              },
              itemStyle: {
                color: '#F97316'
              }
            }
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);
    
    // Handle window resize
    window.addEventListener('resize', function() {
      myChart.resize();
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRadarChart);
  } else {
    initRadarChart();
  }
})();

