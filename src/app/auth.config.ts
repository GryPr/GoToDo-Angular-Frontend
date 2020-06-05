import { AuthConfig } from 'angular-oauth2-oidc';

export const DiscoveryDocumentConfig = {
    url: "https://localgotodo.b2clogin.com/localgotodo.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=b2c_1_susi"
}

export const authConfig: AuthConfig = {
    redirectUri: window.location.origin + '/index.html',
    responseType: 'token id_token',
    issuer: 'https://localgotodo.b2clogin.com/53109908-9db2-4dbd-ab3e-9c40ab19bac9/v2.0/',
    strictDiscoveryDocumentValidation: false,
    tokenEndpoint: 'https://localgotodo.b2clogin.com/localgotodo.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_susi',
    loginUrl: 'https://localgotodo.b2clogin.com/localgotodo.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_susi',
    clientId: '453b11f3-cc26-422c-b466-2c6ddd60f6eb',
    scope: 'openid profile https://localgotodo.onmicrosoft.com/gotodo/user_impersonation',
    skipIssuerCheck: true,
    clearHashAfterLogin: true,
    oidc: true,
}