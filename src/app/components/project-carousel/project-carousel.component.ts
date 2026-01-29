import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models';

@Component({
	selector: 'app-project-carousel',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './project-carousel.component.html',
	styleUrl: './project-carousel.component.css',
})
export class ProjectCarouselComponent {
	@Input() projects: Project[] = [];

	currentIndex = 0;

	get itemWidth(): number {
		const width = window.innerWidth;
		if (width <= 768) return 240;
		if (width <= 1024) return 275;
		if (width <= 1200) return 250;
		return 220;
	}

	prev(): void {
		if (this.currentIndex > 0) {
			this.currentIndex--;
		}
	}

	next(): void {
		if (this.currentIndex < this.projects.length - 1) {
			this.currentIndex++;
		}
	}

	get canGoPrev(): boolean {
		return this.currentIndex > 0;
	}

	get canGoNext(): boolean {
		return this.currentIndex < this.projects.length - 1;
	}
}
