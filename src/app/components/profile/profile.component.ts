import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.css',
})
export class ProfileComponent implements AfterViewInit {
	@ViewChild('typewriterText', { static: true }) typewriterText!: ElementRef;

	ngAfterViewInit(): void {
		new Typewriter(this.typewriterText.nativeElement, {
			loop: true,
			delay: 30,
			deleteSpeed: 40,
		})
			.typeString("AI Software Engineer")
			.pauseFor(1500)
			.deleteAll()
			.typeString("Data Science Student")
			.pauseFor(1500)
			.deleteAll()
			.typeString(".NET Software Engineer")
			.pauseFor(1500)
			.deleteAll()
			.typeString("Crypto & Forex Trader")
			.pauseFor(1500)
			.deleteAll()
			.typeString("Backend Software Engineer")
			.pauseFor(1500)
			.deleteAll()
			.start();
	}
}
