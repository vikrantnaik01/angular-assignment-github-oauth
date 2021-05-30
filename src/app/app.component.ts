import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GitHubOAuthApp';
  
  constructor(private oauthService: OAuthService, private router: Router) {
    // this.initialOAuthConfigs();
    // if(this.oauthService.hasValidAccessToken()) {
    //     this.router.navigate(['[profile-page]'])
    // }
    // else {
    //   this.login();
    // }
    //  console.log(this.oauthService.getAccessToken()); 
  }

  private initialOAuthConfigs () {
    this.oauthService.loginUrl = 'https://github.com/login/oauth/authorize';
    this.oauthService.timeoutFactor = 0.75;
    this.oauthService.redirectUri = 'http://localhost:4200/login';
    this.oauthService.clientId = '5cccdfa8b4aa0317429b';
    this.oauthService.logoutUrl = 'http://localhost:4200';
    this.oauthService.setStorage(window.sessionStorage);
    this.oauthService.scope = 'read:user openid';
    this.oauthService.responseType = 'code+token+id_token';
    // this.oauthService.allow_signup = true;
    this.oauthService.initLoginFlow();
  }

  private login() {
    this.oauthService.initImplicitFlow();
  }
}
