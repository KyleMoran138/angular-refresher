import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const heroes = [
      {id: 10, name: 'Mr. Nice'},
      {id: 11, name: 'Narco'},
      {id: 12, name: 'Bobasto'},
      {id: 13, name: 'Kyle'},
      {id: 14, name: 'Magenta'},
      {id: 15, name: 'RubberMan'},
      {id: 16, name: 'Dr IQ'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Magma'},
      {id: 19, name: 'Tornado'},
      {id: 20, name: 'Leif'},
  ];
  return {heroes};
  }

  constructor() { }
}
