import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogarComponent, LoginComponent } from './components';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: LogarComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
