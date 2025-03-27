import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { GridComponent } from '../../components/grid/grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
