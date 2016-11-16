import { Routes, RouterModule } from '@angular/router';
import {HtmlRoutes} from './components/html-routes';


export const routes: Routes = [
    ...HtmlRoutes
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [];
