import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesDropDownComponent} from './countries-dropdown.component';
import { StoreModule } from '@ngrx/store';

describe('CountriesDropDownComponent', () => {
  let countriesDropDownComponent: CountriesDropDownComponent;
  let fixture: ComponentFixture<CountriesDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountriesDropDownComponent]
      , imports: [StoreModule.forRoot({})]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesDropDownComponent);
    countriesDropDownComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be created', () => {
    expect(countriesDropDownComponent).toBeTruthy();
  });

  it('Should emit an event when an option is selected', () => {
    const selected = 'Europe';
    const select = countriesDropDownComponent.regionsForm.controls.area.setValue(selected);
    spyOn(countriesDropDownComponent.selectedItemEvent, 'emit');
    countriesDropDownComponent.getSelectedOption();
    expect(countriesDropDownComponent.selectedItemEvent.emit).toHaveBeenCalledWith(selected);
  });
});
