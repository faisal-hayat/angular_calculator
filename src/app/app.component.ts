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
  //#endregion

  //#region constructor
  constructor(private toastrService: ToastrService){
  }
  //#endregion

  //#region add click function for button
  onClickFunc(value: number){

  }
  //#endregion

}
