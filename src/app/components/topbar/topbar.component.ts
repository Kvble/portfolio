import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavMenuComponent } from '../nav-menu/nav-menu.component';

@Component({
	selector: 'app-topbar',
	standalone: true,
	imports: [CommonModule, NavMenuComponent],
	templateUrl: './topbar.component.html',
	styleUrl: './topbar.component.css',
})
export class TopbarComponent {}
