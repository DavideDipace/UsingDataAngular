import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name: string;
  constructor() { 
  this.name = 'Felipe'; // setta il nome nel costruttore
  }
}


