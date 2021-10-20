const transactions = [
  {
    'amount': 150,
    'credit': false,
    'debit': true,
    'description': 'cleaningsupplies',
    'id': '5d5c1f747e01cd704f18f863',
    'merchant': {
      'id': '0',
      'name': 'Walmart',
      '__typename': 'Merchant'
    },
    'user': {
      'id': '0',
      'firstName': 'employee',
      'lastName': '4',
      '__typename': 'User'
    },
    '__typename': 'Transaction'
  },
  {
    'amount': 250,
    'credit': false,
    'debit': true,
    'description': 'cleaningsupplies',
    'id': '5d5c1f747e01cd704f18f864',
    'merchant': {
      'id': '1',
      'name': 'Bestbuy',
      '__typename': 'Merchant'
    },
    'user': {
      'id': '1',
      'firstName': 'employee',
      'lastName': '5',
      '__typename': 'User'
    },
    '__typename': 'Transaction'
  },
  {
    'amount': 100,
    'credit': true,
    'debit': false,
    'description': 'refund',
    'id': '5d5c1f747e01cd704f18f865',
    'merchant': {
      'id': '0',
      'name': 'Walmart',
      '__typename': 'Merchant'
    },
    'user': {
      'id': '2',
      'firstName': 'employee',
      'lastName': '6',
      '__typename': 'User'
    },
    '__typename': 'Transaction'
  }
]

export { transactions }
