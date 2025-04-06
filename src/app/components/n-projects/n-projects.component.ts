import {
	Component,
	ElementRef,
	ViewChild,
	AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUp } from 'countup.js';

@Component({
	selector: 'app-n-projects',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './n-projects.component.html',
	styleUrl: './n-projects.component.css',
})
export class NProjectsComponent implements AfterViewInit {
	max = 10;
	delay = 1500;

	@ViewChild('counterEl', { static: true }) counterEl!: ElementRef;

	ngAfterViewInit(): void {
		this.counterEl.nativeElement.innerText = '0';
		setTimeout(() => {
			const countUp = new CountUp(
				this.counterEl.nativeElement,
				this.max,
				{
					duration: 1.5,
					startVal: 0,
					useEasing: true,
				}
			);
			if (!countUp.error) {
				countUp.start();
			} else {
				console.error(countUp.error);
			}
		}, this.delay);
	}
}
