import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

class Dashboard extends React.Component {
  render () {
    return (<div><HighchartsReact
    highcharts={Highcharts}
    options={options}
  /></div>)
  }
}
 
export default Dashboard
