import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetFilteredNewsComponent } from './get-filtered-news.component';

describe('GetFilteredNewsComponent', () => {
  let component: GetFilteredNewsComponent;
  let fixture: ComponentFixture<GetFilteredNewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFilteredNewsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetFilteredNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
