import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Listas',
  templateUrl: './Listas.component.html',
  styleUrls: ['./Listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
