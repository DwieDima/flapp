import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonProgressBar,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ChargingPointCard from '../../components/ChargingPointCard/ChargingPointCard';
import SelectChargingSpeedModal from '../../modals/SelectChargingModal/SelectChargingSpeed';
import { ChargeCycle } from '../../models/charge-cycle.model';
import { deviceService } from '../../services/DeviceService';
import './ChargePage.scss';

const ChargePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentChargeCycle, setCurrentChargeCycle] = useState<ChargeCycle>();

  function closeModal(): void {
    setShowModal(false);
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      const cycle = await deviceService.getCurrentChargeCycle();
      setCurrentChargeCycle(cycle);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <IonPage id="charge-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ladestation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ladestation</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ChargingPointCard currentChargeCycle={currentChargeCycle} />
        <IonList inset={true} lines="none">
          <IonItem color="light">
            <IonThumbnail slot="start">
              <img src="assets/img/cars/bmw_i3.png" alt="car" />
            </IonThumbnail>
            <IonLabel>
              <h1>BMW i3</h1>
              <h2>Reichweite: 500 km</h2>
              <IonRow className="ion-align-items-center">
                <IonCol className="ion-no-padding">
                  <IonProgressBar
                    className="progress-bar"
                    value={1}
                  ></IonProgressBar>
                </IonCol>
              </IonRow>
              <p>Laden abgeschlossen</p>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonList inset={true} lines="none">
          <IonItem color="light">
            <IonThumbnail slot="start">
              <img src="assets/img/cars/bmw_i3.png" alt="car" />
            </IonThumbnail>
            <IonLabel>
              <h1>BMW i3</h1>
              <p className="ion-text-wrap">Auto angeschlossen</p>
            </IonLabel>
            <IonButton
              slot="end"
              fill="clear"
              onClick={() => setShowModal(true)}
            >
              starten
            </IonButton>
          </IonItem>
        </IonList>

        <IonList inset={true} lines="none">
          <IonItem color="light">
            <IonIcon
              slot="start"
              size="large"
              src="assets/icons/plug.svg"
            ></IonIcon>
            <IonLabel className="ion-text-center ion-text-wrap">
              <h2>Es ist kein Auto angeschlossen</h2>
            </IonLabel>
          </IonItem>
        </IonList>
        <SelectChargingSpeedModal isOpen={showModal} closeModal={closeModal} />
      </IonContent>
    </IonPage>
  );
};

export default ChargePage;
