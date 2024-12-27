import * as Sentry from "@sentry/react";
import ErrorFallback from "./ErrorFallback";

export default function ErrorBoundary(props: Sentry.ErrorBoundaryProps) {
  const { children, ...rest } = props;

  return (
    <Sentry.ErrorBoundary
      fallback={({ resetError }) => (
        <div className="px-5">
          <ErrorFallback
            message="Something went wrong"
            description="Oops! That wasn't supposed to happen. Please bear with us while this is resolved"
            reset={resetError}
            buttonText="Go back"
          />
        </div>
      )}
      {...rest}
    >
      {children}
    </Sentry.ErrorBoundary>
  );
}

