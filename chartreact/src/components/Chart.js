import React, {Component} from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{

    
    render(){
        const {chartData} = this.props

        return(
            <div className="chart">
               <Bar
                   data={chartData}
                   options={{plugins: {
        title: {
          display: true,
          text: "This is a demo chart",
          position: "bottom",
          padding: {
            top: 30,
          },
          align: "start",
          font: {
            size: 30,
          },
        },
        
        legend: {
            display: false,
            position: "right",
          },

          tooltip:{
            enabled: false
          }
         
      },


      scales: {
        xAxes: {
          grid: {
            display: false,
          },
        },
        yAxes: {
          grid: {
            display: false,
          },
          ticks: {
            color: "green",
          },
          max: 24,
          min: 0,
          ticks: {
            stepSize: 5,
          },
        },
      }}}
               />
            </div>
        )
    }
}

export default Chart