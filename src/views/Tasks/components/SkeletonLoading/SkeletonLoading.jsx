import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const SkeletonLoading = ({ count = 4, height = 60, width = null, nameClass = "", repeat = [1] }) => {
  return (
    <>
      {repeat.map((sk) => (
        <div key={sk} className={nameClass}>
          <SkeletonTheme baseColor="#d6d2d2" highlightColor="#594a4a" borderRadius="0.5rem" duration={4}>
            <Skeleton count={count} height={height} width={width} />
          </SkeletonTheme>{" "}
        </div>
      ))}
    </>
  )
}
