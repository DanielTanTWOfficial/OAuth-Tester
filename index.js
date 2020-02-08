/*
 * Javascript functions for the connection to OAuth
 * server
 */

// this function is called from index.html when button clicked
function oauthSignIn() {
    // Google OAuth 2.0 endpoint to get access tokens
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

    // create a form to submit params to endpoint
    var form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);

    // params to send to OAuth 2.0 endpoint
    var params = {'client_id': 'YOUR_CLIENT_ID',
		  'redirect_uri': 'http://127.0.0.1/main.html',
		  'response_type': 'token',
		  'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
		  'state': 'pass-through value'};

    // add form params as hidden input values
    for (var p in params) {
	var input = document.createElement('input');
	input.setAttribute('type', 'hidden');
	input.setAttribute('name', p);
	input.setAttribute('value', params[p]);
	form.appendChild(input);
    }

    // add form to page and submit to endpoint
    document.body.appendChild(form);
    form.submit();
    }

