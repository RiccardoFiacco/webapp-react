/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

export function WithValidation(Component){
    return (props)=>{
     const {data} = props
     const { email, password } = data
     const emailRegexp  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     const passwordRegexp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
     
     function validateFunction(){
      if(emailRegexp.test(email)){
        if(passwordRegexp.test(password)){
            return {valid: true , msg: 'tutto ok'}
        }else{
            return {valid: false , msg: 'password non valida'}
        }
      }else{
        return {valid: false , msg: 'email non valida'}
      }
     }
     return <Component validation={validateFunction} {...props}/>
    }
}

