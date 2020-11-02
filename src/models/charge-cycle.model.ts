export interface ChargeCycle {
  id: string;
  status: 'CONNECTED' | 'CHARGING' | 'CHARGING_COMPLETED';
  chargingPoint: number;
  started: Date;
  ended: Date;
  chargedWork: Power;
}

export interface Power {
  v: number;
  uom: string;
}

export enum ChargeStatus {
  CONNECTED = 'CONNECTED',
  CHARGING = 'CHARGING',
  CHARGING_COMPLETED = 'CHARGING_COMPLETED'
}
