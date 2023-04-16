import Keycloak from "keycloak-js";
import { useEffect, useState } from "react";

const keycloakConfig = {
  url: "http://localhost:8080",
  realm: "master",
  clientId: "keycloack-react-playground",
};

const keycloak = new Keycloak(keycloakConfig);

let init = false;

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (init) return;
    init = true;
    keycloak.init({});
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <header className="p-4">
        <h1 className="btn btn-ghost text-xl">Keycloack react</h1>
      </header>
      <div className="h-full flex flex-col items-center p-10">
        <button
          className="btn btn-primary"
          onClick={async () => {
            const a = await keycloak.login({});
            console.log(a);
          }}
        >
          Login
        </button>
        {authenticated && <div>Authenticated</div>}
        {!authenticated && <div>Not authenticated</div>}
      </div>
    </div>
  );
}

export default App;
