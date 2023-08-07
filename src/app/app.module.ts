import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { CardComponent } from './components/store/card/card.component';
import { StoreComponent } from './components/store/store.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CartComponent,
    StoreComponent,
    CartItemComponent,
    ItemComponent,
    TruncatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
