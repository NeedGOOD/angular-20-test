import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  isParagVisiable: boolean = false;

  startMonth: string = 'feb';

  citiesList: string[] = ['Pune', 'Mumbai', 'Panji', 'Lviv'];

  studentList: any[] = [
    { name: 'AAA', city: 'Pune', isActive: false },
    { name: 'CCC', city: 'Mumbai', isActive: true },
    { name: 'BBB', city: 'Panji', isActive: true },
    { name: 'DDD', city: 'Lviv', isActive: false },
  ]

  showP() {
    this.isParagVisiable = true;
  }

  hideP() {
    this.isParagVisiable = false;
  }
}
