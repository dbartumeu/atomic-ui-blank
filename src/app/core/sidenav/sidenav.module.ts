import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    AtScrollbarModule,
    AtSidenavModule
} from 'ngx-atomic';

import {SidenavComponent} from './sidenav.component';
import {MatButtonModule, MatIconModule, MatListModule, MatToolbarModule} from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        MatButtonModule,
        AtScrollbarModule,
        AtSidenavModule.forRoot()
    ],
    declarations: [
        SidenavComponent
    ],
    exports: [
        SidenavComponent
    ]
})
export class SidenavModule {
}
