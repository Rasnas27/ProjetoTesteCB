import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { ListasComponent } from './Listas/Listas.component';
import { LoginComponent } from './Login/Login.component';

const routes: Routes = [

{
  path: '',
  redirectTo: '/Login',
  pathMatch: 'full' 
},
{
  path:'Login',
  component: LoginComponent
},
{
  path: 'Listas',
  component: ListasComponent
},
{
  path: 'Home',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
