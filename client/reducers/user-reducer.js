export default function(state = null, action) {
  switch(action.type) {
    case 'USER_INFO': return action.payload
    //never mutate the state inside this function....that's
    //why we use action.payload instead
  }
  return state;
}
