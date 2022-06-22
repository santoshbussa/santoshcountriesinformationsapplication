import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInformationsComponent} from './country-informations.component';

describe('CountryInformationsComponent', () => {
  let countryInformationsComponent: CountryInformationsComponent;
  let fixture: ComponentFixture<CountryInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountryInformationsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInformationsComponent);
    countryInformationsComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(countryInformationsComponent).toBeTruthy();
  });

  describe('toggleDetails method', () => {

    it("should return false OnInit, when the selectedOption property equals ''", () => {
      countryInformationsComponent.selectedOption = '';
      expect(countryInformationsComponent.toggleDetails()).toBe(false);
    });

    it("should return false if the selectedOption property equals 'Asia'", () => {
      countryInformationsComponent.selectedOption = 'Asia';
      expect(countryInformationsComponent.toggleDetails()).toBe(false);
    });

    it("should return false if the selectedOption property equals 'Europe'", () => {
      countryInformationsComponent.selectedOption = 'Europe';
      expect(countryInformationsComponent.toggleDetails()).toBe(false);
    });

    it("should return true if the selectedOption property is a country", () => {
      countryInformationsComponent.selectedOption = 'England';
      expect(countryInformationsComponent.toggleDetails()).toBe(true);
    });
  });
});
