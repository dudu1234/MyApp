import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValuesService } from '../_services/values.service';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  valuesToChildComponent: Observable<any>;

  constructor(private http: HttpClient, private valuesService: ValuesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.valuesToChildComponent = this.valuesService.getValues('gender');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterModel(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
