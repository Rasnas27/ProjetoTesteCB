import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './Pessoa/Pessoa.component';
import { NavComponent } from './nav/nav.component';
import { PessoaSuperComponent } from './PessoaSuper/PessoaSuper.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { ListasComponent } from './Listas/Listas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [						
    AppComponent,
      PessoaComponent,
      NavComponent,
      PessoaSuperComponent,
      HomeComponent,
      LoginComponent,
      ListasComponent 
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
