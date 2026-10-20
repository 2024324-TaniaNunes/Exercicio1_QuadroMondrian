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

  // zona ligeiramente mais clara
fill(235, 70, 55, 18);
rect(50, 40, 260, 180);

// zona um pouco mais escura junto à linha
fill(120, 30, 25, 10);
rect(0, 240, 364, 70);

  // Amarelo (Inferior Esquerdo)
  fill(245, 205, 10);
  rect(0, 506, 76, 278);

  // Azul (Inferior Central)
  fill(20, 32, 135);
  rect(364, 506, 252, 243);

  // brilho subtil
fill(70, 85, 180, 15);
rect(390, 530, 170, 110);

// parte inferior ligeiramente mais escura
fill(10, 20, 80, 10);
rect(364, 650, 252, 99);

  // --- 2. VARIÂNCIA TONAL DOS PLANOS NEUTROS (Brancos) ---
  // Topo Direito
  fill(245, 244, 239);
  rect(360, 0, 440, 310);

  // ligeiro escurecimento no canto superior esquerdo
fill(205, 200, 195, 25);
rect(360, 0, 140, 100);

// ligeira irregularidade
fill(215, 210, 202, 18);
rect(380, 20, 220, 120);

  // Centro Esquerdo
  fill(205, 200, 192, 18);
  rect(0, 300, 364, 206);

  fill(220, 216, 210, 8);
  rect(0, 300, 150, 60);

  // Centro Direito
  fill(240, 239, 235);
  rect(360, 300, 440, 206);

  // Inferior Centro-Esquerdo
  fill(232, 231, 226);
  rect(72, 500, 292, 284);

  // Inferior Direito
  fill(235, 234, 230);
  rect(609, 500, 191, 284);

  fill(220, 216, 210, 10);
  rect(609, 500, 80, 100);

  // Faixa de rodapé sob o Azul
  fill(230, 228, 225);
  rect(360, 744, 252, 40);

  // --- 3. LINHAS PRETAS (Estrutura com Espessuras Diferenciadas) ---
  // fill = código RGB
  fill(15, 15, 15);

  // Linha Horizontal Superior (MUITO GROSSA — 16px)
  rect(0, 300, 800, 16);

  // Linha Horizontal Inferior (GROSSA — 16px)
  rect(0, 498, 800, 16);

  // Linha Vertical Principal (FINA — 11px)
  rect(360, 0, 11, 784);

  // Linha Vertical Esquerda / Amarelo (FINA — 9px)
  rect(72, 506, 9, 278);

  // Linha Vertical Direita / Azul (MÉDIA — 13px)
  rect(609, 506, 13, 278);

  // Linha Horizontal Rodapé sob o Azul (FINA — 10px)
  rect(360, 744, 262, 10);

  // --- 1. TEMPERATURA DAS CORES ---
  // // véu quente geral
fill(235, 230, 222, 8);
rect(0, 0, width, height);

// ligeira luminosidade
fill(255, 255, 255, 6);
rect(0, 0, width, height);

}