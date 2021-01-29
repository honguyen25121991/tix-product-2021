import { combineReducers } from "redux";
import listMovieReducer from "./../../containers/HomeTemplate/ListMoviePage/modules/reducer";
import detailPageReducer from "./../../containers/HomeTemplate/DetailPage/modules/reducer";
import authReducer from "./../../containers/AdminTemplate/AuthPage/modules/reducer";
import addUserReducer from "./../../containers/AdminTemplate/UserPage/modules/reducer";

const rootReducer = combineReducers({
  listMovieReducer,
  detailPageReducer,
  authReducer,
  addUserReducer,
});

export default rootReducer;
