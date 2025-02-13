import { useNavigate } from "react-router-dom";
import { Button } from "../../common/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-center">
      <div className="max-w-md">
        <h1 className="text-7xl font-bold text-primary mb-6">404</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          It might have been moved or deleted.
        </p>
        <Button
          onClick={() => navigate("/")}
          variant="primary"
          className="px-8 py-3 text-lg font-semibold"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
