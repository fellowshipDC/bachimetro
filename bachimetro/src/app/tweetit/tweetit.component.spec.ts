import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetitComponent } from './tweetit.component';

describe('TweetitComponent', () => {
  let component: TweetitComponent;
  let fixture: ComponentFixture<TweetitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
