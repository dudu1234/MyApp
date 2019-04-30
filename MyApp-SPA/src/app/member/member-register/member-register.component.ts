import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-member-register',
  templateUrl: './member-register.component.html',
  styleUrls: ['./member-register.component.css']
})
export class MemberRegisterComponent implements OnInit {

  model: any = {};
  @Input() valuesFromParentComponent: [];
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {

  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration Successful');
    }, error => {
      this.alertify.error('registration process failed');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
