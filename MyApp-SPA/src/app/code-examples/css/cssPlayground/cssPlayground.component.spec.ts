/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CssPlaygroundComponent } from './cssPlayground.component';

describe('CssPlaygroundComponent', () => {
  let component: CssPlaygroundComponent;
  let fixture: ComponentFixture<CssPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
