import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';
// eslint-disable-next-line react/prop-types
export const Button = ({ children, onButtonClick, disabled = false }) => {
  //const [state, actions] = useCounterContext();
  return (
    <button disabled={disabled} style={{ fontSize: '30px' }} onClick={onButtonClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};
