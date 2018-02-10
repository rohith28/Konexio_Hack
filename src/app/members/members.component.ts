import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(public af: AngularFire,private router: Router) {

    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    });

  }
profile() {
    window.open('https://rohithkumaruppala-personal.firebaseapp.com/  ');
}
  logout() {
     this.af.auth.logout();
     this.router.navigateByUrl('/login');
  }

connection() {
    window.open('https://dailynote-2cb84.firebaseapp.com/');
}
  resource() {
    window.open('https://www.khanacademy.org/');
  }
help() {
    window.open('https://landbot.io/u/H-25764-ZX4YHUO4JR4DQ9IF/index.html');
}
  ngOnInit() {
  }
}
