import homeImg from "../assets/homeImg.png";
import missionImg from "../assets/missionImg.png";
import profileImg from "../assets/profileImg.png"; 

export const FEATURE_GROUPS = [
  {
    title: "Tela de missões",
    description:
      "Ambiente principal onde os usuários podem acessar suas missões, desafios e progresso.",
    items: [
      "A Tela de Missões é o ambiente principal da plataforma, onde os usuários acompanham sua jornada de aprendizagem por meio de planetas temáticos. Nela, é possível visualizar o progresso, identificar a etapa atual e acessar novos desafios e conteúdos, promovendo uma experiência de aprendizado mais dinâmica, interativa e motivadora."
    ],
    image: [
      {
        src: homeImg,
        alt: "Exploração de planetas",
        width: 320,
        height: 200,
      },
    ]
  },
  {
    title: "Visualização do seu trajeto de aprendizagem",
    description:
      "Te prepara suas missões, desafios e progresso de forma visual e interativa.",
    items: [
      "Aqui os usuários podem acompanhar seu progresso de forma visual e interativa, identificando a etapa atual, os desafios concluídos e os próximos passos em sua jornada de aprendizagem. Essa visualização torna o processo mais motivador e envolvente, incentivando os usuários a continuarem explorando e aprendendo."
    ],
    image: [
      {
        src: missionImg,
        alt: "Exploração de planetas",
        width: 300,
        height: 200,
      },
    ]
  },
  {
    title: "Experiência do Usuário",
    description:
      "Aqui voce pode ver seu perfil, acompanhar seu progresso e seus dados",
    items: [
      "A Tela de Perfil é o espaço onde os usuários podem visualizar e gerenciar suas informações pessoais, acompanhar seu progresso, acessar suas conquistas e personalizar sua experiência na plataforma. Ela serve como um hub central para os usuários se conectarem com sua jornada de aprendizagem, permitindo que eles vejam seu histórico, conquistas e dados de forma clara e organizada."
    ],
    image: [
      {
        src: profileImg,
        alt: "Exploração de planetas",
        width: 300,
        height: 200,
      },
    ]
  },
];