import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'loginlearn.eu.auth0.com',
        clientID: 'DazIvDwukbXHPEEj9ZtwyoQanPaXybpi',
        redirectUri: 'http://localhost:3000',
        audience: 'https://loginlearn.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }

}

//https://manage.auth0.com/#/clients/DazIvDwukbXHPEEj9ZtwyoQanPaXybpi/quickstart