import { combineReducers } from "redux";

import loginReducer from "./login";
import userReducer from "./user";

const rootReducer = combineReducers({
  authUser: loginReducer,
  users: userReducer,
});

export default rootReducer;
