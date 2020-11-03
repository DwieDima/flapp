import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterLink,
  IonToolbar
} from '@ionic/react';
import {
  carSportOutline,
  carSportSharp,
  settingsOutline,
  settingsSharp,
  walletOutline,
  walletSharp
} from 'ionicons/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  disabled: boolean;
}

const appPages: AppPage[] = [
  {
    title: 'Ladestation',
    url: '/charge',
    iosIcon: carSportOutline,
    mdIcon: carSportSharp,
    disabled: false
  },
  {
    title: 'Rechnungen',
    url: '/invoices',
    iosIcon: walletOutline,
    mdIcon: walletSharp,
    disabled: true
  },
  {
    title: 'Einstellungen',
    url: '/settings',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
    disabled: true
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonItem lines="none">
            <IonImg
              className="logo ion-text-center"
              src="assets/img/fl_logo.png"
            ></IonImg>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Willkommen</IonListHeader>
          <IonNote>Max Mustermann</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname.includes(appPage.url) ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  disabled={appPage.disabled}
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter className="ion-text-center">
        <h6>
          &copy; &nbsp;
          <IonRouterLink href="https://www.siobra.de/">Siobra</IonRouterLink>
          &nbsp;2020
        </h6>
      </IonFooter>
    </IonMenu>
  );
};

export default Menu;
