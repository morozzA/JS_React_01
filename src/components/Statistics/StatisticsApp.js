import Statistics from './Statistics';
import Data from './data.json';

export default function StatisticsApp() {
  return (
    <>
      <Statistics title="Upload stats" stats={Data} />
    </>
  );
}
