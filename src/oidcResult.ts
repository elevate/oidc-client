module Oidc {
	
	export interface OidcResult {
         id_token: idToken;
         access_token: accessToken;
         expires_in: string;
         scope: string;
         session_state: string;
         profile: profile;
    }
}