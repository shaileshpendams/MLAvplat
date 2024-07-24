import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AccuracyComponent } from './accuracy/accuracy.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FDNComponent } from './fdn/fdn.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { StorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    AccuracyComponent,
    HotelsComponent,
  ],
  imports: [
    BrowserModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), 
    // provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    StorageModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
