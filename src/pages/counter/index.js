import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countIncrement,
  countDecrement,
  countIncrementNumber,
  countDecrementNumber,
} from "../../redux/slices/counterSlice";
import { Button } from "react-bootstrap";

function Index() {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.count);
  const [value, setValue] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>Count vlaue {count}</h1>
      <Button onClick={() => dispatch(countIncrement())} size='sm'>increment</Button>
      <Button onClick={() => dispatch(countDecrement())} size='sm'>decrement</Button>
      <br />
      <input
        type="number"
        placeholder="enter number"
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={() => dispatch(countIncrementNumber(value))} size='sm'>
        Increase
      </Button>
      <Button onClick={() => dispatch(countDecrementNumber(value))} size='sm'>
        Decrease
      </Button>
    </div>
  );
}

export default Index;
