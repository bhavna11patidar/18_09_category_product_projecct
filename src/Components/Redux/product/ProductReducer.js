const initialState={
    products:{},
    error_msg:null,
    success_msg:null,
    data_state:"NOT_INITIALIZED"
}
const productReducer=(state=initialState, action)=>{
    switch(action.type){
        case "ADD_SUCCESS":
            return{
                ...state,
                success_msg:action.payload,
            }
        case "ADD_FAILURE":
            return{
                ...state,
                error_msg:action.payload,
            }
        case "ON_FETCH_SUCCESS":
            return {
                ...state,
                products:action.payload,
                data_state:'FETCHED_SUCCESS',
            }
        case "ON_FETCH_FAILURE":
            return {
                ...state,
                error_msg:action.payload,
                data_state:'FETCHED_FAILURE',
            }
        case "ON_FETCHING":
            return {
                ...state,
                data_state:"FETCHING",
            }
        case "UPDATE_SUCCESS":
            return {
                ...state,
                success_msg:action.payload
            }
        case "UPDATE_FAILURE":
            return {
                ...state,
                error_msg:action.payload,
            }
        default:
            return {...state}
    }
}

export default productReducer;