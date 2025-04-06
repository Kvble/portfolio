import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ContactComponent } from '../contact/contact.component';
import { ProfileComponent } from '../profile/profile.component';
import { NProjectsComponent } from '../n-projects/n-projects.component';
import { NYearsComponent } from '../n-years/n-years.component';

@Component({
	selector: 'app-grid',
	imports: [
		CommonModule,
		ProfileComponent,
		ContactComponent,
		NProjectsComponent,
		NYearsComponent,
	],
	templateUrl: './grid.component.html',
	styleUrl: './grid.component.css',
})
export class GridComponent {}
