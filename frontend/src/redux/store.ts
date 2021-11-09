import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { robotsReducer } from "./robots/reducer";

const rootReducer = combineReducers({
  robots: robotsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
