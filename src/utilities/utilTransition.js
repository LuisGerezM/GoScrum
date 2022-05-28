export const utilTransition = (transition) => {
  const transitionsTypes = {
    cardsTransition: {
      hidden: {
        opacity: 0,
        transition: {
          duration: 1,
        },
      },
      visible: (custom) => ({
        opacity: 1,
        transition: {
          duration: custom.delay,
        },
      }),
    },
    pageTransition: {
      in: { opacity: 1, transition: { duration: 1 } },
      out: { opacity: 0, transition: { duration: 0 } },
    },
  }

  return transitionsTypes[transition]
}
