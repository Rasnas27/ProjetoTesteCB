import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-PessoaSuper',
  templateUrl: './PessoaSuper.component.html',
  styleUrls: ['./PessoaSuper.component.css']
})
export class PessoaSuperComponent implements OnInit {

  Pessoa : any;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.getPessoas();

  }
  getPessoas(){
    this.http.get('https://localhost:44331/api/values').subscribe( response => {
      this.Pessoa = response;
    console.log(response);},
      error => {
        console.log(error);
      });
  }
}
