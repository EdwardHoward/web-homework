import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import { transactions } from '../../../mocks/transactions-data';
import { TxTableRow } from './TxTableRow';

describe('TxTableRow', () => {
    it('should render', () => {
        render(
            <MemoryRouter>
                <TxTableRow data={transactions[0]} />
            </MemoryRouter>
        );

        expect(screen.getByTestId('tx-table-row')).toBeInTheDocument()
    })
})