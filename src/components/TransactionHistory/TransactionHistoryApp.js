import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';

export default function TransactionHistoryApp() {
  return <TransactionHistory items={transactions} />;
}
