import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CurrencyConverterComponent } from './privacypolicy/currency-converter/currency-converter.component';
import { WalletTrackerComponent } from './privacypolicy/wallet-tracker/wallet-tracker.component';


const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: "full" },
  { path: 'privacypolicy-wallettracker', component: WalletTrackerComponent},
  { path: 'privacypolicy-currencyconverter', component: CurrencyConverterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
