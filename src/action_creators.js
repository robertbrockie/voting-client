export function setState(state) {
  return {
    type: 'SET_STATE',
    state: state
  };
}

export function vote(entry) {
  return {
    type: 'VOTE',
    entry: entry
  };
}
