import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTrackerComponent } from './wallet-tracker.component';

describe('WalletTrackerComponent', () => {
  let component: WalletTrackerComponent;
  let fixture: ComponentFixture<WalletTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletTrackerComponent]
    });
    fixture = TestBed.createComponent(WalletTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
