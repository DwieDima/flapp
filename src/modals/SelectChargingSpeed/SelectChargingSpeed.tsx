import {
  IonButton,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal,
  IonRadio,
  IonRadioGroup,
  IonToolbar
} from '@ionic/react';
import { walkOutline } from 'ionicons/icons';
import React from 'react';
import './SelectChargingSpeed.scss';

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const SelectChargingSpeedModal: React.FC<ModalProps> = ({
  isOpen,
  closeModal
}) => {
  return (
    <IonContent>
      <IonModal
        isOpen={isOpen}
        cssClass="charging-speed-modal"
        showBackdrop={false}
        backdropDismiss={true}
        onDidDismiss={() => closeModal()}
      >
        <IonContent>
          <IonList inset={true} lines="none" className="charge-list">
            <IonRadioGroup value="medium">
              <IonListHeader>
                <IonLabel>
                  <h2>Wählen Sie eine Ladegeschwindigkeit</h2>
                  <p>Je nach Geschwindigkeit variieren die Preise</p>
                </IonLabel>
              </IonListHeader>

              <IonItem>
                <IonIcon
                  size="large"
                  slot="start"
                  src="assets/icons/turtle.svg"
                ></IonIcon>
                <IonLabel>
                  <h2>Langsam</h2>
                  <p>39ct / Kw</p>
                </IonLabel>
                <IonRadio slot="end" value="slow" />
              </IonItem>

              <IonItem>
                <IonIcon size="large" slot="start" icon={walkOutline}></IonIcon>
                <IonLabel>
                  <h2>Normal</h2>
                  <p>50ct / Kw</p>
                </IonLabel>
                <IonRadio slot="end" value="medium" />
              </IonItem>

              <IonItem>
                <IonIcon
                  size="large"
                  slot="start"
                  src="assets/icons/rabbit.svg"
                ></IonIcon>
                <IonLabel>
                  <h2>Schnell</h2>
                  <p>70ct / Kw</p>
                </IonLabel>
                <IonRadio slot="end" value="fast" />
              </IonItem>
            </IonRadioGroup>
          </IonList>
        </IonContent>
        <IonFooter className="ion-no-border">
          <IonToolbar>
            <IonButton expand="block">starten</IonButton>
          </IonToolbar>
        </IonFooter>
      </IonModal>
    </IonContent>
  );
};

export default SelectChargingSpeedModal;
