import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { OAuthModule } from 'angular-oauth2-oidc';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { ProfileDataModule } from 'projects/profile-data/src/lib/profile-data.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OAuthModule.forRoot(
      { resourceServer: {
          sendAccessToken: true
    }}),
    HttpClientModule,
    FormsModule,
    ProfileDataModule
  ],
  providers: [
    // Used for access token, but because of new issue in OAuth with Github, commented this code.
    // {
    //   provide : HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi   : true,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
