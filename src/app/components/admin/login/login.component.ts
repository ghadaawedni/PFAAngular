import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { TokenStorageService } from '../../auth/token-storage.service';
import { AuthLoginInfo } from '../../auth/login-info';
import {Router} from '@angular/router';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage: '';
  form: any =  {};
  isLoginFailed = false;
  authority: string;
  private  roles: string [];
  info: any;
  private loginInfo: AuthLoginInfo;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router,
              public nav: NavBarService, private toastr: ToastrService) { }

  ngOnInit(): void{
    this.nav.show();
   }
  showToaster1(){
    this.toastr.warning('Sorry', 'You are not an admin',
    {
      timeOut: 3500,
      progressBar: true,
      positionClass: 'toast-top-right',
    });
  }
  showToaster2(){
    this.toastr.warning('Sorry', 'You are not registred',
      {
        timeOut: 3500,
        progressBar: true,
        positionClass: 'toast-top-right',
      });
  }
  showToaster3(){
    this.toastr.success('Congrats', 'You are logged in',
      {
        timeOut: 3500,
        progressBar: true,
        positionClass: 'toast-top-right',
      });
  }
  onSubmit()
  {
    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.signIn(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getAuthorities();
        console.log(this.roles.toString());
        if (this.roles.toString() === 'ROLE_ADMIN')
        {
          this.router.navigate(['/dashboard']);
          this.showToaster3();
        }
        else {
          this.showToaster1();
        }
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        this.showToaster2();
      }
    );
    // if (this.tokenStorage.getToken())
    //  {
    //    this.roles = this.tokenStorage.getAuthorities();
    //    this.roles.every(role => {
    //      if (role === 'ROLE_ADMIN') {
    //        this.authority = 'admin';
    //        return false;
    //      }
    //      console.log('role ' , this.authority);
    //    });
    //  }
 }

}
