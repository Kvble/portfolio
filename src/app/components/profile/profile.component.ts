import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit, OnDestroy {
	private titles = [
		"AI Software Engineer",
		"Data Science Student",
		".NET Software Engineer",
		"Crypto & Forex Trader",
		"Backend Software Engineer",
	];

	thoughts = [
		"Building intelligent systems means designing for constraints, trade-offs, and long-term behavior.",
		"Scalability, performance, and maintainability are decisions you make early, not problems you fix later.",
		"Artificial intelligence creates value only when it fits naturally into the system it improves.",
		"The temporary discomfort of discipline is better than the permanent pain of regret.",
		"Everything negative — pressure, challenges — is all an opportunity for me to rise."
	];

	typewriterText = '';
	currentThoughtIndex = 0;
	currentThought = '';
	isVisible = true;
	private thoughtInterval: ReturnType<typeof setInterval> | null = null;
	private thoughtTimeout: ReturnType<typeof setTimeout> | null = null;
	private typewriterTimer: ReturnType<typeof setTimeout> | null = null;
	private destroyed = false;

	ngOnInit(): void {
		this.currentThought = this.thoughts[0];
		this.startThoughtRotation();
		this.runTypewriter();
	}

	ngOnDestroy(): void {
		this.destroyed = true;
		if (this.thoughtInterval) clearInterval(this.thoughtInterval);
		if (this.thoughtTimeout) clearTimeout(this.thoughtTimeout);
		if (this.typewriterTimer) clearTimeout(this.typewriterTimer);
	}

	private startThoughtRotation(): void {
		this.thoughtInterval = setInterval(() => {
			this.isVisible = false;

			this.thoughtTimeout = setTimeout(() => {
				this.currentThoughtIndex = (this.currentThoughtIndex + 1) % this.thoughts.length;
				this.currentThought = this.thoughts[this.currentThoughtIndex];
				this.isVisible = true;
			}, 500);
		}, 8000);
	}

	private runTypewriter(): void {
		let titleIndex = 0;

		const loop = () => {
			if (this.destroyed) return;
			const text = this.titles[titleIndex];

			this.typeChar(text, 0, 30, () => {
				this.typewriterTimer = setTimeout(() => {
					this.deleteChar(text.length, 40, () => {
						titleIndex = (titleIndex + 1) % this.titles.length;
						loop();
					});
				}, 1500);
			});
		};

		loop();
	}

	private typeChar(text: string, index: number, delay: number, onDone: () => void): void {
		if (this.destroyed) return;
		if (index > text.length) { onDone(); return; }

		this.typewriterText = text.substring(0, index);
		this.typewriterTimer = setTimeout(() => this.typeChar(text, index + 1, delay, onDone), delay);
	}

	private deleteChar(length: number, delay: number, onDone: () => void): void {
		if (this.destroyed) return;
		if (length < 0) { onDone(); return; }

		this.typewriterText = this.typewriterText.substring(0, length);
		this.typewriterTimer = setTimeout(() => this.deleteChar(length - 1, delay, onDone), delay);
	}
}
