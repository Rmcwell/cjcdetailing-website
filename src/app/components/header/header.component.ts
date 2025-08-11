import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LucideIconsModule } from '../../lucide.module';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        RouterModule,
        LucideIconsModule
    ],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isMenuOpen = false;

    constructor(private router: Router) { }

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu(): void {
        this.isMenuOpen = false;
    }
}