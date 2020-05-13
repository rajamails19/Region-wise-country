import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../helpers/core.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CountryList } from 'src/app/models/country-list';
import { CountryAdd } from 'src/app/actions/region.actions';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent {
  title = 'angular-task';
  regions = [{ id: 'europe', value: 'Europe' }, { id: 'asia', value: 'Asia' }];
  regionCountryList = [];
  countryList = [];
  selectedCountryValue = '';
  countryDetails: any;

  constructor(private coreService: CoreService,
    public store: Store<{ country: CountryList[] }>) {
    store.pipe(select('country')).subscribe(res => {
      this.regionCountryList = res;
    });
  }

  onRegionSelect(value) {
    if (value !== '') {
      const countryObject = this.regionCountryList.find(r => r.region === value);
      if (!countryObject) {
        this.coreService.getCountry(value).then((response: any) => {
          this.countryList = this.mapCountryList(response);
          const countryList = new CountryList();
          countryList.region = value;
          countryList.countryList = this.countryList;
          this.store.dispatch(new CountryAdd(countryList));
        });
      } else {
        this.countryList = countryObject.countryList;
      }
    }
  }

  mapCountryList(countryList) {
    countryList.map(obj => {
      obj.id = obj.name;
      obj.value = obj.name;
    });
    return countryList;
  }

  onCountrySelect(value) {
    this.selectedCountryValue = value;
  }

  loadCountry() {
    this.countryDetails = this.countryList.find(c => c.name === this.selectedCountryValue);
  }
}
