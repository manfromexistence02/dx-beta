export enum ListStyleType {
  Decimal = 'decimal',
  DecimalLeadingZero = 'decimal-leading-zero',
  ArabicIndic = 'arabic-indic',
  Armenian = 'armenian',
  UpperArmenian = 'upper-armenian',
  LowerArmenian = 'lower-armenian',
  Bengali = 'bengali',
  Cambodian = 'cambodian',
  Khmer = 'khmer',
  CjkDecimal = 'cjk-decimal',
  Devanagari = 'devanagari',
  Georgian = 'georgian',
  Gujarati = 'gujarati',
  Gurmukhi = 'gurmukhi',
  Hebrew = 'hebrew',
  Kannada = 'kannada',
  Lao = 'lao',
  Malayalam = 'malayalam',
  Mongolian = 'mongolian',
  Myanmar = 'myanmar',
  Oriya = 'oriya',
  Persian = 'persian',
  LowerRoman = 'lower-roman',
  UpperRoman = 'upper-roman',
  Tamil = 'tamil',
  Telugu = 'telugu',
  Thai = 'thai',
  Tibetan = 'tibetan',
  LowerAlpha = 'lower-alpha',
  LowerLatin = 'lower-latin',
  UpperAlpha = 'upper-alpha',
  UpperLatin = 'upper-latin',
  LowerGreek = 'lower-greek',
  Hiragana = 'hiragana',
  HiraganaIroha = 'hiragana-iroha',
  Katakana = 'katakana',
  KatakanaIroha = 'katakana-iroha',
  CjkEarthlyBranch = 'cjk-earthly-branch',
  CjkHeavenlyStem = 'cjk-heavenly-stem',
  JapaneseInformal = 'japanese-informal',
  JapaneseFormal = 'japanese-formal',
  KoreanHangulFormal = 'korean-hangul-formal',
  KoreanHanjaInformal = 'korean-hanja-informal',
  KoreanHanjaFormal = 'korean-hanja-formal',
  SimpChineseInformal = 'simp-chinese-informal',
  SimpChineseFormal = 'simp-chinese-formal',
  TradChineseInformal = 'trad-chinese-informal',
  TradChineseFormal = 'trad-chinese-formal',
  EthiopicNumeric = 'ethiopic-numeric',
  DisclosureOpen = 'disclosure-open',
  DisclosureClosed = 'disclosure-closed',
  None = 'none',
  Circle = 'circle',
  Disc = 'disc',
  Square = 'square',
  Initial = 'initial',
  Inherit = 'inherit',
}

export const ULIST_STYLE_TYPES = [
  ListStyleType.Disc,
  ListStyleType.Circle,
  ListStyleType.Square,
  ListStyleType.DisclosureOpen,
  ListStyleType.DisclosureClosed,
] as const;