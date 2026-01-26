import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TooltipService } from '../../services/tooltip.service';
import { WorkflowStep } from '../../models';
import { WORKFLOW_STEPS } from '../../data';

@Component({
	selector: 'app-workflow',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './workflow.component.html',
	styleUrl: './workflow.component.css',
})
export class WorkflowComponent {
	faStar = faStar;
	labels = WORKFLOW_STEPS;

	constructor(private tooltipService: TooltipService) {}

	showTooltip(label: WorkflowStep, labelElement: HTMLElement) {
		const rect = labelElement.getBoundingClientRect();

		this.tooltipService.openTooltip(label.description, {
			top: rect.bottom + window.scrollY + 8,
			left: rect.left + window.scrollX + (rect.width / 2),
		});
	}

	hideTooltip() {
		this.tooltipService.closeTooltip();
	}
}
