import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [],
    imports: [CommonModule, BrowserAnimationsModule, MatButtonModule],
    exports: [BrowserAnimationsModule, MatButtonModule],
})
export class MaterialModule {}
