/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueteComponent } from './quete.component';

describe('QueteComponent', () => {
  let component: QueteComponent;
  let fixture: ComponentFixture<QueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
