import { NgModule, Optional, SkipSelf } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { GithubService } from './github.service';

@NgModule({
    imports: [],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [GithubService]
})

export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
