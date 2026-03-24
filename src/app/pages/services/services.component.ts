import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, Service } from '../../shared/constants/services.constant';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = SERVICES;
}