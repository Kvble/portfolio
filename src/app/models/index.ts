import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * Represents a skill item with label and icon
 */
export interface SkillItem {
	label: string;
	icon: IconDefinition;
}

/**
 * Represents a workflow step with name and description
 */
export interface WorkflowStep {
	name: string;
	description: string;
	icon?: IconDefinition;
}

/**
 * Configuration for the counter component
 */
export interface CounterConfig {
	value: number;
	label: string;
	suffix?: string;
	animated?: boolean;
	delay?: number;
	duration?: number;
}

/**
 * Represents a project with images carousel
 */
export interface Project {
	title: string;
	url: string;
	image: string;
}
