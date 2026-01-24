import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillItem } from '../../../models';

@Component({
	selector: 'app-infinite-carousel',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './infinite-carousel.component.html',
	styleUrl: './infinite-carousel.component.css',
})
export class InfiniteCarouselComponent implements OnChanges{
	@Input() items: SkillItem[] = [];

	repeatedItems: SkillItem[] = [];

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['items'] && this.items.length > 0) {
			this.repeatedItems = [...this.items, ...this.items];
		}
	}
}
