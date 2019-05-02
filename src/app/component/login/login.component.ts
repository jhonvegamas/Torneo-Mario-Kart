import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: any;

    constructor(private authService: AuthService) {
        this.user = {};
    }

    login() {
        sessionStorage.setItem('email', this.user.email);
        this.authService.updateAuth();
    }

    ngOnInit() {
    }

}
