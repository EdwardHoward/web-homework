const transactions = [
  {
    'id': '5d5c1f747e01cd704f18f863',
    'user_id': 'employee4',
    'user': {
      'firstName': 'employee',
      'lastName': '4'
    },
    'description': 'cleaningsupplies',
    'merchant_id': 'walmart',
    'merchant': {
      'name': 'walmart'
    },
    'debit': true,
    'credit': false,
    'amount': 150,
    '__typename': 'Transaction'
  },
  {
    'id': '5d5c1f747e01cd704f18f864',
    'user_id': 'employee3',
    'user': {
      'firstName': 'employee',
      'lastName': '3'
    },
    'description': 'refund',
    'merchant_id': 'walmart',
    'merchant': {
      'name': 'walmart'
    },
    'debit': false,
    'credit': true,
    'amount': 250,
    '__typename': 'Transaction'
  },
  {
    'id': '5d5c1f747e01cd704f18f865',
    'user_id': 'employee5',
    'user': {
      'firstName': 'employee',
      'lastName': '5'
    },
    'description': 'refund',
    'merchant_id': 'walmart',
    'merchant': {
      'name': 'walmart'
    },
    'debit': false,
    'credit': true,
    'amount': 100,
    '__typename': 'Transaction'
  }
]

export { transactions }
