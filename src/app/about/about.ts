import { Component } from '@angular/core';
import { Card } from '../card/card';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [Card, NgTemplateOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  show: boolean = false;
}
