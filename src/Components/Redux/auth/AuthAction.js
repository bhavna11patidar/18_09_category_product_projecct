import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from './../../utilities/setAuthToken';

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
export const onLogin=(user, history)=>{
    return (dispatch)=>{
        axios.post("http://localhost:5000/login",user)
        .then((res)=>{
            console.log(res);
            if(res.status==200){
                const {token}=res.data;
                //console.log(token);
                const decoded=jwtDecode(token);
               // console.log(decoded);
               localStorage.setItem("user",decoded);
               setAuthToken(token);
               dispatch(onLoginSuccess(decoded));
               history.push('/dashboard');
            }else{
                dispatch(onLoginFailure(res.data.msg));
            }
        })
        .catch(err=>{
            console.log(err.response.data.msg);
            dispatch(onLoginFailure(err.response.data.msg));
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

export const onLoginSuccess=(user)=>{
    return {
        type:"ON_LOGIN_SUCCESS",
        payload:user,
    }
}

export const onLoginFailure=(msg)=>{
    return {
        type:"ON_LOGIN_FAILURE",
        payload:msg,
    }
}