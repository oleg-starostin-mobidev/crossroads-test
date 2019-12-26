import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitsComponent } from './commits.component';
import { CommitsListComponent } from './commits-list/commits-list.component';
import { CommitItemComponent } from './commit-item/commit-item.component';
import { SharedModule } from '../shared/shared.module';
import { CommitsRoutingModule } from './commits-routing.module'



@NgModule({
  declarations: [
    CommitsComponent,
    CommitsListComponent,
    CommitItemComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    CommitsRoutingModule
  ]
})
export class CommitsModule { }
