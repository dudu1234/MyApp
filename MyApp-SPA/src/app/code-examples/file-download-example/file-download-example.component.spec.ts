/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FileDownloadExampleComponent } from './file-download-example.component';

describe('FileDownloadExampleComponent', () => {
  let component: FileDownloadExampleComponent;
  let fixture: ComponentFixture<FileDownloadExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileDownloadExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileDownloadExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
