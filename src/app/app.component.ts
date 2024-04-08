import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './1. Navbar/navbar.component';
import { LandingpageComponent } from './2. Landing Page/landingpage.component';
import { NavbarSignupComponent } from './3 Sign Up Page/navbar-signup.component';
import { NavbarDisplayComponent } from './4. Display Page/navbar-display.component';
import { SignUpComponent } from './reactive/1. Sign Up/sign-up.component';
import { SignInComponent } from './reactive/2. Sign In/sign-in.component';
import { DashboardComponent } from './reactive/3. Dashboard/dashboard.component';
// import { ANavbarComponent } from './a-navbar/a-navbar.component';
// import { BAuthenticationComponent } from './b-authentication/b-authentication.component';
// import { LandingpageComponent } from './landingpage/landingpage.component';
// import { PageComponent } from './page/page.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { NotFoundComponent } from './not-found/not-found.component';
// import { NavbarSignupComponent } from './navbar-signup/navbar-signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LandingpageComponent,  NavbarSignupComponent, NavbarDisplayComponent, SignUpComponent, SignInComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'firstproject';
}
