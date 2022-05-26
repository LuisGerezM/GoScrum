import { useCard } from "hooks/useTasks/useCard/useCard"
import { BodyCard } from "./BodyCard/BodyCard"
import { FooterCard } from "./FooterCard/FooterCard"
import { HeaderCard } from "./HeaderCard/HeaderCard"

import "./Card.styles.css"

const Card = ({
  // deleteCard,
  actionsCard,
  data: {
    title,
    createdAt,
    user: { userName },
    description,
    status,
    importance,
  },
  data,
}) => {
  const { handleSeeMore, limitString, dateTime, nameUser, showMoreDescription } = useCard(createdAt)

  return (
    <div className="card">
      <HeaderCard nameUser={nameUser} userName={userName} actionsCard={actionsCard} data={data} title={title} />

      <BodyCard dateTime={dateTime} userName={userName} status={status} actionsCard={actionsCard} data={data} importance={importance} />

      <FooterCard showMoreDescription={showMoreDescription} description={description} limitString={limitString} handleSeeMore={handleSeeMore} />
    </div>
  )
}

export default Card
