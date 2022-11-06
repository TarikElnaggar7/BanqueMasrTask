import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroGbpComponent } from './euro-gbp.component';

describe('EuroGbpComponent', () => {
  let component: EuroGbpComponent;
  let fixture: ComponentFixture<EuroGbpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroGbpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuroGbpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
