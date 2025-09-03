import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle,
    UpperCasePipe, LowerCasePipe,
    TitleCasePipe, SlicePipe,
    JsonPipe, DatePipe
  ],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  div1ClassName = signal<string>('');

  firstName: string = 'Vlad';
  courseName: string = 'Angular 20';

  rollNoList = [11, 12, 13, 14, 15, 16, 17];

  isDiv2Green: boolean = false;

  curreDate: Date = new Date();

  studentObj: any = {
    name: 'Vlad',
    city: 'Zhytomyr',
    state: 'Ukraine',
  }

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  setBgClass(className: string) {
    this.div1ClassName.set(className);
  }

  toogleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }
}
