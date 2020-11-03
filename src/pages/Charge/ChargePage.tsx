import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import ChargingPointCard from '../../components/ChargingPointCard/ChargingPointCard';
import SelectChargingSpeedModal from '../../modals/SelectChargingSpeed/SelectChargingSpeed';
import { ChargeCycle } from '../../models/charge-cycle.model';
import { deviceService } from '../../services/DeviceService';
import './ChargePage.scss';

const ChargePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentChargeCycle, setCurrentChargeCycle] = useState<ChargeCycle>();

  function closeModal(): void {
    setShowModal(false);
  }

  function openModal(): void {
    setShowModal(true);
  }

  useEffect(() => {
    deviceService
      .getCurrentChargeCycle()
      .then((cycle) => setCurrentChargeCycle(cycle));
    const interval = setInterval(async () => {
      const cycle = await deviceService.getCurrentChargeCycle();
      setCurrentChargeCycle(cycle);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
          <ChargingPointCard
            currentChargeCycle={currentChargeCycle}
            openChargingSpeedModal={openModal}
          />
        </IonContent>
      </IonPage>
      <SelectChargingSpeedModal isOpen={showModal} closeModal={closeModal} />
    </>
  );
};

export default ChargePage;
