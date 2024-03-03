import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ConvertPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name = '';
  date = '';
  amount =  0;
  height = 0;
  miles = 0;

  onInputName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  onInputDate(event: Event) {
    this.date = (event.target as HTMLInputElement).value;
  }

  onInputAmount(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }

  onInputHeight(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }

  onInputMiles(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }
}