import { Routes } from '@angular/router';
import { Login } from '../login/component/login';
import { Dashboard } from '../dashboard/component/dashboard';
import { Leftmenu } from '../leftmenu/component/leftmenu';
import { Role } from '../role/component/role';
import { User } from '../user/component/user';
import { PermissionComponent } from '../permission/component/permission.component';
import { AuthGuard } from './auth-guard';
import { Profile } from '../profile/component/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect from root to home
  { path: 'login', component: Login }, // Define the route for the home page
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] }, // Define the route for the home page
  { path: 'profile', component: Profile, canActivate: [AuthGuard] }, // Define the route for the home page
  { path: 'role', component: Role ,canActivate: [AuthGuard]}, // Define the route for the home page
  { path: 'user', component: User ,canActivate: [AuthGuard]}, // Define the route for the home page
  { path: 'permission', component: PermissionComponent ,canActivate: [AuthGuard]}, // Define the route for the home page
 

//   { path: 'carts', component: Carts, canActivate: [authguardGuard]  }, // Define the route for the home page
//   { path: 'cartdetail', component: Checkoutcart, canActivate: [authguardGuard]  }, // Define the route for the home page

 ];
 