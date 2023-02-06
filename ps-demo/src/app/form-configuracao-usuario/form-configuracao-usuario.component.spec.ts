import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfiguracaoUsuarioComponent } from './form-configuracao-usuario.component';

describe('FormConfiguracaoUsuarioComponent', () => {
  let component: FormConfiguracaoUsuarioComponent;
  let fixture: ComponentFixture<FormConfiguracaoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfiguracaoUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfiguracaoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
