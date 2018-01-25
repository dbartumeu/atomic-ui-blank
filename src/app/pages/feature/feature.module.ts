import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AtScrollbarModule, AtLayoutModule} from 'ngx-atomic';

import {FEATURE_COMPONENTS, FeatureRoutingModule} from './feature-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FlexLayoutModule,
        AtLayoutModule,
        AtScrollbarModule,
        FeatureRoutingModule
    ],
    declarations: [
        FEATURE_COMPONENTS,
    ],
    exports: [
        FEATURE_COMPONENTS,
    ],
    providers: [],
})
export class FeatureModule {
}