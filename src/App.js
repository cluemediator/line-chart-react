import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';

function App() {
  const refContainer = useRef(null);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const chart = Highcharts.chart(refContainer.current, {
      chart: {
        type: 'line'
      }, // type of the chart
      title: {
        text: 'Line Chart Title'
      }, // title of the chart
      subtitle: {
        text: 'Lorem Ipsum is simply dummy text'
      }, // subtitle of the chart
      yAxis: {
        title: {
          text: 'Y Axis Title'
        }, // the title of the Y Axis
      },
      xAxis: {
        min: 0.4,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        title: {
          text: 'X Axis Title'
        } // the title of the X Axis
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px;font-weight:bold;">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      }, // tooltip appears when hovering over a point
      credits: {
        enabled: false
      },
      series: dataSource // set of the data
    });

    if (dataSource.length > 0) {
      chart.hideLoading();
    }
    else {
      chart.showLoading();
    }
  }, [dataSource]);

  useEffect(() => {
    setTimeout(() => {
      setDataSource([{
        name: 'Japan',
        data: [10, 14, 18, 61, 65, 72, 74, 79, 87, 89, 92, 93]
      }, {
        name: 'Germany',
        data: [3, 9, 13, 20, 25, 38, 40, 53, 55, 69, 70, 78]
      }, {
        name: 'London',
        data: [9, 15, 31, 50, 56, 60, 64, 67, 79, 82, 95, 97]
      }, {
        name: 'Canada',
        data: [4, 12, 22, 36, 42, 46, 58, 63, 71, 82, 84, 86]
      }]);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h3>Line chart in React - <a href="http://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
      <div ref={refContainer} />
    </div>
  );
}

export default App;