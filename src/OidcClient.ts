/// <reference path="src.ts" />

module Oidc {
	
	export class OidcClient {
		
		constructor(private settings: OidcSettings) {
		
			if (!this.settings.request_state_key) {
		    	this.settings.request_state_key = "OidcClient.request_state";
		    }

		    if (!this.settings.request_state_store) {
		        this.settings.request_state_store = window.localStorage;
		    }
		
		    if (typeof this.settings.load_user_profile === 'undefined') {
		        this.settings.load_user_profile = true;
		    }

		    if (typeof this.settings.filter_protocol_claims === 'undefined') {
		        this.settings.filter_protocol_claims = true;
		    }
		
		    if (this.settings.authority && this.settings.authority.indexOf('.well-known/openid-configuration') < 0) {
		        if (this.settings.authority[this.settings.authority.length - 1] !== '/') {
		            this.settings.authority += '/';
		        }
		        this.settings.authority += '.well-known/openid-configuration';
		    }

		    if (!this.settings.response_type) {
		        this.settings.response_type = "id_token token";
		    }
			
		}	
		
		
	} 
}