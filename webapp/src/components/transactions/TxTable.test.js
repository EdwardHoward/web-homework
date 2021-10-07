import { render, screen } from '@testing-library/react'
import { transactions } from '../../../mocks/transactions-data';
import { TxTable } from './TxTable';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom';

describe('Transactions Table', () => {
  it('renders table', () => {
    render(
      <MemoryRouter>
        <TxTable data={transactions} />
      </MemoryRouter>
    )

    expect(screen.findByTestId('transaction-table')).toBeInTheDocument();
  });

  it('should show user "employee 4" with amount "150"', () => {
    render(
      <MemoryRouter>
        <TxTable data={transactions} />
      </MemoryRouter>
    )

    expect(screen.findByText('employee 4')).toBeInTheDocument();
  })
})
