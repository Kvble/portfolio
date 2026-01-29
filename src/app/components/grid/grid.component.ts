import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ClientsComponent } from '../clients/clients.component';
import { ContactComponent } from '../contact/contact.component';
import { ProfileComponent } from '../profile/profile.component';
import { ProjectCarouselComponent } from '../project-carousel/project-carousel.component';
import { CounterComponent } from '../shared/counter/counter.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkflowComponent } from '../workflow/workflow.component';
import { PROJECTS } from '../../data/projects.data';

@Component({
	selector: 'app-grid',
	imports: [
		CommonModule,
		ClientsComponent,
		ProfileComponent,
		ContactComponent,
		CounterComponent,
		SkillsComponent,
		WorkflowComponent,
		ProjectCarouselComponent
	],
	templateUrl: './grid.component.html',
	styleUrl: './grid.component.css',
})
export class GridComponent {
	projects = PROJECTS;
}

