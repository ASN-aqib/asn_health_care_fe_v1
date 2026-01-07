import { Routes } from '@angular/router';
import { Login } from '../login/component/login';
import { Dashboard } from '../dashboard/component/dashboard';
import { Leftmenu } from '../leftmenu/component/leftmenu';
import { Role } from '../role/component/role';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect from root to home
  { path: 'login', component: Login }, // Define the route for the home page
  { path: 'dashboard', component: Dashboard }, // Define the route for the home page
  { path: 'role', component: Role }, // Define the route for the home page

//   { path: 'carts', component: Carts, canActivate: [authguardGuard]  }, // Define the route for the home page
//   { path: 'cartdetail', component: Checkoutcart, canActivate: [authguardGuard]  }, // Define the route for the home page

 ];
 