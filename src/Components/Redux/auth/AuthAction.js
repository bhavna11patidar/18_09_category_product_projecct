import axios from 'axios';

export const onRegister=(user)=>{
    //console.log(user);
    return (dispatch)=>{
        axios.post("http://localhost:5000/register",user)
        .then(res=>{
           // console.log(res);
           if(res.status==200){
               dispatch(onRegisterSuccess(res.data.msg));
           }else{
            dispatch(onRegisterFailure(res.data.msg)); 
           }
        })
        .catch(err=>{
            dispatch(onRegisterFailure(err.response.data.msg));
        })
    }
}

export const onRegisterSuccess=(msg)=>{
    return {
        type:"ON_REGISTER_SUCCESS",
        payload:msg
    }
}
export const onRegisterFailure=(msg)=>{
    return {
        type:"ON_REGISTER_FAILURE",
        payload:msg
    }
}