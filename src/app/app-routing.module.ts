import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardService } from './guards/guard.service';



const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent},
  {path:'login', component:LoginComponent},
  {path: '**', redirectTo: 'portfolio'},
  {path:'', redirectTo:'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
