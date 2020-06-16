/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoodspotComponent } from './foodspot.component';

describe('FoodspotComponent', () => {
  let component: FoodspotComponent;
  let fixture: ComponentFixture<FoodspotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodspotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
