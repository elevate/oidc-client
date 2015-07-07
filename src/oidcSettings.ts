module Oidc {
	
	export interface OidcSettings {
		client_id: string;
		redirect_uri: string;
		post_logout_redirect_uri: string;
		response_type: string;
		scope: string;
		authority: string;
	}
}