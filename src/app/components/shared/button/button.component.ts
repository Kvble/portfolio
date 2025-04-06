import { Component, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
	@Input() href: string = '';
	@Input() icon!: IconDefinition;
	@Input() label: string = '';
}
