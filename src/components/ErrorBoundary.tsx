import React from "react";

type State = {
  hasError: boolean;
  error?: Error | null;
};

export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: any) {
    // Log error to console for now
    // In production we could send this to an error tracking service
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-2xl w-full rounded-lg border p-6 bg-background/80">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p className="mb-4 text-sm text-muted-foreground">The application encountered an error while rendering. The error details are shown below.</p>
            <pre className="whitespace-pre-wrap text-xs bg-muted p-3 rounded">{String(this.state.error)}</pre>
            <div className="mt-4">
              <button onClick={() => window.location.reload()} className="inline-flex items-center px-3 py-2 rounded bg-primary text-white">Reload</button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children as React.ReactElement;
  }
}
