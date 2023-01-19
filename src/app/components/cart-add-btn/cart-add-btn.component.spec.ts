import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddBtnComponent } from './cart-add-btn.component';

describe('CartAddBtnComponent', () => {
  let component: CartAddBtnComponent;
  let fixture: ComponentFixture<CartAddBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAddBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
