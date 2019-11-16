import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugPanelComponent } from './counter/debug-panel/debug-panel.component';
import { OrderSheetComponent } from './counter/order-sheet/order-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugPanelComponent,
    OrderSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
