import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEditarComponent } from './lista-editar.component';

describe('ListaEditarComponent', () => {
  let component: ListaEditarComponent;
  let fixture: ComponentFixture<ListaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEditarComponent]
    });
    fixture = TestBed.createComponent(ListaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
