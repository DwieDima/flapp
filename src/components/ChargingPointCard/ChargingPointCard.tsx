import {
  IonButton,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonProgressBar,
  IonRow,
  IonThumbnail
} from '@ionic/react';
import React from 'react';
import { ChargeCycle, ChargeStatus } from '../../models/charge-cycle.model';
import './ChargingPointCard.scss';

type Props = {
  currentChargeCycle: ChargeCycle | undefined;
  openChargingSpeedModal: () => void;
};

const ChargingPointCard: React.FC<Props> = ({
  currentChargeCycle,
  openChargingSpeedModal
}) => {
  return (
    <IonList inset={true} lines="none">
      <IonItem color="light">
        {currentChargeCycle?.status ? (
          <IonThumbnail slot="start">
            <img src="assets/img/cars/bmw_i3.png" alt="car" />
          </IonThumbnail>
        ) : (
          <IonIcon
            slot="start"
            size="large"
            src="assets/icons/plug.svg"
          ></IonIcon>
        )}
        {currentChargeCycle?.status ? (
          currentChargeCycle.status === ChargeStatus.CONNECTED ? (
            <>
              <IonLabel>
                <h1>BMW i3</h1>
                <p className="ion-text-wrap">Auto angeschlossen</p>
              </IonLabel>
              <IonButton
                slot="end"
                fill="outline"
                onClick={() => openChargingSpeedModal()}
              >
                starten
              </IonButton>
            </>
          ) : currentChargeCycle.status === ChargeStatus.CHARGING ? (
            <IonLabel>
              <h1>BMW i3</h1>
              <h2>Reichweite: 296 km</h2>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-no-padding">
                  <IonProgressBar
                    className="progress-bar-loading"
                    color="warning"
                    type="indeterminate"
                  ></IonProgressBar>
                </IonCol>
              </IonRow>
              <p>Aktualisiert: 17:30 Uhr</p>
            </IonLabel>
          ) : (
            <IonLabel>
              <h1>BMW i3</h1>
              <h2>Reichweite: 500 km</h2>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-no-padding">
                  <IonProgressBar
                    className="progress-bar-completed"
                    color="success"
                    value={1}
                  ></IonProgressBar>
                </IonCol>
              </IonRow>
              <p>Laden abgeschlossen</p>
            </IonLabel>
          )
        ) : (
          <IonLabel className="ion-text-center ion-text-wrap">
            <h2>Es ist kein Auto angeschlossen</h2>
          </IonLabel>
        )}
      </IonItem>
    </IonList>
  );
};

export default ChargingPointCard;
