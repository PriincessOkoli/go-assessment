import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { IconButton, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider, closeSnackbar } from "notistack";
import {
  CheckCircleOutline,
  CloseOutlined,
  ErrorOutline,
} from "@mui/icons-material";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <ErrorBoundary onReset={() => (window.location.pathname = "/")}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            iconVariant={{
              success: (
                <div className="h-10 w-10 bg-success/10 flex items-center justify-center rounded-full mr-[0.625rem]">
                  <CheckCircleOutline className="text-success text-2xl" />
                </div>
              ),
              error: (
                <div className="h-10 w-10 bg-error/10 flex items-center justify-center rounded-full mr-[0.625rem]">
                  <ErrorOutline className="text-error text-2xl" />
                </div>
              ),
            }}
            action={(key) => (
              <IconButton
                size="small"
                onClick={() => closeSnackbar(key)}
                className="text-white"
              >
                <CloseOutlined />
              </IconButton>
            )}
          >
            <App />
          </SnackbarProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);

