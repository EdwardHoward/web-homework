import { render, screen } from '@testing-library/react'
import { transactions } from '../../../mocks/transactions-data';
import { UserTable } from './UserTable';
import '@testing-library/jest-dom';

describe('Transactions Table', () => {
  it('renders table', () => {
    render(<UserTable data={transactions} />);

    expect(screen.findByTestId('transaction-table')).toBeInTheDocument();
  });

  it('should show user "employee 4" with amount "150"', () => {
    render(<UserTable data={transactions} />);

    expect(screen.findByText('employee 4')).toBeInTheDocument();
  })
})
