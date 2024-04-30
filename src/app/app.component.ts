import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  //#region define props here
  result: number = 0;
  currentFunction: string = 'No Function';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;
  //#endregion

  //#region constructor
  constructor(private toastrService: ToastrService){
  }
  //#endregion

  //#region add click function for button
  onClickFunc(value: string, type?: string): void{
    if(type === 'number'){
      this.onNumberClick(value);
    }
    else if(type === 'function'){
      // on function clicked
      this.onFunctionClick(value);
    }
  }
  //#endregion
  
  //#region number function
  onNumberClick(value: string){
    if(this.calNumber !== 'noValue'){
      this.calNumber = this.calNumber + value;
    }else{
      this.calNumber = value;
    }
    this.result = parseFloat(this.calNumber);
  }
  //#endregion
  
  //#region  when a function is clicked
  onFunctionClick(value: string) {
    if(this.currentFunction === "No Function"){
      this.firstNumber = parseFloat(this.calNumber);
      this.calNumber = '0';
      this.currentFunction = value;
    }else if(this.currentFunction !== "No Function"){
      this.secondNumber = parseFloat(this.calNumber);
      // perform calculation is here
      this.currentFunction = value;
      this.calculateValue(value);
    }
    // throw new Error('Method not implemented.');
  }
  //#endregion

  //#region perform the calcualtion
  calculateValue(value: string) {
    if(this.currentFunction === "*"){
      this.result = this.firstNumber * this.secondNumber;
      this.calNumber = this.result.toString();
      this.firstNumber = this.result;
      this.secondNumber = 0;
    }else if(this.currentFunction === "*"){
      this.result = this.firstNumber + this.secondNumber;
    }else if(this.currentFunction === "-"){
      this.result = this.firstNumber - this.secondNumber;
    }else if(this.currentFunction === "/"){
      this.result = this.firstNumber / this.secondNumber;
    }else if(this.currentFunction === "%"){
      this.result = this.firstNumber % this.secondNumber;
    }else if(this.currentFunction === "c"){
      this.result = 0;
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calNumber = 'noValue';
    }
  }
  //#endregion

}
