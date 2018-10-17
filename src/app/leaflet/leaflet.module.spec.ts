import { LeafletModule } from './leaflet.module';

describe('LeafletModule', () => {
  let leafletModule: LeafletModule;

  beforeEach(() => {
    leafletModule = new LeafletModule();
  });

  it('should create an instance', () => {
    expect(leafletModule).toBeTruthy();
  });
});
