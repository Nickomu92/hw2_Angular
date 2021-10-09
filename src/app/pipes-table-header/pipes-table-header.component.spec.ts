import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesTableHeaderComponent } from './pipes-table-header.component';

describe('PipesTableHeaderComponent', () => {
  let component: PipesTableHeaderComponent;
  let fixture: ComponentFixture<PipesTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
