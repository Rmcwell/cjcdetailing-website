import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterModule
    ],
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {
    stars = Array(5).fill(0);

    services = [
        {
            image: 'assets/images/jeep-full.jpg',
            title: 'Great Maintenance Package',
            description: 'Regular care to keep your vehicle looking its best with exterior wash, wax, and interior cleaning.',
            features: ['Hand wash & dry', 'Tire & wheel cleaning', 'Interior vacuum & wipe down']
        },
        {
            image: 'assets/images/ferrari-inside.jpg',
            title: 'Full Interior/Exterior Detail',
            description: 'Complete transformation with deep cleaning, paint correction, and premium protection.',
            features: ['Paint decontamination', 'Machine polish & paint correction', 'Deep interior cleaning']
        },
        {
            image: 'https://images.unsplash.com/photo-1610647929723-a8922852cd44?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'XPEL Tinting & Protection',
            description: 'Professional window tinting and paint protection film installation.',
            features: ['Premium ceramic tint', 'Paint protection film', 'Ceramic coating application']
        }
    ];

    whyChooseUs = [
        {
            title: 'Experienced Professionals',
            description: 'Our team has years of experience and training in the latest detailing techniques.'
        },
        {
            title: 'Premium Products',
            description: 'We use only the highest quality detailing products and equipment for superior results.'
        },
        {
            title: 'Attention to Detail',
            description: 'We meticulously clean every inch of your vehicle with careful attention to the smallest details.'
        },
        {
            title: 'Satisfaction Guaranteed',
            description: 'Your satisfaction is our priority. We\'re not happy until you\'re thrilled with the results.'
        }
    ];

    testimonials = [
        {
            text: 'If you\'re not going to CJC Detailing, you\'re going to the wrong place! 100+% satisfied with the work Cameron and his crew did on my Jeep! They went over & beyond what I expected. I will be a return customer!',
            author: 'Bradley R.',
            role: 'Jeep Owner',
            initials: 'BR'
        },
        {
            text: 'Was very happy with the service I received from CJC. Had the exterior cleaned and detailed on my 2012 ram 1500 which has 200,000 miles on it. Drivers side truck bed had some deep scratches and they are completely gone. Will be returning and would reccomend. Thank you!',
            author: 'Skip F.',
            role: 'Ram 1500 Owner',
            initials: 'SF'
        },
        {
            text: 'Cameron always goes far above the standard. Clean shop and prompt service. Received the B service on my truck and it looked like it just rolled off the showroom. Check out CJC for all of your detailing problems and I’m sure Cameron will find a solution for you.',
            author: 'Matthew S.',
            role: 'Truck Owner',
            initials: 'MS'
        }
    ];
}