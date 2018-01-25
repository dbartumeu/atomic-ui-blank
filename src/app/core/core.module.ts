import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconRegistry} from '@angular/material';
import {AtCommonModule, AtMediaModule, AtLayoutModule} from 'ngx-atomic';
import {ToolbarModule} from './toolbar/toolbar.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {CoreComponent} from './core.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AtCommonModule,
        AtMediaModule,
        AtLayoutModule,
        ToolbarModule,
        SidenavModule,
    ],
    exports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AtMediaModule,
        AtLayoutModule
    ],
    declarations: [
        CoreComponent,
    ],
    providers: [
        MatIconRegistry
    ],
})
export class CoreModule {
}
