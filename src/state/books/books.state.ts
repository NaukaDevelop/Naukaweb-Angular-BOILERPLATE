import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AddBook, GetBooks, UpdateBook, DeleteBook } from './books.actions';
import { BooksService } from 'src/shared/services';
import { Book } from 'src/shared/models';

export class BooksStateModel {
  public books: Book[];
  public selectedBook: Book;
}

@State<BooksStateModel>({
  name: 'books',
  defaults: {
    books: [],
    selectedBook: null,
  },
})
@Injectable()
export class BooksState {
  constructor(private readonly booksService: BooksService) { }

  @Selector()
  public static getBookList({ books }: BooksStateModel): Book[] {
    return books;
  }

  @Selector()
  public static getSelectedBook({ selectedBook }): Book {
    return selectedBook;
  }

  @Action(AddBook)
  addBook(
    { getState, patchState }: StateContext<BooksStateModel>,
    { payload }: AddBook
  ): Observable<Book> {
    return this.booksService.addBook(payload).pipe(
      tap((book: Book) => {
        const state = getState();
        patchState({
          books: [...state.books, book],
          // books: [...state.books],
        });
      })
    );
  }

  @Action(GetBooks)
  getBook({
    getState,
    setState,
  }: StateContext<BooksStateModel>): Observable<Book[]> {
    return this.booksService.getBooks().pipe(
      tap((books: Book[]) => {
        const state = getState();
        setState({ ...state, books });
      })
    );
  }

  @Action(UpdateBook)
  updateBook(
    { getState, setState }: StateContext<BooksStateModel>,
    { payload }: UpdateBook
  ): Observable<Book[]> {
    return this.booksService.updateBook(payload).pipe(
      tap((books: Book[]) => {
        const state = getState();
        setState({ ...state, books });
      })
    );
  }

  @Action(DeleteBook)
  deleteBook(
    { getState, patchState }: StateContext<BooksStateModel>,
    { id }: DeleteBook
  ): Observable<Book[]> {
    return this.booksService.deleteBook(id).pipe(
      tap((books: Book[]) => {
        const state = getState();
        patchState({ ...state.books, books });
      })
    );
  }
}
