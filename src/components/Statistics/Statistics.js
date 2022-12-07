import PropTypes from 'prop-types';
import getRandomHexColor from './GetRandomHexColor';
import {
  Stats,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Stats>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(item => (
          <Item key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{item.label}</Label>
            <Percentage>{item.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Stats>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
