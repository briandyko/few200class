import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListItem } from './models';
import { TodoDataService } from './todo-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  items$: Observable<TodoListItem[]>;
  // items: TodoListItem[];
  // subscription: Subscription;
  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getTodoList();

    // this.subscription = this.items$.subscribe(tdl => {
    //   console.log('Got a new todo list!', tdl);
    //   this.items = tdl;
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  markComplete(item: TodoListItem) {
    // item.completed = true;
    // call the service...
  }

  add(what: string) {
    // this.items.unsift({ description: what, completed: false });
    // TODO: A call to the service to add this new Todo
    this.service.add(what);
  }

  clearCompleted() {
    // TODO
  }
}
