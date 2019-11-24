/*
Joseph P. Pasaoa
Helpers | React Introduction Lab
*/


/* FUNCTIONS */
const log = console.log;


/* DATA SIM */
let contactNum = -1;
const data = {
  user: {
    name: "Jung Rae Jang",
    position: "React Assistant",
    network: "Lorem Ipsem",
    avatar_url: require('../assets/faux_db/avatar-ph-user.png')
  },
  contacts: [
    {
      name: "Alejandro Franco",
      position: "React Expert",
      network: "Lorem Ipsem",
      avatar_url: require('../assets/faux_db/avatar-ph-1.png')
    },
    {
      name: "Dessa Shepherd",
      position: "React Manager",
      network: "Lorem Ipsem",
      avatar_url: require('../assets/faux_db/avatar-ph-2.png')
    },
    {
      name: "Wynter Reid",
      position: "React Assistant",
      network: "Lorem Ipsem",
      avatar_url: require('../assets/faux_db/avatar-ph-3.png')
    },
    {
      name: "David Yang",
      position: "Co-Founder",
      network: "Lorem Ipsem",
      avatar_url: require('../assets/faux_db/avatar-ph-4.png')
    },
    {
      name: "Jukay Hsu",
      position: "Co-Founder",
      network: "Lorem Ipsem",
      avatar_url: require('../assets/faux_db/avatar-ph-4.png')
    }
  ]
}


/* EXPORTS */
export { log, contactNum, data };
