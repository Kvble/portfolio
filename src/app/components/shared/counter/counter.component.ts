import {
	Component,
	ElementRef,
	ViewChild,
	AfterViewInit,
	Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUp } from 'countup.js';

@Component({
	selector: 'app-counter',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './counter.component.html',
	styleUrl: './counter.component.css',
})
export class CounterComponent implements AfterViewInit {
	/** The target number to display */
	@Input() value: number = 0;

	/** Label to display below the number */
	@Input() label: string = '';

	/** Optional suffix to append after the number (e.g., '+') */
	@Input() suffix: string = '';

	/** Whether to animate the counter */
	@Input() animated: boolean = true;

	/** Delay before starting animation (ms) */
	@Input() delay: number = 1500;

	/** Animation duration (seconds) */
	@Input() duration: number = 1.5;

	@ViewChild('counterEl', { static: true }) counterEl!: ElementRef;

	ngAfterViewInit(): void {
		if (this.animated) {
			this.counterEl.nativeElement.innerText = '0';
			setTimeout(() => {
				const countUp = new CountUp(
					this.counterEl.nativeElement,
					this.value,
					{
						duration: this.duration,
						startVal: 0,
						useEasing: true,
						suffix: this.suffix,
					}
				);
				if (!countUp.error) {
					countUp.start();
				} else {
					console.error(countUp.error);
				}
			}, this.delay);
		} else {
			this.counterEl.nativeElement.innerText = `${this.value}${this.suffix}`;
		}
	}
}
