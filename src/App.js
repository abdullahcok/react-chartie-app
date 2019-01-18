import React, { Component } from 'react';
import './App.css';
import Chart from './Components/Chart';

class App extends Component {
    constructor(){
      super();
      this.state = {
          chartData:{}
      }
  }

  componentWillMount(){
      this.getChartData();
  }

  getChartData(){
      this.setState({
          chartData:{
                      labels: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya'],
                      datasets:[
                        {
                          label:'Population',
                          data:[
                                    15029231,
                                    5445026,
                                    4279677,
                                    2936803,
                                    2364396,
                                    2216475,
                                    2180149
                          ],
                          backgroundColor:[
                                    'rgba(255, 19, 12, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(15, 92, 92, 0.6)',
                                    'rgba(153, 102, 255, 0.6)',
                                    'rgba(255, 159, 64, 0.6)',
                                    'rgba(12, 39, 12, 0.6)'
                          ]
                    }
              ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
                <h2 className="h2">Largest Cities by Population in Turkey</h2>
        </div>
        <Chart chartData={this.state.chartData} location="Turkey" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;
