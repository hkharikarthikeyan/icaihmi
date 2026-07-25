
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_inner")({
  component: InnerLayout,
});

function InnerLayout() {
  return (
    <div className="container-page py-10">
      <div className="min-w-0 bg-white">
        <Outlet />
      </div>
    </div>
  );
}