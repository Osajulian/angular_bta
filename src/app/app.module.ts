import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NgIfComponent } from './components/directives/ngIf/ngIf.component';
import { NgswitchComponent } from './components/directives/ngswitch/ngswitch.component';
import { NgForComponent } from './components/directives/ngFor/ngFor.component';
import { InputFormatDirective } from './components/directives/directive/input-format.directive';
import { TemplateFormsComponent } from './components/forms/template-forms/template-forms.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxBootstrapComponent } from './components/ngx-bootstrap/ngx-bootstrap.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    NgIfComponent,
    NgswitchComponent,
    NgForComponent,
    InputFormatDirective,
    TemplateFormsComponent,
    NgxBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
