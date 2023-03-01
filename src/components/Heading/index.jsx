import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';
export const Heading = ({ children }) => {
  const [state, actions] = useCounterContext();
  return <h1 style={{ fontSize: '30px' }}>{state.counter}</h1>;
};
Heading.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
};
