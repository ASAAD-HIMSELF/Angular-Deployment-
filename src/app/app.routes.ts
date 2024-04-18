import { Routes } from '@angular/router';
import { LandingpageComponent } from './2. Landing Page/landingpage.component';
import { NavbarSignupComponent } from './3 Sign Up Page/navbar-signup.component';
import { NavbarDisplayComponent } from './4. Display Page/navbar-display.component';
import { SignUpComponent } from './reactive/1. Sign Up/sign-up.component';
import { SignInComponent } from './reactive/2. Sign In/sign-in.component';
import { DashboardComponent } from './reactive/3. Dashboard/dashboard.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { UpdatebehaviorComponent } from './updatebehavior/updatebehavior.component';
import { ParentbehaviorComponent } from './parentbehavior/parentbehavior.component';

import { BehaviorComponent } from './assignment/behavior/behavior.component';
import { UpdatesbehaviorComponent } from './assignment/updatesbehavior/updatesbehavior.component';
import { ParentsbehaviorComponent } from './assignment/parentsbehavior/parentsbehavior.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
// import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
// import { BehaviorupdateComponent } from './behaviorupdate/behaviorupdate.component';
// import { UpdatebehaviorComponent } from './updatebehavior/updatebehavior.component';
// import { ParentbehaviorComponent } from './parentbehavior/parentbehavior.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'api', component: ApiCallsComponent },
    { path: 'signup', component: NavbarSignupComponent },
    { path: 'dashboard/:index', component: NavbarDisplayComponent },
    {
        path: 'Home_Appliances', children: [
            { path: '', component: NavbarDisplayComponent },
            { path: 'television', component: NavbarSignupComponent },
            {
                path: 'radio', children: [
                    { path: '', component: SignInComponent },
                    { path: 'televisions', component: SignUpComponent },
                ]
            },
        ]
    },
    {
        path: 'reactive', children: [
            { path: 'signup', component: SignUpComponent },
            { path: 'signin', component: SignInComponent },
            { path: 'dashboard/:index', component: DashboardComponent },
        ]
    },
    { path: 'behavior', component: BehaviorsubjectComponent },
    { path: 'parentbehavior', component: ParentbehaviorComponent },
    { path: 'updatebehavior', component: UpdatebehaviorComponent },

    { path: 'assignmentbehavior', component: BehaviorComponent },
    { path: 'assignmentparentbehavior', component: ParentsbehaviorComponent },
    { path: 'assignmentupdate', component: UpdatesbehaviorComponent },
    { path: 'dashboard/:index', component: NavbarDisplayComponent },
    // { path: 'assignmentupdatebehavior', component:  },
    

    { path: '**', redirectTo: '' }
];