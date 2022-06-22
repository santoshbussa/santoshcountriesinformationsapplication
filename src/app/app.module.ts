import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CountryInformationsComponent } from './country-informations/country-informations.component';
import { CountriesAppcomponentComponent} from './countries-appcomponent/countries-appcomponent.component';
import { CountriesEffects } from './store/countries.effects';
import { CountriesDropDownComponent } from './countries-dropdown/countries-dropdown.component';
import { ListCommasPipe } from './pipes/list-commas.pipe';
import { CountryCurrenciesComponent } from './country-currencies/country-currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryInformationsComponent,
    CountriesAppcomponentComponent,
    CountriesDropDownComponent,
    ListCommasPipe,
    CountryCurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'NgRx Demo App',
      maxAge: 25, logOnly: environment.production
    }) : [],

    EffectsModule.forRoot([CountriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
