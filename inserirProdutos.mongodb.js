const database = "bd3_atv2";

const collection = "bd3_atv2_produtos";

use(database);

db[collection].insertMany([
  {
    _id: 1,
    nome: "Cafeteira Expresso",
    valor: 299.9,
    quantidadeEmEstoque: 25,
    fabricante: "Café Gourmet",
    categoria: "Eletrodomésticos",
    descricao: "Cafeteira expresso com vaporizador de leite."
  },
  {
    _id: 2,
    nome: "Liquidificador Turbo",
    valor: 149.9,
    quantidadeEmEstoque: 20,
    fabricante: "TurboMix",
    categoria: "Eletrodomésticos",
    descricao: "Liquidificador potente com 10 velocidades e jarra de Tritan."
  },
  {
    _id: 3,
    nome: "Ferro de Passar",
    valor: 89.9,
    quantidadeEmEstoque: 15,
    fabricante: "PassaFácil",
    categoria: "Eletrodomésticos",
    descricao: "Ferro de passar a vapor com base antiaderente."
  },
  {
    _id: 4,
    nome: "Aspirador Robô",
    valor: 999.9,
    quantidadeEmEstoque: 12,
    fabricante: "RoboClean",
    categoria: "Eletrodomésticos",
    descricao: "Aspirador robô inteligente com conexão Wi-Fi."
  },
  {
    _id: 5,
    nome: "Smartphone Alpha",
    valor: 1299.9,
    quantidadeEmEstoque: 40,
    fabricante: "TechNova",
    categoria: "Eletrônicos",
    descricao: "Smartphone com tela de 6.7 polegadas e bateria de longa duração."
  },
  {
    _id: 6,
    nome: "Notebook Pro",
    valor: 4499.9,
    quantidadeEmEstoque: 8,
    fabricante: "CompTech",
    categoria: "Eletrônicos",
    descricao: "Notebook com processador Intel i9 e 32GB de RAM."
  },
  {
    _id: 7,
    nome: "Smart TV 60\"",
    valor: 3299.9,
    quantidadeEmEstoque: 10,
    fabricante: "VisionScreen",
    categoria: "Eletrônicos",
    descricao: "Smart TV 4K com inteligência artificial integrada."
  },
  {
    _id: 8,
    nome: "Caixa de Som Party",
    valor: 299.9,
    quantidadeEmEstoque: 30,
    fabricante: "SoundWave",
    categoria: "Eletrônicos",
    descricao: "Caixa de som Bluetooth com iluminação LED e 20 horas de bateria."
  },
  {
    _id: 9,
    nome: "Relógio Fitness",
    valor: 499.9,
    quantidadeEmEstoque: 40,
    fabricante: "SmartTime",
    categoria: "Eletrônicos",
    descricao: "Relógio fitness com GPS integrado e monitor de oxigênio."
  },
  {
    _id: 10,
    nome: "Bicicleta Speed",
    valor: 1299.9,
    quantidadeEmEstoque: 10,
    fabricante: "BikePro",
    categoria: "Esportes",
    descricao: "Bicicleta speed com quadro de carbono e 21 marchas."
  },
  {
    _id: 11,
    nome: "Tênis de Trekking",
    valor: 499.9,
    quantidadeEmEstoque: 40,
    fabricante: "TrailMaster",
    categoria: "Esportes",
    descricao: "Tênis de trekking com solado antiderrapante e proteção impermeável."
  },
  {
    _id: 12,
    nome: "Regata Esportiva",
    valor: 69.9,
    quantidadeEmEstoque: 120,
    fabricante: "FitWear",
    categoria: "Esportes",
    descricao: "Regata esportiva com tecido respirável e secagem rápida."
  },
  {
    _id: 13,
    nome: "Banco de Supino",
    valor: 1599.9,
    quantidadeEmEstoque: 6,
    fabricante: "FitGear",
    categoria: "Esportes",
    descricao: "Banco de supino ajustável com suporte para halteres."
  },
  {
    _id: 14,
    nome: "Cadeira Gamer Lux",
    valor: 1099.9,
    quantidadeEmEstoque: 15,
    fabricante: "GameSeat",
    categoria: "Games",
    descricao: "Cadeira gamer de luxo com reclinação e apoio para os pés."
  },
  {
    _id: 15,
    nome: "Console de Videogame Pro",
    valor: 2999.9,
    quantidadeEmEstoque: 8,
    fabricante: "PlayMax",
    categoria: "Games",
    descricao: "Console com gráficos 8K e 2TB de armazenamento."
  },
  {
    _id: 16,
    nome: "Joystick Sem Fio",
    valor: 229.9,
    quantidadeEmEstoque: 25,
    fabricante: "GameControl",
    categoria: "Games",
    descricao: "Joystick sem fio com vibração e conexão Bluetooth."
  },
  {
    _id: 17,
    nome: "Mouse RGB",
    valor: 139.9,
    quantidadeEmEstoque: 45,
    fabricante: "GamerPro",
    categoria: "Games",
    descricao: "Mouse com iluminação RGB personalizável e sensor ótico avançado."
  },
  {
    _id: 18,
    nome: "Teclado Gamer",
    valor: 329.9,
    quantidadeEmEstoque: 20,
    fabricante: "TypeMaster",
    categoria: "Games",
    descricao: "Teclado gamer mecânico com teclas silenciosas e macros configuráveis."
  },
  {
    _id: 19,
    nome: "Capa de Chuva Premium",
    valor: 79.9,
    quantidadeEmEstoque: 50,
    fabricante: "RainShield",
    categoria: "Moda",
    descricao: "Capa de chuva premium com design ergonômico e proteção UV."
  },
  {
    _id: 20,
    nome: "Óculos de Sol Polarizado",
    valor: 199.9,
    quantidadeEmEstoque: 30,
    fabricante: "SunnyStyle",
    categoria: "Moda",
    descricao: "Óculos de sol polarizado com armação de metal."
  },
  {
    _id: 21,
    nome: "Camisa Social Slim",
    valor: 149.9,
    quantidadeEmEstoque: 35,
    fabricante: "EleganceWear",
    categoria: "Moda",
    descricao: "Camisa social slim fit de algodão premium."
  },
  {
    _id: 22,
    nome: "Calça Jeans Classic",
    valor: 179.9,
    quantidadeEmEstoque: 50,
    fabricante: "DenimCo",
    categoria: "Moda",
    descricao: "Calça jeans clássica com corte reto e tecido stretch."
  },
  {
    _id: 23,
    nome: "Chapéu de Palha Vintage",
    valor: 89.9,
    quantidadeEmEstoque: 20,
    fabricante: "RusticStyle",
    categoria: "Moda",
    descricao: "Chapéu de palha com acabamento vintage e alça ajustável."
  },
  {
    _id: 24,
    nome: "Mochila Escolar Tech",
    valor: 249.9,
    quantidadeEmEstoque: 25,
    fabricante: "BagPro",
    categoria: "Acessórios",
    descricao: "Mochila escolar com compartimento para notebook e porta USB."
  },
  {
    _id: 25,
    nome: "Relógio de Parede Clássico",
    valor: 99.9,
    quantidadeEmEstoque: 40,
    fabricante: "TimeMaster",
    categoria: "Decoração",
    descricao: "Relógio de parede analógico com design clássico."
  },
  {
    _id: 26,
    nome: "Almofada Decorativa",
    valor: 49.9,
    quantidadeEmEstoque: 100,
    fabricante: "ComfortHome",
    categoria: "Decoração",
    descricao: "Almofada decorativa em tecido aveludado com enchimento macio."
  },
  {
    _id: 27,
    nome: "Tapete Shaggy Luxo",
    valor: 299.9,
    quantidadeEmEstoque: 15,
    fabricante: "CarpetWorld",
    categoria: "Decoração",
    descricao: "Tapete shaggy de luxo com toque macio e alta durabilidade."
  },
  {
    _id: 28,
    nome: "Espelho Redondo Grande",
    valor: 399.9,
    quantidadeEmEstoque: 10,
    fabricante: "GlassDesign",
    categoria: "Decoração",
    descricao: "Espelho redondo grande com moldura minimalista."
  },
  {
    _id: 29,
    nome: "Kit de Potes Herméticos",
    valor: 89.9,
    quantidadeEmEstoque: 50,
    fabricante: "KitchenPro",
    categoria: "Cozinha",
    descricao: "Kit com 5 potes herméticos para armazenamento de alimentos."
  },
  {
    _id: 30,
    nome: "Jogo de Facas Premium",
    valor: 499.9,
    quantidadeEmEstoque: 20,
    fabricante: "ChefTools",
    categoria: "Cozinha",
    descricao: "Jogo de facas premium com lâminas de aço inox."
  },
  {
    _id: 31,
    nome: "Panela de Pressão",
    valor: 299.9,
    quantidadeEmEstoque: 35,
    fabricante: "PressureCook",
    categoria: "Cozinha",
    descricao: "Panela de pressão com sistema de segurança avançado."
  },
  {
    _id: 32,
    nome: "Forma de Bolo Antiaderente",
    valor: 59.9,
    quantidadeEmEstoque: 60,
    fabricante: "BakeMaster",
    categoria: "Cozinha",
    descricao: "Forma de bolo redonda com revestimento antiaderente."
  },
  {
    _id: 33,
    nome: "Chaleira Elétrica",
    valor: 199.9,
    quantidadeEmEstoque: 25,
    fabricante: "TeaTime",
    categoria: "Cozinha",
    descricao: "Chaleira elétrica com controle de temperatura e desligamento automático."
  },
  {
    _id: 34,
    nome: "Ventilador de Mesa",
    valor: 149.9,
    quantidadeEmEstoque: 30,
    fabricante: "BreezeHome",
    categoria: "Eletrodomésticos",
    descricao: "Ventilador de mesa com 3 velocidades e oscilação."
  },
  {
    _id: 35,
    nome: "Aquecedor Portátil",
    valor: 249.9,
    quantidadeEmEstoque: 20,
    fabricante: "HeatEasy",
    categoria: "Eletrodomésticos",
    descricao: "Aquecedor portátil compacto e silencioso."
  },
  {
    _id: 36,
    nome: "Purificador de Água",
    valor: 699.9,
    quantidadeEmEstoque: 15,
    fabricante: "PureLife",
    categoria: "Eletrodomésticos",
    descricao: "Purificador de água com filtro avançado e design moderno."
  },
  {
    _id: 37,
    nome: "Grill Elétrico",
    valor: 299.9,
    quantidadeEmEstoque: 25,
    fabricante: "GrillMaster",
    categoria: "Cozinha",
    descricao: "Grill elétrico com placas antiaderentes removíveis."
  },
  {
    _id: 38,
    nome: "Máquina de Lavar",
    valor: 2199.9,
    quantidadeEmEstoque: 10,
    fabricante: "WashTech",
    categoria: "Eletrodomésticos",
    descricao: "Máquina de lavar com capacidade de 15kg e ciclos rápidos."
  },
  {
    _id: 39,
    nome: "Secadora de Roupas",
    valor: 1899.9,
    quantidadeEmEstoque: 8,
    fabricante: "DryFast",
    categoria: "Eletrodomésticos",
    descricao: "Secadora de roupas com tecnologia de condensação."
  },
  {
    _id: 40,
    nome: "Fogão 5 Bocas",
    valor: 2599.9,
    quantidadeEmEstoque: 12,
    fabricante: "CookMaster",
    categoria: "Cozinha",
    descricao: "Fogão 5 bocas com acendimento automático e forno elétrico."
  },
  {
    _id: 41,
    nome: "Micro-ondas",
    valor: 899.9,
    quantidadeEmEstoque: 20,
    fabricante: "QuickHeat",
    categoria: "Eletrodomésticos",
    descricao: "Micro-ondas com grill e menu de receitas pré-programadas."
  },
  {
    _id: 42,
    nome: "Ar Condicionado Portátil",
    valor: 1599.9,
    quantidadeEmEstoque: 10,
    fabricante: "CoolLife",
    categoria: "Eletrodomésticos",
    descricao: "Ar condicionado portátil com controle remoto e timer."
  },
  {
    _id: 43,
    nome: "Escova Alisadora",
    valor: 149.9,
    quantidadeEmEstoque: 50,
    fabricante: "BeautyCare",
    categoria: "Beleza",
    descricao: "Escova para deixar os cabelos lisos."
  },
  {
    _id: 44,
    nome: "Console portátil",
    valor: 1299.9,
    quantidadeEmEstoque: 30,
    fabricante: "PlayMax",
    categoria: "Games",
    descricao: "Console para se divertir em qualquer lugar."
  },
  {
    _id: 45,
    nome: "Smartphone Pro X",
    valor: 1999.9,
    quantidadeEmEstoque: 50,
    fabricante: "TechMobile",
    categoria: "Eletrônicos",
    descricao: "Smartphone com câmera de alta resolução e tela OLED."
  },
  {
    _id: 46,
    nome: "Notebook Ultra 14",
    valor: 3499.0,
    quantidadeEmEstoque: 15,
    fabricante: "TechLife",
    categoria: "Informática",
    descricao: "Notebook leve e compacto com processador de última geração."
  },
  {
    _id: 47,
    nome: "Air Fryer Gourmet",
    valor: 499.9,
    quantidadeEmEstoque: 30,
    fabricante: "Cozinha Moderna",
    categoria: "Eletrodomésticos",
    descricao: "Fritadeira elétrica sem óleo com painel digital."
  },
  {
    _id: 48,
    nome: "Relógio Smart Fit",
    valor: 299.9,
    quantidadeEmEstoque: 100,
    fabricante: "FitTech",
    categoria: "Acessórios",
    descricao: "Relógio inteligente com monitoramento de saúde e notificações."
  },
  {
    _id: 49,
    nome: "TV 4K Ultra HD",
    valor: 2999.9,
    quantidadeEmEstoque: 10,
    fabricante: "VisionScreen",
    categoria: "Eletrônicos",
    descricao: "Televisão com qualidade de imagem 4K e som Dolby Atmos."
  },
  {
    _id: 50,
    nome: "Câmera DSLR Pro",
    valor: 3999.9,
    quantidadeEmEstoque: 8,
    fabricante: "PhotoWorld",
    categoria: "Fotografia",
    descricao: "Câmera DSLR com lente intercambiável e alta resolução."
  },  
]);
