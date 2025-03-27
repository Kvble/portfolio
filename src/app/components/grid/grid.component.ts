import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ContactComponent } from '../contact/contact.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
	selector: 'app-grid',
	imports: [CommonModule, ProfileComponent, ContactComponent],
	templateUrl: './grid.component.html',
	styleUrl: './grid.component.css',
})
export class GridComponent {
}
