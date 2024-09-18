import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { FooterComponent } from './footer/footer.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';

@Component({
  selector: 'app-show-case',
  standalone: true,
  imports: [FooterComponent, P1Component, P2Component, P3Component, P4Component],
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.css'
})
export class ShowCaseComponent {


}
