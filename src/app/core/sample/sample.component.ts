import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
//  Models
import { Book } from 'src/shared/models';
// State
import { DeleteBook, UpdateBook } from 'src/state/';
import { GetBooks, AddBook } from 'src/state';
import { BooksState } from 'src/state/';
// Services
// import { BooksService } from 'src/shared/services';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {


  @Select(BooksState.getBookList) books$: Observable<Book[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    // debugger;
    this.store.dispatch(new GetBooks());
  }

  onAddNew(): void {
    const newBook = {
      id: 20,
      name: 'Adios mundo!',
    };
    console.log('newBook', newBook);

    this.store.dispatch(new AddBook(newBook));
  }

  onUpdateBook(): void {
    const updateBook = {
      id: 3,
      name: 'Mundo Cruel!',
    };
    this.store.dispatch(new UpdateBook(updateBook));
  }

  onDeleteBook(): void {
    this.store.dispatch(new DeleteBook(3));
  }
}
