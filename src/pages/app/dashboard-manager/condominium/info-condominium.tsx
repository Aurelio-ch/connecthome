import { useParams } from "react-router-dom"

export function InfoCondominium() {
  const {condominiumId} = useParams()
  return (
    <div>{condominiumId}</div>
  )
}
