import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent, title: 'cart' },
  {
    path: '',
    component: StoreComponent,
    title: 'Fake Store',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
