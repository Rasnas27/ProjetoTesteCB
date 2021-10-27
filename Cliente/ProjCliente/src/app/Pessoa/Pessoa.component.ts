import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Pessoa',
  templateUrl: './Pessoa.component.html',
  styleUrls: ['./Pessoa.component.css']
})
export class PessoaComponent implements OnInit {


  Pessoa: any ;

  constructor(private http: HttpClient ) { }

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
