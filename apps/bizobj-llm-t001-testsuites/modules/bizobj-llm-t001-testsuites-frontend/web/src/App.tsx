import { Refine, ResourceProps } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  ThemedLayout,
  ThemedSider,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerProvider, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { AppIcon } from "./resources/app-icon";

import { ExamplesResources, ExamplesRoutes, RESOURCE_BLOG_POSTS } from "./pages/examples";
import { AppDataProviders } from "./contexts/data-providers";

const APP_NAME = "LLM TestSuites";

const APP_RESOURCES: ResourceProps[] = [];
APP_RESOURCES.push(...ExamplesResources());

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                dataProvider={ AppDataProviders }
                notificationProvider={useNotificationProvider}
                routerProvider={routerProvider}
                resources={ [ ...ExamplesResources() ] }
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "m2Zgfq-dIyAFZ-qWAMnD",
                  title: { text: APP_NAME, icon: <AppIcon /> },
                }}
              >
                <Routes>
                  <Route
                    element={
                      <ThemedLayout
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSider {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayout>
                    }
                  >
                    <Route
                      index
                      element={<NavigateToResource resource={ RESOURCE_BLOG_POSTS } />}
                    />
                    { ...ExamplesRoutes() }
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler
                handler={({ action, resource }) => {
                  let title = resource?.meta?.label;
                  if (!title) {
                    title = resource?.name ? resource.name : "Resource";
                  }
                  if (action){
                    title = title + "." + action;
                  }
                  return `${title} - ${APP_NAME}`;
                }}
              />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
