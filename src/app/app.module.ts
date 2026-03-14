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

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'privacypolicy/wallet_tracker', component: WalletTrackerComponent},
  { path: 'privacypolicy/currency_converter', component: CurrencyConverterComponent},
  
];

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
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
