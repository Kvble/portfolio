import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faLaptopCode, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-resume-grid',
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './resume-grid.component.html',
	styleUrl: './resume-grid.component.css',
})
export class ResumeGridComponent {
	faLocationDot = faLocationDot;
	faLaptopCode = faLaptopCode;
	faGlobe = faGlobe;
}
