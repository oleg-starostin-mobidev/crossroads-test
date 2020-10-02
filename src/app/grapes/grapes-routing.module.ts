import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrapesComponent } from './grapes.component';

const grapesRoutes: Routes = [
    {
        path: '',
        component: GrapesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(grapesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class GrapesRoutingModule { }
