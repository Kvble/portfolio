import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselComponent } from '../shared/infinite-carousel/infinite-carousel.component';
import { 
	AI_LLM_SKILLS, 
	BACKEND_SKILLS, 
	CLOUD_SKILLS, 
	FRONTEND_SKILLS, 
	DATABASE_SKILLS 
} from '../../data';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [CommonModule, InfiniteCarouselComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.css',
})
export class SkillsComponent {
	sections = [
		{ title: 'AI & LLMs', skills: AI_LLM_SKILLS },
		{ title: 'Backend', skills: BACKEND_SKILLS },
		{ title: 'Cloud & Platforms', skills: CLOUD_SKILLS },
		{ title: 'Frontend', skills: FRONTEND_SKILLS },
		{ title: 'Databases', skills: DATABASE_SKILLS },
	];
}
