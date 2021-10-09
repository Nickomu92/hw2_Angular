import { Component, OnInit } from '@angular/core';
// Импортируем созданный сервис "DataService"
import { DataService } from '../data.service';
// Импортируем класс "ToDoItem"
import { ToDoItem } from '../to-do-item';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css'],
  // Добавляем в коллекцию providers созданный сервис "DataService"
  providers: [DataService]
})

export class ToDoItemsComponent implements OnInit {
  items: ToDoItem[] = [];
  name: string = "";
  description: string = "";

  /* Задействуем встроенный в Angular механизм dependency injection и получим объект 
  сервиса "dataService" в конструкторе компонента */
  constructor(private dataService: DataService){}
    
  // Метод добавления в список "data" сервиса "dataService"
  addItem(name: string, description: string): void {
    // Если поля ввода пустые, то выходим
    if(name == null || name.trim() == "" || description == null || description.trim() == "")
        return;
    // Иначе - добавляем в список "data", который находится в объекте сервиса "dataService"
    this.dataService.addData(name, description);
  }

  /* Для получения данных в массив "items" из массива "data" объекта сервиса "dataService" 
  реализуем метод ngOnInit() интерфейса OnInit */
  ngOnInit() {
    this.items = this.dataService.getData();
  }
    
  title = "Таблица заданий (дочерний компонент)";
}
