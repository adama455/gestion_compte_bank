import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionOperationComponent } from './gestion-operation.component';

describe('GestionOperationComponent', () => {
  let component: GestionOperationComponent;
  let fixture: ComponentFixture<GestionOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionOperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
