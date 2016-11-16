import {
    Component, OnInit, ComponentFactoryResolver, HostListener, ComponentFactory, ComponentRef,
    ViewContainerRef, ReflectiveInjector, ElementRef
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { DemoAppChartsModule } from './charts.module';


@Component({
    selector: 'dashboard',
    templateUrl: './app/components/html/dashboard.component.html',
    styleUrls: ['./app/components/html/dashboard.component.css'],
    entryComponents: []
})
export class DashboardComponent {
    private seriesData: number[] = [1, 2, 3, 5];
}