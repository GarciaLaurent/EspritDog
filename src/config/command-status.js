export default [
  {
    index: 1,
    status: "ORDERED",
    label: "Commandé",
    image: require('../../assets/images/clumsy.png'),
    desc: 'Votre ordonnance est en cours de traitement, le status de la comande passera bientôt à la prochaine étape.',
  },

  {
    index: 2,
    status: "ACCEPTED",
    label: "Accepté",
    image: require('../../assets/images/unboxing.png'),
    desc: 'Nous sommes en train de préparer votre commande ! Vous recevrez une notification lorsqu\'elle sera prête.',
  },

  {
    index: 3,
    status: "READY",
    label: "Prêt",
    image: require('../../assets/images/meditating.png'),
    desc: 'Votre commande est prête ! Elle vous attend à cette adresse :'
  },
  {
    index: 4,
    status: "FINISHED",
    label: "Retirée",
    image: null
  }
];
