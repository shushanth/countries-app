import { lazy, Suspense } from "react";

type AppLayoutProps = {
  children: React.ReactElement;
};

const PageBaseLayout = lazy(() =>
  import("uiComponents/Components").then((m) => {
    return { default: m.PageBaseLayout, ...m };
  })
);

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <PageBaseLayout>{children}</PageBaseLayout>
    </Suspense>
  );
};

export default AppLayout;
