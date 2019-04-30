/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgxBootstrapExamplesComponent } from './ngx-bootstrap-examples.component';

describe('NgxBootstrapExamplesComponent', () => {
  let component: NgxBootstrapExamplesComponent;
  let fixture: ComponentFixture<NgxBootstrapExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBootstrapExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBootstrapExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
