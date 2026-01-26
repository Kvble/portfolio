import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-clients',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './clients.component.html',
	styleUrl: './clients.component.css',
})
export class ClientsComponent implements AfterViewInit {
	@ViewChild('logosContainer') logosContainer!: ElementRef;
	@ViewChild('logosContent') logosContent!: ElementRef;
	
	clients = [
		{ name: 'MgM Robotics', logo: '/assets/images/clients/mgm-robotics.png' },
		{ name: 'MSC Technology', logo: '/assets/images/clients/msc-technology.png' },
		{ name: 'Avanade', logo: '/assets/images/clients/avanade.svg' },
	];
	
	needsCarousel = false;
	repeatedClients: any[] = [];
	
	constructor() {
		this.repeatedClients = [...this.clients, ...this.clients];
	}
	
	ngAfterViewInit(): void {
		setTimeout(() => this.checkOverflow(), 100);
	}
	
	@HostListener('window:resize')
	onResize() {
		this.checkOverflow();
	}
	
	private checkOverflow() {
		// Force carousel on mobile
		if (window.innerWidth <= 768) {
			this.needsCarousel = true;
			return;
		}
		
		// On desktop/tablet, check if content overflows
		if (this.logosContainer && this.logosContent) {
			const containerWidth = this.logosContainer.nativeElement.offsetWidth;
			const contentWidth = this.logosContent.nativeElement.scrollWidth;
			this.needsCarousel = contentWidth > containerWidth;
		}
	}
}
