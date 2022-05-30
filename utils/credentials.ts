import { LoginResponse } from "../interfaces";

export const credentials = {
    check: (data:LoginResponse)=>{
        if(!data.token) return false

        return credentials._store(data)
    },

    _store: (data:LoginResponse) =>{
        try {
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', JSON.stringify(data.user))
            return true
        } catch (error) {
            console.log(error);
        }
    },

    _clear: () =>{
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        
    },

    getToken: () =>{
        return window.localStorage.getItem('token')
    },

    getUser: () =>{
        return JSON.parse(window.localStorage.getItem('user')!);
    },

}
