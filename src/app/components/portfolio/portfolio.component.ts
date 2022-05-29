import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isLogged = false;
  isAdmin = false;
  username!: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.username = this.tokenService.getUsername();
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }

}
