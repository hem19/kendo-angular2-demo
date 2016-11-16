import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { ChartModule } from 'primeng/primeng';
import { TranslateModule, TranslatePipe } from 'ng2-translate/ng2-translate';


@NgModule({
    imports: [CommonModule, ChartModule, ChartsModule, TranslateModule.forRoot()],
    exports: [ChartsModule ],
    declarations: [],
    providers: []
})
export class DemoAppChartsModule { }
