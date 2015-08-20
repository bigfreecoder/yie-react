'use strict';
// JS
import Reflux from 'reflux';
import React from 'react/addons';
import ImageStore from '../stores/Stores';
import ImageActions from '../actions/Actions';

import echarts from 'echarts/src/echarts';
import 'echarts/src/chart/bar';

// CSS
import 'normalize.css';
import '../styles/main.css';


let ImageGrid = React.createClass({

  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  renderChart() {
    let chartNode = React.findDOMNode(this.refs.myChart);
    let option = {
      title: {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['蒸发量', '降水量']
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint: {
            data: [
              {type: 'max', name: '最大值'},
              {type: 'min', name: '最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        },
        {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint: {
            data: [
              {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
              {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name: '平均值'}
            ]
          }
        }
      ]
    };
    let chartItem = chartItem || echarts.init(chartNode);
    chartItem.setOption(option);
  },
  componentDidMount() {
    this.renderChart();
  },
  componentDidUpdate: function () {
    this.renderChart();
  },
  render() {
    var imageList = this.state.imagestore || [];
    return (
      <div className="main todos" ref="asdf">
        <div id="echart" ref="myChart"></div>
        <br/>;
        <button onClick={ImageActions.fetchList}>click -> action -> stroe - > componenssssssst</button>
        <ul>
          {imageList.map(function(item) {
            return <li>{item.name}</li>;
          })}
        </ul>
        <div ref="mychart"></div>
      </div>
    );
  }
});

export default ImageGrid;
