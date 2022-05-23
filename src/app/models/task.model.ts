import { State } from '../enums/state-task.enum';

export class Task {
  _id?: String;
  title: String;
  state: State;
  date: Date;
  user: String
  constructor(mTitulo: String, nuser: String) {
    this.title = mTitulo;
    this.state = State.INPROGRESS;
    this.date = new Date();
    this.user = nuser;
  }
}
