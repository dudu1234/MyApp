import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  private allValues = [];

  constructor(private http: HttpClient) {}

  getValues(category: string) {
    // return this.allValues.map(x => x.category === category);
    return this.http.get(`http://localhost:5000/api/AppKeyValues/${category}`);
  }

  private initialize() {
    return this.http.get('http://localhost:5000/api/AppKeyValues').pipe(
        map((response: any) => {
          this.allValues = response;
        }));
  }
}
