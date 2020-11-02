import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupConfig
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import ChargePage from './pages/Charge/ChargePage';
import InvoicesPage from './pages/Invoices/InvoicesPage';
import SettingsPage from './pages/Settings/SettingsPage';
/* Theme variables */
import './theme/variables.css';

setupConfig({
  mode: 'md'
});

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Redirect from="/" to="/charge" exact />
            <Route path="/charge" component={ChargePage} exact />
            <Route path="/invoices" component={InvoicesPage} exact />
            <Route path="/settings" component={SettingsPage} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
