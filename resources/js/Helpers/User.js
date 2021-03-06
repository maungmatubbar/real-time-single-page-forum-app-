import Token from './Token'
import AppStorage from "./AppStorage";
class User {
    login(data){
        axios.post('/api/auth/login',data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => error.response.data)
    }
    responseAfterLogin(res){
        const access_token = res.data.access_token
        const username = res.data.user

        if(Token.isValid(access_token)){
            //console.log(access_token)

            AppStorage.store(username,access_token)
            window.location='/forum'
        }
    }
    hasToken(){
        const storedToken = AppStorage.getToken()
        //console.log(storedToken)
        if(storedToken){
            return Token.isValid(storedToken) ? true:false
        }
        return false
    }
    loggedIn(){
        return this.hasToken()

    }
    logout(){
        AppStorage.clear()
        window.location = '/forum'
    }
    userName(){
       if(this.loggedIn){
           return AppStorage.getUser()
       }
    }
    userId(){
        const payload = Token.payload(AppStorage.getToken())
        return payload.sub
    }
    ownId(user_id){
        return this.userId() == user_id
    }
}



export default User = new User()
