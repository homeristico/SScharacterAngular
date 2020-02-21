import { TestBed } from '@angular/core/testing';

import { CargaInicialService } from './carga-inicial.service';

describe('CargaInicialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargaInicialService = TestBed.get(CargaInicialService);
    expect(service).toBeTruthy();
  });
});
