import { Injectable } from 'angular2/core';

export class Collection {
  id: number;
  name: string;

  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}

@Injectable()
export class CollectionService {
  getColumns() {
    return ['id', 'name'];
  }

  getCollections() {
    return [
      new Collection(1, 'Users'),
      new Collection(2, 'Images'),
      new Collection(3, 'Apps')
    ];
  }
}