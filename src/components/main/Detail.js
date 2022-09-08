import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from "../../reducer/counterReducer"

import { Spinner, ProgressBar } from "react-bootstrap";
import './Detail.css'

const Detail = ({ style }) => {
  const now = 60;
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div style={style}>
      Detail
      <div>progress</div>
      <div>
        <h1>Reducer test</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
      </div>
      <ProgressBar animated now={now} label={`${now}%`} />
      <div className="detail-row">
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
      </div>
    </div>
  )
};

export default Detail;
