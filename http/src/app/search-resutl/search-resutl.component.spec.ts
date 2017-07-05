import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResutlComponent } from './search-resutl.component';

describe('SearchResutlComponent', () => {
  let component: SearchResutlComponent;
  let fixture: ComponentFixture<SearchResutlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResutlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResutlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
