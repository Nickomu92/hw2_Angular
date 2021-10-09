// Импортируем декоратор Injectable
import { Injectable } from '@angular/core';
// Импортируем класс "ToDoItem"
import { ToDoItem } from './to-do-item';

// Указываем, что сервис может использоваться в других сервисах, 
// для этого к классу сервиса применяем декоратор Injectable
@Injectable()
export class DataService {

    // Начальный список заданий, который будет выводиться на страницу 
    private data: ToDoItem[] = [ 
        { name: "Выполнить ДЗ №1 с дисциплины 'Создание веб-приложений с использованием Angular и React'", description:"Тема 'Angular: основы', создать новый компонент", done: true },
        { name: "Спать", description:"Нужно отдохнуть, после выполненного ДЗ", done: true },
        { name: "Кушать", description:"Завтрак, нужно подкрепиться перед выполнением ДЗ", done: false },
        { name: "Выполнить ДЗ №1 с дисциплины 'Создание web–приложений, исполняемых на стороне сервера при помощи языка программирования PHP и технологии AJAX'", description:"Тема 'Базы данных  и работа с MySQL', создать тренировочный сайт турфирмы", done: false }
    ];
      
    // Метод для получения данных
    getData(): ToDoItem[] {     
        return this.data;
    }

    // Метод для дабавления данных
    addData(name: string, description: string) {
        this.data.push(new ToDoItem(name, description));
    }
}