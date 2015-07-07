module Oidc {
	
	export interface OidcSettings {
		client_id: string;
		redirect_uri: string;
		post_logout_redirect_uri: string;
		response_type: string;
		scope: string;
		authority: string;
		request_state_key: string;
		request_state_store: any;
		load_user_profile: boolean;
		filter_protocol_claims: boolean;
	}
}