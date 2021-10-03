import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemomDetailComponent } from './pokemom-detail.component';

describe('PokemomDetailComponent', () => {
  let component: PokemomDetailComponent;
  let fixture: ComponentFixture<PokemomDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemomDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
