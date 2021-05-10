import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';

import { LoginComponent } from './login/login.component';
import { ButtonsComponent } from './login/components/buttons/buttons.component';
import { ModalComponent } from './login/components/modal/modal.component';
import { NewsComponent } from './login/components/news/news.component';


@NgModule({
    declarations: [
        FeaturesComponent,
        LoginComponent,
        ButtonsComponent,
        ModalComponent,
        NewsComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports:[ FeaturesComponent ]
}
)
export class FeaturesModule { }
