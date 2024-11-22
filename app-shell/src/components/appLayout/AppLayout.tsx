import { lazy, Suspense } from "react";

// console.log(PageBaseLayout);
const PageBaseLayout = lazy(() => import("uiComponents/PageBaseLayout"));

debugger;

type AppLayoutProps = {
  children: React.ReactElement;
};

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <Suspense>
      <PageBaseLayout>{children}</PageBaseLayout>
    </Suspense>
  );
};

export default AppLayout;
