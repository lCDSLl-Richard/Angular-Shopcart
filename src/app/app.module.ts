import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/store/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardComponent, CartComponent, StoreComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
