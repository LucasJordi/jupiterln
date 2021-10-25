import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingSpinnerComponentComponent } from './loading-spinner-component.component';

describe('LoadingSpinnerComponentComponent', () => {
  let component: LoadingSpinnerComponentComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingSpinnerComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
