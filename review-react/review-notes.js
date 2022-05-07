// State: data that belongs to a component that, when edited, 
// causes the component to be re-rendered

// an operation, function or expression is said to have a side effect 
// if it modifies some state variable value(s) outside its local environment,
// that is to say has an observable effect besides returning a value

// useEffect - when you want to modify something outside the component,
// e.g. webpage title, http request, setTimeOut, setInterval, 
// also allows cleanup of resources
// actions when component loads and is about to be destroyed
// executed when the component loads, everytime renders and is destroyed
// can also prevent it from being executed