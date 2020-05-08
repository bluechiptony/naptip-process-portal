import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { SharedService } from './shared/shared.service';
import { ToastrModule } from 'ngx-toastr';
import { VictimStatus } from './victim/victim.module';
import { VictimService } from './victim/victim-service.service';
import { ReportService } from './report/report-service.service';
import { SuspectService } from './suspect/suspect-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({}),
  ],
  providers: [
    DatePipe,
    CurrencyPipe,
    SharedService,
    VictimService,
    ReportService,
    SuspectService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
