import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVideosComponent } from './get-all-videos.component';

describe('GetAllVideosComponent', () => {
  let component: GetAllVideosComponent;
  let fixture: ComponentFixture<GetAllVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
