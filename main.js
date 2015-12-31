// first you write action creaters
function reduxIncrease(){
  return{ // this object is an action
    'type':'INCREASE',
  }
}
function reduxDecrease(){
  return{
    'type':'DECREASE',
  }
}
// make a state object
var initialState = {'count':0};
// then your write reduces functions
function counterReducer(state = initialState,action){
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({},state,{count:state.count + 1});
    case 'DECREASE':
      return Object.assign({},state,{count:state.count - 1});
    default:
      return state;
  }
}
// then you create a store
var store = Redux.createStore(counterReducer);
// have things listen to the state change, and fire UI changes when it does
function updateUI(){
  var count = store.getState().count;
  $('#num').text(count);
}
store.subscribe(updateUI);
// you change the state by dispatching actions
store.dispatch(reduxIncrease());
// link these actions to your UI Components, and no you've mananged
// the data in your app
$(document).ready(function(){
  $('#plus').click(function(){
    store.dispatch(reduxIncrease());
    showState();
  })
  $('#minus').click(function(){
    store.dispatch(reduxDecrease());
    showState();
  })
})

function showState(){
  console.log(store.getState());
}
