import { object } from 'prop-types'
import React from 'react'
import { Bar } from 'react-chartjs-2'

const options = {
  indexAxis: 'x',
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
