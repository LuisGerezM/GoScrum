import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

export const useRegistered = () => {
  const { teamID } = useParams()

  const handleCopyTeamId = () => {
    toast.info("ID copiado con éxito")
    navigator.clipboard.writeText(teamID)
  }

  return { teamID, handleCopyTeamId }
}
