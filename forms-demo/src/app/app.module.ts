import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    FormsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
