import React, {FC} from 'react'
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux'
import { increment, decrement } from './counterSlice'

interface CounterProps extends ConnectedProps<typeof connector> {}

const Counter: FC<CounterProps> = ({
    count,
    increment,
    decrement,
}) => {
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => increment()}>+1</button>
        <button onClick={() => decrement()}>-1</button>
      </div>
    </div>
  );
};

const mapState = (state) =>( {
     count : state.counter.count,
})

const mapDispatch = {
  increment,
  decrement,
};

const connector = connect(mapState,mapDispatch)

export default connector(Counter);