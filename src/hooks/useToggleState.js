import { useState, useCallback } from "react";

/**
 * Custom hook to toggle a boolean state.
 *
 * @param {boolean} initialState - The initial state value.
 * @returns {Array} An array containing the current state and a function to toggle the state.
 */
export function useToggleState(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggleState = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggleState];
}
