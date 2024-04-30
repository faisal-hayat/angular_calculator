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
}
