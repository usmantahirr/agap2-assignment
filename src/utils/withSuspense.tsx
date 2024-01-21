import { LazyExoticComponent, ReactNode, Suspense } from "react"
import Loading from "../shared/Loading.tsx"

const withSuspense = (Component: LazyExoticComponent<() => ReactNode>): ReactNode => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}

export default withSuspense
