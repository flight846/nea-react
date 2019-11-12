const SampleRejectReasons = [
  'Unofficial seal',
  'Tempered / broken seal',
  'Damaged / broken / defaced barcode',
  'Cracked vial with leakage of water',
  'Broken vial',
  'Empty with cracked / damaged vial',
  'Others',
];

const SampleFindingStatusLOV = [
  'Pending',
  'Identified',
  'Invalid - Unofficial seal',
  'Invalid - Tempered / broken seal',
  'Invalid - Damaged / broken / defaced barcode',
  'Invalid - Cracked vial with leakage of water',
  'Invalid - Broken vial',
  'Invalid - Empty with cracked / damaged vial',
  'Others',
];

const RodentSpecimenTypeLOV = ['Droppings', 'Others'];

const SpecimensLOV = [
  {
    name: '-- Select --',
    value: '',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
    ],
  },
  {
    name: 'Mosquito',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Aedes (Stegomyia) aegypti',
        vectorOfDisease: 'Dengue, Chikungunya and Zika',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedes (Stegomyia) albopictus',
        vectorOfDisease: 'Dengue, Chikungunya and Zika',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) quinquefasciatus',
        vectorOfDisease: 'Filariasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) gelidus',
        vectorOfDisease: 'Japanese B Encephalitis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) tritaeniorhynchus',
        vectorOfDisease: 'Japanese B Encephalitis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Cellia) epiroticus (old name An. sundaicus)',
        vectorOfDisease: 'Malaria',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Cellia) maculatus',
        vectorOfDisease: 'Malaria',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Anopheles) letifer',
        vectorOfDisease: 'Malaria',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Anopheles) sinensis',
        vectorOfDisease: 'Malaria (potential)',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedeomyia (Aedeomyia) catasticta',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedeomyia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedes (Aedimorphus) vexans',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedes (Lorrainea) amesii',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedes (Scutomyia) albolineatus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedes (Stegomyia) malayensis',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Aedes (Verrallina) butleri',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Anopheles) barbirostris sensu lato',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Anopheles) separatus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Cellia) karwari',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Cellia) kochi',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Cellia) tessallatus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Anopheles (Cellia) vagus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Armigeres (Armigeres) kesseli',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Armigeres (Armigeres) subalbatus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Armigeres sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Coquillettidia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) fuscocephala',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) hutchinsoni',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) mimulus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) sitiens',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culex) vishnui',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culiciomyia) nigropunctatus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Culiciomyia) spathifurca',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Eumelanomyia) brevipalpis',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Oculeomyia) bitaeniorhynchus',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Culex (Oculeomyia) sinensis',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Ficalbia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Heizmannia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Hodgesia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Lutzia (Metalutzia) fuscana',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Lutzia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Mansonia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Mimomyia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Orthopodomyia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Toxorhynchites (Toxorhynchites) splendens',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Toxorhynchites sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Tripteroides (Rachionotomyia) tenax',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Tripteroides sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Uranotaenia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Zeugnomyia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Other mosquitoes',
        vectorOfDisease: '',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Other insects',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'No larvae/pupae found',
        vectorOfDisease: '',
        specimenStage: [],
      },
    ],
  },
  {
    name: 'Fly',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Musca domestica (House fly)',
        vectorOfDisease: 'Cholera, typhoid fever',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Chrysomya sp.',
        vectorOfDisease: 'Myiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Family Sarcophagidae',
        vectorOfDisease: 'Myiasis and pseudomyiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Megaselia sp.',
        vectorOfDisease: 'Myiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Drosophila sp.',
        vectorOfDisease: 'Myiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Musca sorbens',
        vectorOfDisease: 'Conjunctivitis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Lucilia cuprina',
        vectorOfDisease: 'Myiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Hemipyrellia sp.',
        vectorOfDisease: 'Myiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Eristalinus sp.',
        vectorOfDisease: 'Myiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Boettcherisca sp.',
        vectorOfDisease: 'Myiasis and pseudomyiasis',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Psychoda sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Siphunculina sp.',
        vectorOfDisease: 'Conjunctivitis and yaws',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Tabanus sp.',
        vectorOfDisease: 'Anthrax',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Simulium sp.',
        vectorOfDisease: 'Onchocerciasis or "River blindness"',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Hermetia sp.',
        vectorOfDisease: 'Non Vector',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
      {
        name: 'Other flies',
        vectorOfDisease: '',
        specimenStage: ['1', '2', '3', '4', 'Pupa', 'Adult'],
      },
    ],
  },
  {
    name: 'Flea',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Ctenocephalides canis (Dog flea)',
        vectorOfDisease: 'Murine typhus',
        specimenStage: ['Adult'],
      },
      {
        name: 'Ctenocephalides felis (cat flea)',
        vectorOfDisease: 'Murine typhus',
        specimenStage: ['Adult'],
      },
      {
        name: 'Xenopsylla cheopis (Rat flea)',
        vectorOfDisease: 'Plague',
        specimenStage: ['Adult'],
      },
      {
        name: 'Other fleas',
        vectorOfDisease: 'Plague, Murine typhus',
        specimenStage: ['Adult'],
      },
    ],
  },
  {
    name: 'Cockroach',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Periplaneta americana (American cockroach)',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: ['Adult', 'Nymph', 'Ootheca'],
      },
      {
        name: 'Periplaneta brunnea (Brown cockroach)',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: ['Adult', 'Nymph', 'Ootheca'],
      },
      {
        name: 'Periplaneta australasiae (Australian cockroach)',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: ['Adult', 'Nymph', 'Ootheca'],
      },
      {
        name: 'Blattella germanica (German cockroach)',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: ['Adult', 'Nymph', 'Ootheca'],
      },
      {
        name: 'Supella supellectilium (Brown-banded cockroach)',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: ['Adult', 'Nymph', 'Ootheca'],
      },
      {
        name: 'Oriental Cockroach',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: ['Adult', 'Nymph', 'Ootheca'],
      },
    ],
  },
  {
    name: 'Bee/Hornet/Wasp',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Apis indica (Honey bee)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Megapis dorsata (Wild bee)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Micrapis florea (Small bee)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Xylocopa sp. (Carpenter bee)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Trigona sp. (Stingless bee)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Other bees',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Vespa affinis (Lesser banded hornet)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Vespa analis (Yellow-vented hornet)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Vespa tropica (Greater banded hornet)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Other hornets',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Solitary wasps',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Social wasps',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Other wasps',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
    ],
  },
  {
    name: 'Rodent',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Mus musculus',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'Rattus exulans',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'Rattus norvegicus',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'Rattus rattus diardii',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'Rattus rattus sp.',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'Rattus sp.',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'Suncus murinus',
        vectorOfDisease: 'Plague, Murine typhus, Salmonellosis',
        specimenStage: [],
      },
      {
        name: 'House lizard',
        vectorOfDisease: 'Non vector',
        specimenStage: [],
      },
      {
        name: 'Cockroach',
        vectorOfDisease: 'Food-borne diseases, Cholera, Typhoid, Salmonellosis, Dysentery',
        specimenStage: [],
      },
      {
        name: 'Others',
        vectorOfDisease: '',
        specimenStage: [],
      },
    ],
  },
  {
    name: 'Others',
    species: [
      {
        name: '-- Select --',
        value: '',
        vectorOfDisease: '',
        specimenStage: [],
      },
      {
        name: 'Ticks',
        vectorOfDisease: 'Spotted fever, Tick fever, Tularaemia',
        specimenStage: ['Adult'],
      },
      {
        name: 'Mites',
        vectorOfDisease: 'Scabies (Scrub fever)',
        specimenStage: ['Adult'],
      },
      {
        name: 'Louse/Lice',
        vectorOfDisease: 'Typhus, Trench fever',
        specimenStage: ['Adult'],
      },
      {
        name: 'Family Ceratopogonidae (Biting midges including Culicoides sp.)',
        vectorOfDisease: 'Oropouche virus, filiarial worms',
        specimenStage: ['Adult'],
      },
      {
        name: 'Other biting midges',
        vectorOfDisease: '',
        specimenStage: ['Adult'],
      },
      {
        name: 'Chironomidae (non-biting midges)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Eggs', 'Larvae', 'Pupa', 'Adult'],
      },
      {
        name: 'Psocids (book\bark lice)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Family Tipulidae (Cranefly/Daddy-long-legs)',
        vectorOfDisease: 'Non vector',
        specimenStage: ['Adult'],
      },
      {
        name: 'Others',
        vectorOfDisease: '',
        specimenStage: [],
      },
    ],
  },
];

const PurposeLOV = ['Purpose 1', 'Purpose 2'];

const SampleTreatmentLOV = ['Destroy', 'Research'];

export {
  SampleFindingStatusLOV,
  SpecimensLOV,
  SampleRejectReasons,
  RodentSpecimenTypeLOV,
  PurposeLOV,
  SampleTreatmentLOV,
};
