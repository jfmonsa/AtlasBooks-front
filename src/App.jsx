//contexts
import {ChangePassProvider} from "./contexts/ChangePassContext.jsx";
import {ChangeEmailProvider} from "./contexts/ChangeEmailContext.jsx";
import {AuthProvider, useAuth} from "./contexts/authContext.jsx";

//router
import {RouterProvider} from "./Router.jsx";

const LoggedAdminRouting = () => {
  const {contextValue} = useAuth();
  const context = contextValue;
  if (context.admin) return <AdminResults />;
  else return <Error />;
};

const App = () => {
  return (
    <AuthProvider>
      <ChangeEmailProvider>
        <ChangePassProvider>
          <RouterProvider />
        </ChangePassProvider>
      </ChangeEmailProvider>
    </AuthProvider>
  );
};

export default App;
