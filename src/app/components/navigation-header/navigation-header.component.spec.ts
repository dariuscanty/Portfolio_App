import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHeaderComponent } from './navigation-header.component';

describe('NavigationHeaderComponent', () => {
  let component: NavigationHeaderComponent;
  let fixture: ComponentFixture<NavigationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
