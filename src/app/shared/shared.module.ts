import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
    imports:      [ CommonModule ],
    declarations: [ LoaderComponent ],
    exports:      [
        LoaderComponent,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }
