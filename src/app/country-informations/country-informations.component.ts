import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'country-informations',
  templateUrl: './country-informations.component.html',
  styleUrls: ['./country-informations.component.css']
})

export class CountryInformationsComponent implements OnInit {

  @Input() countryDetails!: Country | any;
  @Input() countryCurrencies: string[] | any = [];
  @Input() selectedOption: string = '';

  assetsUrl: string = 'https://www.clade.co.uk/assets/images/flags/';

  toggleDetails() {
    return (this.selectedOption === '' ||
      this.selectedOption === 'Asia' ||
      this.selectedOption === 'Europe') ? false : true;
  };

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = '';
  }

}
