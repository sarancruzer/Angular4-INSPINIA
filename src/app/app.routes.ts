import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { ManageUserComponent } from './components/users/manage-user/manage-user.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import {Routes} from '@angular/router';
import {mainViewComponent} from './views/main-view/main-view.component';
import {minorViewComponent} from './views/minor-view/minor-view.component';
import {loginComponent} from './views/login/login.component';
import {registerComponent} from './views/register/register.component';
import {blankComponent} from './components/common/layouts/blank.component';
import {basicComponent} from './components/common/layouts/basic.component';


export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'mainView', pathMatch: 'full'},

  // App views
  {
    path: '', component: basicComponent,
    children: [
      {path: 'mainView', component: mainViewComponent},
      {path: 'minorView', component: minorViewComponent},
      {path: 'manageUser', component: ManageUserComponent},
      {path: 'addUser', component: AddUserComponent},
      {path: 'editUser', component: EditUserComponent}
    ]
  },
  {
    path: '', component: blankComponent,
    children: [
      { path: 'login', component: loginComponent },
      { path: 'register', component: registerComponent }
    ]
  },

  // Handle all other routes
  {path: '**',    component: mainViewComponent }
];
