import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { ButtonComponent } from '../shared/button/button.component';

@Component({
	selector: 'app-contact',
	imports: [CommonModule, FontAwesomeModule, ButtonComponent],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.css',
})
export class ContactComponent {
	faEnvelope = faEnvelope;
	faInstagram = faInstagram;
	faLinkedin = faLinkedin;
	faGithub = faGithub;
}
