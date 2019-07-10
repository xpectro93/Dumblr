
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

const ExploreReducer = (state = initialState , action) => {
  Object.freeze(state);
  switch (action.type) {

    // case LOAD_ALL:
    //   return {
    //     ...state,
    //     posts:action.posts
    //   }
    default:
      return state
  }
}

export default ExploreReducer
