import { SkeletonLoading } from "../../SkeletonLoading/SkeletonLoading"

export const LoadCardsList = ({ isPhone }) => {
  return (
    <>
      {isPhone ? (
        <SkeletonLoading count={3} height={80} nameClass="list phone" />
      ) : (
        <SkeletonLoading count={2} height={150} width={"100%"} nameClass="list" repeat={[1, 2, 3]} />
      )}
    </>
  )
}
