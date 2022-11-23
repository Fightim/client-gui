import { LOGIN_USER } from "./types.js";

export default function(state={},action){
    switch(action.type){
        case LOGIN_USER:
            return{...state,loginSuccess:action.payload}
            

        default:
            return state;
    }
}