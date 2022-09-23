import boardSlice from "../features/boardSlice";

function testThunk(data) {
  return function next123(dispatch, getState) {
    console.log(data);
    console.log("getstate" , getState());
    dispatch( boardSlice.actions.addNewColumn({columnTitle: "new column"}) )
  };
}


export default testThunk;
