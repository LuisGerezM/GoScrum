import { utilStatusRequest } from "utilities/utilStatusRequest/utilStatusRequest"

export const adapterGetTask = ({ fetchingTasks, status_code, messageRequest }) => {
  const { result } = fetchingTasks

  const data = result.map((taskDetail) => ({
    _id: taskDetail._id,
    createdAt: taskDetail.createdAt,
    user: { userName: taskDetail.user.userName, role: taskDetail.user.role, teamID: taskDetail.user.teamId },
    description: taskDetail.description,
    importance: taskDetail.importance,
    status: taskDetail.status,
    teamId: taskDetail.teamId,
    title: taskDetail.title,
  }))

  const statusCode = utilStatusRequest({ status: Number.parseInt(status_code), where: "tasks", messageRequest })

  return { data, statusCode }
}
