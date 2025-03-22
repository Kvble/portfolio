import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {
  @Input() text: string = '';
  @Input() link: string = '/';

  constructor(private router: Router) {}

  activate(event: Event) {
    const buttons = document.querySelectorAll('.navbutton');
    buttons.forEach(button => button.classList.remove('active'));

    const target = event.target as HTMLElement;
    target.classList.add('active');

    this.router.navigate([this.link]);
  }
}
