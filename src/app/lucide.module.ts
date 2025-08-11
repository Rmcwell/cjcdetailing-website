import { NgModule } from '@angular/core';
import {
    LucideAngularModule,
    Phone,
    CalendarDays
} from 'lucide-angular';

@NgModule({
    imports: [
        LucideAngularModule.pick({
            Phone,
            CalendarDays
        })
    ],
    exports: [LucideAngularModule]
})
export class LucideIconsModule { }