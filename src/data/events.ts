export interface ActEvent {
  id: number;
  order: string;
  evento: string;
  local: string;
  referencia: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface LocationGroup {
  id: string;
  name: string;
  lat: number;
  lng: number;
  ancientLocationImageUrl: string;
  events: ActEvent[];
}

export const locations: LocationGroup[] = [
  {
    id: "monte-oliveiras",
    name: "Monte das Oliveiras",
    lat: 31.7781,
    lng: 35.2436,
    ancientLocationImageUrl: "https://picsum.photos/seed/mount-olives-ancient/800/600",
    events: [
      { id: 1, order: "01", evento: "Promessa do Espírito Santo e Mandato Missionário", local: "Monte das Oliveiras", referencia: "Atos 1:4-8", year: "30 d.C.", description: "Jesus instrui seus discípulos a não se ausentarem de Jerusalém, mas esperarem a promessa do Pai.", imageUrl: "https://picsum.photos/seed/holy-spirit-promise/600/400" },
      { id: 2, order: "02", evento: "Ascensão de Jesus ao Céu", local: "Monte das Oliveiras", referencia: "Atos 1:9-11", year: "30 d.C.", description: "Jesus é elevado às alturas à vista deles, e uma nuvem o encobre.", imageUrl: "https://picsum.photos/seed/ascension/600/400" }
    ]
  },
  {
    id: "jerusalem-cenaculo",
    name: "Jerusalém (Cenáculo)",
    lat: 31.7718,
    lng: 35.2295,
    ancientLocationImageUrl: "https://picsum.photos/seed/upper-room/800/600",
    events: [
      { id: 3, order: "03", evento: "Escolha de Matias para o Apostolado", local: "Jerusalém (Cenáculo)", referencia: "Atos 1:15-26", year: "30 d.C.", description: "Os discípulos oram e lançam sortes para escolher Matias como substituto de Judas.", imageUrl: "https://picsum.photos/seed/casting-lots/600/400" }
    ]
  },
  {
    id: "jerusalem",
    name: "Jerusalém",
    lat: 31.7683,
    lng: 35.2137,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-jerusalem/800/600",
    events: [
      { id: 4, order: "04", evento: "Derramamento do Espírito Santo no Pentecostes", local: "Jerusalém", referencia: "Atos 2:1-4", year: "30 d.C.", description: "Línguas de fogo descem sobre os discípulos e eles começam a falar em outras línguas.", imageUrl: "https://picsum.photos/seed/pentecost-fire/600/400" },
      { id: 5, order: "05", evento: "Discurso de Pedro e Conversão de 3000 Pessoas", local: "Jerusalém", referencia: "Atos 2:14-41", year: "30 d.C.", description: "Pedro prega corajosamente e milhares são batizados.", imageUrl: "https://picsum.photos/seed/peter-preaching/600/400" },
      { id: 7, order: "07", evento: "Prisão e Defesa de Pedro e João perante o Sinédrio", local: "Jerusalém", referencia: "Atos 4:1-22", year: "30 d.C.", description: "Líderes religiosos prendem os apóstolos, mas eles defendem sua fé com ousadia.", imageUrl: "https://picsum.photos/seed/sanhedrin-trial/600/400" },
      { id: 8, order: "08", evento: "Morte de Ananias e Safira por Fraude", local: "Jerusalém", referencia: "Atos 5:1-11", year: "31 d.C.", description: "O casal mente ao Espírito Santo sobre a venda de uma propriedade e cai morto.", imageUrl: "https://picsum.photos/seed/ananias-sapphira/600/400" },
      { id: 9, order: "09", evento: "Libertação Milagrosa dos Apóstolos da Prisão", local: "Jerusalém", referencia: "Atos 5:17-25", year: "31 d.C.", description: "Um anjo do Senhor abre as portas da prisão durante a noite.", imageUrl: "https://picsum.photos/seed/angel-prison/600/400" },
      { id: 10, order: "10", evento: "Instituição dos Sete para o Serviço (Diáconos)", local: "Jerusalém", referencia: "Atos 6:1-6", year: "32 d.C.", description: "Sete homens de boa reputação são escolhidos para servir às mesas.", imageUrl: "https://picsum.photos/seed/seven-deacons/600/400" },
      { id: 24, order: "24", evento: "Morte do Apóstolo Tiago por Herodes", local: "Jerusalém", referencia: "Atos 12:1-2", year: "44 d.C.", description: "Rei Herodes manda matar Tiago, irmão de João, à espada.", imageUrl: "https://picsum.photos/seed/james-martyr/600/400" },
      { id: 25, order: "25", evento: "Prisão e Libertação Milagrosa de Pedro", local: "Jerusalém", referencia: "Atos 12:3-11", year: "44 d.C.", description: "Pedro dorme entre soldados, mas um anjo o liberta das correntes.", imageUrl: "https://picsum.photos/seed/peter-chains/600/400" },
      { id: 37, order: "37", evento: "Debate e Deliberação Apostólica", local: "Jerusalém", referencia: "Atos 15:6-21", year: "49 d.C.", description: "O Concílio de Jerusalém debate se os gentios precisam ser circuncidados.", imageUrl: "https://picsum.photos/seed/jerusalem-council/600/400" },
      { id: 38, order: "38", evento: "Redação do Decreto Apostólico", local: "Jerusalém", referencia: "Atos 15:22-29", year: "49 d.C.", description: "Uma carta é escrita com orientações para os crentes gentios.", imageUrl: "https://picsum.photos/seed/apostolic-decree/600/400" },
      { id: 58, order: "58", evento: "Defesa de Paulo perante a Multidão Enfurecida", local: "Jerusalém", referencia: "Atos 22:1-21", year: "57 d.C.", description: "Paulo discursa em hebraico nas escadarias da fortaleza.", imageUrl: "https://picsum.photos/seed/paul-defense-crowd/600/400" },
      { id: 59, order: "59", evento: "Defesa de Paulo perante o Sinédrio", local: "Jerusalém", referencia: "Atos 23:1-11", year: "57 d.C.", description: "Paulo causa divisão entre fariseus e saduceus durante seu julgamento.", imageUrl: "https://picsum.photos/seed/paul-sanhedrin/600/400" }
    ]
  },
  {
    id: "templo-jerusalem",
    name: "Templo de Jerusalém",
    lat: 31.7780,
    lng: 35.2354,
    ancientLocationImageUrl: "https://picsum.photos/seed/second-temple/800/600",
    events: [
      { id: 6, order: "06", evento: "Cura de um Homem Cojo no Portão Belo", local: "Templo de Jerusalém", referencia: "Atos 3:1-10", year: "30 d.C.", description: "Pedro e João curam um homem coxo de nascença na porta do templo.", imageUrl: "https://picsum.photos/seed/healing-lame/600/400" },
      { id: 57, order: "57", evento: "Prisão de Paulo e Resgate Romano", local: "Templo de Jerusalém", referencia: "Atos 21:26-36", year: "57 d.C.", description: "Judeus da Ásia causam tumulto no templo e Paulo é preso pelo comandante romano.", imageUrl: "https://picsum.photos/seed/paul-arrest-temple/600/400" }
    ]
  },
  {
    id: "fora-jerusalem",
    name: "Fora de Jerusalém",
    lat: 31.7833,
    lng: 35.2333,
    ancientLocationImageUrl: "https://picsum.photos/seed/jerusalem-walls/800/600",
    events: [
      { id: 11, order: "11", evento: "Martírio de Estêvão", local: "Fora de Jerusalém", referencia: "Atos 7:54-60", year: "33 d.C.", description: "Estêvão é apedrejado enquanto Saulo consente com sua morte.", imageUrl: "https://picsum.photos/seed/stephen-martyr/600/400" }
    ]
  },
  {
    id: "samaria",
    name: "Samaria",
    lat: 32.2733,
    lng: 35.1944,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-samaria/800/600",
    events: [
      { id: 12, order: "12", evento: "Pregação de Filipe aos Samaritanos", local: "Samaria", referencia: "Atos 8:5-13", year: "33 d.C.", description: "Filipe prega a Cristo e realiza muitos sinais em Samaria.", imageUrl: "https://picsum.photos/seed/philip-samaria/600/400" },
      { id: 13, order: "13", evento: "Confirmação Apostólica em Samaria", local: "Samaria", referencia: "Atos 8:14-25", year: "33 d.C.", description: "Pedro e João impõem as mãos para que os samaritanos recebam o Espírito Santo.", imageUrl: "https://picsum.photos/seed/apostles-samaria/600/400" }
    ]
  },
  {
    id: "estrada-gaza",
    name: "Estrada para Gaza",
    lat: 31.5,
    lng: 34.4667,
    ancientLocationImageUrl: "https://picsum.photos/seed/desert-road/800/600",
    events: [
      { id: 14, order: "14", evento: "Batismo do Eunuco Etíope por Filipe", local: "Estrada para Gaza", referencia: "Atos 8:26-39", year: "33 d.C.", description: "Filipe explica as Escrituras a um oficial etíope e o batiza.", imageUrl: "https://picsum.photos/seed/ethiopian-eunuch/600/400" }
    ]
  },
  {
    id: "estrada-damasco",
    name: "Estrada para Damasco",
    lat: 33.3,
    lng: 36.1,
    ancientLocationImageUrl: "https://picsum.photos/seed/damascus-road/800/600",
    events: [
      { id: 15, order: "15", evento: "Conversão de Saulo na Estrada", local: "Estrada para Damasco", referencia: "Atos 9:1-9", year: "34 d.C.", description: "Uma luz do céu brilha ao redor de Saulo e ele ouve a voz de Jesus.", imageUrl: "https://picsum.photos/seed/saul-conversion/600/400" }
    ]
  },
  {
    id: "damasco",
    name: "Damasco",
    lat: 33.5138,
    lng: 36.2765,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-damascus/800/600",
    events: [
      { id: 16, order: "16", evento: "Batismo e Restauração de Saulo por Ananias", local: "Damasco", referencia: "Atos 9:10-19", year: "34 d.C.", description: "Ananias ora por Saulo, que recupera a visão e é batizado.", imageUrl: "https://picsum.photos/seed/saul-baptism/600/400" }
    ]
  },
  {
    id: "muros-damasco",
    name: "Muros de Damasco",
    lat: 33.5085,
    lng: 36.2750,
    ancientLocationImageUrl: "https://picsum.photos/seed/damascus-walls/800/600",
    events: [
      { id: 17, order: "17", evento: "Fuga de Saulo em um Cesto", local: "Muros de Damasco", referencia: "Atos 9:23-25", year: "37 d.C.", description: "Os discípulos descem Saulo em um cesto pela muralha para escapar dos judeus.", imageUrl: "https://picsum.photos/seed/saul-basket/600/400" }
    ]
  },
  {
    id: "lida",
    name: "Lida",
    lat: 31.9510,
    lng: 34.8953,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-lydda/800/600",
    events: [
      { id: 18, order: "18", evento: "Cura de Eneias por Pedro", local: "Lida", referencia: "Atos 9:32-35", year: "39 d.C.", description: "Pedro cura Eneias, que era paralítico e estava acamado há oito anos.", imageUrl: "https://picsum.photos/seed/healing-aeneas/600/400" }
    ]
  },
  {
    id: "jope",
    name: "Jope",
    lat: 32.0504,
    lng: 34.7522,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-joppa/800/600",
    events: [
      { id: 19, order: "19", evento: "Ressurreição de Dorcas por Pedro", local: "Jope", referencia: "Atos 9:36-42", year: "39 d.C.", description: "Pedro ressuscita Tabita (Dorcas), uma mulher cheia de boas obras.", imageUrl: "https://picsum.photos/seed/dorcas-raised/600/400" },
      { id: 20, order: "20", evento: "Visão de Pedro sobre o Telhado", local: "Jope", referencia: "Atos 10:9-16", year: "40 d.C.", description: "Pedro tem uma visão de um lençol com animais impuros descendo do céu.", imageUrl: "https://picsum.photos/seed/peter-vision/600/400" }
    ]
  },
  {
    id: "cesareia-maritima",
    name: "Cesareia Marítima",
    lat: 32.5000,
    lng: 34.8908,
    ancientLocationImageUrl: "https://picsum.photos/seed/caesarea-maritima/800/600",
    events: [
      { id: 21, order: "21", evento: "Conversão e Batismo de Cornélio", local: "Cesareia Marítima", referencia: "Atos 10:24-48", year: "40 d.C.", description: "O Espírito Santo desce sobre os gentios na casa do centurião Cornélio.", imageUrl: "https://picsum.photos/seed/cornelius-baptism/600/400" },
      { id: 26, order: "26", evento: "Morte de Herodes Agrippa I", local: "Cesareia Marítima", referencia: "Atos 12:20-23", year: "44 d.C.", description: "Herodes é ferido por um anjo por não dar glória a Deus e morre comido por vermes.", imageUrl: "https://picsum.photos/seed/herod-death/600/400" },
      { id: 60, order: "60", evento: "Transferência sob Escolta para Cesareia", local: "Jerusalém para Cesareia", referencia: "Atos 23:12-35", year: "57 d.C.", description: "Paulo é transferido à noite sob forte escolta militar para evitar uma emboscada.", imageUrl: "https://picsum.photos/seed/paul-transfer/600/400" },
      { id: 61, order: "61", evento: "Julgamento perante o Governador Félix", local: "Cesareia Marítima", referencia: "Atos 24:1-27", year: "57-59 d.C.", description: "Paulo se defende perante Félix e fica preso por dois anos.", imageUrl: "https://picsum.photos/seed/paul-felix/600/400" },
      { id: 62, order: "62", evento: "Apelação Oficial de Paulo para César perante Festo", local: "Cesareia Marítima", referencia: "Atos 25:1-12", year: "59 d.C.", description: "Para evitar ser julgado em Jerusalém, Paulo apela para César.", imageUrl: "https://picsum.photos/seed/appeal-caesar/600/400" },
      { id: 63, order: "63", evento: "Discurso de Defesa perante o Rei Agripa II", local: "Cesareia Marítima", referencia: "Atos 26:1-32", year: "59 d.C.", description: "Paulo conta seu testemunho de conversão ao Rei Agripa.", imageUrl: "https://picsum.photos/seed/paul-agrippa/600/400" }
    ]
  },
  {
    id: "antioquia-siria",
    name: "Antioquia da Síria",
    lat: 36.2028,
    lng: 36.1606,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-antioch/800/600",
    events: [
      { id: 22, order: "22", evento: "Fundação da Igreja e Origem do Nome \"Cristãos\"", local: "Antioquia da Síria", referencia: "Atos 11:19-26", year: "41 d.C.", description: "Os discípulos são chamados cristãos pela primeira vez.", imageUrl: "https://picsum.photos/seed/first-christians/600/400" },
      { id: 23, order: "23", evento: "Profecia de Ágabo sobre a Fome Mundial", local: "Antioquia da Síria", referencia: "Atos 11:27-28", year: "43 d.C.", description: "Ágabo profetiza uma grande fome, e os discípulos decidem enviar ajuda.", imageUrl: "https://picsum.photos/seed/agabus-prophecy/600/400" },
      { id: 27, order: "27", evento: "Comissionamento de Paulo e Barnabé", local: "Antioquia da Síria", referencia: "Atos 13:1-3", year: "46 d.C.", description: "O Espírito Santo separa Barnabé e Saulo para a primeira viagem missionária.", imageUrl: "https://picsum.photos/seed/paul-barnabas-sent/600/400" },
      { id: 36, order: "36", evento: "Conflito sobre a Circuncisão de Gentios", local: "Antioquia da Síria", referencia: "Atos 15:1-5", year: "49 d.C.", description: "Surge uma grande discussão sobre a necessidade de circuncidar os gentios.", imageUrl: "https://picsum.photos/seed/circumcision-debate/600/400" },
      { id: 39, order: "39", evento: "Entrega da Carta e Consolo das Igrejas", local: "Antioquia da Síria", referencia: "Atos 15:30-35", year: "49 d.C.", description: "A igreja se alegra com a carta do Concílio de Jerusalém.", imageUrl: "https://picsum.photos/seed/council-letter/600/400" },
      { id: 40, order: "40", evento: "Paulo Escolhe Silas e Inicia a Viagem", local: "Antioquia da Síria", referencia: "Atos 15:40-41", year: "49 d.C.", description: "Paulo e Barnabé se separam; Paulo escolhe Silas para a segunda viagem.", imageUrl: "https://picsum.photos/seed/paul-silas-depart/600/400" }
    ]
  },
  {
    id: "salamis",
    name: "Salamis (Chipre)",
    lat: 35.1847,
    lng: 33.9011,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-salamis/800/600",
    events: [
      { id: 28, order: "28", evento: "Pregação nas Sinagogas", local: "Salamis (Chipre)", referencia: "Atos 13:4-5", year: "46 d.C.", description: "Paulo e Barnabé anunciam a palavra de Deus nas sinagogas judaicas.", imageUrl: "https://picsum.photos/seed/synagogue-preaching/600/400" }
    ]
  },
  {
    id: "pafos",
    name: "Pafos (Chipre)",
    lat: 34.7586,
    lng: 32.4145,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-paphos/800/600",
    events: [
      { id: 29, order: "29", evento: "Confronto com Barjesus e Conversão de Sérgio Paulo", local: "Pafos (Chipre)", referencia: "Atos 13:6-12", year: "46 d.C.", description: "O mágico Elimas fica cego, e o procônsul crê no Senhor.", imageUrl: "https://picsum.photos/seed/elymas-blind/600/400" }
    ]
  },
  {
    id: "perga",
    name: "Perga da Panfília",
    lat: 36.9583,
    lng: 30.8533,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-perga/800/600",
    events: [
      { id: 30, order: "30", evento: "Retorno de João Marcos para Jerusalém", local: "Perga da Panfília", referencia: "Atos 13:13", year: "46 d.C.", description: "João Marcos abandona a equipe missionária e volta para Jerusalém.", imageUrl: "https://picsum.photos/seed/john-mark-leaves/600/400" }
    ]
  },
  {
    id: "antioquia-pisidia",
    name: "Antioquia da Pisídia",
    lat: 38.3053,
    lng: 31.1811,
    ancientLocationImageUrl: "https://picsum.photos/seed/pisidian-antioch/800/600",
    events: [
      { id: 31, order: "31", evento: "Grande Discurso de Paulo na Sinagoga", local: "Antioquia da Pisídia", referencia: "Atos 13:14-52", year: "46 d.C.", description: "Paulo faz um longo discurso sobre a história de Israel e a salvação em Jesus.", imageUrl: "https://picsum.photos/seed/paul-pisidia/600/400" }
    ]
  },
  {
    id: "iconio",
    name: "Icônio",
    lat: 37.8714,
    lng: 32.4846,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-iconium/800/600",
    events: [
      { id: 32, order: "32", evento: "Ministérios e Oposição Judaica", local: "Icônio", referencia: "Atos 14:1-5", year: "47 d.C.", description: "Muitos creem, mas a cidade se divide e há um plano para apedrejá-los.", imageUrl: "https://picsum.photos/seed/iconium-division/600/400" }
    ]
  },
  {
    id: "listra",
    name: "Listra",
    lat: 37.5667,
    lng: 32.2000,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-lystra/800/600",
    events: [
      { id: 33, order: "33", evento: "Cura do Coxo e Tentativa de Divinização", local: "Listra", referencia: "Atos 14:8-18", year: "47 d.C.", description: "A multidão tenta adorar Paulo e Barnabé como deuses após uma cura.", imageUrl: "https://picsum.photos/seed/lystra-gods/600/400" },
      { id: 34, order: "34", evento: "Apedrejamento de Paulo por Turbas Incitadas", local: "Listra", referencia: "Atos 14:19", year: "47 d.C.", description: "Judeus de Antioquia e Icônio incitam a multidão a apedrejar Paulo.", imageUrl: "https://picsum.photos/seed/paul-stoned/600/400" },
      { id: 41, order: "41", evento: "Timóteo Junta-se a Paulo e Silas", local: "Listra", referencia: "Atos 16:1-3", year: "50 d.C.", description: "Paulo convida o jovem Timóteo para acompanhá-los na viagem.", imageUrl: "https://picsum.photos/seed/timothy-joins/600/400" }
    ]
  },
  {
    id: "derbe",
    name: "Derbe e Viagem de Volta",
    lat: 37.3500,
    lng: 33.3500,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-derbe/800/600",
    events: [
      { id: 35, order: "35", evento: "Estabelecimento de Liderança e Retorno", local: "Derbe e Viagem de Volta", referencia: "Atos 14:20-28", year: "47 d.C.", description: "Eles pregam em Derbe e voltam confirmando as igrejas e elegendo presbíteros.", imageUrl: "https://picsum.photos/seed/elders-appointed/600/400" }
    ]
  },
  {
    id: "troas",
    name: "Troas",
    lat: 39.7500,
    lng: 26.1667,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-troas/800/600",
    events: [
      { id: 42, order: "42", evento: "Visão do Homem Macedônio em Troas", local: "Troas", referencia: "Atos 16:6-10", year: "50 d.C.", description: "Paulo tem uma visão de um homem pedindo ajuda na Macedônia.", imageUrl: "https://picsum.photos/seed/macedonian-call/600/400" },
      { id: 54, order: "54", evento: "Ressurreição de Êutico em Troas", local: "Troas", referencia: "Atos 20:7-12", year: "57 d.C.", description: "Êutico dorme, cai da janela e morre, mas Paulo o ressuscita.", imageUrl: "https://picsum.photos/seed/eutychus-raised/600/400" }
    ]
  },
  {
    id: "filipi",
    name: "Filipi",
    lat: 41.0122,
    lng: 24.2847,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-philippi/800/600",
    events: [
      { id: 43, order: "43", evento: "Conversão de Lídia e Batismo", local: "Filipi", referencia: "Atos 16:11-15", year: "50 d.C.", description: "O Senhor abre o coração de Lídia, uma vendedora de púrpura.", imageUrl: "https://picsum.photos/seed/lydia-baptism/600/400" },
      { id: 44, order: "44", evento: "Prisão, Terremoto e Conversão do Carcereiro", local: "Filipi", referencia: "Atos 16:16-40", year: "50 d.C.", description: "Um terremoto abre a prisão e o carcereiro se converte com sua família.", imageUrl: "https://picsum.photos/seed/philippian-jailer/600/400" }
    ]
  },
  {
    id: "macedonia",
    name: "Macedônia (Tessalônica e Bereia)",
    lat: 40.6401,
    lng: 22.9444,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-thessalonica/800/600",
    events: [
      { id: 45, order: "45", evento: "Pregação e Reação em Tessalônica e Bereia", local: "Macedônia", referencia: "Atos 17:1-15", year: "50 d.C.", description: "Os bereanos são mais nobres e examinam as Escrituras diariamente.", imageUrl: "https://picsum.photos/seed/bereans-scrolls/600/400" }
    ]
  },
  {
    id: "atenas",
    name: "Atenas",
    lat: 37.9838,
    lng: 23.7275,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-athens/800/600",
    events: [
      { id: 46, order: "46", evento: "Discurso no Areópago sobre o Deus Desconhecido", local: "Atenas", referencia: "Atos 17:16-34", year: "51 d.C.", description: "Paulo prega aos filósofos gregos sobre o Deus Criador.", imageUrl: "https://picsum.photos/seed/paul-areopagus/600/400" }
    ]
  },
  {
    id: "corinto",
    name: "Corinto",
    lat: 37.9060,
    lng: 22.8790,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-corinth/800/600",
    events: [
      { id: 47, order: "47", evento: "Ministério em Corinto com Áquila e Priscila", local: "Corinto", referencia: "Atos 18:1-17", year: "51-52 d.C.", description: "Paulo trabalha fazendo tendas e prega na sinagoga.", imageUrl: "https://picsum.photos/seed/tentmakers/600/400" }
    ]
  },
  {
    id: "efeso",
    name: "Éfeso",
    lat: 37.9396,
    lng: 27.3408,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-ephesus/800/600",
    events: [
      { id: 48, order: "48", evento: "Breve Visita a Éfeso e Retorno", local: "Éfeso e Cesareia", referencia: "Atos 18:18-22", year: "52 d.C.", description: "Paulo deixa Áquila e Priscila em Éfeso e viaja para Cesareia.", imageUrl: "https://picsum.photos/seed/ephesus-port/600/400" },
      { id: 49, order: "49", evento: "Reinstrução dos Discípulos de João Batista", local: "Éfeso", referencia: "Atos 19:1-7", year: "53 d.C.", description: "Doze discípulos recebem o Espírito Santo após serem batizados em nome de Jesus.", imageUrl: "https://picsum.photos/seed/ephesus-baptism/600/400" },
      { id: 50, order: "50", evento: "Ministério na Escola de Tirano", local: "Éfeso", referencia: "Atos 19:8-12", year: "53-55 d.C.", description: "Paulo ensina diariamente por dois anos, e toda a Ásia ouve a palavra.", imageUrl: "https://picsum.photos/seed/school-tyrannus/600/400" },
      { id: 51, order: "51", evento: "Incidente com os Sete Filhos de Ceva", local: "Éfeso", referencia: "Atos 19:13-17", year: "55 d.C.", description: "Exorcistas judeus tentam expulsar demônios em nome de Jesus e são atacados.", imageUrl: "https://picsum.photos/seed/sons-sceva/600/400" },
      { id: 52, order: "52", evento: "Queima de Livros de Magia por Novos Crentes", local: "Éfeso", referencia: "Atos 19:18-20", year: "55 d.C.", description: "Muitos que praticavam magia queimam seus livros publicamente.", imageUrl: "https://picsum.photos/seed/burning-books/600/400" },
      { id: 53, order: "53", evento: "Tumulto dos Prateiros no Grande Teatro", local: "Éfeso", referencia: "Atos 19:23-41", year: "56 d.C.", description: "Demétrio incita os artífices contra Paulo por causa da deusa Diana.", imageUrl: "https://picsum.photos/seed/ephesus-riot/600/400" }
    ]
  },
  {
    id: "mileto",
    name: "Mileto",
    lat: 37.5302,
    lng: 27.2768,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-miletus/800/600",
    events: [
      { id: 55, order: "55", evento: "Discurso de Despedida aos Anciãos Efésios", local: "Mileto", referencia: "Atos 20:17-38", year: "57 d.C.", description: "Paulo se despede emocionadamente dos presbíteros de Éfeso.", imageUrl: "https://picsum.photos/seed/paul-farewell-miletus/600/400" }
    ]
  },
  {
    id: "tiro",
    name: "Tiro",
    lat: 33.2705,
    lng: 35.1961,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-tyre/800/600",
    events: [
      { id: 56, order: "56", evento: "Alertas sobre o Perigo em Jerusalém", local: "Tiro e Cesareia", referencia: "Atos 21:1-14", year: "57 d.C.", description: "Discípulos avisam Paulo pelo Espírito para não subir a Jerusalém.", imageUrl: "https://picsum.photos/seed/tyre-warning/600/400" }
    ]
  },
  {
    id: "mirra",
    name: "Mirra da Lícia",
    lat: 36.2444,
    lng: 29.9794,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-myra/800/600",
    events: [
      { id: 64, order: "64", evento: "Início da Viagem e Troca de Navio", local: "Mirra da Lícia", referencia: "Atos 27:1-6", year: "59 d.C.", description: "O centurião encontra um navio alexandrino e embarca os prisioneiros.", imageUrl: "https://picsum.photos/seed/myra-ship/600/400" }
    ]
  },
  {
    id: "mar-mediterraneo",
    name: "Mar Mediterrâneo",
    lat: 35.0,
    lng: 18.0,
    ancientLocationImageUrl: "https://picsum.photos/seed/mediterranean-storm/800/600",
    events: [
      { id: 65, order: "65", evento: "Tempestade Prolongada no Mar Adriático", local: "Mar Mediterrâneo", referencia: "Atos 27:13-26", year: "59 d.C.", description: "Um vento tempestuoso chamado Euroaquilão atinge o navio por muitos dias.", imageUrl: "https://picsum.photos/seed/ship-storm/600/400" }
    ]
  },
  {
    id: "malta",
    name: "Malta",
    lat: 35.9375,
    lng: 14.3978,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-malta/800/600",
    events: [
      { id: 66, order: "66", evento: "Naufrágio e Salvação de Todas as Almas", local: "Malta", referencia: "Atos 27:27-44", year: "59 d.C.", description: "O navio encalha, mas todos os 276 passageiros chegam a salvo em terra.", imageUrl: "https://picsum.photos/seed/shipwreck-malta/600/400" },
      { id: 67, order: "67", evento: "Cura de Públio e Ministério na Ilha", local: "Malta", referencia: "Atos 28:7-10", year: "59-60 d.C.", description: "Paulo cura o pai de Públio e muitos outros doentes na ilha.", imageUrl: "https://picsum.photos/seed/healing-publius/600/400" }
    ]
  },
  {
    id: "praca-apio",
    name: "Praça de Ápio / 3 Tavernas",
    lat: 41.4500,
    lng: 12.9000,
    ancientLocationImageUrl: "https://picsum.photos/seed/appian-way/800/600",
    events: [
      { id: 68, order: "68", evento: "Recepção pelos Cristãos na Via Ápia", local: "Praça de Ápio / 3 Tavernas", referencia: "Atos 28:13-15", year: "60 d.C.", description: "Irmãos de Roma viajam para encontrar Paulo, e ele dá graças a Deus.", imageUrl: "https://picsum.photos/seed/roman-christians-meet/600/400" }
    ]
  },
  {
    id: "roma",
    name: "Roma",
    lat: 41.9028,
    lng: 12.4964,
    ancientLocationImageUrl: "https://picsum.photos/seed/ancient-rome/800/600",
    events: [
      { id: 69, order: "69", evento: "Prisão Domiciliar e Reunião com Judeus Romanos", local: "Roma", referencia: "Atos 28:16-29", year: "60 d.C.", description: "Paulo explica o evangelho aos líderes judeus em Roma.", imageUrl: "https://picsum.photos/seed/paul-rome-jews/600/400" },
      { id: 70, order: "70", evento: "Dois Anos de Pregação sem Impedimentos em Roma", local: "Roma", referencia: "Atos 28:30-31", year: "60-62 d.C.", description: "Paulo recebe a todos e prega o Reino de Deus com toda a intrepidez.", imageUrl: "https://picsum.photos/seed/paul-preaching-rome/600/400" }
    ]
  }
];
