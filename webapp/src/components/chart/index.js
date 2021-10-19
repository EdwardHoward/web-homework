import { object } from 'prop-types'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
  indexAxis: 'x',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right'
    }
  }
}

export function Chart ({ data }) {
  return <Bar data={data} options={options} />
}

Chart.propTypes = {
  data: object
}
