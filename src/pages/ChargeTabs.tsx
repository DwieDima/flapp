import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { batteryHalf, carSport } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import ChargePage from './ChargePage';
import VehiclesPage from './VehiclesPage';

interface MainTabsProps {}

const ChargeTabs: React.FC<MainTabsProps> = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/charge" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/charge" render={() => <ChargePage />} exact />
        <Route path="/tabs/vehicles" render={() => <VehiclesPage />} exact />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="charge" href="/tabs/charge">
          <IonIcon icon={batteryHalf} />
          <IonLabel>Ladesäule</IonLabel>
        </IonTabButton>
        <IonTabButton tab="vehicles" href="/tabs/vehicles">
          <IonIcon icon={carSport} />
          <IonLabel>Fahrzeuge</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default ChargeTabs;
