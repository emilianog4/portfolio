import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from "src/app/models/LoginUser";
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser!: LoginUser;
  username!: string;
  password!: string;
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onLogin(): void {
    this.loginUser = new LoginUser(this.username, this.password);
    this.autenticacionService.login(this.loginUser).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },
      err => {
        this.errMsj = err.error.message;
        alert('Usuario o Contraseña incorrecta');
      }
    );
  }

}
