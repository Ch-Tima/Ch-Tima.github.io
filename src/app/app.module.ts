import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CurrencyConverterComponent } from './privacypolicy/currency-converter/currency-converter.component';
import { WalletTrackerComponent } from './privacypolicy/wallet-tracker/wallet-tracker.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrencyConverterComponent,
    WalletTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
