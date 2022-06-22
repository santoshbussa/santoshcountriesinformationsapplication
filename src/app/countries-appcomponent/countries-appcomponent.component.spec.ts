import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesAppcomponentComponent } from './countries-appcomponent.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromCountries from '../app-store/reducers';
import { CountryActions, CountriesActions } from '../app-store/actions';

describe('CountriesContainerComponent with mock store', () => {
  let countriesAppcomponentComponent: CountriesAppcomponentComponent;
  let fixture: ComponentFixture<CountriesAppcomponentComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesAppcomponentComponent],
      providers: [provideMockStore({
        selectors: [
          { selector: fromCountries.selectRegions, value: [] }
        ]
      })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesAppcomponentComponent);
    countriesAppcomponentComponent = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(countriesAppcomponentComponent).toBeTruthy();
  });

  describe('toggleDetails method', () => {

    it("Should call getAllCountries if the selectedOption property is 'Europe'", () => {
      const selected = 'Europe';
      let getAllCountries = spyOn(countriesAppcomponentComponent, 'getAllCountries');
      countriesAppcomponentComponent.getCurrentOption(selected);
      expect(getAllCountries).toHaveBeenCalled();
    });

    it("Should call getAllCountries if the selectedOption property is 'Asia'", () => {
      const selected = 'Asia';
      let getAllCountries = spyOn(countriesAppcomponentComponent, 'getAllCountries');
      countriesAppcomponentComponent.getCurrentOption(selected);
      expect(getAllCountries).toHaveBeenCalled();
    });

    it("Should call getCountryDetails & getCurrencies if the selectedOption property is a country", () => {
      const selected = 'England';
      let getCountryDetails = spyOn(countriesAppcomponentComponent, 'getCountryDetails');
      let getCurrencies = spyOn(countriesAppcomponentComponent, 'getCurrencies');
      countriesAppcomponentComponent.getCurrentOption(selected);
      expect(getCountryDetails).toHaveBeenCalled();
      expect(getCurrencies).toHaveBeenCalled();
    });
  });

  it('Should dispatch CountriesActions.getCountries action when getAllCountries() is called', () => {
    const $event = 'region';
    const action = CountriesActions.getCountries({ region: $event });
    countriesAppcomponentComponent.getAllCountries($event);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('Should dispatch CountryActions.getCountry action when getCountryDetails() is called', () => {
    const $event = 'country name';
    const action = CountryActions.getCountry({ name: $event });
    countriesAppcomponentComponent.getCountryDetails($event);
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('Should dispatch CountryActions.getCountryCurrencies action when getCurrencies() is called', () => {
    const action = CountryActions.getCountryCurrencies();
    countriesAppcomponentComponent.getCurrencies();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});