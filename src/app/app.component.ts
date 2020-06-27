import { Component } from '@angular/core';
import { OAuthService, NullValidationHandler } from 'angular-oauth2-oidc';
import { authConfig, DiscoveryDocumentConfig } from './auth.config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoToDo Angular Frontend';

  constructor(private http: HttpClient, private oauthService: OAuthService){
    this.configure();
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.tryLoginImplicitFlow();
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get claims() {
    let claims = this.oauthService.getIdentityClaims();
    return claims;
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocument(DiscoveryDocumentConfig.url);
  }
}
