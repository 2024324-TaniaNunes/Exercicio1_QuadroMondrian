function setup() {
  let canvas = createCanvas(800, 784);
  canvas.position(
    (windowWidth - width) / 2,
    (windowHeight - height) / 2
  );
  noLoop();
}

function draw() {
  // Tom de fundo base (Off-white / Creme envelhecido)
  background(242, 240, 235);

  noStroke();

  // --- 1. BLOCOS DE COR PRINCIPAIS ---
  // COR (X, Y, W, H)
  // Vermelho (Superior Esquerdo)
  fill(218, 35, 20);
  rect(0, 0, 364, 310);

  // Amarelo (Inferior Esquerdo)
  fill(245, 205, 10);
  rect(0, 506, 76, 278);

  // Azul (Inferior Central)
  fill(20, 32, 135);
  rect(364, 506, 252, 243);

  // --- 2. VARIÂNCIA TONAL DOS PLANOS NEUTROS (Brancos) ---
  // Topo Direito
  fill(245, 244, 239);
  rect(360, 0, 440, 310);

  // Centro Esquerdo
  fill(238, 237, 232);
  rect(0, 300, 364, 206);

  // Centro Direito
  fill(240, 239, 235);
  rect(360, 300, 440, 206);

  // Inferior Centro-Esquerdo
  fill(232, 231, 226);
  rect(72, 500, 292, 284);

  // Inferior Direito
  fill(235, 234, 230);
  rect(609, 500, 191, 284);

  // Faixa de rodapé sob o Azul
  fill(230, 228, 225);
  rect(360, 744, 252, 40);

  // --- 3. LINHAS PRETAS (Estrutura com Espessuras Diferenciadas) ---
  // fill = código RGB
  fill(15, 15, 15);

  // Linha Horizontal Superior (MUITO GROSSA — 20px)
  rect(0, 300, 800, 20);

  // Linha Horizontal Inferior (GROSSA — 16px)
  rect(0, 498, 800, 16);

  // Linha Vertical Principal (FINA — 9px)
  rect(360, 0, 9, 784);

  // Linha Vertical Esquerda / Amarelo (FINA — 9px)
  rect(72, 506, 9, 278);

  // Linha Vertical Direita / Azul (MÉDIA — 13px)
  rect(609, 506, 13, 278);

  // Linha Horizontal Rodapé sob o Azul (FINA — 10px)
  rect(360, 744, 262, 10);
}