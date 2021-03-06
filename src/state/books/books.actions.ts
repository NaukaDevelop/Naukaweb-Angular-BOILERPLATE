import { Book } from 'src/shared/models';

export class AddBook {
  static readonly type = '[Books] Add';
  constructor(public payload: Book) {
  }
}
export class GetBooks {
  static readonly type = '[Books] Get';
}
export class UpdateBook {
  static readonly type = '[Books] Update';
  constructor(public payload: Book) { }
}
export class DeleteBook {
  static readonly type = '[Books] Delete';
  constructor(public id: number) { }
}
