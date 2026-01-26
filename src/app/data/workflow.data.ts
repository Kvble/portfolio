import { WorkflowStep } from '../models';
import {
	faClipboardList,
	faCode,
	faFlask,
	faRocket
} from '@fortawesome/free-solid-svg-icons';

export const WORKFLOW_STEPS: WorkflowStep[] = [
	{
		name: 'Planning',
		description: 'Requirements analysis and project planning.',
		icon: faClipboardList,
	},
	{
		name: 'Development',
		description: 'Building and implementing features.',
		icon: faCode,
	},
	{
		name: 'Testing',
		description: 'Quality assurance and validation.',
		icon: faFlask,
	},
	{
		name: 'Deployment',
		description: 'Release to production and maintenance.',
		icon: faRocket,
	},
];
