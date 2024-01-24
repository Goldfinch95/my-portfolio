import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})
  }

  toProjects(){
    document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
  }

  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})
  }
}
