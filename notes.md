#Redux II 

## Middleware

Component -> Action Creators -> Action -> Reducers -> state -> Component

Component -> Action Creators -> Action -> Middleware -> Reducers -> State -> Component

It sees all actions.

Executes sequentially

Can stop actions, forward them untouched, dispatch different actions, even dispatch multiple actions.

Can have more than one

It's added to the store as the second argument passed to the createStore



##Thunk

provides direct access to dispatch 

Teaches action creators new tricks, they cna return a function.





Store 
    state tree
    -getState()
    - subscribe () 
    - dispatch //update state 

connect (callback, {})
