import {
  IonApp,
  IonButton,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { ellipse, triangle } from "ionicons/icons";
import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "./theme/variables.css";

setupIonicReact();

interface MyComponentProps {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tabs: React.FC<MyComponentProps> = ({ setAuthenticated }) => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tab1">
        <IonPage>
          Tab1
          <IonButton onClick={() => setAuthenticated(true)}>Log In</IonButton>
        </IonPage>
      </Route>
      <Route exact path="/tab2">
        <IonPage>Tab2</IonPage>
      </Route>
      <Route render={() => <Redirect to="/tab1" />} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tab1">
        <IonIcon aria-hidden="true" icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tab2">
        <IonIcon aria-hidden="true" icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/">
            {authenticated ? (
              <IonPage>The authenticated page never show !!!</IonPage>
            ) : (
              <Tabs setAuthenticated={setAuthenticated} />
            )}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
