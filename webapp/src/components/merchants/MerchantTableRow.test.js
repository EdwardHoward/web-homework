import { render, screen } from '@testing-library/react'
import { transactions } from '../../../mocks/transactions-data';
import { TxTableRow } from './TxTableRow';

describe('TxTableRow', () => {
    it('should render', () => {
        render(<TxTableRow data={transactions[0]} />)

        expect(screen.getByTestId('tx-table-row')).toBeInTheDocument()
    })
})