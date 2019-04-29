import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IndexComponent} from './component/index/index.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { TorneoComponent } from './component/torneo/torneo.component';

const appRoutes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'torneo', component: TorneoComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        TorneoComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'}),
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
