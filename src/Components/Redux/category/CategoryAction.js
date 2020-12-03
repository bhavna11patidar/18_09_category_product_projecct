import axios from 'axios';
export const onAddCategory=(data)=>{
    //console.log(data);
    return (dispatch)=>{
        axios.post("http://localhost:5000/saveCategory", data)
        .then(res=>{
            //console.log(res);
            if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            }else{
                dispatch(onAddFailure(res.data.msg));
            }
        })
        .catch(err=>{
            //console.log(err);
            dispatch(onAddFailure(err.response.msg));
        })
}
}


export const onFetchCategory=()=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewCategory")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data))
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onAddSuccess=(msg)=>{
    return {
        type:"ADD_SUCCESS",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE",
        payload:msg
    }
}

export const onFetchSuccess=(res)=>{
    return {
        type:"ON_FETCH_SUCCESS",
        payload:res
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE",
        payload:msg,
    }
}

export const onFetching=()=>{
    return{
        type:"ON_FETCHING"
    }
}