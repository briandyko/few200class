import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingComponent } from './shopping.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { FEATURE_NAME, reducers } from './reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ShoppingComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, reducers)
  ],
  exports: [ShoppingComponent]
})
export class ShoppingModule { }
