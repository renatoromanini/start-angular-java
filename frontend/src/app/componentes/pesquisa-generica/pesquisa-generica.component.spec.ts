import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaGenericaComponent } from './pesquisa-generica.component';

describe('PesquisaGenericaComponent', () => {
  let component: PesquisaGenericaComponent;
  let fixture: ComponentFixture<PesquisaGenericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisaGenericaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisaGenericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
