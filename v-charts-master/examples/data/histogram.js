export default {
  name: '柱状图',
  type: 'histogram',
  data: [
    {
      name: '简单柱状图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {}
    },
    {
      name: '数值轴柱状图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': 10, '余额': 123, '年龄': 3 },
          { '日期': 20, '余额': 1223, '年龄': 6 },
          { '日期': 30, '余额': 2123, '年龄': 9 },
          { '日期': 40, '余额': 4123, '年龄': 12 },
          { '日期': 50, '余额': 3123, '年龄': 15 },
          { '日期': 60, '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        xAxisType: 'value'
      }
    },
    {
      name: '柱状图+折线图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        axisSite: {
          right: ['年龄']
        },
        showLine: ['年龄']
      }
    },
    {
      name: '默认在柱子上显示数据',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      }
    },
    {
      name: '设置指标维度名称',
      data: {
        columns: ['date', 'resume', 'uplevel'],
        rows: [
          { 'date': '1-1', 'resume': 123, 'uplevel': 0.3 },
          { 'date': '1-2', 'resume': 1223, 'uplevel': 0.6 },
          { 'date': '1-3', 'resume': 2123, 'uplevel': 0.9 },
          { 'date': '1-4', 'resume': 4123, 'uplevel': 0.12 },
          { 'date': '1-5', 'resume': 3123, 'uplevel': 0.15 },
          { 'date': '1-6', 'resume': 7123, 'uplevel': 0.2 }
        ]
      },
      settings: {
        labelMap: {
          date: '日期',
          resume: '余额',
          uplevel: '增长率'
        },
        yAxisType: ['KMB', 'percent'],
        axisSite: {
          right: ['uplevel']
        }
      }
    },
    {
      name: '坐标轴值域配置',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 1232, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        min: [1000]
      }
    },
    {
      name: '带有较小百分比数值',
      data: {
        columns: ['日期', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.00001 },
          { '日期': '1-2', '余额': 1223, '比率': 0.00002 },
          { '日期': '1-3', '余额': 2123, '比率': 0.00003 },
          { '日期': '1-4', '余额': 4123, '比率': 0.00007 },
          { '日期': '1-5', '余额': 3123, '比率': 0.00001 },
          { '日期': '1-6', '余额': 7123, '比率': 0.00003 }
        ]
      },
      settings: {
        yAxisType: ['percent'],
        digit: 4
      }
    },
    {
      name: '坐标轴配置',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['余额', '年龄'],
        axisSite: {
          right: ['年龄']
        }
      }
    },
    {
      name: '复杂坐标轴配置',
      data: {
        columns: ['日期', 'a', 'b', 'c'],
        rows: [
          { '日期': '1-1', 'a': 123, 'b': 3, c: 1 },
          { '日期': '1-2', 'a': 1223, 'b': 6, c: 1 },
          { '日期': '1-3', 'a': 2123, 'b': 9, c: 1 },
          { '日期': '1-4', 'a': 4123, 'b': 12, c: 1 },
          { '日期': '1-5', 'a': 3123, 'b': 15, c: 1 },
          { '日期': '1-6', 'a': 7123, 'b': 20, c: 1 }
        ]
      },
      settings: {
        axisSite: {
          left: ['a'],
          right: ['b']
        }
      }
    },
    {
      name: '指标维度配置',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        dimension: ['余额'],
        metrics: ['年龄']
      }
    },
    {
      name: '堆叠柱状图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 9 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        stack: {
          'xxx': ['余额', '年龄']
        }
      }
    }
  ]
}
