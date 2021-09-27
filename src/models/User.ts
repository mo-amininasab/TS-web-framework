import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  
  constructor(private data: UserProps) {}

  get(propName: 'name' | 'age' | 'id'): number | string {
    return this.data[propName]!;
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }




}
