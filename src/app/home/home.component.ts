import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      title: 'Microsoft 365 E3 - Unattended License',
      price: 'US$ 20.99/month',
      prices: ['US$ 20.99/month', 'US$ 20.99/month', 'US$ 20.99/month'],
      description: 'Services included in Business Standard plus advanced cyber threat protection for businesses with up to 300 employees'
    },
    {
      title: 'Microsoft 365 E3 - Unattended License',
      price: 'US$ 20.99/month',
      prices: ['US$ 20.99/month', 'US$ 20.99/month', 'US$ 20.99/month'],
      description: 'Services included in Business Standard plus advanced cyber threat protection for businesses with up to 300 employees'
    },
    {
      title: 'Microsoft 365 E3 - Unattended License',
      price: 'US$ 20.99/month',
      prices: ['US$ 20.99/month', 'US$ 20.99/month', 'US$ 20.99/month'],
      description: 'Services included in Business Standard plus advanced cyber threat protection for businesses with up to 300 employees'
    },
    
    // Repeat the above object to create additional cards
  ];
}
