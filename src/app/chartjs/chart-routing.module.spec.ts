import { ChartRoutingModule } from './chart-routing.module';

describe('ChartRoutingModule', () => {
  let chartRoutingModule: ChartRoutingModule;

  beforeEach(() => {
    chartRoutingModule = new ChartRoutingModule();
  });

  it('should create an instance', () => {
    expect(chartRoutingModule).toBeTruthy();
  });
});
