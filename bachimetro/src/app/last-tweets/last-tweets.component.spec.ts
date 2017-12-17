import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTweetsComponent } from './last-tweets.component';

describe('LastTweetsComponent', () => {
  let component: LastTweetsComponent;
  let fixture: ComponentFixture<LastTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
