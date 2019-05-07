import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.scss'],
    animations: [routerTransition()]
})
export class ManagerComponent implements OnInit {
    constructor(
      public router: Router
    ) {}

    ngOnInit() {}

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
