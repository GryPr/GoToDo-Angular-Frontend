import { Injectable } from '@angular/core';
import { UserManager, UserManagerSettings, User } from 'oidc-client'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}

export function getClientSettings(): UserManagerSettings {
  return {
    authority: '',
    client_id: '',
    redirect_uri: '',
    post_logout_redirect_uri: '',
    response_type: '',
    scope: '',
    filterProtocolClaims: true,
    loadUserInfo: true
  }
}