import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: any = {email: ''};

    constructor() {
        this.user.email = sessionStorage.getItem('email');
    }

    updateAuth() {
        this.user.email = sessionStorage.getItem('email');
    }

    closeSession() {
        sessionStorage.clear();
        this.updateAuth();
    }
}
