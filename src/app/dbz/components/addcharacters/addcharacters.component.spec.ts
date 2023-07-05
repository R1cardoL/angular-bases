import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcharactersComponent } from './addcharacters.component';

describe('AddcharactersComponent', () => {
  let component: AddcharactersComponent;
  let fixture: ComponentFixture<AddcharactersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddcharactersComponent]
    });
    fixture = TestBed.createComponent(AddcharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
