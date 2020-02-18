import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { UiModule } from '@mdv18/ui';
import { AppRoutingModule } from './app-routing.module';
import { CoreStateModule } from '@mdv18/core-state';
import { CoreDataModule } from '@mdv18/core-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@mdv18/material';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    CoreStateModule,
    CoreDataModule,
    UiModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
