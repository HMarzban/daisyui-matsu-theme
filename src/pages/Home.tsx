import { lazy, Suspense, memo } from "react";
import Footer from "../components/Footer";
import ThemeIntro from "../components/ThemeIntro";

// Lazy load heavy components
const DaisyUiIntro = lazy(() => import("../components/DaisyUiIntro"));
const DaisyUiComponentsPreview = lazy(
  () => import("../components/DaisyUiComponentsPreview")
);
const LoginForm = lazy(() => import("../components/LoginForm"));
const InstallTheme = lazy(() => import("../components/InstallTheme"));

// Loading fallbacks
const LoadingComponent = () => (
  <div className="w-full flex justify-center py-12">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);

function HomeComponent() {
  return (
    <>
      <div className="flex flex-col m-auto max-w-[1120px] items-center justify-center py-12">
        <ThemeIntro />

        <Suspense fallback={<LoadingComponent />}>
          <div className="mb-10 w-full">
            <InstallTheme />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <div>
            <h2 className="text-2xl text-left font-bold mb-6">Intro</h2>
            <DaisyUiIntro />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <div className="mt-10 w-full">
            <h2 className="text-2xl text-left font-bold mb-6">Login</h2>
            <div className="bg-base-300 h-[50rem] rounded-2xl p-4">
              <LoginForm />
            </div>
          </div>
        </Suspense>

        <Suspense fallback={<LoadingComponent />}>
          <div className="mt-10 w-full">
            <h2 className="text-2xl text-left font-bold mb-6">Preview</h2>
            <DaisyUiComponentsPreview />
          </div>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

// Memoize the component to prevent unnecessary re-renders
const Home = memo(HomeComponent);
export default Home;
