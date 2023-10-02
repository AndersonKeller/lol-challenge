// import {} from "../imgs/jinx/letter2.png"
export interface Char {
  id: number;
  name: string;
  class: string;
  subtitle: string;
  resume: string;
}
export const charsInfos: Char[] = [
  {
    id: 1,
    name: "Jinx",
    class: "Atiradora",
    subtitle: "O gatilho desenfreado",
    resume:
      "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.",
  },
  {
    id: 2,
    name: "Ashe",
    class: "Atiradora",
    subtitle: "A arqueira do gelo",
    resume:
      "A mãe de guerra Glacinata da tribo de Avarosa, Ashe comanda a horda mais populosa do norte. Estoica, inteligente e idealista, mesmo que desconfortável com seu papel de liderança, ela canaliza as magias ancestrais de sua linhagem para empunhar um arco de Gelo Verdadeiro. Com a crença de seu povo de que Ashe seria a heroína mítica, Avarosa, reencarnada, ela espera unificar Freljord mais uma vez.",
  },
  {
    id: 3,
    name: "Garen",
    class: "Lutador",
    subtitle: "O poder de demacia",
    resume:
      "Um guerreiro nobre e orgulhoso, Garen faz parte da Vanguarda Destemida. Popular entre seus companheiros e respeitado o suficiente por seus inimigos, sua reputação é nada mais do que o esperado de um herdeiro da prestigiosa família Stemmaguarda, encarregada de defender Demacia e seus ideais. Vestido com uma armadura resistente à magia e empunhando uma poderosa espada, Garen está sempre pronto para confrontar magos e feiticeiros no campo de batalha.",
  },
];
