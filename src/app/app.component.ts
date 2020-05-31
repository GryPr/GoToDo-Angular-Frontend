import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc'

export const authCodeFlowConfig: AuthConfig = {
  issuer: '',
  redirectUri: window.location.origin,
  clientId: ''
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoToDo Angular Frontend';

  constructor(private OAuthService: OAuthService){
    this.OAuthService.configure(authCodeFlowConfig);
    this.OAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.OAuthService.loadDiscoveryDocumentAndTryLogin();
  }
}
