
import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'sign-up-component',
    templateUrl: './signup.html'
})

export class SignUpComponent 
{
  (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


    window.fbAsyncInit = () => {
        console.log("fbasyncinit")

        FB.init({
            appId            : '321878648322680',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.10'
        });
        FB.AppEvents.logPageView();
        // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in

// ** ADD CODE TO NEXT STEP HERE **
    };
  FB.Event.subscribe('auth.statusChange', (response => {

            if (response.status === 'connected') {
                // use the response variable to get any information about the user and to see the tokens about the users session
            }
     function checkLoginState() {
      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    }
}
