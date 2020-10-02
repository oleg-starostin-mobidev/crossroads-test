import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './commits.component';

const commitsRoutes: Routes = [
    {
        path: 'commits',
        component: CommitsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(commitsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CommitsRoutingModule { }
