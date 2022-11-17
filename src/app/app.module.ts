import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './main/app.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent } from  './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoreState } from './core/state/store-state';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'formClient',
    loadChildren: () =>
      import('./client/client.module').then((m) => m.ClientModule)
  },
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./catalogue/catalogue.module').then((m) => m.CatalogueModule)
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./store/store.module').then((m) => m.StoreModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([StoreState])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
