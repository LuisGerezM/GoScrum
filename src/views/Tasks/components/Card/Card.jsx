import { useCard } from "hooks/useTasks/useCard/useCard"
import { BodyCard } from "./BodyCard/BodyCard"
import { FooterCard } from "./FooterCard/FooterCard"
import { HeaderCard } from "./HeaderCard/HeaderCard"

import { motion } from "framer-motion"
import { utilTransition } from "utilities/utilTransition"

import "./Card.styles.css"

const Card = ({
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
  index,
}) => {
  const { handleSeeMore, limitString, dateTime, showMoreDescription, queryUserOnLine } = useCard(createdAt)
  const cardsTransition = utilTransition("cardsTransition")

  return (
    <motion.div className="card" custom={{ delay: (index + 1) * 0.2 }} initial="hidden" animate="visible" exit="hidden" variants={cardsTransition}>
      <HeaderCard queryUserOnLine={queryUserOnLine} userName={userName} actionsCard={actionsCard} data={data} title={title} />

      <BodyCard dateTime={dateTime} userName={userName} status={status} actionsCard={actionsCard} data={data} importance={importance} />

      <FooterCard showMoreDescription={showMoreDescription} description={description} limitString={limitString} handleSeeMore={handleSeeMore} />
    </motion.div>
  )
}

export default Card
