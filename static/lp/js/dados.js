/*
 * Dados de exemplo (produtos e promoções).
 * Em produção, troque por dados vindos do Django:
 *   <script>window.LP_PRODUTOS = {{ produtos_json|safe }};</script>
 * O restante do JavaScript continua funcionando igual.
 */
(function () {
  const img = (nome) => window.LP_STATIC + "lp/img/" + nome;

  const PRODUTOS = [
    {
      slug: "whey-protein-isolado",
      nome: "Whey Protein Isolado",
      categoria: "Proteínas",
      preco: 189.9,
      preco_antigo: 249.9,
      imagem: img("product-whey.jpg"),
      nota: 4.9,
      avaliacoes: 412,
      destaque: true,
      resumo: "27 g de proteína por dose, absorção rápida e zero lactose.",
      descricao:
        "Whey isolado de altíssima pureza, filtrado por microfiltração a frio para preservar as frações proteicas. Ideal para o pós-treino, quando o corpo precisa de aminoácidos de absorção rápida para iniciar a recuperação muscular.",
      sabores: ["Chocolate", "Baunilha", "Morango", "Cookies"],
      beneficios: [
        "27 g de proteína por porção",
        "Baixíssimo teor de gordura e carboidrato",
        "Absorção rápida no pós-treino",
        "Livre de lactose e glúten",
      ],
      nutricao: [
        ["Porção", "30 g (1 scoop)"],
        ["Proteínas", "27 g"],
        ["Carboidratos", "1,2 g"],
        ["Gorduras totais", "0,5 g"],
        ["BCAA", "6,2 g"],
        ["Calorias", "115 kcal"],
      ],
      uso: "Misture 1 scoop (30 g) em 200 ml de água ou leite. Consuma imediatamente após o treino.",
    },
    {
      slug: "creatina-monohidratada",
      nome: "Creatina Monohidratada",
      categoria: "Performance",
      preco: 129.9,
      preco_antigo: 159.9,
      imagem: img("product-creatine.jpg"),
      nota: 4.8,
      avaliacoes: 358,
      destaque: true,
      resumo: "100% pura, micronizada, sem sabor e com selo de qualidade.",
      descricao:
        "Creatina monohidratada micronizada, o suplemento com mais evidências científicas para ganho de força e volume muscular. Dissolve com facilidade e não altera o sabor da bebida.",
      sabores: ["Sem sabor"],
      beneficios: [
        "Aumento de força e potência",
        "Mais volume muscular",
        "Micronizada para melhor dissolução",
        "Sem aditivos ou açúcares",
      ],
      nutricao: [
        ["Porção", "3 g"],
        ["Creatina monohidratada", "3 g"],
        ["Calorias", "0 kcal"],
      ],
      uso: "Tome 3 g por dia, em qualquer horário, com água ou suco. Uso contínuo.",
    },
    {
      slug: "pre-treino-ignite",
      nome: "Pré-Treino Ignite",
      categoria: "Performance",
      preco: 149.9,
      preco_antigo: 199.9,
      imagem: img("product-preworkout.jpg"),
      nota: 4.7,
      avaliacoes: 289,
      destaque: true,
      resumo: "Energia explosiva com cafeína, beta-alanina e citrulina.",
      descricao:
        "Fórmula completa para treinos intensos: cafeína anidra para foco, beta-alanina para resistência e citrulina malato para vasodilatação e bombeamento muscular.",
      sabores: ["Frutas Vermelhas", "Limão", "Uva"],
      beneficios: [
        "300 mg de cafeína por dose",
        "Foco e disposição imediatos",
        "Mais resistência nas séries",
        "Vasodilatação e pump",
      ],
      nutricao: [
        ["Porção", "10 g"],
        ["Cafeína anidra", "300 mg"],
        ["Beta-alanina", "3,2 g"],
        ["Citrulina malato", "4 g"],
        ["Calorias", "12 kcal"],
      ],
      uso: "Dilua 1 dose (10 g) em 300 ml de água, 20 a 30 minutos antes do treino.",
    },
    {
      slug: "bcaa-2-1-1",
      nome: "BCAA 2:1:1",
      categoria: "Aminoácidos",
      preco: 89.9,
      preco_antigo: null,
      imagem: img("product-bcaa.jpg"),
      nota: 4.6,
      avaliacoes: 174,
      destaque: false,
      resumo: "Aminoácidos essenciais para reduzir o catabolismo muscular.",
      descricao:
        "Combinação clássica de leucina, isoleucina e valina na proporção 2:1:1, indicada para preservar massa magra durante treinos longos ou dietas de restrição calórica.",
      sabores: ["Laranja", "Limão", "Sem sabor"],
      beneficios: [
        "Reduz a fadiga durante o treino",
        "Ajuda a preservar massa magra",
        "Acelera a recuperação",
        "Zero açúcar",
      ],
      nutricao: [
        ["Porção", "5 g"],
        ["L-Leucina", "2,5 g"],
        ["L-Isoleucina", "1,25 g"],
        ["L-Valina", "1,25 g"],
      ],
      uso: "Consuma 5 g antes ou durante o treino, diluídos em 300 ml de água.",
    },
    {
      slug: "glutamina-pura",
      nome: "Glutamina Pura",
      categoria: "Aminoácidos",
      preco: 79.9,
      preco_antigo: 99.9,
      imagem: img("product-glutamine.jpg"),
      nota: 4.5,
      avaliacoes: 132,
      destaque: false,
      resumo: "Apoio à recuperação muscular e à imunidade.",
      descricao:
        "L-Glutamina 100% pura, o aminoácido mais abundante no organismo. Auxilia na recuperação após treinos intensos e no funcionamento do sistema imunológico e intestinal.",
      sabores: ["Sem sabor"],
      beneficios: [
        "Recuperação muscular acelerada",
        "Suporte ao sistema imunológico",
        "Auxilia a saúde intestinal",
        "Sem sabor, fácil de misturar",
      ],
      nutricao: [
        ["Porção", "5 g"],
        ["L-Glutamina", "5 g"],
        ["Calorias", "0 kcal"],
      ],
      uso: "Tome 5 g por dia, preferencialmente após o treino ou antes de dormir.",
    },
    {
      slug: "multivitaminico-daily",
      nome: "Multivitamínico Daily",
      categoria: "Saúde",
      preco: 69.9,
      preco_antigo: null,
      imagem: img("product-multivitamin.jpg"),
      nota: 4.7,
      avaliacoes: 208,
      destaque: false,
      resumo: "26 vitaminas e minerais em uma cápsula por dia.",
      descricao:
        "Fórmula completa com 26 vitaminas e minerais para cobrir as necessidades diárias de quem treina forte e tem rotina puxada. Uma cápsula ao dia.",
      sabores: ["Cápsulas"],
      beneficios: [
        "26 vitaminas e minerais",
        "Mais energia no dia a dia",
        "Suporte imunológico",
        "Apenas 1 cápsula por dia",
      ],
      nutricao: [
        ["Porção", "1 cápsula"],
        ["Vitamina C", "90 mg"],
        ["Vitamina D", "20 mcg"],
        ["Zinco", "11 mg"],
        ["Magnésio", "260 mg"],
      ],
      uso: "Tome 1 cápsula ao dia junto de uma refeição principal.",
    },
  ];

  const PROMOCOES = [
    { titulo: "Frete grátis", descricao: "em compras acima de R$ 200", cupom: null, ativo: true },
    { titulo: "20% de desconto", descricao: "na primeira compra", cupom: "LP20", desconto: 20, ativo: true },
  ];

  window.LP_PRODUTOS = window.LP_PRODUTOS || PRODUTOS;
  window.LP_PROMOCOES = window.LP_PROMOCOES || PROMOCOES;
})();
