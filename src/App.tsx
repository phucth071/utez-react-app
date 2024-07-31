import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/RoutesIndex";
import { DefaultLayout } from "./components/Layout/LayoutIndex";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout: React.FC<{ children: React.ReactNode }> = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </>
  );
}

export default App;
