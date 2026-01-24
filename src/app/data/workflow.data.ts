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
		description: 'Analisi requisiti e pianificazione del progetto.',
		icon: faClipboardList,
	},
	{
		name: 'Development',
		description: 'Sviluppo e implementazione delle funzionalità.',
		icon: faCode,
	},
	{
		name: 'Testing',
		description: 'Test e validazione della qualità del software.',
		icon: faFlask,
	},
	{
		name: 'Deployment',
		description: 'Rilascio in produzione e manutenzione.',
		icon: faRocket,
	},
];
