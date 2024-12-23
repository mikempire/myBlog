import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;
