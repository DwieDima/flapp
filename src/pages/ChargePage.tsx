import {
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
import React from 'react';
import './ChargePage.scss';

const ChargePage: React.FC = () => {
  return (
    <IonPage id="charge-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ladesäule</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Ladesäule</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList inset={true} lines="none">
            <IonItem color="light">
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
                      value={0.54}
                      buffer={0.46}
                    ></IonProgressBar>
                  </IonCol>
                  <IonCol size="auto">54%</IonCol>
                </IonRow>
                <p>Aktualisiert: 17:30 Uhr</p>
              </IonLabel>
            </IonItem>
          </IonList>

          <IonList inset={true} lines="none">
            <IonItem color="light">
              <IonIcon slot="start" size="large" name="info"></IonIcon>
              <IonLabel>
                <h1>Es ist kein Auto angeschlossen</h1>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default ChargePage;
