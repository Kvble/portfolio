import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselComponent } from '../shared/infinite-carousel/infinite-carousel.component';
import { DEVELOPMENT_SKILLS, TOOLS_SKILLS, AI_SKILLS } from '../../data';

@Component({
	selector: 'app-skills',
	imports: [CommonModule, InfiniteCarouselComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.css',
})
export class SkillsComponent {
	development = DEVELOPMENT_SKILLS;
	tools = TOOLS_SKILLS;
	ai = AI_SKILLS;
}
