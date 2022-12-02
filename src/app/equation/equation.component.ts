
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from 'app/math-validators';
import { delay, filter, scan } from 'rxjs';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  secondPersolution = 0;
  //the form control
  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  }, [MathValidators.addition('answer', 'a', 'b')]);

  constructor() { }
  // get a and b used for returning the a and b controlform
  get a() { return this.mathForm.value.a; }
  get b() { return this.mathForm.value.b; }

  ngOnInit(): void {
    // const startTime = new Date();
    // let numbersolved = 0;
    console.log(this.mathForm.statusChanges)
    this.mathForm.statusChanges.pipe(
      filter(value => value === 'VALID'),
      delay(350),
      scan((acc) => {
        console.log(`value of accumelator is ${acc.numberSolved } and ${acc.startTime}`);
        return {
          numberSolved: acc.numberSolved + 1,
          startTime: acc.startTime
        }
      },  {numberSolved: 0 , startTime: new Date()}) 
    ).subscribe(( {numberSolved , startTime} ) => {
      
      console.log(` and the value of numbersolved is ${numberSolved}`);

      this.secondPersolution =
        (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;

      this.mathForm.setValue({
        a: this.randomNumber(),
        b: this.randomNumber(),
        answer: '',
      })
    })
  }

  randomNumber() { return Math.floor(Math.random() * 10); }
}
