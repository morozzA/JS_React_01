import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  Thead,
  TheadTR,
  TheadTH,
  Tbody,
  TbodyTR,
  TbodyTDType,
  TbodyTDAmount,
  TbodyTDCurrency,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <Thead>
        <TheadTR>
          <TheadTH>Type</TheadTH>
          <TheadTH>Amount</TheadTH>
          <TheadTH>Currency</TheadTH>
        </TheadTR>
      </Thead>

      <Tbody>
        {items.map(transaction => (
          <TbodyTR key={transaction.id}>
            <TbodyTDType>{transaction.type}</TbodyTDType>
            <TbodyTDAmount>{transaction.amount}</TbodyTDAmount>
            <TbodyTDCurrency>{transaction.currency}</TbodyTDCurrency>
          </TbodyTR>
        ))}
      </Tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
