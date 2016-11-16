import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import './rxjs-extensions';
import { MaterializeDirective } from "angular2-materialize";
import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import { MenuModule, AutoCompleteModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { LoadersCssModule } from 'angular2-loaders-css';

import { routing, routedComponents } from './app-routes';

import { DashboardComponent } from './components/html/dashboard.component';
import { DemoAppChartsModule } from './components/html/charts.module';
import { ContainerComponent } from './container.component';

@NgModule({
    imports: [
        BrowserModule
        , FormsModule
        , routing
        , HttpModule
        , TranslateModule.forRoot()
        , MenuModule
        , AutoCompleteModule
        , MessagesModule
        , GrowlModule
        , LoadersCssModule        
        , DemoAppChartsModule
    ],
    declarations: [
        ContainerComponent,
        DashboardComponent        
    ],
    providers: [        
        { provide: LocationStrategy, useClass: HashLocationStrategy },       
    ],
    bootstrap: [
        ContainerComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


