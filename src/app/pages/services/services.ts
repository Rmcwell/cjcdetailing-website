import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideIconsModule } from '../../lucide.module';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [
        RouterModule,
        LucideIconsModule
    ],
    templateUrl: './services.html',
    styleUrls: ['./services.css']
})
export class ServicesComponent {
    services = [
        {
          id: 'A',
          category: 'Maintenance',
          title: 'A Service | Great Maintenance Package',
          description: 'Our maintenance detail is designed to keep your vehicle looking its best between full detailing services. This package includes all the essentials to maintain your vehicle\'s appearance.',
          image: 'https://images.unsplash.com/photo-1600880292089-90a6a0d45276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          price: 'Starting at $120',
          buttonText: 'Book Now',
          features: [
            'Hand wash & dry',
            'Tire & wheel cleaning',
            'Interior vacuum',
            'Dashboard & console wipe down',
            'Window cleaning',
            'Spray wax application'
          ],
          reverse: false
        },
        {
          id: 'B',
          category: 'Complete Package',
          title: 'B Service | Full Exterior & Minor Interior',
          description: 'Our signature full detail service provides comprehensive cleaning and protection for both the interior and exterior of your vehicle, restoring its showroom appearance.',
          image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          price: 'Starting at $299',
          buttonText: 'Book Now',
          features: [
            'Paint decontamination',
            'Machine polish',
            'Paint sealant application',
            'Deep interior cleaning',
            'Leather conditioning',
            'Engine bay cleaning'
          ],
          reverse: true
        },
        {
          id: 'C',
          category: 'Complete Package',
          title: 'C Service | Full Exterior & Full Interior',
          description: 'Protect your vehicle from the elements and enhance its appearance with our professional window tinting and paint protection film services.',
          image: 'https://images.unsplash.com/photo-1621611175054-08b4be2b67a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
          price: 'Starting at $425',
          buttonText: 'Book Now',
          features: [
            'Premium ceramic window tint',
            'Heat & UV rejection',
            'XPEL paint protection film',
            'Self-healing technology',
            'Ceramic coating options',
            '10-year warranty'
          ],
          reverse: false
        },
        {
          id: 'window-tinting',
          category: 'Premium Protection',
          title: 'XPEL Window Tinting',
          description: 'Make your vehicle stand out with our customization services. From chrome delete to wheel refinishing, we can help you achieve a unique look.',
          image: '',
          price: 'Starting at $250',
          buttonText: 'Book Now',
          features: [
            'Chrome delete',
            'Wheel refinishing',
            'Caliper painting',
            'Interior trim wrapping',
            'Headlight restoration',
            'Accent lighting'
          ],
          reverse: true
        }
      ];
    
      faqs = [
        {
          question: 'How long does a full detail take?',
          answer: 'A full interior and exterior detail typically takes 6-8 hours, depending on the size and condition of the vehicle. We recommend scheduling a full day for your appointment.'
        },
        {
          question: 'How often should I get my vehicle detailed?',
          answer: 'For optimal results, we recommend a maintenance detail every 4-6 weeks and a full detail every 6 months. However, this can vary based on your driving conditions and how you use your vehicle.'
        },
        {
          question: 'Do I need to prepare my vehicle before bringing it in?',
          answer: 'We ask that you remove personal belongings from your vehicle before your appointment. This helps us thoroughly clean all areas and ensures your valuables remain with you.'
        },
        {
          question: 'How long does window tinting take to cure?',
          answer: 'Window tint typically takes 3-5 days to fully cure. During this time, we recommend keeping your windows up and avoiding cleaning them to ensure proper adhesion.'
        },
        {
          question: 'What\'s the difference between wax and ceramic coating?',
          answer: 'Wax provides temporary protection (2-3 months) and a glossy finish. Ceramic coatings offer longer-lasting protection (2-5 years), superior hardness, and enhanced hydrophobic properties that make maintenance easier.'
        }
      ];
    
      onBookService(serviceId: string): void {
        // Navigate to contact page or handle booking logic
        console.log('Booking service:', serviceId);
        // Example: this.router.navigate(['/contact']);

        if (serviceId == "A" || serviceId == "B" || serviceId == "C")
        {
          window.open('https://app.urable.com/virtual-shop/ZfzQ7ZQYrM7cAKNm1VWt/3P2cGG0UIKx7PuUyHF3E', '_blank', 'noopener,noreferrer');
        }
        else if (serviceId == "window-tinting")
        {
          window.open('https://app.urable.com/virtual-shop/ZfzQ7ZQYrM7cAKNm1VWt/eYBWumnLJdJ31Udnrw6r', '_blank', 'noopener,noreferrer');
        }
      }
}