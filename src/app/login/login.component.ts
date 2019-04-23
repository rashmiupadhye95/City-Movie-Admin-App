import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import AdminService from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public loadingController: LoadingController,
    public alertController: AlertController, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getRemoteAdmins().subscribe((result) => { this.admins = result; });
  }
  admin: any = {};
  admins = [];

  doLogin(admin) {
    for (var i = 0; i < this.admins.length; i++) {
      if ((admin.email == this.admins[i].email) && (admin.password == this.admins[i].password)) {
        if (localStorage.getItem('user') == null) {
          localStorage.setItem('user', JSON.stringify(admin));
        }
        this.router.navigate(['list-movies']);
        this.presentLoadingWithOptions();
        break;
      }
      else {
        this.presentAlert();
        break;
      }
    }
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 1000,
      message: 'Logging In Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Incorrect Email/Password',
      message: 'Please check your Email or Password and Try Again',
      buttons: ['OK']
    });

    await alert.present();
  }

}
