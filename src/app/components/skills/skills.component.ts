import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteCarouselComponent } from '../shared/infinite-carousel/infinite-carousel.component';
import {
	faWindows,
	faAngular,
	faHtml5,
	faCss3Alt,
	faJsSquare,
	faPython,
	faGithub,
	faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {
	faCode,
	faNetworkWired,
	faCloud,
	faDatabase,
	faBrain,
	faMagic,
	faLeaf
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-skills',
	imports: [CommonModule, InfiniteCarouselComponent],
	templateUrl: './skills.component.html',
	styleUrl: './skills.component.css',
})
export class SkillsComponent {
	development = [
		{ label: 'Angular', icon: faAngular },
		{ label: 'JavaScript', icon: faJsSquare },
		{ label: 'HTML', icon: faHtml5 },
		{ label: 'CSS', icon: faCss3Alt },
		{ label: 'Python', icon: faPython },
		{ label: '.NET', icon: faWindows },
		{ label: 'C#', icon: faCode },
		{ label: 'C++', icon: faCode },
		{ label: 'ASP.NET', icon: faWindows },
		{ label: 'API REST', icon: faNetworkWired }
	  ];

	tools = [
		{ label: 'Git', icon: faGitAlt },
		{ label: 'GitHub', icon: faGithub },
		{ label: 'Azure', icon: faCloud },
		{ label: 'Azure DevOps', icon: faCloud },
		{ label: 'SQL', icon: faDatabase },
		{ label: 'SQL Server', icon: faDatabase },
		{ label: 'MongoDB', icon: faLeaf }
	  ];

	ai = [
		{ label: 'AI', icon: faBrain },
		{ label: 'AI Prompting', icon: faMagic },
	];
}
