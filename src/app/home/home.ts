import { Component, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../data';
import { Counter } from '../counter/counter';

@Component({
  selector: 'app-home',
  imports: [FormsModule, Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  countValue = signal(0);

}