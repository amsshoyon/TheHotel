import { NgModule } from '@angular/core';
import { MatBadgeModule, MatToolbarModule, MatIconModule, MatSidenavModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule
    ]
})

export class MaterialModule {}