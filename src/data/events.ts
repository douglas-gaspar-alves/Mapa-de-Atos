export interface ActEvent {
  id: number;
  evento: string;
  local: string;
  referencia: string;
}

export interface LocationGroup {
  id: string;
  name: string;
  lat: number;
  lng: number;
  events: ActEvent[];
}

export const locations: LocationGroup[] = [
  {
    id: "monte-oliveiras",
    name: "Monte das Oliveiras",
    lat: 31.7781,
    lng: 35.2436,
    events: [
      { id: 1, evento: "Promessa do Espírito Santo e Mandato Missionário", local: "Monte das Oliveiras", referencia: "Atos 1:4-8" },
      { id: 2, evento: "Ascensão de Jesus ao Céu", local: "Monte das Oliveiras", referencia: "Atos 1:9-11" }
    ]
  },
  {
    id: "jerusalem-cenaculo",
    name: "Jerusalém (Cenáculo)",
    lat: 31.7718,
    lng: 35.2295,
    events: [
      { id: 3, evento: "Escolha de Matias para o Apostolado", local: "Jerusalém (Cenáculo)", referencia: "Atos 1:15-26" }
    ]
  },
  {
    id: "jerusalem",
    name: "Jerusalém",
    lat: 31.7683,
    lng: 35.2137,
    events: [
      { id: 4, evento: "Derramamento do Espírito Santo no Pentecostes", local: "Jerusalém", referencia: "Atos 2:1-4" },
      { id: 5, evento: "Discurso de Pedro e Conversão de 3000 Pessoas", local: "Jerusalém", referencia: "Atos 2:14-41" },
      { id: 7, evento: "Prisão e Defesa de Pedro e João perante o Sinédrio", local: "Jerusalém", referencia: "Atos 4:1-22" },
      { id: 8, evento: "Morte de Ananias e Safira por Fraude", local: "Jerusalém", referencia: "Atos 5:1-11" },
      { id: 9, evento: "Libertação Milagrosa dos Apóstolos da Prisão", local: "Jerusalém", referencia: "Atos 5:17-25" },
      { id: 10, evento: "Instituição dos Sete para o Serviço (Diáconos)", local: "Jerusalém", referencia: "Atos 6:1-6" },
      { id: 24, evento: "Morte do Apóstolo Tiago por Herodes", local: "Jerusalém", referencia: "Atos 12:1-2" },
      { id: 25, evento: "Prisão e Libertação Milagrosa de Pedro", local: "Jerusalém", referencia: "Atos 12:3-11" },
      { id: 37, evento: "Debate e Deliberação Apostólica", local: "Jerusalém", referencia: "Atos 15:6-21" },
      { id: 38, evento: "Redação do Decreto Apostólico", local: "Jerusalém", referencia: "Atos 15:22-29" },
      { id: 58, evento: "Defesa de Paulo perante a Multidão Enfurecida", local: "Jerusalém", referencia: "Atos 22:1-21" },
      { id: 59, evento: "Defesa de Paulo perante o Sinédrio", local: "Jerusalém", referencia: "Atos 23:1-11" }
    ]
  },
  {
    id: "templo-jerusalem",
    name: "Templo de Jerusalém",
    lat: 31.7780,
    lng: 35.2354,
    events: [
      { id: 6, evento: "Cura de um Homem Cojo no Portão Belo", local: "Templo de Jerusalém", referencia: "Atos 3:1-10" },
      { id: 57, evento: "Prisão de Paulo e Resgate Romano", local: "Templo de Jerusalém", referencia: "Atos 21:26-36" }
    ]
  },
  {
    id: "fora-jerusalem",
    name: "Fora de Jerusalém",
    lat: 31.7833,
    lng: 35.2333,
    events: [
      { id: 11, evento: "Martírio de Estêvão", local: "Fora de Jerusalém", referencia: "Atos 7:54-60" }
    ]
  },
  {
    id: "samaria",
    name: "Samaria",
    lat: 32.2733,
    lng: 35.1944,
    events: [
      { id: 12, evento: "Pregação de Filipe aos Samaritanos", local: "Samaria", referencia: "Atos 8:5-13" },
      { id: 13, evento: "Confirmação Apostólica em Samaria", local: "Samaria", referencia: "Atos 8:14-25" }
    ]
  },
  {
    id: "estrada-gaza",
    name: "Estrada para Gaza",
    lat: 31.5,
    lng: 34.4667,
    events: [
      { id: 14, evento: "Batismo do Eunuco Etíope por Filipe", local: "Estrada para Gaza", referencia: "Atos 8:26-39" }
    ]
  },
  {
    id: "estrada-damasco",
    name: "Estrada para Damasco",
    lat: 33.3,
    lng: 36.1,
    events: [
      { id: 15, evento: "Conversão de Saulo na Estrada", local: "Estrada para Damasco", referencia: "Atos 9:1-9" }
    ]
  },
  {
    id: "damasco",
    name: "Damasco",
    lat: 33.5138,
    lng: 36.2765,
    events: [
      { id: 16, evento: "Batismo e Restauração de Saulo por Ananias", local: "Damasco", referencia: "Atos 9:10-19" }
    ]
  },
  {
    id: "muros-damasco",
    name: "Muros de Damasco",
    lat: 33.5085,
    lng: 36.2750,
    events: [
      { id: 17, evento: "Fuga de Saulo em um Cesto", local: "Muros de Damasco", referencia: "Atos 9:23-25" }
    ]
  },
  {
    id: "lida",
    name: "Lida",
    lat: 31.9510,
    lng: 34.8953,
    events: [
      { id: 18, evento: "Cura de Eneias por Pedro", local: "Lida", referencia: "Atos 9:32-35" }
    ]
  },
  {
    id: "jope",
    name: "Jope",
    lat: 32.0504,
    lng: 34.7522,
    events: [
      { id: 19, evento: "Ressurreição de Dorcas por Pedro", local: "Jope", referencia: "Atos 9:36-42" },
      { id: 20, evento: "Visão de Pedro sobre o Telhado", local: "Jope", referencia: "Atos 10:9-16" }
    ]
  },
  {
    id: "cesareia-maritima",
    name: "Cesareia Marítima",
    lat: 32.5000,
    lng: 34.8908,
    events: [
      { id: 21, evento: "Conversão e Batismo de Cornélio", local: "Cesareia Marítima", referencia: "Atos 10:24-48" },
      { id: 26, evento: "Morte de Herodes Agrippa I", local: "Cesareia Marítima", referencia: "Atos 12:20-23" },
      { id: 60, evento: "Transferência sob Escolta para Cesareia", local: "Jerusalém para Cesareia", referencia: "Atos 23:12-35" },
      { id: 61, evento: "Julgamento perante o Governador Félix", local: "Cesareia Marítima", referencia: "Atos 24:1-27" },
      { id: 62, evento: "Apelação Oficial de Paulo para César perante Festo", local: "Cesareia Marítima", referencia: "Atos 25:1-12" },
      { id: 63, evento: "Discurso de Defesa perante o Rei Agripa II", local: "Cesareia Marítima", referencia: "Atos 26:1-32" }
    ]
  },
  {
    id: "antioquia-siria",
    name: "Antioquia da Síria",
    lat: 36.2028,
    lng: 36.1606,
    events: [
      { id: 22, evento: "Fundação da Igreja e Origem do Nome \"Cristãos\"", local: "Antioquia da Síria", referencia: "Atos 11:19-26" },
      { id: 23, evento: "Profecia de Ágabo sobre a Fome Mundial", local: "Antioquia da Síria", referencia: "Atos 11:27-28" },
      { id: 27, evento: "Comissionamento de Paulo e Barnabé", local: "Antioquia da Síria", referencia: "Atos 13:1-3" },
      { id: 36, evento: "Conflito sobre a Circuncisão de Gentios", local: "Antioquia da Síria", referencia: "Atos 15:1-5" },
      { id: 39, evento: "Entrega da Carta e Consolo das Igrejas", local: "Antioquia da Síria", referencia: "Atos 15:30-35" },
      { id: 40, evento: "Paulo Escolhe Silas e Inicia a Viagem", local: "Antioquia da Síria", referencia: "Atos 15:40-41" }
    ]
  },
  {
    id: "salamis",
    name: "Salamis (Chipre)",
    lat: 35.1847,
    lng: 33.9011,
    events: [
      { id: 28, evento: "Pregação nas Sinagogas", local: "Salamis (Chipre)", referencia: "Atos 13:4-5" }
    ]
  },
  {
    id: "pafos",
    name: "Pafos (Chipre)",
    lat: 34.7586,
    lng: 32.4145,
    events: [
      { id: 29, evento: "Confronto com Barjesus e Conversão de Sérgio Paulo", local: "Pafos (Chipre)", referencia: "Atos 13:6-12" }
    ]
  },
  {
    id: "perga",
    name: "Perga da Panfília",
    lat: 36.9583,
    lng: 30.8533,
    events: [
      { id: 30, evento: "Retorno de João Marcos para Jerusalém", local: "Perga da Panfília", referencia: "Atos 13:13" }
    ]
  },
  {
    id: "antioquia-pisidia",
    name: "Antioquia da Pisídia",
    lat: 38.3053,
    lng: 31.1811,
    events: [
      { id: 31, evento: "Grande Discurso de Paulo na Sinagoga", local: "Antioquia da Pisídia", referencia: "Atos 13:14-52" }
    ]
  },
  {
    id: "iconio",
    name: "Icônio",
    lat: 37.8714,
    lng: 32.4846,
    events: [
      { id: 32, evento: "Ministérios e Oposição Judaica", local: "Icônio", referencia: "Atos 14:1-5" }
    ]
  },
  {
    id: "listra",
    name: "Listra",
    lat: 37.5667,
    lng: 32.2000,
    events: [
      { id: 33, evento: "Cura do Coxo e Tentativa de Divinização", local: "Listra", referencia: "Atos 14:8-18" },
      { id: 34, evento: "Apedrejamento de Paulo por Turbas Incitadas", local: "Listra", referencia: "Atos 14:19" },
      { id: 41, evento: "Timóteo Junta-se a Paulo e Silas", local: "Listra", referencia: "Atos 16:1-3" }
    ]
  },
  {
    id: "derbe",
    name: "Derbe e Viagem de Volta",
    lat: 37.3500,
    lng: 33.3500,
    events: [
      { id: 35, evento: "Estabelecimento de Liderança e Retorno", local: "Derbe e Viagem de Volta", referencia: "Atos 14:20-28" }
    ]
  },
  {
    id: "troas",
    name: "Troas",
    lat: 39.7500,
    lng: 26.1667,
    events: [
      { id: 42, evento: "Visão do Homem Macedônio em Troas", local: "Troas", referencia: "Atos 16:6-10" },
      { id: 54, evento: "Ressurreição de Êutico em Troas", local: "Troas", referencia: "Atos 20:7-12" }
    ]
  },
  {
    id: "filipi",
    name: "Filipi",
    lat: 41.0122,
    lng: 24.2847,
    events: [
      { id: 43, evento: "Conversão de Lídia e Batismo", local: "Filipi", referencia: "Atos 16:11-15" },
      { id: 44, evento: "Prisão, Terremoto e Conversão do Carcereiro", local: "Filipi", referencia: "Atos 16:16-40" }
    ]
  },
  {
    id: "macedonia",
    name: "Macedônia (Tessalônica e Bereia)",
    lat: 40.6401,
    lng: 22.9444,
    events: [
      { id: 45, evento: "Pregação e Reação em Tessalônica e Bereia", local: "Macedônia", referencia: "Atos 17:1-15" }
    ]
  },
  {
    id: "atenas",
    name: "Atenas",
    lat: 37.9838,
    lng: 23.7275,
    events: [
      { id: 46, evento: "Discurso no Areópago sobre o Deus Desconhecido", local: "Atenas", referencia: "Atos 17:16-34" }
    ]
  },
  {
    id: "corinto",
    name: "Corinto",
    lat: 37.9060,
    lng: 22.8790,
    events: [
      { id: 47, evento: "Ministério em Corinto com Áquila e Priscila", local: "Corinto", referencia: "Atos 18:1-17" }
    ]
  },
  {
    id: "efeso",
    name: "Éfeso",
    lat: 37.9396,
    lng: 27.3408,
    events: [
      { id: 48, evento: "Breve Visita a Éfeso e Retorno", local: "Éfeso e Cesareia", referencia: "Atos 18:18-22" },
      { id: 49, evento: "Reinstrução dos Discípulos de João Batista", local: "Éfeso", referencia: "Atos 19:1-7" },
      { id: 50, evento: "Ministério na Escola de Tirano", local: "Éfeso", referencia: "Atos 19:8-12" },
      { id: 51, evento: "Incidente com os Sete Filhos de Ceva", local: "Éfeso", referencia: "Atos 19:13-17" },
      { id: 52, evento: "Queima de Livros de Magia por Novos Crentes", local: "Éfeso", referencia: "Atos 19:18-20" },
      { id: 53, evento: "Tumulto dos Prateiros no Grande Teatro", local: "Éfeso", referencia: "Atos 19:23-41" }
    ]
  },
  {
    id: "mileto",
    name: "Mileto",
    lat: 37.5302,
    lng: 27.2768,
    events: [
      { id: 55, evento: "Discurso de Despedida aos Anciãos Efésios", local: "Mileto", referencia: "Atos 20:17-38" }
    ]
  },
  {
    id: "tiro",
    name: "Tiro",
    lat: 33.2705,
    lng: 35.1961,
    events: [
      { id: 56, evento: "Alertas sobre o Perigo em Jerusalém", local: "Tiro e Cesareia", referencia: "Atos 21:1-14" }
    ]
  },
  {
    id: "mirra",
    name: "Mirra da Lícia",
    lat: 36.2444,
    lng: 29.9794,
    events: [
      { id: 64, evento: "Início da Viagem e Troca de Navio", local: "Mirra da Lícia", referencia: "Atos 27:1-6" }
    ]
  },
  {
    id: "mar-mediterraneo",
    name: "Mar Mediterrâneo",
    lat: 35.0,
    lng: 18.0,
    events: [
      { id: 65, evento: "Tempestade Prolongada no Mar Adriático", local: "Mar Mediterrâneo", referencia: "Atos 27:13-26" }
    ]
  },
  {
    id: "malta",
    name: "Malta",
    lat: 35.9375,
    lng: 14.3978,
    events: [
      { id: 66, evento: "Naufrágio e Salvação de Todas as Almas", local: "Malta", referencia: "Atos 27:27-44" },
      { id: 67, evento: "Cura de Públio e Ministério na Ilha", local: "Malta", referencia: "Atos 28:7-10" }
    ]
  },
  {
    id: "praca-apio",
    name: "Praça de Ápio / 3 Tavernas",
    lat: 41.4500,
    lng: 12.9000,
    events: [
      { id: 68, evento: "Recepção pelos Cristãos na Via Ápia", local: "Praça de Ápio / 3 Tavernas", referencia: "Atos 28:13-15" }
    ]
  },
  {
    id: "roma",
    name: "Roma",
    lat: 41.9028,
    lng: 12.4964,
    events: [
      { id: 69, evento: "Prisão Domiciliar e Reunião com Judeus Romanos", local: "Roma", referencia: "Atos 28:16-29" },
      { id: 70, evento: "Dois Anos de Pregação sem Impedimentos em Roma", local: "Roma", referencia: "Atos 28:30-31" }
    ]
  }
];
