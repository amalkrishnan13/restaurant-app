import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducer";

//create reducer
const reducers=combineReducers({
    restaurantReducer:restaurantListReducer

})

// create middleware
const middleware=[thunk]

//create store

const store=createStore(reducers,applyMiddleware(...middleware))      //(...)  - spread operator - used to take many middlewares 





export default store
