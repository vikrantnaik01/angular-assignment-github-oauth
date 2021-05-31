import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

import { authConfig } from './helpers/auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GitHubOAuthApp';
  
  constructor(private oauthService: OAuthService, private router: Router) {
    // this.runInitialLoginSequence();
  //   this.initialOAuthConfigs();
  //   if(this.oauthService.hasValidAccessToken()) {
  //       this.router.navigate(['[profile-page]'])
  //   }
  //   else {
  //     this.login();
  //   }
  //    console.log(this.oauthService.getAccessToken()); 
  }

  private initialOAuthConfigs () {
    this.oauthService.configure(authConfig);
    // this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile()
    // this.oauthService.tryLoginCodeFlow({

    // })
     this.oauthService.tryLoginCodeFlow({
      onTokenReceived: context => {
          //
          // Output just for purpose of demonstration
          // Don't try this at home ... ;-)
          //
          console.debug("logged in");
          console.debug(context);
      },
      customRedirectUri : 'https://github.com/login/oauth/access_token',
      onLoginError : (em) => {
        console.log('Errorororro ', em);
      } 
     });
  }

  private login() {
    this.oauthService.initCodeFlow();
  }

  // private runInitialLoginSequence() {
  //   this.oauthService.loadDiscoveryDocument()
  //   .then(() => {
  //     if (this.oauthService.hasValidAccessToken()) {
  //       return Promise.resolve();
  //     }
  //   });
  // }
}
