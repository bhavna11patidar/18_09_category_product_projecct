const initialState={
    category:{},
    error_msg:null,
    success_msg:null,
}
const categoryReducer=(state=initialState, action)=>{
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
        default:
            return {...state}
    }
}

export default categoryReducer;