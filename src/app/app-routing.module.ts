import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { StoreComponent } from './components/store/store.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  {
    path: 'products',
    component: StoreComponent,
    title: 'Fake Store',
  },
  {
    path: 'products/:id',
    component: ItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())],
})
export class AppRoutingModule {}
