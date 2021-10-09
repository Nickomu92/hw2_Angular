import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-table-header',
  templateUrl: './pipes-table-header.component.html',
  styleUrls: ['./pipes-table-header.component.css']
})

export class PipesTableHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  text = "Состояние выполненных дел";
  date = new Date();
}
