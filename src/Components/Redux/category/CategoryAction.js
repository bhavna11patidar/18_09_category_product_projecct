import axios from 'axios';
export const onAddCategory=(data)=>{
    console.log(data);
    return (dispatch)=>{
        axios.post("http://localhost:5000/saveCategory", data)
        .then(res=>{
            //console.log(res);
            if(res.status==200){
            dispatch(onAddSuccess(res.data.msg));
            }else{
                dispatch(onAddFailure(res.msg));
            }
        })
        .catch(err=>{
            //console.log(err);
            dispatch(onAddFailure(err.response.msg));
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