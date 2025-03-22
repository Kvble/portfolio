import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ResumeGridComponent } from './../../components/resume-grid/resume-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ResumeGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
