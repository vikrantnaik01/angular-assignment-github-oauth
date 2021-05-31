import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    // Your Auth0 app's domain
    // Important: Don't forget to start with https://
    //  AND the trailing slash!
    issuer: 'https://github.com/',

    // The app's clientId configured in Auth0
    clientId: '5cccdfa8b4aa0317429b',

    loginUrl: 'https://github.com/login/oauth/authorize',

    // The app's redirectUri configured in Auth0
    redirectUri: 'http://localhost:4200/profile-page',

    // Scopes ("rights") the Angular application wants get delegated
    scope: 'openid profile email offline_access',

    // Using Authorization Code Flow 
    // (PKCE is activated by default for authorization code flow)
    responseType: 'code',

    // Your Auth0 account's logout url
    // Derive it from your application's domain
    logoutUrl: 'https://localhost:4200',
    
    tokenEndpoint : 'https://github.com/login/oauth/access_token',
    oidc: false,

    customQueryParams: {
        // API identifier configured in Auth0
        audience: 'https://api.github.com/'
    },


    // this.oauthService.loginUrl = 'https://github.com/login/oauth/authorize';
    // this.oauthService.timeoutFactor = 0.75;
    // this.oauthService.redirectUri = window.location.origin;

    // this.oauthService.customQueryParams
    // this.oauthService.clientId = '5cccdfa8b4aa0317429b';
    // this.oauthService.logoutUrl = 'http://localhost:4200';
    // this.oauthService.tokenEndpoint = 'https://github.com/login/oauth/access_token';
    // this.oauthService.state = 'aW9fdzctdi16Y3NCRVpWaFJ6bGxncH5wT1pZLklyYmpyTnZDQzRNTTRKflhQ';
    // this.oauthService.setStorage(window.sessionStorage);
    // this.oauthService.scope = 'read:user openid profile offline_access';
    // this.oauthService.responseType = 'token';
    // this.oauthService.requestAccessToken = true;
    // this.oauthService.oidc = false;

};