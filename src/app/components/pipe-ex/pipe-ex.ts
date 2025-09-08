import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, SlicePipe, JsonPipe, NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css'
})
export class PipeEx {
  courseName = 'Angular';
  courseDuration = 'DURATION IS 3 MONTH';
  currentDate: Date = new Date();
  rollNoList: number[] = [111, 112, 113, 114, 115];
  studentObj: any = {
    name: 'AAA',
    mobile: '123',
    address: {
      city: 'Zhytomyr',
      state: 'UA',
    },
  }
}
