import {
  IonCol,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonRow,
  IonThumbnail
} from '@ionic/react';
import React from 'react';
import { ChargeCycle } from '../../models/charge-cycle.model';
import './ChargingPointCard.scss';

type Props = {
  currentChargeCycle: ChargeCycle | undefined;
};

const ChargingPointCard: React.FC<Props> = ({ currentChargeCycle }) => {
  return (
    <>
      <IonList inset={true} lines="none">
        <IonItem color="light">
          {/*
            only when status === 'CONNECTED || CHARGING || CHARGING_COMPLETED'
          */}
          <IonThumbnail slot="start">
            <img src="assets/img/cars/bmw_i3.png" alt="car" />
          </IonThumbnail>
          <IonLabel>
            <h1>BMW i3</h1>
            <h2>Reichweite: 296 km</h2>
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-no-padding">
                <IonProgressBar
                  className="progress-bar"
                  type="indeterminate"
                ></IonProgressBar>
              </IonCol>
            </IonRow>
            <p>Aktualisiert: 17:30 Uhr</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </>
  );
};

export default ChargingPointCard;
