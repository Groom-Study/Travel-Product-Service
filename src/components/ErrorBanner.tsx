function ErrorBanner({ message }: { message?: string }) {
  const errorMessage = message || '에러입니다.';

  return (
    <div data-testid="error-banner" className="error-banner">
      {errorMessage}
    </div>
  );
}

export default ErrorBanner;
