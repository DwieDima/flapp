import API from '../Api';
import { ChargeCycle } from '../models/charge-cycle.model';

export class DeviceService {
  public getCurrentChargeCycle(): Promise<ChargeCycle> {
    return API.get('/current-charge-cycle').then((result) => result.data);
  }

  public getChargeCycles(): Promise<ChargeCycle[]> {
    return API.get('/charge-cycles').then((result) => result.data);
  }
}

export const deviceService = new DeviceService();
