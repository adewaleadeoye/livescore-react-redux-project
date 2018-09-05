const apiMiddleware = store => next => action => {
    if (!action.meta || action.meta.type !== 'api') {
      return next(action);
    }
    // This is an api request
  
    // Find the request URL and compose request options from meta
    const {url} = action.meta;
  
    // Make the request
    fetch(url)
      // convert the response to json
      .then(resp => resp.json())
      .then(matches => {
        // respond back to the user
        // by dispatching the original action without
        // the meta object
        console.log(matches)
        let newAction = Object.assign({}, action, {
          payload: matches
        });
        delete newAction.meta;
        store.dispatch(newAction);
      }).catch(e => console.log(`An error occured: ${e}`))
  }
  
  export default apiMiddleware