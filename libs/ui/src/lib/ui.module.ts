import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@mdv18/material';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [MaterialModule, CommonModule, RouterModule],
  declarations: [
    LoginComponent,
    NotFoundComponent,
    ToolbarComponent,
    ListComponent,
    FormComponent
  ],
  exports: [
    LoginComponent,
    NotFoundComponent,
    ToolbarComponent,
    ListComponent,
    FormComponent
  ]
})
export class UiModule {}
