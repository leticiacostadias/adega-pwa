import { useState } from 'react';

export default function useToggler(initialState = false) {
  const [state, setState] = useState(initialState);
  const toggleState = () => setState((s) => !s);

  return [state, toggleState];
}
