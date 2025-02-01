import "@/app/styles/base.css";
import "@/app/styles/variables.css";

//contexts
import { ChangePassProvider } from "@/app/contexts/ChangePassContext.jsx";
import { ChangeEmailProvider } from "@/app/contexts/ChangeEmailContext.jsx";
import { AuthProvider } from "@/app/contexts/AuthContextProvider.jsx";
import { AppRouter } from "./config/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <ChangeEmailProvider>
        <ChangePassProvider>
          <AppRouter />
        </ChangePassProvider>
      </ChangeEmailProvider>
    </AuthProvider>
  );
}
