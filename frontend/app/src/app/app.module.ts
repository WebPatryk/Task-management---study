import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { EditListComponent } from './pages/edit-list/edit-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {WebReqInterceptor} from "./services/web-req.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MaterialExampleModule} from './material.module';
// import {InputOverviewExample} from './input-overview-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    SignUpComponent,
    LoginComponent,
    NewTaskComponent,
    NewListComponent,
    EditTaskComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
