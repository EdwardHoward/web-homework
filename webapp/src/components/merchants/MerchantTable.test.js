import { render, screen } from '@testing-library/react'
import { transactions } from '../../../mocks/transactions-data';
import { MerchantTable } from './MerchantTable';
import '@testing-library/jest-dom';

describe('Transactions Table', () => {
  it('renders table', () => {
    render(<MerchantTable data={transactions} />);

    expect(screen.findByTestId('transaction-table')).toBeInTheDocument();
  });

  it('should show user "employee 4" with amount "150"', () => {
    render(<MerchantTable data={transactions} />);

    expect(screen.findByText('employee 4')).toBeInTheDocument();
  })
})
