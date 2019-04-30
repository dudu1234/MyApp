/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JsPlaygroundComponent } from './jsPlayground.component';

describe('JsPlaygroundComponent', () => {
  let component: JsPlaygroundComponent;
  let fixture: ComponentFixture<JsPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
