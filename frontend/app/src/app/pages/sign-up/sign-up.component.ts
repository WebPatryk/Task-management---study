import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignupButtonClicked(email: string, password: string) {
    this.authService.signup(email, password).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.router.navigate(['/lists']);
    });
  }

}
