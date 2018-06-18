import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];

  constructor(private toDoService: TodoService) {}

  ngOnInit() {
    this.toDoService
      .getToDoList()
      .snapshotChanges()
      .subscribe(item => {
        this.toDoListArray = [];
        item.forEach(e => {
          const x = e.payload.toJSON();
          x['$key'] = e.key;
          this.toDoListArray.push(x);
        });
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }

  onAdd(itemTitle) {
    this.toDoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  onDelete($key: string) {
    this.toDoService.removeTitle($key);
  }

  alterCheck($key: string, isChecked: boolean) {
    this.toDoService.checkOrUnCheckTitle($key, !isChecked);
  }
}
