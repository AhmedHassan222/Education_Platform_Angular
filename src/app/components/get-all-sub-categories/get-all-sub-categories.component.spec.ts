import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSubCategoriesComponent } from './get-all-sub-categories.component';

describe('GetAllSubCategoriesComponent', () => {
  let component: GetAllSubCategoriesComponent;
  let fixture: ComponentFixture<GetAllSubCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllSubCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllSubCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
