import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Si la distancia es 20 y el tiempo 5, al darle click al boton de calcular, debería mostrarse un valor de 4',()=>{
    let result=0;
    component.value1=20;
    component.value2=5;
    component.calcular();
    result=component.resultado;
    expect(result).toBe(4);
  });
  it('Si la distancia es 10 y el tiempo 5, la velocidad = 2',()=>{
    let result=0;
    component.value1=10;
    component.value2=5;
    component.calcular();
    result=component.resultado;
    expect(result).toBe(2);
  });
});
