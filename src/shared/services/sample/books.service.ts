import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from 'src/shared/models';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() { }

  private books = [
    { id: 1, name: 'Clean Code' },
    { id: 2, name: 'Clean Architecture' },
    { id: 3, name: 'The Clean Coder' },
    { id: 4, name: 'JavaScript Functional programming' },
    { id: 5, name: 'Eloquent JavaScript' },
  ];

  // addBook(book: Book): Observable<Book> {
  //   console.log('book', book);
  //   this.books = JSON.parse(JSON.stringify(this.books));
  //   console.log('books', this.books);
  //   this.books.push(book);

  //  this.books.push(book);
  //   return of(book);
  // }

  addBook(book: Book): Observable<Book> {
    this.books = JSON.parse(JSON.stringify(this.books));
    this.books.push(book);
    return of(book);
  }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  updateBook(book: Book): Observable<Book[]> {
    const { id } = book;
    this.books = this.books.filter((item) => item.id !== id);
    this.books.push(book);
    console.log(this.books);
    return of(this.books);
  }

  deleteBook(id: number): Observable<Book[]> {
    this.books = this.books.filter((item) => item.id !== id);
    return of(this.books);
  }
}
