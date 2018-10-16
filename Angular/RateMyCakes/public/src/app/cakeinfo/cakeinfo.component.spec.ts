import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeinfoComponent } from './cakeinfo.component';

describe('CakeinfoComponent', () => {
  let component: CakeinfoComponent;
  let fixture: ComponentFixture<CakeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
