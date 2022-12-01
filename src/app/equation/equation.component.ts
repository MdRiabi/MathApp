import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from 'app/math-validators';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  mathForm = new FormGroup({

    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl(''),

  },[MathValidators.addition('answer','a','b')]);

  constructor() {
    console.log(this.mathForm);
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  ngOnInit(): void {
  }

  randomNumber() {

    return Math.floor(Math.random() * 10);

  }
}
