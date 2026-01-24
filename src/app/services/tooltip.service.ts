import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from '../components/shared/tooltip/tooltip.component';
import { ComponentRef } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TooltipService {
	private overlayRef: OverlayRef | null = null;
	private tooltipComponentRef: ComponentRef<TooltipComponent> | null = null;

	constructor(private overlay: Overlay) {}

	openTooltip(content: string, position: { top: number; left: number }) {
		// Rimuovi il precedente tooltip se esiste
		if (this.overlayRef) {
			this.overlayRef.dispose();
		}

		const overlayConfig = this.overlay
			.position()
			.global()
			.top(`${position.top}px`)
			.left(`${position.left}px`);

		// Crea l'overlay
		this.overlayRef = this.overlay.create({
			positionStrategy: overlayConfig,
			hasBackdrop: false,
			scrollStrategy: this.overlay.scrollStrategies.reposition(),
		});

		// Crea il portale per il componente Tooltip
		const tooltipComponentPortal = new ComponentPortal(TooltipComponent);

		// Attacca il portale all'overlay e ottieni il riferimento al componente
		this.tooltipComponentRef = this.overlayRef.attach(
			tooltipComponentPortal
		);

		// Assegna il contenuto al componente Tooltip
		if (this.tooltipComponentRef) {
			this.tooltipComponentRef.instance.content = content;
		}
	}

	closeTooltip() {
		if (this.overlayRef) {
			this.overlayRef.dispose();
			this.tooltipComponentRef = null; // Pulisce il riferimento al componente
		}
	}
}
