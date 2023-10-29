
import { INCREMENT, DECREMENT, RESET } from "./actionTypes";

// Action creators

export const increment = (value=1) =>{
    return{
        type: INCREMENT,
        value: value
    }
}

export const decrement = (value=1)=>{
    return{
        type:DECREMENT,
        value: value
    }
}

export const reset = () =>{
    return{
        type: RESET
    }
}