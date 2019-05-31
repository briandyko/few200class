import { Component, OnInit } from '@angular/core';
import { ItemAdded } from '../../actions/list.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(what: HTMLInputElement) {
    this.store.dispatch(new ItemAdded(what.value));
    what.value = '';
    what.focus();
  }

}
