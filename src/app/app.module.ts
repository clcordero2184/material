import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material Modules

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, MaterialModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
