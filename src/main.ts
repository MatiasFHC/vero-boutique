import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainComponent } from './app/component/main/main.component';
import { ProductosComponent } from './app/component/productos/productos.component';
import { ProductoSeleccionadoComponent } from './app/component/producto-seleccionado/producto-seleccionado.component';
import { NosotrosComponent } from './app/component/nosotros/nosotros.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', component: MainComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'producto-seleccionado/:id', component: ProductoSeleccionadoComponent}
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), 
    importProvidersFrom(HttpClientModule, RouterModule, MatToolbarModule, BrowserAnimationsModule), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"vero-boutique","appId":"1:590897962611:web:ff1c3af2c5f047e4af5406","storageBucket":"vero-boutique.firebasestorage.app","apiKey":"AIzaSyB1PtWONPVR3z1ea_GN9zHIUJ42yaATc5M","authDomain":"vero-boutique.firebaseapp.com","messagingSenderId":"590897962611"})), provideFirestore(() => getFirestore())]
});