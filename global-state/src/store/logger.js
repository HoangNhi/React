function logger(reducer) {
  return function(state, action) {
    console.log('Action:', action);
    console.log('Previous State:', state);
    
    const newState = reducer(state, action);
    
    console.log('Next State:', newState);
    
    return newState;
  };
}

export default logger;