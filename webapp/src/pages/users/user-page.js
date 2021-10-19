import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import GetUser from '../../gql/getUser.gql'
import { UserTable } from '../../components/users/UserTable'
import { useParams } from 'react-router-dom'
import { Query } from '../../components/query/Query'
import { Chart } from '../../components/chart'

function getTransactionsByMonth (data) {
  const months = new Array(12).fill(0)

  data.forEach(trx => {
    const month = new Date(trx.insertedAt).getMonth()

    months[month]++
  })

  return months
}

export function User () {
  const { id } = useParams()
  const [transactionsByMonth, setTransactionsByMonth] = useState([])
  const { loading, error, data = {} } = useQuery(GetUser, {
    variables: {
      id
    }
  })

  useEffect(() => {
    if (data.user) {
      setTransactionsByMonth(getTransactionsByMonth(data.user.transactions))
    }
  }, [data])

  return (
    <Query error={error} loading={loading}>
      <UserTable data={[data.user]} />

      <Chart data={{
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '# of Transactions',
            data: transactionsByMonth,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      }} />
    </Query>
  )
}
