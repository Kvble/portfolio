import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipService } from '../../services/tooltip.service';
import { WorkflowStep } from '../../models';
import { WORKFLOW_STEPS } from '../../data';

@Component({
	selector: 'app-workflow',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './workflow.component.html',
	styleUrl: './workflow.component.css',
})
export class WorkflowComponent {
	labels = WORKFLOW_STEPS;

	constructor(private tooltipService: TooltipService) {}

	showTooltip(label: WorkflowStep, labelElement: HTMLElement) {
		const rect = labelElement.getBoundingClientRect();

		this.tooltipService.openTooltip(label.description, {
			top: rect.top + window.scrollY,
			left: rect.left + window.scrollX,
		});
	}

	hideTooltip() {
		this.tooltipService.closeTooltip();
	}
}
