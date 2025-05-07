import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveArrayComponent } from './reactive-array.component';

describe('ReactiveArrayComponent', () => {
  let component: ReactiveArrayComponent;
  let fixture: ComponentFixture<ReactiveArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
