import { LeafletRoutingModule } from './leaflet-routing.module';

describe('LeafletRoutingModule', () => {
  let leafletRoutingModule: LeafletRoutingModule;

  beforeEach(() => {
    leafletRoutingModule = new LeafletRoutingModule();
  });

  it('should create an instance', () => {
    expect(leafletRoutingModule).toBeTruthy();
  });
});
