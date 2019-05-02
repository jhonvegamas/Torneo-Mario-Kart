import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './service/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TMK';

    constructor(public router: Router, public authService: AuthService) {
    }
    test(){
        console.log('entra');
    }
}
