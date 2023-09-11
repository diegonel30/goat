import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessiProfilePage } from './messi-profile.page';

describe('MessiProfilePage', () => {
  let component: MessiProfilePage;
  let fixture: ComponentFixture<MessiProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MessiProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
