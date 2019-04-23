import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AdminService from '../admin.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  admin = {id: 0, email: '', password: '' };


  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit() { }

  addAdmin() {
    this.adminService.addRemoteAdmin(this.admin).
      subscribe(() => this.router.navigate(['./list-movies']));
  }
}
