// import { LOAD_POSTS } from '../actions/ProfileActions';

// const normalizeData = arr => {
//   let obj = {};
//   arr.forEach(item => {
//     obj[item.id] = item;
//   });
//   return obj
// }

const initialState = {
  posts:[]

}


const SearchReducer = (state = initialState , action) => {
  Object.freeze(state);
  switch (action.type) {

    // case LOAD_TAGS:
    //   return {
    //     ...state,
    //     posts:action.posts
    //   }
    default:
      return state
  }
}

export default SearchReducer
