import { SkillItem } from '../models';
import {
	faBrain,
	faRobot,
	faWandMagicSparkles,
	faFileLines,
	faEye,
	faImage,
	faNetworkWired,
	faCloud,
	faCodeBranch,
	faDatabase,
	faCode,
	faMobile,
	faServer,
	faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
	faPython,
	faMicrosoft,
	faAngular,
	faJs,
	faHtml5,
	faSwift,
} from '@fortawesome/free-brands-svg-icons';

// AI & LLMs
export const AI_LLM_SKILLS: SkillItem[] = [
	{ label: 'LLMs', icon: faBrain },
	{ label: 'AI Agents', icon: faRobot },
	{ label: 'Prompt Optimization', icon: faWandMagicSparkles },
	{ label: 'Document Intelligence', icon: faFileLines },
	{ label: 'OCR', icon: faEye },
	{ label: 'Image & File Analysis', icon: faImage },
];

// Backend Development
export const BACKEND_SKILLS: SkillItem[] = [
	{ label: 'Python', icon: faPython },
	{ label: 'C#', icon: faCode },
	{ label: '.NET', icon: faMicrosoft },
	{ label: 'REST APIs', icon: faNetworkWired },
];

// Cloud & Platforms
export const CLOUD_SKILLS: SkillItem[] = [
	{ label: 'Microsoft Azure', icon: faCloud },
	{ label: 'Azure DevOps', icon: faServer },
	{ label: 'Git', icon: faCodeBranch },
];

// Frontend
export const FRONTEND_SKILLS: SkillItem[] = [
	{ label: 'Angular', icon: faAngular },
	{ label: 'JavaScript', icon: faJs },
	{ label: 'HTML · CSS', icon: faHtml5 },
	{ label: 'SwiftUI', icon: faSwift },
];

// Databases
export const DATABASE_SKILLS: SkillItem[] = [
	{ label: 'SQL Server', icon: faDatabase },
	{ label: 'MySQL', icon: faDatabase },
	{ label: 'MongoDB', icon: faDatabase },
];
