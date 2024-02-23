import React from 'react'
import { useEffect, useState } from 'react';

const clientId = '967060194344-ddfgvrhsmeeus3o56ocmg5rhsg7m5dg2.apps.googleusercontent.com'
function LoginGoogle() {
    //const [email, setEmail] = useState('')
    //const [googleUser, setGoogleUser] = useState('')

    function handleCallbackResponse(response) {
        //document.getElementById('google').hidden = true
        console.log("Encoded JWT ID token: " + response.credential);
        //var userObject = jwt_decode(response.credential)
        //console.log(userObject);
        //setGoogleUser(userObject)
        //setEmail(userObject.email)
        
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        );
    }, );
   
  return (
    <div id='signInDiv'>
       
    </div>
  )
}

export default LoginGoogle;