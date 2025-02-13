import { Suspense } from "react";
import Loading from "../components/Loading";


const useSuspense = (Container) => {
  return () => {
    return (
      <Suspense fallback={<Loading isLoading={true} />}>
        <Container />
      </Suspense>
    );
  };
};
export default useSuspense;
