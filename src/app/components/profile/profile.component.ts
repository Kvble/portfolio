import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.css',
})
export class ProfileComponent implements AfterViewInit, OnInit, OnDestroy {
	@ViewChild('typewriterText', { static: true }) typewriterText!: ElementRef;

	thoughts = [
		"Building intelligent systems means designing for constraints, trade-offs, and long-term behavior.",
		"Scalability, performance, and maintainability are decisions you make early, not problems you fix later.",
		"Artificial intelligence creates value only when it fits naturally into the system it improves.",
		"The temporary discomfort of discipline is better than the permanent pain of regret.",
		"Everything negative — pressure, challenges — is all an opportunity for me to rise."
	];
	
	currentThoughtIndex = 0;
	currentThought = '';
	isVisible = true;
	private thoughtInterval: any;

	ngOnInit(): void {
		this.currentThought = this.thoughts[0];
		this.startThoughtRotation();
	}

	ngOnDestroy(): void {
		if (this.thoughtInterval) {
			clearInterval(this.thoughtInterval);
		}
	}

	private startThoughtRotation(): void {
		this.thoughtInterval = setInterval(() => {
			this.isVisible = false;
			
			setTimeout(() => {
				this.currentThoughtIndex = (this.currentThoughtIndex + 1) % this.thoughts.length;
				this.currentThought = this.thoughts[this.currentThoughtIndex];
				this.isVisible = true;
			}, 500);
		}, 8000);
	}

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
