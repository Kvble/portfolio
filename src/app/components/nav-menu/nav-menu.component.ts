import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from '../nav-button/nav-button.component'; // Import corretto

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, NavButtonComponent], // Import aggiunto
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const buttons = this.el.nativeElement.querySelectorAll('.navbutton');
    const indicator = this.el.nativeElement.querySelector('.nav-indicator');

    buttons.forEach((btn: HTMLElement) => {
      btn.addEventListener('click', () => {
        const { offsetLeft, offsetWidth } = btn;

        // Sposta l'indicatore sotto il pulsante selezionato
        this.renderer.setStyle(indicator, 'left', `${offsetLeft}px`);
        this.renderer.setStyle(indicator, 'width', `${offsetWidth}px`);

        // Rimuove la classe attiva dagli altri pulsanti e la aggiunge a quello selezionato
        buttons.forEach((button: HTMLElement) => {
          button.classList.remove('active');
        });

        btn.classList.add('active');
      });
    });

    // Imposta la posizione iniziale sulla voce attiva (Home)
    const initialActive = this.el.nativeElement.querySelector('.navbutton.active') || buttons[0];
    if (initialActive) {
      const { offsetLeft, offsetWidth } = initialActive;
      this.renderer.setStyle(indicator, 'left', `${offsetLeft}px`);
      this.renderer.setStyle(indicator, 'width', `${offsetWidth}px`);
    }
  }
}

