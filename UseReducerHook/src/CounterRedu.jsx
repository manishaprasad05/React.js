
import { useReducer } from 'react';

function Redfun(state, action) 
{
  switch (action.type) 
  {
    case 'INC':
      return { count: state.count + 1 };

    case 'DEC':
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function CounterRedu() 
{
  const [state, dispatch] = useReducer(Redfun, { count: 0 });

  return (
    <div>
      <p>Value of counter is {state.count}</p>

      <button onClick={() => dispatch({ type: 'INC' })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: 'DEC' })}>
        Decrement
      </button>
    </div>
  );
}

export default CounterRedu;
