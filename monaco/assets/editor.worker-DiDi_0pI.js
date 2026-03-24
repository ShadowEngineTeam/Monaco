var L;
(function(e) {
	e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(L || (L = {}));
var pa = class {
	constructor() {
		this.listeners = [], this.unexpectedErrorHandler = function(e) {
			setTimeout(() => {
				throw e.stack ? Kn.isErrorNoTelemetry(e) ? new Kn(e.message + `

` + e.stack) : /* @__PURE__ */ new Error(e.message + `

` + e.stack) : e;
			}, 0);
		};
	}
	addListener(e) {
		return this.listeners.push(e), () => {
			this._removeListener(e);
		};
	}
	emit(e) {
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	_removeListener(e) {
		this.listeners.splice(this.listeners.indexOf(e), 1);
	}
	setUnexpectedErrorHandler(e) {
		this.unexpectedErrorHandler = e;
	}
	getUnexpectedErrorHandler() {
		return this.unexpectedErrorHandler;
	}
	onUnexpectedError(e) {
		this.unexpectedErrorHandler(e), this.emit(e);
	}
	onUnexpectedExternalError(e) {
		this.unexpectedErrorHandler(e);
	}
};
const da = new pa();
function Rt(e) {
	wa(e) || da.onUnexpectedError(e);
}
function Jn(e) {
	if (e instanceof Error) {
		const { name: t, message: n, cause: r } = e;
		return {
			$isError: !0,
			name: t,
			message: n,
			stack: e.stacktrace || e.stack,
			noTelemetry: Kn.isErrorNoTelemetry(e),
			cause: r ? Jn(r) : void 0,
			code: e.code
		};
	}
	return e;
}
const ba = "Canceled";
function wa(e) {
	return e instanceof m1 ? !0 : e instanceof Error && e.name === "Canceled" && e.message === "Canceled";
}
var m1 = class extends Error {
	constructor() {
		super(ba), this.name = this.message;
	}
};
(class mn extends Error {
	static {
		this._name = "PendingMigrationError";
	}
	static is(t) {
		return t instanceof mn || t instanceof Error && t.name === mn._name;
	}
	constructor(t) {
		super(t), this.name = mn._name;
	}
});
var Kn = class Cn extends Error {
	constructor(t) {
		super(t), this.name = "CodeExpectedError";
	}
	static fromError(t) {
		if (t instanceof Cn) return t;
		const n = new Cn();
		return n.message = t.message, n.stack = t.stack, n;
	}
	static isErrorNoTelemetry(t) {
		return t.name === "CodeExpectedError";
	}
}, se = class f1 extends Error {
	constructor(t) {
		super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, f1.prototype);
	}
}, Hr;
function La(e, t) {
	const n = Object.create(null);
	for (const r of e) {
		const i = t(r);
		let s = n[i];
		s || (s = n[i] = []), s.push(r);
	}
	return n;
}
(class {
	static {
		Hr = Symbol.toStringTag;
	}
	constructor(e, t) {
		this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[Hr] = "SetWithKey";
		for (const n of e) this.add(n);
	}
	get size() {
		return this._map.size;
	}
	add(e) {
		const t = this.toKey(e);
		return this._map.set(t, e), this;
	}
	delete(e) {
		return this._map.delete(this.toKey(e));
	}
	has(e) {
		return this._map.has(this.toKey(e));
	}
	*entries() {
		for (const e of this._map.values()) yield [e, e];
	}
	keys() {
		return this.values();
	}
	*values() {
		for (const e of this._map.values()) yield e;
	}
	clear() {
		this._map.clear();
	}
	forEach(e, t) {
		this._map.forEach((n) => e.call(t, n, n, this));
	}
	[Symbol.iterator]() {
		return this.values();
	}
});
function Tt(e, t) {
	const n = xt(e, t);
	return n === -1 ? void 0 : e[n];
}
function xt(e, t, n = 0, r = e.length) {
	let i = n, s = r;
	for (; i < s;) {
		const a = Math.floor((i + s) / 2);
		t(e[a]) ? i = a + 1 : s = a;
	}
	return i - 1;
}
function va(e, t) {
	const n = er(e, t);
	return n === e.length ? void 0 : e[n];
}
function er(e, t, n = 0, r = e.length) {
	let i = n, s = r;
	for (; i < s;) {
		const a = Math.floor((i + s) / 2);
		t(e[a]) ? s = a : i = a + 1;
	}
	return i;
}
var g1 = class _1 {
	static {
		this.assertInvariants = !1;
	}
	constructor(t) {
		this._array = t, this._findLastMonotonousLastIdx = 0;
	}
	findLastMonotonous(t) {
		if (_1.assertInvariants) {
			if (this._prevFindLastPredicate) {
				for (const r of this._array) if (this._prevFindLastPredicate(r) && !t(r)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
			}
			this._prevFindLastPredicate = t;
		}
		const n = xt(this._array, t, this._findLastMonotonousLastIdx);
		return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
	}
};
function p1(e, t, n = (r, i) => r === i) {
	if (e === t) return !0;
	if (!e || !t || e.length !== t.length) return !1;
	for (let r = 0, i = e.length; r < i; r++) if (!n(e[r], t[r])) return !1;
	return !0;
}
function* Na(e, t) {
	let n, r;
	for (const i of e) r !== void 0 && t(r, i) ? n.push(i) : (n && (yield n), n = [i]), r = i;
	n && (yield n);
}
function Ra(e, t) {
	for (let n = 0; n <= e.length; n++) t(n === 0 ? void 0 : e[n - 1], n === e.length ? void 0 : e[n]);
}
function Ea(e, t) {
	for (let n = 0; n < e.length; n++) t(n === 0 ? void 0 : e[n - 1], e[n], n + 1 === e.length ? void 0 : e[n + 1]);
}
function Aa(e, t) {
	for (const n of t) e.push(n);
}
var tr;
(function(e) {
	function t(s) {
		return s < 0;
	}
	e.isLessThan = t;
	function n(s) {
		return s <= 0;
	}
	e.isLessThanOrEqual = n;
	function r(s) {
		return s > 0;
	}
	e.isGreaterThan = r;
	function i(s) {
		return s === 0;
	}
	e.isNeitherLessOrGreaterThan = i, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(tr || (tr = {}));
function ot(e, t) {
	return (n, r) => t(e(n), e(r));
}
const Et = (e, t) => e - t;
function ya(e) {
	return (t, n) => -e(t, n);
}
(class fn {
	static {
		this.empty = new fn((t) => {});
	}
	constructor(t) {
		this.iterate = t;
	}
	forEach(t) {
		this.iterate((n) => (t(n), !0));
	}
	toArray() {
		const t = [];
		return this.iterate((n) => (t.push(n), !0)), t;
	}
	filter(t) {
		return new fn((n) => this.iterate((r) => t(r) ? n(r) : !0));
	}
	map(t) {
		return new fn((n) => this.iterate((r) => n(t(r))));
	}
	some(t) {
		let n = !1;
		return this.iterate((r) => (n = t(r), !n)), n;
	}
	findFirst(t) {
		let n;
		return this.iterate((r) => t(r) ? (n = r, !1) : !0), n;
	}
	findLast(t) {
		let n;
		return this.iterate((r) => (t(r) && (n = r), !0)), n;
	}
	findLastMaxBy(t) {
		let n, r = !0;
		return this.iterate((i) => ((r || tr.isGreaterThan(t(i, n))) && (r = !1, n = i), !0)), n;
	}
});
function Ta(e, t) {
	return e.reduce((n, r) => n + t(r), 0);
}
var qr, $r, xa = class {
	constructor(e, t) {
		this.uri = e, this.value = t;
	}
};
function Ma(e) {
	return Array.isArray(e);
}
var nr = class Ht {
	static {
		this.defaultToKey = (t) => t.toString();
	}
	constructor(t, n) {
		if (this[qr] = "ResourceMap", t instanceof Ht) this.map = new Map(t.map), this.toKey = n ?? Ht.defaultToKey;
		else if (Ma(t)) {
			this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? Ht.defaultToKey;
			for (const [r, i] of t) this.set(r, i);
		} else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? Ht.defaultToKey;
	}
	set(t, n) {
		return this.map.set(this.toKey(t), new xa(t, n)), this;
	}
	get(t) {
		return this.map.get(this.toKey(t))?.value;
	}
	has(t) {
		return this.map.has(this.toKey(t));
	}
	get size() {
		return this.map.size;
	}
	clear() {
		this.map.clear();
	}
	delete(t) {
		return this.map.delete(this.toKey(t));
	}
	forEach(t, n) {
		typeof n < "u" && (t = t.bind(n));
		for (const [r, i] of this.map) t(i.value, i.uri, this);
	}
	*values() {
		for (const t of this.map.values()) yield t.value;
	}
	*keys() {
		for (const t of this.map.values()) yield t.uri;
	}
	*entries() {
		for (const t of this.map.values()) yield [t.uri, t.value];
	}
	*[(qr = Symbol.toStringTag, Symbol.iterator)]() {
		for (const [, t] of this.map) yield [t.uri, t.value];
	}
};
var he;
(function(e) {
	e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(he || (he = {}));
var Sa = class {
	constructor() {
		this[$r] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
	}
	clear() {
		this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
	}
	isEmpty() {
		return !this._head && !this._tail;
	}
	get size() {
		return this._size;
	}
	get first() {
		return this._head?.value;
	}
	get last() {
		return this._tail?.value;
	}
	has(e) {
		return this._map.has(e);
	}
	get(e, t = he.None) {
		const n = this._map.get(e);
		if (n) return t !== he.None && this.touch(n, t), n.value;
	}
	set(e, t, n = he.None) {
		let r = this._map.get(e);
		if (r) r.value = t, n !== he.None && this.touch(r, n);
		else {
			switch (r = {
				key: e,
				value: t,
				next: void 0,
				previous: void 0
			}, n) {
				case he.None:
					this.addItemLast(r);
					break;
				case he.AsOld:
					this.addItemFirst(r);
					break;
				case he.AsNew:
					this.addItemLast(r);
					break;
				default:
					this.addItemLast(r);
					break;
			}
			this._map.set(e, r), this._size++;
		}
		return this;
	}
	delete(e) {
		return !!this.remove(e);
	}
	remove(e) {
		const t = this._map.get(e);
		if (t) return this._map.delete(e), this.removeItem(t), this._size--, t.value;
	}
	shift() {
		if (!this._head && !this._tail) return;
		if (!this._head || !this._tail) throw new Error("Invalid list");
		const e = this._head;
		return this._map.delete(e.key), this.removeItem(e), this._size--, e.value;
	}
	forEach(e, t) {
		const n = this._state;
		let r = this._head;
		for (; r;) {
			if (t ? e.bind(t)(r.value, r.key, this) : e(r.value, r.key, this), this._state !== n) throw new Error("LinkedMap got modified during iteration.");
			r = r.next;
		}
	}
	keys() {
		const e = this, t = this._state;
		let n = this._head;
		const r = {
			[Symbol.iterator]() {
				return r;
			},
			next() {
				if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
				if (n) {
					const i = {
						value: n.key,
						done: !1
					};
					return n = n.next, i;
				} else return {
					value: void 0,
					done: !0
				};
			}
		};
		return r;
	}
	values() {
		const e = this, t = this._state;
		let n = this._head;
		const r = {
			[Symbol.iterator]() {
				return r;
			},
			next() {
				if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
				if (n) {
					const i = {
						value: n.value,
						done: !1
					};
					return n = n.next, i;
				} else return {
					value: void 0,
					done: !0
				};
			}
		};
		return r;
	}
	entries() {
		const e = this, t = this._state;
		let n = this._head;
		const r = {
			[Symbol.iterator]() {
				return r;
			},
			next() {
				if (e._state !== t) throw new Error("LinkedMap got modified during iteration.");
				if (n) {
					const i = {
						value: [n.key, n.value],
						done: !1
					};
					return n = n.next, i;
				} else return {
					value: void 0,
					done: !0
				};
			}
		};
		return r;
	}
	[($r = Symbol.toStringTag, Symbol.iterator)]() {
		return this.entries();
	}
	trimOld(e) {
		if (e >= this.size) return;
		if (e === 0) {
			this.clear();
			return;
		}
		let t = this._head, n = this.size;
		for (; t && n > e;) this._map.delete(t.key), t = t.next, n--;
		this._head = t, this._size = n, t && (t.previous = void 0), this._state++;
	}
	trimNew(e) {
		if (e >= this.size) return;
		if (e === 0) {
			this.clear();
			return;
		}
		let t = this._tail, n = this.size;
		for (; t && n > e;) this._map.delete(t.key), t = t.previous, n--;
		this._tail = t, this._size = n, t && (t.next = void 0), this._state++;
	}
	addItemFirst(e) {
		if (!this._head && !this._tail) this._tail = e;
		else if (this._head) e.next = this._head, this._head.previous = e;
		else throw new Error("Invalid list");
		this._head = e, this._state++;
	}
	addItemLast(e) {
		if (!this._head && !this._tail) this._head = e;
		else if (this._tail) e.previous = this._tail, this._tail.next = e;
		else throw new Error("Invalid list");
		this._tail = e, this._state++;
	}
	removeItem(e) {
		if (e === this._head && e === this._tail) this._head = void 0, this._tail = void 0;
		else if (e === this._head) {
			if (!e.next) throw new Error("Invalid list");
			e.next.previous = void 0, this._head = e.next;
		} else if (e === this._tail) {
			if (!e.previous) throw new Error("Invalid list");
			e.previous.next = void 0, this._tail = e.previous;
		} else {
			const t = e.next, n = e.previous;
			if (!t || !n) throw new Error("Invalid list");
			t.previous = n, n.next = t;
		}
		e.next = void 0, e.previous = void 0, this._state++;
	}
	touch(e, t) {
		if (!this._head || !this._tail) throw new Error("Invalid list");
		if (!(t !== he.AsOld && t !== he.AsNew)) {
			if (t === he.AsOld) {
				if (e === this._head) return;
				const n = e.next, r = e.previous;
				e === this._tail ? (r.next = void 0, this._tail = r) : (n.previous = r, r.next = n), e.previous = void 0, e.next = this._head, this._head.previous = e, this._head = e, this._state++;
			} else if (t === he.AsNew) {
				if (e === this._tail) return;
				const n = e.next, r = e.previous;
				e === this._head ? (n.previous = void 0, this._head = n) : (n.previous = r, r.next = n), e.next = void 0, e.previous = this._tail, this._tail.next = e, this._tail = e, this._state++;
			}
		}
	}
	toJSON() {
		const e = [];
		return this.forEach((t, n) => {
			e.push([n, t]);
		}), e;
	}
	fromJSON(e) {
		this.clear();
		for (const [t, n] of e) this.set(t, n);
	}
}, ka = class extends Sa {
	constructor(e, t = 1) {
		super(), this._limit = e, this._ratio = Math.min(Math.max(0, t), 1);
	}
	get limit() {
		return this._limit;
	}
	set limit(e) {
		this._limit = e, this.checkTrim();
	}
	get ratio() {
		return this._ratio;
	}
	set ratio(e) {
		this._ratio = Math.min(Math.max(0, e), 1), this.checkTrim();
	}
	get(e, t = he.AsNew) {
		return super.get(e, t);
	}
	peek(e) {
		return super.get(e, he.None);
	}
	set(e, t) {
		return super.set(e, t, he.AsNew), this;
	}
	checkTrim() {
		this.size > this._limit && this.trim(Math.round(this._limit * this._ratio));
	}
}, Ua = class extends ka {
	constructor(e, t = 1) {
		super(e, t);
	}
	trim(e) {
		this.trimOld(e);
	}
	set(e, t) {
		return super.set(e, t), this.checkTrim(), this;
	}
}, d1 = class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	add(e, t) {
		let n = this.map.get(e);
		n || (n = /* @__PURE__ */ new Set(), this.map.set(e, n)), n.add(t);
	}
	delete(e, t) {
		const n = this.map.get(e);
		n && (n.delete(t), n.size === 0 && this.map.delete(e));
	}
	forEach(e, t) {
		const n = this.map.get(e);
		n && n.forEach(t);
	}
	get(e) {
		return this.map.get(e) || /* @__PURE__ */ new Set();
	}
};
function Da(e, t = "Unreachable") {
	throw new Error(t);
}
function Ia(e, t = "unexpected state") {
	if (!e) throw typeof t == "string" ? new se(`Assertion Failed: ${t}`) : t;
}
function Jt(e) {
	if (!e()) {
		debugger;
		e(), Rt(new se("Assertion Failed"));
	}
}
function xr(e, t) {
	let n = 0;
	for (; n < e.length - 1;) {
		const r = e[n], i = e[n + 1];
		if (!t(r, i)) return !1;
		n++;
	}
	return !0;
}
function Fa(e) {
	return typeof e == "string";
}
function Pa(e) {
	return !!e && typeof e[Symbol.iterator] == "function";
}
var yn;
(function(e) {
	function t(v) {
		return !!v && typeof v == "object" && typeof v[Symbol.iterator] == "function";
	}
	e.is = t;
	const n = Object.freeze([]);
	function r() {
		return n;
	}
	e.empty = r;
	function* i(v) {
		yield v;
	}
	e.single = i;
	function s(v) {
		return t(v) ? v : i(v);
	}
	e.wrap = s;
	function a(v) {
		return v ?? n;
	}
	e.from = a;
	function* o(v) {
		for (let k = v.length - 1; k >= 0; k--) yield v[k];
	}
	e.reverse = o;
	function u(v) {
		return !v || v[Symbol.iterator]().next().done === !0;
	}
	e.isEmpty = u;
	function c(v) {
		return v[Symbol.iterator]().next().value;
	}
	e.first = c;
	function m(v, k) {
		let B = 0;
		for (const X of v) if (k(X, B++)) return !0;
		return !1;
	}
	e.some = m;
	function h(v, k) {
		let B = 0;
		for (const X of v) if (!k(X, B++)) return !1;
		return !0;
	}
	e.every = h;
	function p(v, k) {
		for (const B of v) if (k(B)) return B;
	}
	e.find = p;
	function* _(v, k) {
		for (const B of v) k(B) && (yield B);
	}
	e.filter = _;
	function* d(v, k) {
		let B = 0;
		for (const X of v) yield k(X, B++);
	}
	e.map = d;
	function* b(v, k) {
		let B = 0;
		for (const X of v) yield* k(X, B++);
	}
	e.flatMap = b;
	function* A(...v) {
		for (const k of v) Pa(k) ? yield* k : yield k;
	}
	e.concat = A;
	function R(v, k, B) {
		let X = B;
		for (const P of v) X = k(X, P);
		return X;
	}
	e.reduce = R;
	function E(v) {
		let k = 0;
		for (const B of v) k++;
		return k;
	}
	e.length = E;
	function* y(v, k, B = v.length) {
		for (k < -v.length && (k = 0), k < 0 && (k += v.length), B < 0 ? B += v.length : B > v.length && (B = v.length); k < B; k++) yield v[k];
	}
	e.slice = y;
	function S(v, k = Number.POSITIVE_INFINITY) {
		const B = [];
		if (k === 0) return [B, v];
		const X = v[Symbol.iterator]();
		for (let P = 0; P < k; P++) {
			const U = X.next();
			if (U.done) return [B, e.empty()];
			B.push(U.value);
		}
		return [B, { [Symbol.iterator]() {
			return X;
		} }];
	}
	e.consume = S;
	async function D(v) {
		const k = [];
		for await (const B of v) k.push(B);
		return k;
	}
	e.asyncToArray = D;
	async function T(v) {
		let k = [];
		for await (const B of v) k = k.concat(B);
		return k;
	}
	e.asyncToArrayFlat = T;
})(yn || (yn = {}));
let Kt = null;
(class b1 {
	constructor() {
		this.livingDisposables = /* @__PURE__ */ new Map();
	}
	static {
		this.idx = 0;
	}
	getDisposableData(t) {
		let n = this.livingDisposables.get(t);
		return n || (n = {
			parent: null,
			source: null,
			isSingleton: !1,
			value: t,
			idx: b1.idx++
		}, this.livingDisposables.set(t, n)), n;
	}
	trackDisposable(t) {
		const n = this.getDisposableData(t);
		n.source || (n.source = (/* @__PURE__ */ new Error()).stack);
	}
	setParent(t, n) {
		const r = this.getDisposableData(t);
		r.parent = n;
	}
	markAsDisposed(t) {
		this.livingDisposables.delete(t);
	}
	markAsSingleton(t) {
		this.getDisposableData(t).isSingleton = !0;
	}
	getRootParent(t, n) {
		const r = n.get(t);
		if (r) return r;
		const i = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
		return n.set(t, i), i;
	}
	getTrackedDisposables() {
		const t = /* @__PURE__ */ new Map();
		return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, t).isSingleton).flatMap(([n]) => n);
	}
	computeLeakingDisposables(t = 10, n) {
		let r;
		if (n) r = n;
		else {
			const u = /* @__PURE__ */ new Map(), c = [...this.livingDisposables.values()].filter((h) => h.source !== null && !this.getRootParent(h, u).isSingleton);
			if (c.length === 0) return;
			const m = new Set(c.map((h) => h.value));
			if (r = c.filter((h) => !(h.parent && m.has(h.parent))), r.length === 0) throw new Error("There are cyclic diposable chains!");
		}
		if (!r) return;
		function i(u) {
			function c(h, p) {
				for (; h.length > 0 && p.some((_) => typeof _ == "string" ? _ === h[0] : h[0].match(_));) h.shift();
			}
			const m = u.source.split(`
`).map((h) => h.trim().replace("at ", "")).filter((h) => h !== "");
			return c(m, [
				"Error",
				/^trackDisposable \(.*\)$/,
				/^DisposableTracker.trackDisposable \(.*\)$/
			]), m.reverse();
		}
		const s = new d1();
		for (const u of r) {
			const c = i(u);
			for (let m = 0; m <= c.length; m++) s.add(c.slice(0, m).join(`
`), u);
		}
		r.sort(ot((u) => u.idx, Et));
		let a = "", o = 0;
		for (const u of r.slice(0, t)) {
			o++;
			const c = i(u), m = [];
			for (let h = 0; h < c.length; h++) {
				let p = c[h];
				p = `(shared with ${s.get(c.slice(0, h + 1).join(`
`)).size}/${r.length} leaks) at ${p}`;
				const _ = La([...s.get(c.slice(0, h).join(`
`))].map((d) => i(d)[h]), (d) => d);
				delete _[c[h]];
				for (const [d, b] of Object.entries(_)) b && m.unshift(`    - stacktraces of ${b.length} other leaks continue with ${d}`);
				m.unshift(p);
			}
			a += `


==================== Leaking disposable ${o}/${r.length}: ${u.value.constructor.name} ====================
${m.join(`
`)}
============================================================

`;
		}
		return r.length > t && (a += `


... and ${r.length - t} more leaking disposables

`), {
			leaks: r,
			details: a
		};
	}
});
function Mr(e) {
	return Kt?.trackDisposable(e), e;
}
function Sr(e) {
	Kt?.markAsDisposed(e);
}
function rr(e, t) {
	Kt?.setParent(e, t);
}
function Ba(e, t) {}
function w1(e) {
	if (yn.is(e)) {
		const t = [];
		for (const n of e) if (n) try {
			n.dispose();
		} catch (r) {
			t.push(r);
		}
		if (t.length === 1) throw t[0];
		if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
		return Array.isArray(e) ? [] : e;
	} else if (e) return e.dispose(), e;
}
function Oa(...e) {
	const t = Ct(() => w1(e));
	return Ba(e, t), t;
}
var Va = class {
	constructor(e) {
		this._isDisposed = !1, this._fn = e, Mr(this);
	}
	dispose() {
		if (!this._isDisposed) {
			if (!this._fn) throw new Error("Unbound disposable context: Need to use an arrow function to preserve the value of this");
			this._isDisposed = !0, Sr(this), this._fn();
		}
	}
};
function Ct(e) {
	return new Va(e);
}
var kr = class L1 {
	static {
		this.DISABLE_DISPOSED_WARNING = !1;
	}
	constructor() {
		this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = !1, Mr(this);
	}
	dispose() {
		this._isDisposed || (Sr(this), this._isDisposed = !0, this.clear());
	}
	get isDisposed() {
		return this._isDisposed;
	}
	clear() {
		if (this._toDispose.size !== 0) try {
			w1(this._toDispose);
		} finally {
			this._toDispose.clear();
		}
	}
	add(t) {
		if (!t || t === en.None) return t;
		if (t === this) throw new Error("Cannot register a disposable on itself!");
		return rr(t, this), this._isDisposed ? L1.DISABLE_DISPOSED_WARNING || console.warn((/* @__PURE__ */ new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!")).stack) : this._toDispose.add(t), t;
	}
	delete(t) {
		if (t) {
			if (t === this) throw new Error("Cannot dispose a disposable on itself!");
			this._toDispose.delete(t), t.dispose();
		}
	}
	deleteAndLeak(t) {
		t && this._toDispose.delete(t) && rr(t, null);
	}
	assertNotDisposed() {
		this._isDisposed && Rt(new se("Object disposed"));
	}
}, en = class {
	static {
		this.None = Object.freeze({ dispose() {} });
	}
	constructor() {
		this._store = new kr(), Mr(this), rr(this._store, this);
	}
	dispose() {
		Sr(this), this._store.dispose();
	}
	_register(e) {
		if (e === this) throw new Error("Cannot register a disposable on itself!");
		return this._store.add(e);
	}
}, ie = class gn {
	static {
		this.Undefined = new gn(void 0);
	}
	constructor(t) {
		this.element = t, this.next = gn.Undefined, this.prev = gn.Undefined;
	}
}, Ha = class {
	constructor() {
		this._first = ie.Undefined, this._last = ie.Undefined, this._size = 0;
	}
	get size() {
		return this._size;
	}
	isEmpty() {
		return this._first === ie.Undefined;
	}
	clear() {
		let e = this._first;
		for (; e !== ie.Undefined;) {
			const t = e.next;
			e.prev = ie.Undefined, e.next = ie.Undefined, e = t;
		}
		this._first = ie.Undefined, this._last = ie.Undefined, this._size = 0;
	}
	unshift(e) {
		return this._insert(e, !1);
	}
	push(e) {
		return this._insert(e, !0);
	}
	_insert(e, t) {
		const n = new ie(e);
		if (this._first === ie.Undefined) this._first = n, this._last = n;
		else if (t) {
			const i = this._last;
			this._last = n, n.prev = i, i.next = n;
		} else {
			const i = this._first;
			this._first = n, n.next = i, i.prev = n;
		}
		this._size += 1;
		let r = !1;
		return () => {
			r || (r = !0, this._remove(n));
		};
	}
	shift() {
		if (this._first !== ie.Undefined) {
			const e = this._first.element;
			return this._remove(this._first), e;
		}
	}
	pop() {
		if (this._last !== ie.Undefined) {
			const e = this._last.element;
			return this._remove(this._last), e;
		}
	}
	peek() {
		if (this._last !== ie.Undefined) return this._last.element;
	}
	_remove(e) {
		if (e.prev !== ie.Undefined && e.next !== ie.Undefined) {
			const t = e.prev;
			t.next = e.next, e.next.prev = t;
		} else e.prev === ie.Undefined && e.next === ie.Undefined ? (this._first = ie.Undefined, this._last = ie.Undefined) : e.next === ie.Undefined ? (this._last = this._last.prev, this._last.next = ie.Undefined) : e.prev === ie.Undefined && (this._first = this._first.next, this._first.prev = ie.Undefined);
		this._size -= 1;
	}
	*[Symbol.iterator]() {
		let e = this._first;
		for (; e !== ie.Undefined;) yield e.element, e = e.next;
	}
};
const qa = globalThis.performance.now.bind(globalThis.performance);
var v1 = class N1 {
	static create(t) {
		return new N1(t);
	}
	constructor(t) {
		this._now = t === !1 ? Date.now : qa, this._startTime = this._now(), this._stopTime = -1;
	}
	stop() {
		this._stopTime = this._now();
	}
	reset() {
		this._startTime = this._now(), this._stopTime = -1;
	}
	elapsed() {
		return this._stopTime !== -1 ? this._stopTime - this._startTime : this._now() - this._startTime;
	}
}, Tn;
(function(e) {
	e.None = () => en.None;
	function t(U, x, O) {
		return p(U, () => {}, 0, void 0, x ?? !0, void 0, O);
	}
	e.defer = t;
	function n(U) {
		return (x, O = null, M) => {
			let F = !1, H;
			return H = U((z) => {
				if (!F) return H ? H.dispose() : F = !0, x.call(O, z);
			}, null, M), F && H.dispose(), H;
		};
	}
	e.once = n;
	function r(U, x) {
		return e.once(e.filter(U, x));
	}
	e.onceIf = r;
	function i(U, x, O) {
		return m((M, F = null, H) => U((z) => M.call(F, x(z)), null, H), O);
	}
	e.map = i;
	function s(U, x, O) {
		return m((M, F = null, H) => U((z) => {
			x(z), M.call(F, z);
		}, null, H), O);
	}
	e.forEach = s;
	function a(U, x, O) {
		return m((M, F = null, H) => U((z) => x(z) && M.call(F, z), null, H), O);
	}
	e.filter = a;
	function o(U) {
		return U;
	}
	e.signal = o;
	function u(...U) {
		return (x, O = null, M) => h(Oa(...U.map((F) => F((H) => x.call(O, H)))), M);
	}
	e.any = u;
	function c(U, x, O, M) {
		let F = O;
		return i(U, (H) => (F = x(F, H), F), M);
	}
	e.reduce = c;
	function m(U, x) {
		let O;
		const M = new ke({
			onWillAddFirstListener() {
				O = U(M.fire, M);
			},
			onDidRemoveLastListener() {
				O?.dispose();
			}
		});
		return x?.add(M), M.event;
	}
	function h(U, x) {
		return x instanceof Array ? x.push(U) : x && x.add(U), U;
	}
	function p(U, x, O = 100, M = !1, F = !1, H, z) {
		let J, C, et, sn = 0, It;
		const an = new ke({
			leakWarningThreshold: H,
			onWillAddFirstListener() {
				J = U((ga) => {
					sn++, C = x(C, ga), M && !et && (an.fire(C), C = void 0), It = () => {
						const _a = C;
						C = void 0, et = void 0, (!M || sn > 1) && an.fire(_a), sn = 0;
					}, typeof O == "number" ? (et && clearTimeout(et), et = setTimeout(It, O)) : et === void 0 && (et = null, queueMicrotask(It));
				});
			},
			onWillRemoveListener() {
				F && sn > 0 && It?.();
			},
			onDidRemoveLastListener() {
				It = void 0, J.dispose();
			}
		});
		return z?.add(an), an.event;
	}
	e.debounce = p;
	function _(U, x = 0, O, M) {
		return e.debounce(U, (F, H) => F ? (F.push(H), F) : [H], x, void 0, O ?? !0, void 0, M);
	}
	e.accumulate = _;
	function d(U, x = (M, F) => M === F, O) {
		let M = !0, F;
		return a(U, (H) => {
			const z = M || !x(H, F);
			return M = !1, F = H, z;
		}, O);
	}
	e.latch = d;
	function b(U, x, O) {
		return [e.filter(U, x, O), e.filter(U, (M) => !x(M), O)];
	}
	e.split = b;
	function A(U, x = !1, O = [], M) {
		let F = O.slice(), H = U((C) => {
			F ? F.push(C) : J.fire(C);
		});
		M && M.add(H);
		const z = () => {
			F?.forEach((C) => J.fire(C)), F = null;
		}, J = new ke({
			onWillAddFirstListener() {
				H || (H = U((C) => J.fire(C)), M && M.add(H));
			},
			onDidAddFirstListener() {
				F && (x ? setTimeout(z) : z());
			},
			onDidRemoveLastListener() {
				H && H.dispose(), H = null;
			}
		});
		return M && M.add(J), J.event;
	}
	e.buffer = A;
	function R(U, x) {
		return (M, F, H) => {
			const z = x(new y());
			return U(function(J) {
				const C = z.evaluate(J);
				C !== E && M.call(F, C);
			}, void 0, H);
		};
	}
	e.chain = R;
	const E = Symbol("HaltChainable");
	class y {
		constructor() {
			this.steps = [];
		}
		map(x) {
			return this.steps.push(x), this;
		}
		forEach(x) {
			return this.steps.push((O) => (x(O), O)), this;
		}
		filter(x) {
			return this.steps.push((O) => x(O) ? O : E), this;
		}
		reduce(x, O) {
			let M = O;
			return this.steps.push((F) => (M = x(M, F), M)), this;
		}
		latch(x = (O, M) => O === M) {
			let O = !0, M;
			return this.steps.push((F) => {
				const H = O || !x(F, M);
				return O = !1, M = F, H ? F : E;
			}), this;
		}
		evaluate(x) {
			for (const O of this.steps) if (x = O(x), x === E) break;
			return x;
		}
	}
	function S(U, x, O = (M) => M) {
		const M = (...J) => z.fire(O(...J)), F = () => U.on(x, M), H = () => U.removeListener(x, M), z = new ke({
			onWillAddFirstListener: F,
			onDidRemoveLastListener: H
		});
		return z.event;
	}
	e.fromNodeEventEmitter = S;
	function D(U, x, O = (M) => M) {
		const M = (...J) => z.fire(O(...J)), F = () => U.addEventListener(x, M), H = () => U.removeEventListener(x, M), z = new ke({
			onWillAddFirstListener: F,
			onDidRemoveLastListener: H
		});
		return z.event;
	}
	e.fromDOMEventEmitter = D;
	function T(U, x) {
		let O, M;
		const F = new Promise((H) => {
			M = n(U)(H), sr(M, x), O = () => {
				zr(M, x);
			};
		});
		return F.cancel = O, x && F.finally(() => zr(M, x)), F;
	}
	e.toPromise = T;
	function v(U, x) {
		return U((O) => x.fire(O));
	}
	e.forward = v;
	function k(U, x, O) {
		return x(O), U((M) => x(M));
	}
	e.runAndSubscribe = k;
	class B {
		constructor(x, O) {
			this._observable = x, this._counter = 0, this._hasChanged = !1, this.emitter = new ke({
				onWillAddFirstListener: () => {
					x.addObserver(this), this._observable.reportChanges();
				},
				onDidRemoveLastListener: () => {
					x.removeObserver(this);
				}
			}), O && O.add(this.emitter);
		}
		beginUpdate(x) {
			this._counter++;
		}
		handlePossibleChange(x) {}
		handleChange(x, O) {
			this._hasChanged = !0;
		}
		endUpdate(x) {
			this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
		}
	}
	function X(U, x) {
		return new B(U, x).emitter.event;
	}
	e.fromObservable = X;
	function P(U) {
		return (x, O, M) => {
			let F = 0, H = !1;
			const z = {
				beginUpdate() {
					F++;
				},
				endUpdate() {
					F--, F === 0 && (U.reportChanges(), H && (H = !1, x.call(O)));
				},
				handlePossibleChange() {},
				handleChange() {
					H = !0;
				}
			};
			U.addObserver(z), U.reportChanges();
			const J = { dispose() {
				U.removeObserver(z);
			} };
			return sr(J, M), J;
		};
	}
	e.fromObservableLight = P;
})(Tn || (Tn = {}));
var Wa = class ir {
	static {
		this.all = /* @__PURE__ */ new Set();
	}
	static {
		this._idPool = 0;
	}
	constructor(t) {
		this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${ir._idPool++}`, ir.all.add(this);
	}
	start(t) {
		this._stopWatch = new v1(), this.listenerCount = t;
	}
	stop() {
		if (this._stopWatch) {
			const t = this._stopWatch.elapsed();
			this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
		}
	}
};
let Gr = -1;
var $a = class R1 {
	static {
		this._idPool = 1;
	}
	constructor(t, n, r = (R1._idPool++).toString(16).padStart(3, "0")) {
		this._errorHandler = t, this.threshold = n, this.name = r, this._warnCountdown = 0;
	}
	dispose() {
		this._stacks?.clear();
	}
	check(t, n) {
		const r = this.threshold;
		if (r <= 0 || n < r) return;
		this._stacks || (this._stacks = /* @__PURE__ */ new Map());
		const i = this._stacks.get(t.value) || 0;
		if (this._stacks.set(t.value, i + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
			this._warnCountdown = r * .5;
			const [s, a] = this.getMostFrequentStack(), o = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${a}):`;
			console.warn(o), console.warn(s);
			const u = new za(o, s);
			this._errorHandler(u);
		}
		return () => {
			const s = this._stacks.get(t.value) || 0;
			this._stacks.set(t.value, s - 1);
		};
	}
	getMostFrequentStack() {
		if (!this._stacks) return;
		let t, n = 0;
		for (const [r, i] of this._stacks) (!t || n < i) && (t = [r, i], n = i);
		return t;
	}
}, Ga = class E1 {
	static create() {
		return new E1((/* @__PURE__ */ new Error()).stack ?? "");
	}
	constructor(t) {
		this.value = t;
	}
	print() {
		console.warn(this.value.split(`
`).slice(2).join(`
`));
	}
}, za = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ListenerLeakError", this.stack = t;
	}
}, ja = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ListenerRefusalError", this.stack = t;
	}
};
let Xa = 0;
var Vn = class {
	constructor(e) {
		this.value = e, this.id = Xa++;
	}
};
const Ya = 2;
var ke = class {
	constructor(e) {
		this._size = 0, this._options = e, this._leakageMon = Gr > 0 || this._options?.leakWarningThreshold ? new $a(e?.onListenerError ?? Rt, this._options?.leakWarningThreshold ?? Gr) : void 0, this._perfMon = this._options?._profName ? new Wa(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
	}
	dispose() {
		this._disposed || (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose());
	}
	get event() {
		return this._event ??= (e, t, n) => {
			if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
				const a = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
				console.warn(a);
				const o = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = new ja(`${a}. HINT: Stack shows most frequent listener (${o[1]}-times)`, o[0]);
				return (this._options?.onListenerError || Rt)(u), en.None;
			}
			if (this._disposed) return en.None;
			t && (e = e.bind(t));
			const r = new Vn(e);
			let i;
			this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * .2) && (r.stack = Ga.create(), i = this._leakageMon.check(r.stack, this._size + 1)), this._listeners ? this._listeners instanceof Vn ? (this._deliveryQueue ??= new Qa(), this._listeners = [this._listeners, r]) : this._listeners.push(r) : (this._options?.onWillAddFirstListener?.(this), this._listeners = r, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
			const s = Ct(() => {
				i?.(), this._removeListener(r);
			});
			return sr(s, n), s;
		}, this._event;
	}
	_removeListener(e) {
		if (this._options?.onWillRemoveListener?.(this), !this._listeners) return;
		if (this._size === 1) {
			this._listeners = void 0, this._options?.onDidRemoveLastListener?.(this), this._size = 0;
			return;
		}
		const t = this._listeners, n = t.indexOf(e);
		if (n === -1) throw console.log("disposed?", this._disposed), console.log("size?", this._size), console.log("arr?", JSON.stringify(this._listeners)), /* @__PURE__ */ new Error("Attempted to dispose unknown listener");
		this._size--, t[n] = void 0;
		const r = this._deliveryQueue.current === this;
		if (this._size * Ya <= t.length) {
			let i = 0;
			for (let s = 0; s < t.length; s++) t[s] ? t[i++] = t[s] : r && i < this._deliveryQueue.end && (this._deliveryQueue.end--, i < this._deliveryQueue.i && this._deliveryQueue.i--);
			t.length = i;
		}
	}
	_deliver(e, t) {
		if (!e) return;
		const n = this._options?.onListenerError || Rt;
		if (!n) {
			e.value(t);
			return;
		}
		try {
			e.value(t);
		} catch (r) {
			n(r);
		}
	}
	_deliverQueue(e) {
		const t = e.current._listeners;
		for (; e.i < e.end;) this._deliver(t[e.i++], e.value);
		e.reset();
	}
	fire(e) {
		if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Vn) this._deliver(this._listeners, e);
		else {
			const t = this._deliveryQueue;
			t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
		}
		this._perfMon?.stop();
	}
	hasListeners() {
		return this._size > 0;
	}
}, Qa = class {
	constructor() {
		this.i = -1, this.end = 0;
	}
	enqueue(e, t, n) {
		this.i = 0, this.end = n, this.current = e, this.value = t;
	}
	reset() {
		this.i = this.end, this.current = void 0, this.value = void 0;
	}
};
function sr(e, t) {
	t instanceof kr ? t.add(e) : Array.isArray(t) && t.push(e);
}
function zr(e, t) {
	if (t instanceof kr) t.delete(e);
	else if (Array.isArray(t)) {
		const n = t.indexOf(e);
		n !== -1 && t.splice(n, 1);
	}
	e.dispose();
}
function Za() {
	return globalThis._VSCODE_NLS_MESSAGES;
}
function A1() {
	return globalThis._VSCODE_NLS_LANGUAGE;
}
const Ja = A1() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function jr(e, t) {
	let n;
	return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, i) => {
		const s = t[i[0]];
		let a = r;
		return typeof s == "string" ? a = s : (typeof s == "number" || typeof s == "boolean" || s === void 0 || s === null) && (a = String(s)), a;
	}), Ja && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function $(e, t, ...n) {
	return jr(typeof e == "number" ? Ca(e, t) : t, n);
}
function Ca(e, t) {
	const n = Za()?.[e];
	if (typeof n != "string") {
		if (typeof t == "string") return t;
		throw new Error(`!!! NLS MISSING: ${e} !!!`);
	}
	return n;
}
let tn = !1, nn = !1, Xt = !1, y1 = !1, Ur = !1, T1 = !1, _n = "en", Oe;
const Ge = globalThis;
let we;
typeof Ge.vscode < "u" && typeof Ge.vscode.process < "u" ? we = Ge.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (we = process);
const il = typeof we?.versions?.electron == "string" && we?.type === "renderer";
if (typeof we == "object") {
	tn = we.platform === "win32", nn = we.platform === "darwin", Xt = we.platform === "linux", Xt && we.env.SNAP && we.env.SNAP_REVISION, we.env.CI || we.env.BUILD_ARTIFACTSTAGINGDIRECTORY || we.env.GITHUB_WORKSPACE, _n = "en";
	const e = we.env.VSCODE_NLS_CONFIG;
	if (e) try {
		const t = JSON.parse(e);
		t.userLocale, t.osLocale, _n = t.resolvedLanguage || "en", t.languagePack?.translationsConfigFile;
	} catch {}
	y1 = !0;
} else typeof navigator == "object" && !il ? (Oe = navigator.userAgent, tn = Oe.indexOf("Windows") >= 0, nn = Oe.indexOf("Macintosh") >= 0, T1 = (Oe.indexOf("Macintosh") >= 0 || Oe.indexOf("iPad") >= 0 || Oe.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, Xt = Oe.indexOf("Linux") >= 0, Oe?.indexOf("Mobi"), Ur = !0, _n = A1() || "en", navigator.language.toLowerCase()) : console.error("Unable to resolve platform.");
var At;
(function(e) {
	e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(At || (At = {}));
At.Web;
nn ? At.Mac : tn ? At.Windows : Xt && At.Linux;
const Mt = tn, sl = nn, al = Xt, ll = y1, ol = Ur, cl = Ur && typeof Ge.importScripts == "function" ? Ge.origin : void 0, Ie = Oe, ze = _n;
var Yr;
(function(e) {
	function t() {
		return ze;
	}
	e.value = t;
	function n() {
		return ze.length === 2 ? ze === "en" : ze.length >= 3 ? ze[0] === "e" && ze[1] === "n" && ze[2] === "-" : !1;
	}
	e.isDefaultVariant = n;
	function r() {
		return ze === "en";
	}
	e.isDefault = r;
})(Yr || (Yr = {}));
const hl = typeof Ge.postMessage == "function" && !Ge.importScripts;
(() => {
	if (hl) {
		const e = [];
		Ge.addEventListener("message", (n) => {
			if (n.data && n.data.vscodeScheduleAsyncWork) for (let r = 0, i = e.length; r < i; r++) {
				const s = e[r];
				if (s.id === n.data.vscodeScheduleAsyncWork) {
					e.splice(r, 1), s.callback();
					return;
				}
			}
		});
		let t = 0;
		return (n) => {
			const r = ++t;
			e.push({
				id: r,
				callback: n
			}), Ge.postMessage({ vscodeScheduleAsyncWork: r }, "*");
		};
	}
	return (e) => setTimeout(e);
})();
var Yt;
(function(e) {
	e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(Yt || (Yt = {}));
nn || T1 ? Yt.Macintosh : tn ? Yt.Windows : Yt.Linux;
const fl = !!(Ie && Ie.indexOf("Chrome") >= 0);
Ie && Ie.indexOf("Firefox");
!fl && Ie && Ie.indexOf("Safari");
Ie && Ie.indexOf("Edg/");
Ie && Ie.indexOf("Android");
const M1 = Object.freeze(function(e, t) {
	const n = setTimeout(e.bind(t), 0);
	return { dispose() {
		clearTimeout(n);
	} };
});
var xn;
(function(e) {
	function t(n) {
		return n === e.None || n === e.Cancelled || n instanceof pn ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
	}
	e.isCancellationToken = t, e.None = Object.freeze({
		isCancellationRequested: !1,
		onCancellationRequested: Tn.None
	}), e.Cancelled = Object.freeze({
		isCancellationRequested: !0,
		onCancellationRequested: M1
	});
})(xn || (xn = {}));
var pn = class {
	constructor() {
		this._isCancelled = !1, this._emitter = null;
	}
	cancel() {
		this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
	}
	get isCancellationRequested() {
		return this._isCancelled;
	}
	get onCancellationRequested() {
		return this._isCancelled ? M1 : (this._emitter || (this._emitter = new ke()), this._emitter.event);
	}
	dispose() {
		this._emitter && (this._emitter.dispose(), this._emitter = null);
	}
}, gl = class {
	constructor(e) {
		this._token = void 0, this._parentListener = void 0, this._parentListener = e && e.onCancellationRequested(this.cancel, this);
	}
	get token() {
		return this._token || (this._token = new pn()), this._token;
	}
	cancel() {
		this._token ? this._token instanceof pn && this._token.cancel() : this._token = xn.Cancelled;
	}
	dispose(e = !1) {
		e && this.cancel(), this._parentListener?.dispose(), this._token ? this._token instanceof pn && this._token.dispose() : this._token = xn.None;
	}
};
function _l(e) {
	return e;
}
var pl = class {
	constructor(e, t) {
		this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = _l) : (this._fn = t, this._computeKey = e.getCacheKey);
	}
	get(e) {
		const t = this._computeKey(e);
		return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
	}
}, Ze;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Running = 1] = "Running", e[e.Completed = 2] = "Completed";
})(Ze || (Ze = {}));
var ar = class {
	constructor(e) {
		this.executor = e, this._state = Ze.Uninitialized;
	}
	get hasValue() {
		return this._state === Ze.Completed;
	}
	get value() {
		if (this._state === Ze.Uninitialized) {
			this._state = Ze.Running;
			try {
				this._value = this.executor();
			} catch (e) {
				this._error = e;
			} finally {
				this._state = Ze.Completed;
			}
		} else if (this._state === Ze.Running) throw new Error("Cannot read the value of a lazy that is being initialized");
		if (this._error) throw this._error;
		return this._value;
	}
	get rawValue() {
		return this._value;
	}
}, xe;
(function(e) {
	e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(xe || (xe = {}));
function Qr(e) {
	return e < 0 ? 0 : e > xe.MAX_UINT_8 ? xe.MAX_UINT_8 : e | 0;
}
function ht(e) {
	return e < 0 ? 0 : e > xe.MAX_UINT_32 ? xe.MAX_UINT_32 : e | 0;
}
function dl(e) {
	return e.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function bl(e) {
	return e.source === "^" || e.source === "^$" || e.source === "$" || e.source === "^\\s*$" ? !1 : !!(e.exec("") && e.lastIndex === 0);
}
function S1(e) {
	return e.split(/\r\n|\r|\n/);
}
function wl(e) {
	for (let t = 0, n = e.length; t < n; t++) {
		const r = e.charCodeAt(t);
		if (r !== L.Space && r !== L.Tab) return t;
	}
	return -1;
}
function Ll(e, t = e.length - 1) {
	for (let n = t; n >= 0; n--) {
		const r = e.charCodeAt(n);
		if (r !== L.Space && r !== L.Tab) return n;
	}
	return -1;
}
function vl(e, t) {
	return e < t ? -1 : e > t ? 1 : 0;
}
function Nl(e, t, n = 0, r = e.length, i = 0, s = t.length) {
	for (; n < r && i < s; n++, i++) {
		const u = e.charCodeAt(n), c = t.charCodeAt(i);
		if (u < c) return -1;
		if (u > c) return 1;
	}
	const a = r - n, o = s - i;
	return a < o ? -1 : a > o ? 1 : 0;
}
function k1(e, t, n = 0, r = e.length, i = 0, s = t.length) {
	for (; n < r && i < s; n++, i++) {
		let u = e.charCodeAt(n), c = t.charCodeAt(i);
		if (u === c) continue;
		if (u >= 128 || c >= 128) return Nl(e.toLowerCase(), t.toLowerCase(), n, r, i, s);
		Zr(u) && (u -= 32), Zr(c) && (c -= 32);
		const m = u - c;
		if (m !== 0) return m;
	}
	const a = r - n, o = s - i;
	return a < o ? -1 : a > o ? 1 : 0;
}
function Zr(e) {
	return e >= L.a && e <= L.z;
}
function U1(e) {
	return e >= L.A && e <= L.Z;
}
function Rl(e, t) {
	return e.length === t.length && k1(e, t) === 0;
}
function El(e, t) {
	const n = t.length;
	return n <= e.length && k1(e, t, 0, n) === 0;
}
function Mn(e, t) {
	const n = Math.min(e.length, t.length);
	let r;
	for (r = 0; r < n; r++) if (e.charCodeAt(r) !== t.charCodeAt(r)) return r;
	return n;
}
function Sn(e, t) {
	const n = Math.min(e.length, t.length);
	let r;
	const i = e.length - 1, s = t.length - 1;
	for (r = 0; r < n; r++) if (e.charCodeAt(i - r) !== t.charCodeAt(s - r)) return r;
	return n;
}
function kn(e) {
	return 55296 <= e && e <= 56319;
}
function lr(e) {
	return 56320 <= e && e <= 57343;
}
function D1(e, t) {
	return (e - 55296 << 10) + (t - 56320) + 65536;
}
function Al(e, t, n) {
	const r = e.charCodeAt(n);
	if (kn(r) && n + 1 < t) {
		const i = e.charCodeAt(n + 1);
		if (lr(i)) return D1(r, i);
	}
	return r;
}
const yl = /^[\t\n\r\x20-\x7E]*$/;
function Tl(e) {
	return yl.test(e);
}
new RegExp("(?:" + [
	/(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/.source,
	/(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/.source,
	/\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/.source
].join("|") + ")", "g");
String.fromCharCode(L.UTF8_BOM);
var it;
(function(e) {
	e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(it || (it = {}));
(class qt {
	static {
		this._INSTANCE = null;
	}
	static getInstance() {
		return qt._INSTANCE || (qt._INSTANCE = new qt()), qt._INSTANCE;
	}
	constructor() {
		this._data = xl();
	}
	getGraphemeBreakType(t) {
		if (t < 32) return t === L.LineFeed ? it.LF : t === L.CarriageReturn ? it.CR : it.Control;
		if (t < 127) return it.Other;
		const n = this._data, r = n.length / 3;
		let i = 1;
		for (; i <= r;) if (t < n[3 * i]) i = 2 * i;
		else if (t > n[3 * i + 1]) i = 2 * i + 1;
		else return n[3 * i + 2];
		return it.Other;
	}
});
function xl() {
	return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var or;
(function(e) {
	e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(or || (or = {}));
var ur = class Wt {
	static {
		this.ambiguousCharacterData = new ar(() => JSON.parse("{\"_common\":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],\"_default\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"cs\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"de\":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"es\":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"fr\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"it\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"ja\":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],\"ko\":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"pl\":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"pt-BR\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"qps-ploc\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"ru\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"tr\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"zh-hans\":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],\"zh-hant\":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}"));
	}
	static {
		this.cache = new pl((t) => {
			const n = t.split(",");
			function r(c) {
				const m = /* @__PURE__ */ new Map();
				for (let h = 0; h < c.length; h += 2) m.set(c[h], c[h + 1]);
				return m;
			}
			function i(c, m) {
				const h = new Map(c);
				for (const [p, _] of m) h.set(p, _);
				return h;
			}
			function s(c, m) {
				if (!c) return m;
				const h = /* @__PURE__ */ new Map();
				for (const [p, _] of c) m.has(p) && h.set(p, _);
				return h;
			}
			const a = this.ambiguousCharacterData.value;
			let o = n.filter((c) => !c.startsWith("_") && Object.hasOwn(a, c));
			o.length === 0 && (o = ["_default"]);
			let u;
			for (const c of o) {
				const m = r(a[c]);
				u = s(u, m);
			}
			return new Wt(i(r(a._common), u));
		});
	}
	static getInstance(t) {
		return Wt.cache.get(Array.from(t).join(","));
	}
	static {
		this._locales = new ar(() => Object.keys(Wt.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
	}
	static getLocales() {
		return Wt._locales.value;
	}
	constructor(t) {
		this.confusableDictionary = t;
	}
	isAmbiguous(t) {
		return this.confusableDictionary.has(t);
	}
	containsAmbiguousCharacter(t) {
		for (let n = 0; n < t.length; n++) {
			const r = t.codePointAt(n);
			if (typeof r == "number" && this.isAmbiguous(r)) return !0;
		}
		return !1;
	}
	getPrimaryConfusable(t) {
		return this.confusableDictionary.get(t);
	}
	getConfusableCodePoints() {
		return new Set(this.confusableDictionary.keys());
	}
}, qn = class $t {
	static getRawData() {
		return JSON.parse("{\"_common\":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],\"cs\":[173,8203,12288],\"de\":[173,8203,12288],\"es\":[8203,12288],\"fr\":[173,8203,12288],\"it\":[160,173,12288],\"ja\":[173],\"ko\":[173,12288],\"pl\":[173,8203,12288],\"pt-BR\":[173,8203,12288],\"qps-ploc\":[160,173,8203,12288],\"ru\":[173,12288],\"tr\":[160,173,8203,12288],\"zh-hans\":[160,173,8203,12288],\"zh-hant\":[173,12288]}");
	}
	static {
		this._data = void 0;
	}
	static getData() {
		return this._data || (this._data = new Set([...Object.values($t.getRawData())].flat())), this._data;
	}
	static isInvisibleCharacter(t) {
		return $t.getData().has(t);
	}
	static containsInvisibleCharacter(t) {
		for (let n = 0; n < t.length; n++) {
			const r = t.codePointAt(n);
			if (typeof r == "number" && ($t.isInvisibleCharacter(r) || r === or.space)) return !0;
		}
		return !1;
	}
	static get codePoints() {
		return $t.getData();
	}
};
const Wn = "default", Ml = "$initialize";
var Le;
(function(e) {
	e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(Le || (Le = {}));
var Sl = class {
	constructor(e, t, n, r, i) {
		this.vsWorker = e, this.req = t, this.channel = n, this.method = r, this.args = i, this.type = Le.Request;
	}
}, Jr = class {
	constructor(e, t, n, r) {
		this.vsWorker = e, this.seq = t, this.res = n, this.err = r, this.type = Le.Reply;
	}
}, kl = class {
	constructor(e, t, n, r, i) {
		this.vsWorker = e, this.req = t, this.channel = n, this.eventName = r, this.arg = i, this.type = Le.SubscribeEvent;
	}
}, Ul = class {
	constructor(e, t, n) {
		this.vsWorker = e, this.req = t, this.event = n, this.type = Le.Event;
	}
}, Dl = class {
	constructor(e, t) {
		this.vsWorker = e, this.req = t, this.type = Le.UnsubscribeEvent;
	}
}, Il = class {
	constructor(e) {
		this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
	}
	setWorkerId(e) {
		this._workerId = e;
	}
	async sendMessage(e, t, n) {
		const r = String(++this._lastSentReq);
		return new Promise((i, s) => {
			this._pendingReplies[r] = {
				resolve: i,
				reject: s
			}, this._send(new Sl(this._workerId, r, e, t, n));
		});
	}
	listen(e, t, n) {
		let r = null;
		const i = new ke({
			onWillAddFirstListener: () => {
				r = String(++this._lastSentReq), this._pendingEmitters.set(r, i), this._send(new kl(this._workerId, r, e, t, n));
			},
			onDidRemoveLastListener: () => {
				this._pendingEmitters.delete(r), this._send(new Dl(this._workerId, r)), r = null;
			}
		});
		return i.event;
	}
	handleMessage(e) {
		!e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
	}
	createProxyToRemoteChannel(e, t) {
		return new Proxy(Object.create(null), { get: (n, r) => (typeof r == "string" && !n[r] && (F1(r) ? n[r] = (i) => this.listen(e, r, i) : I1(r) ? n[r] = this.listen(e, r, void 0) : r.charCodeAt(0) === L.DollarSign && (n[r] = async (...i) => (await t?.(), this.sendMessage(e, r, i)))), n[r]) });
	}
	_handleMessage(e) {
		switch (e.type) {
			case Le.Reply: return this._handleReplyMessage(e);
			case Le.Request: return this._handleRequestMessage(e);
			case Le.SubscribeEvent: return this._handleSubscribeEventMessage(e);
			case Le.Event: return this._handleEventMessage(e);
			case Le.UnsubscribeEvent: return this._handleUnsubscribeEventMessage(e);
		}
	}
	_handleReplyMessage(e) {
		if (!this._pendingReplies[e.seq]) {
			console.warn("Got reply to unknown seq");
			return;
		}
		const t = this._pendingReplies[e.seq];
		if (delete this._pendingReplies[e.seq], e.err) {
			let n = e.err;
			if (e.err.$isError) {
				const r = /* @__PURE__ */ new Error();
				r.name = e.err.name, r.message = e.err.message, r.stack = e.err.stack, n = r;
			}
			t.reject(n);
			return;
		}
		t.resolve(e.res);
	}
	_handleRequestMessage(e) {
		const t = e.req;
		this._handler.handleMessage(e.channel, e.method, e.args).then((n) => {
			this._send(new Jr(this._workerId, t, n, void 0));
		}, (n) => {
			n.detail instanceof Error && (n.detail = Jn(n.detail)), this._send(new Jr(this._workerId, t, void 0, Jn(n)));
		});
	}
	_handleSubscribeEventMessage(e) {
		const t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((r) => {
			this._send(new Ul(this._workerId, t, r));
		});
		this._pendingEvents.set(t, n);
	}
	_handleEventMessage(e) {
		const t = this._pendingEmitters.get(e.req);
		if (t === void 0) {
			console.warn("Got event for unknown req");
			return;
		}
		t.fire(e.event);
	}
	_handleUnsubscribeEventMessage(e) {
		const t = this._pendingEvents.get(e.req);
		if (t === void 0) {
			console.warn("Got unsubscribe for unknown req");
			return;
		}
		t.dispose(), this._pendingEvents.delete(e.req);
	}
	_send(e) {
		const t = [];
		if (e.type === Le.Request) for (let n = 0; n < e.args.length; n++) {
			const r = e.args[n];
			r instanceof ArrayBuffer && t.push(r);
		}
		else e.type === Le.Reply && e.res instanceof ArrayBuffer && t.push(e.res);
		this._handler.sendMessage(e, t);
	}
};
function I1(e) {
	return e[0] === "o" && e[1] === "n" && U1(e.charCodeAt(2));
}
function F1(e) {
	return /^onDynamic/.test(e) && U1(e.charCodeAt(9));
}
var Fl = class {
	constructor(e, t) {
		this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new Il({
			sendMessage: (n, r) => {
				e(n, r);
			},
			handleMessage: (n, r, i) => this._handleMessage(n, r, i),
			handleEvent: (n, r, i) => this._handleEvent(n, r, i)
		}), this.requestHandler = t(this);
	}
	onmessage(e) {
		this._protocol.handleMessage(e);
	}
	_handleMessage(e, t, n) {
		if (e === Wn && t === Ml) return this.initialize(n[0]);
		const r = e === Wn ? this.requestHandler : this._localChannels.get(e);
		if (!r) return Promise.reject(/* @__PURE__ */ new Error(`Missing channel ${e} on worker thread`));
		const i = r[t];
		if (typeof i != "function") return Promise.reject(/* @__PURE__ */ new Error(`Missing method ${t} on worker thread channel ${e}`));
		try {
			return Promise.resolve(i.apply(r, n));
		} catch (s) {
			return Promise.reject(s);
		}
	}
	_handleEvent(e, t, n) {
		const r = e === Wn ? this.requestHandler : this._localChannels.get(e);
		if (!r) throw new Error(`Missing channel ${e} on worker thread`);
		if (F1(t)) {
			const i = r[t];
			if (typeof i != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
			const s = i.call(r, n);
			if (typeof s != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
			return s;
		}
		if (I1(t)) {
			const i = r[t];
			if (typeof i != "function") throw new Error(`Missing event ${t} on request handler.`);
			return i;
		}
		throw new Error(`Malformed event name ${t}`);
	}
	setChannel(e, t) {
		this._localChannels.set(e, t);
	}
	getChannel(e) {
		let t = this._remoteChannels.get(e);
		return t === void 0 && (t = this._protocol.createProxyToRemoteChannel(e), this._remoteChannels.set(e, t)), t;
	}
	async initialize(e) {
		this._protocol.setWorkerId(e);
	}
};
let cr = !1;
function P1(e) {
	if (cr) throw new Error("WebWorker already initialized!");
	cr = !0;
	const t = new Fl((n) => globalThis.postMessage(n), (n) => e(n));
	return globalThis.onmessage = (n) => {
		t.onmessage(n.data);
	}, t;
}
function Pl(e) {
	globalThis.onmessage = (t) => {
		cr || P1(e);
	};
}
var Xe = class {
	constructor(e, t, n, r) {
		this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r;
	}
	getOriginalEnd() {
		return this.originalStart + this.originalLength;
	}
	getModifiedEnd() {
		return this.modifiedStart + this.modifiedLength;
	}
};
const Ft = typeof Buffer < "u", Bl = new ar(() => new Uint8Array(256));
let $n, Gn;
var Ol = class Ae {
	static alloc(t) {
		return Ft ? new Ae(Buffer.allocUnsafe(t)) : new Ae(new Uint8Array(t));
	}
	static wrap(t) {
		return Ft && !Buffer.isBuffer(t) && (t = Buffer.from(t.buffer, t.byteOffset, t.byteLength)), new Ae(t);
	}
	static fromString(t, n) {
		return !n?.dontUseNodeBuffer && Ft ? new Ae(Buffer.from(t)) : ($n || ($n = new TextEncoder()), new Ae($n.encode(t)));
	}
	static fromByteArray(t) {
		const n = Ae.alloc(t.length);
		for (let r = 0, i = t.length; r < i; r++) n.buffer[r] = t[r];
		return n;
	}
	static concat(t, n) {
		if (typeof n > "u") {
			n = 0;
			for (let s = 0, a = t.length; s < a; s++) n += t[s].byteLength;
		}
		const r = Ae.alloc(n);
		let i = 0;
		for (let s = 0, a = t.length; s < a; s++) {
			const o = t[s];
			r.set(o, i), i += o.byteLength;
		}
		return r;
	}
	static isNativeBuffer(t) {
		return Ft && Buffer.isBuffer(t);
	}
	constructor(t) {
		this.buffer = t, this.byteLength = this.buffer.byteLength;
	}
	clone() {
		const t = Ae.alloc(this.byteLength);
		return t.set(this), t;
	}
	toString() {
		return Ft ? this.buffer.toString() : (Gn || (Gn = new TextDecoder(void 0, { ignoreBOM: !0 })), Gn.decode(this.buffer));
	}
	slice(t, n) {
		return new Ae(this.buffer.subarray(t, n));
	}
	set(t, n) {
		if (t instanceof Ae) this.buffer.set(t.buffer, n);
		else if (t instanceof Uint8Array) this.buffer.set(t, n);
		else if (t instanceof ArrayBuffer) this.buffer.set(new Uint8Array(t), n);
		else if (ArrayBuffer.isView(t)) this.buffer.set(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), n);
		else throw new Error("Unknown argument 'array'");
	}
	readUInt32BE(t) {
		return Hl(this.buffer, t);
	}
	writeUInt32BE(t, n) {
		ql(this.buffer, t, n);
	}
	readUInt32LE(t) {
		return Wl(this.buffer, t);
	}
	writeUInt32LE(t, n) {
		$l(this.buffer, t, n);
	}
	readUInt8(t) {
		return Gl(this.buffer, t);
	}
	writeUInt8(t, n) {
		zl(this.buffer, t, n);
	}
	indexOf(t, n = 0) {
		return Vl(this.buffer, t instanceof Ae ? t.buffer : t, n);
	}
	equals(t) {
		return this === t ? !0 : this.byteLength !== t.byteLength ? !1 : this.buffer.every((n, r) => n === t.buffer[r]);
	}
};
function Vl(e, t, n = 0) {
	const r = t.byteLength, i = e.byteLength;
	if (r === 0) return 0;
	if (r === 1) return e.indexOf(t[0]);
	if (r > i - n) return -1;
	const s = Bl.value;
	s.fill(t.length);
	for (let c = 0; c < t.length; c++) s[t[c]] = t.length - c - 1;
	let a = n + t.length - 1, o = a, u = -1;
	for (; a < i;) if (e[a] === t[o]) {
		if (o === 0) {
			u = a;
			break;
		}
		a--, o--;
	} else a += Math.max(t.length - o, s[e[a]]), o = t.length - 1;
	return u;
}
function Hl(e, t) {
	return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function ql(e, t, n) {
	e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
function Wl(e, t) {
	return e[t + 0] << 0 >>> 0 | e[t + 1] << 8 >>> 0 | e[t + 2] << 16 >>> 0 | e[t + 3] << 24 >>> 0;
}
function $l(e, t, n) {
	e[n + 0] = t & 255, t = t >>> 8, e[n + 1] = t & 255, t = t >>> 8, e[n + 2] = t & 255, t = t >>> 8, e[n + 3] = t & 255;
}
function Gl(e, t) {
	return e[t];
}
function zl(e, t, n) {
	e[n] = t;
}
const Kr = "0123456789abcdef";
function jl({ buffer: e }) {
	let t = "";
	for (let n = 0; n < e.length; n++) {
		const r = e[n];
		t += Kr[r >>> 4], t += Kr[r & 15];
	}
	return t;
}
function Cr(e, t) {
	return (t << 5) - t + e | 0;
}
function Xl(e, t) {
	t = Cr(149417, t);
	for (let n = 0, r = e.length; n < r; n++) t = Cr(e.charCodeAt(n), t);
	return t;
}
var Te;
(function(e) {
	e[e.BLOCK_SIZE = 64] = "BLOCK_SIZE", e[e.UNICODE_REPLACEMENT = 65533] = "UNICODE_REPLACEMENT";
})(Te || (Te = {}));
function zn(e, t, n = 32) {
	const r = n - t, i = ~((1 << r) - 1);
	return (e << t | (i & e) >>> r) >>> 0;
}
function Pt(e, t = 32) {
	return e instanceof ArrayBuffer ? jl(Ol.wrap(new Uint8Array(e))) : (e >>> 0).toString(16).padStart(t / 4, "0");
}
(class B1 {
	static {
		this._bigBlock32 = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(320));
	}
	constructor() {
		this._h0 = 1732584193, this._h1 = 4023233417, this._h2 = 2562383102, this._h3 = 271733878, this._h4 = 3285377520, this._buff = new Uint8Array(Te.BLOCK_SIZE + 3), this._buffDV = new DataView(this._buff.buffer), this._buffLen = 0, this._totalLen = 0, this._leftoverHighSurrogate = 0, this._finished = !1;
	}
	update(t) {
		const n = t.length;
		if (n === 0) return;
		const r = this._buff;
		let i = this._buffLen, s = this._leftoverHighSurrogate, a, o;
		for (s !== 0 ? (a = s, o = -1, s = 0) : (a = t.charCodeAt(0), o = 0);;) {
			let u = a;
			if (kn(a)) if (o + 1 < n) {
				const c = t.charCodeAt(o + 1);
				lr(c) ? (o++, u = D1(a, c)) : u = Te.UNICODE_REPLACEMENT;
			} else {
				s = a;
				break;
			}
			else lr(a) && (u = Te.UNICODE_REPLACEMENT);
			if (i = this._push(r, i, u), o++, o < n) a = t.charCodeAt(o);
			else break;
		}
		this._buffLen = i, this._leftoverHighSurrogate = s;
	}
	_push(t, n, r) {
		return r < 128 ? t[n++] = r : r < 2048 ? (t[n++] = 192 | (r & 1984) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : r < 65536 ? (t[n++] = 224 | (r & 61440) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0) : (t[n++] = 240 | (r & 1835008) >>> 18, t[n++] = 128 | (r & 258048) >>> 12, t[n++] = 128 | (r & 4032) >>> 6, t[n++] = 128 | (r & 63) >>> 0), n >= Te.BLOCK_SIZE && (this._step(), n -= Te.BLOCK_SIZE, this._totalLen += Te.BLOCK_SIZE, t[0] = t[Te.BLOCK_SIZE + 0], t[1] = t[Te.BLOCK_SIZE + 1], t[2] = t[Te.BLOCK_SIZE + 2]), n;
	}
	digest() {
		return this._finished || (this._finished = !0, this._leftoverHighSurrogate && (this._leftoverHighSurrogate = 0, this._buffLen = this._push(this._buff, this._buffLen, Te.UNICODE_REPLACEMENT)), this._totalLen += this._buffLen, this._wrapUp()), Pt(this._h0) + Pt(this._h1) + Pt(this._h2) + Pt(this._h3) + Pt(this._h4);
	}
	_wrapUp() {
		this._buff[this._buffLen++] = 128, this._buff.subarray(this._buffLen).fill(0), this._buffLen > 56 && (this._step(), this._buff.fill(0));
		const t = 8 * this._totalLen;
		this._buffDV.setUint32(56, Math.floor(t / 4294967296), !1), this._buffDV.setUint32(60, t % 4294967296, !1), this._step();
	}
	_step() {
		const t = B1._bigBlock32, n = this._buffDV;
		for (let h = 0; h < 64; h += 4) t.setUint32(h, n.getUint32(h, !1), !1);
		for (let h = 64; h < 320; h += 4) t.setUint32(h, zn(t.getUint32(h - 12, !1) ^ t.getUint32(h - 32, !1) ^ t.getUint32(h - 56, !1) ^ t.getUint32(h - 64, !1), 1), !1);
		let r = this._h0, i = this._h1, s = this._h2, a = this._h3, o = this._h4, u, c, m;
		for (let h = 0; h < 80; h++) h < 20 ? (u = i & s | ~i & a, c = 1518500249) : h < 40 ? (u = i ^ s ^ a, c = 1859775393) : h < 60 ? (u = i & s | i & a | s & a, c = 2400959708) : (u = i ^ s ^ a, c = 3395469782), m = zn(r, 5) + u + o + c + t.getUint32(h * 4, !1) & 4294967295, o = a, a = s, s = zn(i, 30), i = r, r = m;
		this._h0 = this._h0 + r & 4294967295, this._h1 = this._h1 + i & 4294967295, this._h2 = this._h2 + s & 4294967295, this._h3 = this._h3 + a & 4294967295, this._h4 = this._h4 + o & 4294967295;
	}
});
var ei = class {
	constructor(e) {
		this.source = e;
	}
	getElements() {
		const e = this.source, t = new Int32Array(e.length);
		for (let n = 0, r = e.length; n < r; n++) t[n] = e.charCodeAt(n);
		return t;
	}
};
function Yl(e, t, n) {
	return new O1(new ei(e), new ei(t)).ComputeDiff(n).changes;
}
var mt = class {
	static Assert(e, t) {
		if (!e) throw new Error(t);
	}
}, ft = class {
	static Copy(e, t, n, r, i) {
		for (let s = 0; s < i; s++) n[r + s] = e[t + s];
	}
	static Copy2(e, t, n, r, i) {
		for (let s = 0; s < i; s++) n[r + s] = e[t + s];
	}
}, We;
(function(e) {
	e[e.MaxDifferencesHistory = 1447] = "MaxDifferencesHistory";
})(We || (We = {}));
var ti = class {
	constructor() {
		this.m_changes = [], this.m_originalStart = xe.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = xe.MAX_SAFE_SMALL_INTEGER, this.m_originalCount = 0, this.m_modifiedCount = 0;
	}
	MarkNextChange() {
		(this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new Xe(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = xe.MAX_SAFE_SMALL_INTEGER, this.m_modifiedStart = xe.MAX_SAFE_SMALL_INTEGER;
	}
	AddOriginalElement(e, t) {
		this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
	}
	AddModifiedElement(e, t) {
		this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
	}
	getChanges() {
		return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
	}
	getReverseChanges() {
		return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
	}
}, O1 = class dt {
	constructor(t, n, r = null) {
		this.ContinueProcessingPredicate = r, this._originalSequence = t, this._modifiedSequence = n;
		const [i, s, a] = dt._getElements(t), [o, u, c] = dt._getElements(n);
		this._hasStrings = a && c, this._originalStringElements = i, this._originalElementsOrHash = s, this._modifiedStringElements = o, this._modifiedElementsOrHash = u, this.m_forwardHistory = [], this.m_reverseHistory = [];
	}
	static _isStringArray(t) {
		return t.length > 0 && typeof t[0] == "string";
	}
	static _getElements(t) {
		const n = t.getElements();
		if (dt._isStringArray(n)) {
			const r = new Int32Array(n.length);
			for (let i = 0, s = n.length; i < s; i++) r[i] = Xl(n[i], 0);
			return [
				n,
				r,
				!0
			];
		}
		return n instanceof Int32Array ? [
			[],
			n,
			!1
		] : [
			[],
			new Int32Array(n),
			!1
		];
	}
	ElementsAreEqual(t, n) {
		return this._originalElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._modifiedStringElements[n] : !0;
	}
	ElementsAreStrictEqual(t, n) {
		return this.ElementsAreEqual(t, n) ? dt._getStrictElement(this._originalSequence, t) === dt._getStrictElement(this._modifiedSequence, n) : !1;
	}
	static _getStrictElement(t, n) {
		return typeof t.getStrictElement == "function" ? t.getStrictElement(n) : null;
	}
	OriginalElementsAreEqual(t, n) {
		return this._originalElementsOrHash[t] !== this._originalElementsOrHash[n] ? !1 : this._hasStrings ? this._originalStringElements[t] === this._originalStringElements[n] : !0;
	}
	ModifiedElementsAreEqual(t, n) {
		return this._modifiedElementsOrHash[t] !== this._modifiedElementsOrHash[n] ? !1 : this._hasStrings ? this._modifiedStringElements[t] === this._modifiedStringElements[n] : !0;
	}
	ComputeDiff(t) {
		return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, t);
	}
	_ComputeDiff(t, n, r, i, s) {
		const a = [!1];
		let o = this.ComputeDiffRecursive(t, n, r, i, a);
		return s && (o = this.PrettifyChanges(o)), {
			quitEarly: a[0],
			changes: o
		};
	}
	ComputeDiffRecursive(t, n, r, i, s) {
		for (s[0] = !1; t <= n && r <= i && this.ElementsAreEqual(t, r);) t++, r++;
		for (; n >= t && i >= r && this.ElementsAreEqual(n, i);) n--, i--;
		if (t > n || r > i) {
			let h;
			return r <= i ? (mt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), h = [new Xe(t, 0, r, i - r + 1)]) : t <= n ? (mt.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), h = [new Xe(t, n - t + 1, r, 0)]) : (mt.Assert(t === n + 1, "originalStart should only be one more than originalEnd"), mt.Assert(r === i + 1, "modifiedStart should only be one more than modifiedEnd"), h = []), h;
		}
		const a = [0], o = [0], u = this.ComputeRecursionPoint(t, n, r, i, a, o, s), c = a[0], m = o[0];
		if (u !== null) return u;
		if (!s[0]) {
			const h = this.ComputeDiffRecursive(t, c, r, m, s);
			let p = [];
			return s[0] ? p = [new Xe(c + 1, n - (c + 1) + 1, m + 1, i - (m + 1) + 1)] : p = this.ComputeDiffRecursive(c + 1, n, m + 1, i, s), this.ConcatenateChanges(h, p);
		}
		return [new Xe(t, n - t + 1, r, i - r + 1)];
	}
	WALKTRACE(t, n, r, i, s, a, o, u, c, m, h, p, _, d, b, A, R, E) {
		let y = null, S = null, D = new ti(), T = n, v = r, k = _[0] - A[0] - i, B = xe.MIN_SAFE_SMALL_INTEGER, X = this.m_forwardHistory.length - 1;
		do {
			const P = k + t;
			P === T || P < v && c[P - 1] < c[P + 1] ? (h = c[P + 1], d = h - k - i, h < B && D.MarkNextChange(), B = h, D.AddModifiedElement(h + 1, d), k = P + 1 - t) : (h = c[P - 1] + 1, d = h - k - i, h < B && D.MarkNextChange(), B = h - 1, D.AddOriginalElement(h, d + 1), k = P - 1 - t), X >= 0 && (c = this.m_forwardHistory[X], t = c[0], T = 1, v = c.length - 1);
		} while (--X >= -1);
		if (y = D.getReverseChanges(), E[0]) {
			let P = _[0] + 1, U = A[0] + 1;
			if (y !== null && y.length > 0) {
				const x = y[y.length - 1];
				P = Math.max(P, x.getOriginalEnd()), U = Math.max(U, x.getModifiedEnd());
			}
			S = [new Xe(P, p - P + 1, U, b - U + 1)];
		} else {
			D = new ti(), T = a, v = o, k = _[0] - A[0] - u, B = xe.MAX_SAFE_SMALL_INTEGER, X = R ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
			do {
				const P = k + s;
				P === T || P < v && m[P - 1] >= m[P + 1] ? (h = m[P + 1] - 1, d = h - k - u, h > B && D.MarkNextChange(), B = h + 1, D.AddOriginalElement(h + 1, d + 1), k = P + 1 - s) : (h = m[P - 1], d = h - k - u, h > B && D.MarkNextChange(), B = h, D.AddModifiedElement(h + 1, d + 1), k = P - 1 - s), X >= 0 && (m = this.m_reverseHistory[X], s = m[0], T = 1, v = m.length - 1);
			} while (--X >= -1);
			S = D.getChanges();
		}
		return this.ConcatenateChanges(y, S);
	}
	ComputeRecursionPoint(t, n, r, i, s, a, o) {
		let u = 0, c = 0, m = 0, h = 0, p = 0, _ = 0;
		t--, r--, s[0] = 0, a[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
		const d = n - t + (i - r), b = d + 1, A = new Int32Array(b), R = new Int32Array(b), E = i - r, y = n - t, S = t - r, D = n - i, T = (y - E) % 2 === 0;
		A[E] = t, R[y] = n, o[0] = !1;
		for (let v = 1; v <= d / 2 + 1; v++) {
			let k = 0, B = 0;
			m = this.ClipDiagonalBound(E - v, v, E, b), h = this.ClipDiagonalBound(E + v, v, E, b);
			for (let P = m; P <= h; P += 2) {
				P === m || P < h && A[P - 1] < A[P + 1] ? u = A[P + 1] : u = A[P - 1] + 1, c = u - (P - E) - S;
				const U = u;
				for (; u < n && c < i && this.ElementsAreEqual(u + 1, c + 1);) u++, c++;
				if (A[P] = u, u + c > k + B && (k = u, B = c), !T && Math.abs(P - y) <= v - 1 && u >= R[P]) return s[0] = u, a[0] = c, U <= R[P] && We.MaxDifferencesHistory > 0 && v <= We.MaxDifferencesHistory + 1 ? this.WALKTRACE(E, m, h, S, y, p, _, D, A, R, u, n, s, c, i, a, T, o) : null;
			}
			const X = (k - t + (B - r) - v) / 2;
			if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(k, X)) return o[0] = !0, s[0] = k, a[0] = B, X > 0 && We.MaxDifferencesHistory > 0 && v <= We.MaxDifferencesHistory + 1 ? this.WALKTRACE(E, m, h, S, y, p, _, D, A, R, u, n, s, c, i, a, T, o) : (t++, r++, [new Xe(t, n - t + 1, r, i - r + 1)]);
			p = this.ClipDiagonalBound(y - v, v, y, b), _ = this.ClipDiagonalBound(y + v, v, y, b);
			for (let P = p; P <= _; P += 2) {
				P === p || P < _ && R[P - 1] >= R[P + 1] ? u = R[P + 1] - 1 : u = R[P - 1], c = u - (P - y) - D;
				const U = u;
				for (; u > t && c > r && this.ElementsAreEqual(u, c);) u--, c--;
				if (R[P] = u, T && Math.abs(P - E) <= v && u <= A[P]) return s[0] = u, a[0] = c, U >= A[P] && We.MaxDifferencesHistory > 0 && v <= We.MaxDifferencesHistory + 1 ? this.WALKTRACE(E, m, h, S, y, p, _, D, A, R, u, n, s, c, i, a, T, o) : null;
			}
			if (v <= We.MaxDifferencesHistory) {
				let P = new Int32Array(h - m + 2);
				P[0] = E - m + 1, ft.Copy2(A, m, P, 1, h - m + 1), this.m_forwardHistory.push(P), P = new Int32Array(_ - p + 2), P[0] = y - p + 1, ft.Copy2(R, p, P, 1, _ - p + 1), this.m_reverseHistory.push(P);
			}
		}
		return this.WALKTRACE(E, m, h, S, y, p, _, D, A, R, u, n, s, c, i, a, T, o);
	}
	PrettifyChanges(t) {
		for (let n = 0; n < t.length; n++) {
			const r = t[n], i = n < t.length - 1 ? t[n + 1].originalStart : this._originalElementsOrHash.length, s = n < t.length - 1 ? t[n + 1].modifiedStart : this._modifiedElementsOrHash.length, a = r.originalLength > 0, o = r.modifiedLength > 0;
			for (; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < s && (!a || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!o || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength));) {
				const c = this.ElementsAreStrictEqual(r.originalStart, r.modifiedStart);
				if (this.ElementsAreStrictEqual(r.originalStart + r.originalLength, r.modifiedStart + r.modifiedLength) && !c) break;
				r.originalStart++, r.modifiedStart++;
			}
			const u = [null];
			if (n < t.length - 1 && this.ChangesOverlap(t[n], t[n + 1], u)) {
				t[n] = u[0], t.splice(n + 1, 1), n--;
				continue;
			}
		}
		for (let n = t.length - 1; n >= 0; n--) {
			const r = t[n];
			let i = 0, s = 0;
			if (n > 0) {
				const h = t[n - 1];
				i = h.originalStart + h.originalLength, s = h.modifiedStart + h.modifiedLength;
			}
			const a = r.originalLength > 0, o = r.modifiedLength > 0;
			let u = 0, c = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength);
			for (let h = 1;; h++) {
				const p = r.originalStart - h, _ = r.modifiedStart - h;
				if (p < i || _ < s || a && !this.OriginalElementsAreEqual(p, p + r.originalLength) || o && !this.ModifiedElementsAreEqual(_, _ + r.modifiedLength)) break;
				const d = (p === i && _ === s ? 5 : 0) + this._boundaryScore(p, r.originalLength, _, r.modifiedLength);
				d > c && (c = d, u = h);
			}
			r.originalStart -= u, r.modifiedStart -= u;
			const m = [null];
			if (n > 0 && this.ChangesOverlap(t[n - 1], t[n], m)) {
				t[n - 1] = m[0], t.splice(n, 1), n++;
				continue;
			}
		}
		if (this._hasStrings) for (let n = 1, r = t.length; n < r; n++) {
			const i = t[n - 1], s = t[n], a = s.originalStart - i.originalStart - i.originalLength, o = i.originalStart, u = s.originalStart + s.originalLength, c = u - o, m = i.modifiedStart, h = s.modifiedStart + s.modifiedLength, p = h - m;
			if (a < 5 && c < 20 && p < 20) {
				const _ = this._findBetterContiguousSequence(o, c, m, p, a);
				if (_) {
					const [d, b] = _;
					(d !== i.originalStart + i.originalLength || b !== i.modifiedStart + i.modifiedLength) && (i.originalLength = d - i.originalStart, i.modifiedLength = b - i.modifiedStart, s.originalStart = d + a, s.modifiedStart = b + a, s.originalLength = u - s.originalStart, s.modifiedLength = h - s.modifiedStart);
				}
			}
		}
		return t;
	}
	_findBetterContiguousSequence(t, n, r, i, s) {
		if (n < s || i < s) return null;
		const a = t + n - s + 1, o = r + i - s + 1;
		let u = 0, c = 0, m = 0;
		for (let h = t; h < a; h++) for (let p = r; p < o; p++) {
			const _ = this._contiguousSequenceScore(h, p, s);
			_ > 0 && _ > u && (u = _, c = h, m = p);
		}
		return u > 0 ? [c, m] : null;
	}
	_contiguousSequenceScore(t, n, r) {
		let i = 0;
		for (let s = 0; s < r; s++) {
			if (!this.ElementsAreEqual(t + s, n + s)) return 0;
			i += this._originalStringElements[t + s].length;
		}
		return i;
	}
	_OriginalIsBoundary(t) {
		return t <= 0 || t >= this._originalElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._originalStringElements[t]);
	}
	_OriginalRegionIsBoundary(t, n) {
		if (this._OriginalIsBoundary(t) || this._OriginalIsBoundary(t - 1)) return !0;
		if (n > 0) {
			const r = t + n;
			if (this._OriginalIsBoundary(r - 1) || this._OriginalIsBoundary(r)) return !0;
		}
		return !1;
	}
	_ModifiedIsBoundary(t) {
		return t <= 0 || t >= this._modifiedElementsOrHash.length - 1 ? !0 : this._hasStrings && /^\s*$/.test(this._modifiedStringElements[t]);
	}
	_ModifiedRegionIsBoundary(t, n) {
		if (this._ModifiedIsBoundary(t) || this._ModifiedIsBoundary(t - 1)) return !0;
		if (n > 0) {
			const r = t + n;
			if (this._ModifiedIsBoundary(r - 1) || this._ModifiedIsBoundary(r)) return !0;
		}
		return !1;
	}
	_boundaryScore(t, n, r, i) {
		return (this._OriginalRegionIsBoundary(t, n) ? 1 : 0) + (this._ModifiedRegionIsBoundary(r, i) ? 1 : 0);
	}
	ConcatenateChanges(t, n) {
		const r = [];
		if (t.length === 0 || n.length === 0) return n.length > 0 ? n : t;
		if (this.ChangesOverlap(t[t.length - 1], n[0], r)) {
			const i = new Array(t.length + n.length - 1);
			return ft.Copy(t, 0, i, 0, t.length - 1), i[t.length - 1] = r[0], ft.Copy(n, 1, i, t.length, n.length - 1), i;
		} else {
			const i = new Array(t.length + n.length);
			return ft.Copy(t, 0, i, 0, t.length), ft.Copy(n, 0, i, t.length, n.length), i;
		}
	}
	ChangesOverlap(t, n, r) {
		if (mt.Assert(t.originalStart <= n.originalStart, "Left change is not less than or equal to right change"), mt.Assert(t.modifiedStart <= n.modifiedStart, "Left change is not less than or equal to right change"), t.originalStart + t.originalLength >= n.originalStart || t.modifiedStart + t.modifiedLength >= n.modifiedStart) {
			const i = t.originalStart;
			let s = t.originalLength;
			const a = t.modifiedStart;
			let o = t.modifiedLength;
			return t.originalStart + t.originalLength >= n.originalStart && (s = n.originalStart + n.originalLength - t.originalStart), t.modifiedStart + t.modifiedLength >= n.modifiedStart && (o = n.modifiedStart + n.modifiedLength - t.modifiedStart), r[0] = new Xe(i, s, a, o), !0;
		} else return r[0] = null, !1;
	}
	ClipDiagonalBound(t, n, r, i) {
		if (t >= 0 && t < i) return t;
		const s = r, a = i - r - 1, o = n % 2 === 0;
		return t < 0 ? o === (s % 2 === 0) ? 0 : 1 : o === (a % 2 === 0) ? i - 1 : i - 2;
	}
};
var Y = class tt {
	constructor(t, n) {
		this.lineNumber = t, this.column = n;
	}
	with(t = this.lineNumber, n = this.column) {
		return t === this.lineNumber && n === this.column ? this : new tt(t, n);
	}
	delta(t = 0, n = 0) {
		return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
	}
	equals(t) {
		return tt.equals(this, t);
	}
	static equals(t, n) {
		return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
	}
	isBefore(t) {
		return tt.isBefore(this, t);
	}
	static isBefore(t, n) {
		return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
	}
	isBeforeOrEqual(t) {
		return tt.isBeforeOrEqual(this, t);
	}
	static isBeforeOrEqual(t, n) {
		return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
	}
	static compare(t, n) {
		const r = t.lineNumber | 0, i = n.lineNumber | 0;
		return r === i ? (t.column | 0) - (n.column | 0) : r - i;
	}
	clone() {
		return new tt(this.lineNumber, this.column);
	}
	toString() {
		return "(" + this.lineNumber + "," + this.column + ")";
	}
	static lift(t) {
		return new tt(t.lineNumber, t.column);
	}
	static isIPosition(t) {
		return !!t && typeof t.lineNumber == "number" && typeof t.column == "number";
	}
	toJSON() {
		return {
			lineNumber: this.lineNumber,
			column: this.column
		};
	}
}, V = class le {
	constructor(t, n, r, i) {
		t > r || t === r && n > i ? (this.startLineNumber = r, this.startColumn = i, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = r, this.endColumn = i);
	}
	isEmpty() {
		return le.isEmpty(this);
	}
	static isEmpty(t) {
		return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
	}
	containsPosition(t) {
		return le.containsPosition(this, t);
	}
	static containsPosition(t, n) {
		return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
	}
	static strictContainsPosition(t, n) {
		return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
	}
	containsRange(t) {
		return le.containsRange(this, t);
	}
	static containsRange(t, n) {
		return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
	}
	strictContainsRange(t) {
		return le.strictContainsRange(this, t);
	}
	static strictContainsRange(t, n) {
		return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
	}
	plusRange(t) {
		return le.plusRange(this, t);
	}
	static plusRange(t, n) {
		let r, i, s, a;
		return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (s = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (s = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (s = t.endLineNumber, a = t.endColumn), new le(r, i, s, a);
	}
	intersectRanges(t) {
		return le.intersectRanges(this, t);
	}
	static intersectRanges(t, n) {
		let r = t.startLineNumber, i = t.startColumn, s = t.endLineNumber, a = t.endColumn;
		const o = n.startLineNumber, u = n.startColumn, c = n.endLineNumber, m = n.endColumn;
		return r < o ? (r = o, i = u) : r === o && (i = Math.max(i, u)), s > c ? (s = c, a = m) : s === c && (a = Math.min(a, m)), r > s || r === s && i > a ? null : new le(r, i, s, a);
	}
	equalsRange(t) {
		return le.equalsRange(this, t);
	}
	static equalsRange(t, n) {
		return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
	}
	getEndPosition() {
		return le.getEndPosition(this);
	}
	static getEndPosition(t) {
		return new Y(t.endLineNumber, t.endColumn);
	}
	getStartPosition() {
		return le.getStartPosition(this);
	}
	static getStartPosition(t) {
		return new Y(t.startLineNumber, t.startColumn);
	}
	toString() {
		return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
	}
	setEndPosition(t, n) {
		return new le(this.startLineNumber, this.startColumn, t, n);
	}
	setStartPosition(t, n) {
		return new le(t, n, this.endLineNumber, this.endColumn);
	}
	collapseToStart() {
		return le.collapseToStart(this);
	}
	static collapseToStart(t) {
		return new le(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
	}
	collapseToEnd() {
		return le.collapseToEnd(this);
	}
	static collapseToEnd(t) {
		return new le(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
	}
	delta(t) {
		return new le(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
	}
	isSingleLine() {
		return this.startLineNumber === this.endLineNumber;
	}
	static fromPositions(t, n = t) {
		return new le(t.lineNumber, t.column, n.lineNumber, n.column);
	}
	static lift(t) {
		return t ? new le(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
	}
	static isIRange(t) {
		return !!t && typeof t.startLineNumber == "number" && typeof t.startColumn == "number" && typeof t.endLineNumber == "number" && typeof t.endColumn == "number";
	}
	static areIntersectingOrTouching(t, n) {
		return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn);
	}
	static areIntersecting(t, n) {
		return !(t.endLineNumber < n.startLineNumber || t.endLineNumber === n.startLineNumber && t.endColumn <= n.startColumn || n.endLineNumber < t.startLineNumber || n.endLineNumber === t.startLineNumber && n.endColumn <= t.startColumn);
	}
	static areOnlyIntersecting(t, n) {
		return !(t.endLineNumber < n.startLineNumber - 1 || t.endLineNumber === n.startLineNumber && t.endColumn < n.startColumn - 1 || n.endLineNumber < t.startLineNumber - 1 || n.endLineNumber === t.startLineNumber && n.endColumn < t.startColumn - 1);
	}
	static compareRangesUsingStarts(t, n) {
		if (t && n) {
			const r = t.startLineNumber | 0, i = n.startLineNumber | 0;
			if (r === i) {
				const s = t.startColumn | 0, a = n.startColumn | 0;
				if (s === a) {
					const o = t.endLineNumber | 0, u = n.endLineNumber | 0;
					return o === u ? (t.endColumn | 0) - (n.endColumn | 0) : o - u;
				}
				return s - a;
			}
			return r - i;
		}
		return (t ? 1 : 0) - (n ? 1 : 0);
	}
	static compareRangesUsingEnds(t, n) {
		return t.endLineNumber === n.endLineNumber ? t.endColumn === n.endColumn ? t.startLineNumber === n.startLineNumber ? t.startColumn - n.startColumn : t.startLineNumber - n.startLineNumber : t.endColumn - n.endColumn : t.endLineNumber - n.endLineNumber;
	}
	static spansMultipleLines(t) {
		return t.endLineNumber > t.startLineNumber;
	}
	toJSON() {
		return this;
	}
}, Ql = class V1 {
	constructor(t) {
		const n = Qr(t);
		this._defaultValue = n, this._asciiMap = V1._createAsciiMap(n), this._map = /* @__PURE__ */ new Map();
	}
	static _createAsciiMap(t) {
		const n = new Uint8Array(256);
		return n.fill(t), n;
	}
	set(t, n) {
		const r = Qr(n);
		t >= 0 && t < 256 ? this._asciiMap[t] = r : this._map.set(t, r);
	}
	get(t) {
		return t >= 0 && t < 256 ? this._asciiMap[t] : this._map.get(t) || this._defaultValue;
	}
	clear() {
		this._asciiMap.fill(this._defaultValue), this._map.clear();
	}
}, ni;
(function(e) {
	e[e.False = 0] = "False", e[e.True = 1] = "True";
})(ni || (ni = {}));
var W;
(function(e) {
	e[e.Invalid = 0] = "Invalid", e[e.Start = 1] = "Start", e[e.H = 2] = "H", e[e.HT = 3] = "HT", e[e.HTT = 4] = "HTT", e[e.HTTP = 5] = "HTTP", e[e.F = 6] = "F", e[e.FI = 7] = "FI", e[e.FIL = 8] = "FIL", e[e.BeforeColon = 9] = "BeforeColon", e[e.AfterColon = 10] = "AfterColon", e[e.AlmostThere = 11] = "AlmostThere", e[e.End = 12] = "End", e[e.Accept = 13] = "Accept", e[e.LastKnownState = 14] = "LastKnownState";
})(W || (W = {}));
var Zl = class {
	constructor(e, t, n) {
		const r = new Uint8Array(e * t);
		for (let i = 0, s = e * t; i < s; i++) r[i] = n;
		this._data = r, this.rows = e, this.cols = t;
	}
	get(e, t) {
		return this._data[e * this.cols + t];
	}
	set(e, t, n) {
		this._data[e * this.cols + t] = n;
	}
}, Jl = class {
	constructor(e) {
		let t = 0, n = W.Invalid;
		for (let i = 0, s = e.length; i < s; i++) {
			const [a, o, u] = e[i];
			o > t && (t = o), a > n && (n = a), u > n && (n = u);
		}
		t++, n++;
		const r = new Zl(n, t, W.Invalid);
		for (let i = 0, s = e.length; i < s; i++) {
			const [a, o, u] = e[i];
			r.set(a, o, u);
		}
		this._states = r, this._maxCharCode = t;
	}
	nextState(e, t) {
		return t < 0 || t >= this._maxCharCode ? W.Invalid : this._states.get(e, t);
	}
};
let jn = null;
function Kl() {
	return jn === null && (jn = new Jl([
		[
			W.Start,
			L.h,
			W.H
		],
		[
			W.Start,
			L.H,
			W.H
		],
		[
			W.Start,
			L.f,
			W.F
		],
		[
			W.Start,
			L.F,
			W.F
		],
		[
			W.H,
			L.t,
			W.HT
		],
		[
			W.H,
			L.T,
			W.HT
		],
		[
			W.HT,
			L.t,
			W.HTT
		],
		[
			W.HT,
			L.T,
			W.HTT
		],
		[
			W.HTT,
			L.p,
			W.HTTP
		],
		[
			W.HTT,
			L.P,
			W.HTTP
		],
		[
			W.HTTP,
			L.s,
			W.BeforeColon
		],
		[
			W.HTTP,
			L.S,
			W.BeforeColon
		],
		[
			W.HTTP,
			L.Colon,
			W.AfterColon
		],
		[
			W.F,
			L.i,
			W.FI
		],
		[
			W.F,
			L.I,
			W.FI
		],
		[
			W.FI,
			L.l,
			W.FIL
		],
		[
			W.FI,
			L.L,
			W.FIL
		],
		[
			W.FIL,
			L.e,
			W.BeforeColon
		],
		[
			W.FIL,
			L.E,
			W.BeforeColon
		],
		[
			W.BeforeColon,
			L.Colon,
			W.AfterColon
		],
		[
			W.AfterColon,
			L.Slash,
			W.AlmostThere
		],
		[
			W.AlmostThere,
			L.Slash,
			W.End
		]
	])), jn;
}
var ne;
(function(e) {
	e[e.None = 0] = "None", e[e.ForceTermination = 1] = "ForceTermination", e[e.CannotEndIn = 2] = "CannotEndIn";
})(ne || (ne = {}));
let Bt = null;
function Cl() {
	if (Bt === null) {
		Bt = new Ql(ne.None);
		const e = ` 	<>'"、。｡､，．：；‘〈「『〔（［｛｢｣｝］）〕』」〉’｀～…|`;
		for (let n = 0; n < 36; n++) Bt.set(e.charCodeAt(n), ne.ForceTermination);
		const t = ".,;:";
		for (let n = 0; n < 4; n++) Bt.set(t.charCodeAt(n), ne.CannotEndIn);
	}
	return Bt;
}
var eo = class hr {
	static _createLink(t, n, r, i, s) {
		let a = s - 1;
		do {
			const o = n.charCodeAt(a);
			if (t.get(o) !== ne.CannotEndIn) break;
			a--;
		} while (a > i);
		if (i > 0) {
			const o = n.charCodeAt(i - 1), u = n.charCodeAt(a);
			(o === L.OpenParen && u === L.CloseParen || o === L.OpenSquareBracket && u === L.CloseSquareBracket || o === L.OpenCurlyBrace && u === L.CloseCurlyBrace) && a--;
		}
		return {
			range: {
				startLineNumber: r,
				startColumn: i + 1,
				endLineNumber: r,
				endColumn: a + 2
			},
			url: n.substring(i, a + 1)
		};
	}
	static computeLinks(t, n = Kl()) {
		const r = Cl(), i = [];
		for (let s = 1, a = t.getLineCount(); s <= a; s++) {
			const o = t.getLineContent(s), u = o.length;
			let c = 0, m = 0, h = 0, p = W.Start, _ = !1, d = !1, b = !1, A = !1;
			for (; c < u;) {
				let R = !1;
				const E = o.charCodeAt(c);
				if (p === W.Accept) {
					let y;
					switch (E) {
						case L.OpenParen:
							_ = !0, y = ne.None;
							break;
						case L.CloseParen:
							y = _ ? ne.None : ne.ForceTermination;
							break;
						case L.OpenSquareBracket:
							b = !0, d = !0, y = ne.None;
							break;
						case L.CloseSquareBracket:
							b = !1, y = d ? ne.None : ne.ForceTermination;
							break;
						case L.OpenCurlyBrace:
							A = !0, y = ne.None;
							break;
						case L.CloseCurlyBrace:
							y = A ? ne.None : ne.ForceTermination;
							break;
						case L.SingleQuote:
						case L.DoubleQuote:
						case L.BackTick:
							h === E ? y = ne.ForceTermination : h === L.SingleQuote || h === L.DoubleQuote || h === L.BackTick ? y = ne.None : y = ne.ForceTermination;
							break;
						case L.Asterisk:
							y = h === L.Asterisk ? ne.ForceTermination : ne.None;
							break;
						case L.Space:
							y = b ? ne.None : ne.ForceTermination;
							break;
						default: y = r.get(E);
					}
					y === ne.ForceTermination && (i.push(hr._createLink(r, o, s, m, c)), R = !0);
				} else if (p === W.End) {
					let y;
					E === L.OpenSquareBracket ? (d = !0, y = ne.None) : y = r.get(E), y === ne.ForceTermination ? R = !0 : p = W.Accept;
				} else p = n.nextState(p, E), p === W.Invalid && (R = !0);
				R && (p = W.Start, _ = !1, d = !1, A = !1, m = c + 1, h = E), c++;
			}
			p === W.Accept && i.push(hr._createLink(r, o, s, m, u));
		}
		return i;
	}
};
function to(e) {
	return !e || typeof e.getLineCount != "function" || typeof e.getLineContent != "function" ? [] : eo.computeLinks(e);
}
var no = class H1 {
	constructor() {
		this._defaultValueSet = [
			["true", "false"],
			["True", "False"],
			[
				"Private",
				"Public",
				"Friend",
				"ReadOnly",
				"Partial",
				"Protected",
				"WriteOnly"
			],
			[
				"public",
				"protected",
				"private"
			]
		];
	}
	static {
		this.INSTANCE = new H1();
	}
	navigateValueSet(t, n, r, i, s) {
		if (t && n) {
			const a = this.doNavigateValueSet(n, s);
			if (a) return {
				range: t,
				value: a
			};
		}
		if (r && i) {
			const a = this.doNavigateValueSet(i, s);
			if (a) return {
				range: r,
				value: a
			};
		}
		return null;
	}
	doNavigateValueSet(t, n) {
		const r = this.numberReplace(t, n);
		return r !== null ? r : this.textReplace(t, n);
	}
	numberReplace(t, n) {
		const r = Math.pow(10, t.length - (t.lastIndexOf(".") + 1));
		let i = Number(t);
		const s = parseFloat(t);
		return !isNaN(i) && !isNaN(s) && i === s ? i === 0 && !n ? null : (i = Math.floor(i * r), i += n ? r : -r, String(i / r)) : null;
	}
	textReplace(t, n) {
		return this.valueSetsReplace(this._defaultValueSet, t, n);
	}
	valueSetsReplace(t, n, r) {
		let i = null;
		for (let s = 0, a = t.length; i === null && s < a; s++) i = this.valueSetReplace(t[s], n, r);
		return i;
	}
	valueSetReplace(t, n, r) {
		let i = t.indexOf(n);
		return i >= 0 ? (i += r ? 1 : -1, i < 0 ? i = t.length - 1 : i %= t.length, t[i]) : null;
	}
}, f;
(function(e) {
	e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(f || (f = {}));
var g;
(function(e) {
	e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.None = 0] = "None", e[e.Hyper = 1] = "Hyper", e[e.Super = 2] = "Super", e[e.Fn = 3] = "Fn", e[e.FnLock = 4] = "FnLock", e[e.Suspend = 5] = "Suspend", e[e.Resume = 6] = "Resume", e[e.Turbo = 7] = "Turbo", e[e.Sleep = 8] = "Sleep", e[e.WakeUp = 9] = "WakeUp", e[e.KeyA = 10] = "KeyA", e[e.KeyB = 11] = "KeyB", e[e.KeyC = 12] = "KeyC", e[e.KeyD = 13] = "KeyD", e[e.KeyE = 14] = "KeyE", e[e.KeyF = 15] = "KeyF", e[e.KeyG = 16] = "KeyG", e[e.KeyH = 17] = "KeyH", e[e.KeyI = 18] = "KeyI", e[e.KeyJ = 19] = "KeyJ", e[e.KeyK = 20] = "KeyK", e[e.KeyL = 21] = "KeyL", e[e.KeyM = 22] = "KeyM", e[e.KeyN = 23] = "KeyN", e[e.KeyO = 24] = "KeyO", e[e.KeyP = 25] = "KeyP", e[e.KeyQ = 26] = "KeyQ", e[e.KeyR = 27] = "KeyR", e[e.KeyS = 28] = "KeyS", e[e.KeyT = 29] = "KeyT", e[e.KeyU = 30] = "KeyU", e[e.KeyV = 31] = "KeyV", e[e.KeyW = 32] = "KeyW", e[e.KeyX = 33] = "KeyX", e[e.KeyY = 34] = "KeyY", e[e.KeyZ = 35] = "KeyZ", e[e.Digit1 = 36] = "Digit1", e[e.Digit2 = 37] = "Digit2", e[e.Digit3 = 38] = "Digit3", e[e.Digit4 = 39] = "Digit4", e[e.Digit5 = 40] = "Digit5", e[e.Digit6 = 41] = "Digit6", e[e.Digit7 = 42] = "Digit7", e[e.Digit8 = 43] = "Digit8", e[e.Digit9 = 44] = "Digit9", e[e.Digit0 = 45] = "Digit0", e[e.Enter = 46] = "Enter", e[e.Escape = 47] = "Escape", e[e.Backspace = 48] = "Backspace", e[e.Tab = 49] = "Tab", e[e.Space = 50] = "Space", e[e.Minus = 51] = "Minus", e[e.Equal = 52] = "Equal", e[e.BracketLeft = 53] = "BracketLeft", e[e.BracketRight = 54] = "BracketRight", e[e.Backslash = 55] = "Backslash", e[e.IntlHash = 56] = "IntlHash", e[e.Semicolon = 57] = "Semicolon", e[e.Quote = 58] = "Quote", e[e.Backquote = 59] = "Backquote", e[e.Comma = 60] = "Comma", e[e.Period = 61] = "Period", e[e.Slash = 62] = "Slash", e[e.CapsLock = 63] = "CapsLock", e[e.F1 = 64] = "F1", e[e.F2 = 65] = "F2", e[e.F3 = 66] = "F3", e[e.F4 = 67] = "F4", e[e.F5 = 68] = "F5", e[e.F6 = 69] = "F6", e[e.F7 = 70] = "F7", e[e.F8 = 71] = "F8", e[e.F9 = 72] = "F9", e[e.F10 = 73] = "F10", e[e.F11 = 74] = "F11", e[e.F12 = 75] = "F12", e[e.PrintScreen = 76] = "PrintScreen", e[e.ScrollLock = 77] = "ScrollLock", e[e.Pause = 78] = "Pause", e[e.Insert = 79] = "Insert", e[e.Home = 80] = "Home", e[e.PageUp = 81] = "PageUp", e[e.Delete = 82] = "Delete", e[e.End = 83] = "End", e[e.PageDown = 84] = "PageDown", e[e.ArrowRight = 85] = "ArrowRight", e[e.ArrowLeft = 86] = "ArrowLeft", e[e.ArrowDown = 87] = "ArrowDown", e[e.ArrowUp = 88] = "ArrowUp", e[e.NumLock = 89] = "NumLock", e[e.NumpadDivide = 90] = "NumpadDivide", e[e.NumpadMultiply = 91] = "NumpadMultiply", e[e.NumpadSubtract = 92] = "NumpadSubtract", e[e.NumpadAdd = 93] = "NumpadAdd", e[e.NumpadEnter = 94] = "NumpadEnter", e[e.Numpad1 = 95] = "Numpad1", e[e.Numpad2 = 96] = "Numpad2", e[e.Numpad3 = 97] = "Numpad3", e[e.Numpad4 = 98] = "Numpad4", e[e.Numpad5 = 99] = "Numpad5", e[e.Numpad6 = 100] = "Numpad6", e[e.Numpad7 = 101] = "Numpad7", e[e.Numpad8 = 102] = "Numpad8", e[e.Numpad9 = 103] = "Numpad9", e[e.Numpad0 = 104] = "Numpad0", e[e.NumpadDecimal = 105] = "NumpadDecimal", e[e.IntlBackslash = 106] = "IntlBackslash", e[e.ContextMenu = 107] = "ContextMenu", e[e.Power = 108] = "Power", e[e.NumpadEqual = 109] = "NumpadEqual", e[e.F13 = 110] = "F13", e[e.F14 = 111] = "F14", e[e.F15 = 112] = "F15", e[e.F16 = 113] = "F16", e[e.F17 = 114] = "F17", e[e.F18 = 115] = "F18", e[e.F19 = 116] = "F19", e[e.F20 = 117] = "F20", e[e.F21 = 118] = "F21", e[e.F22 = 119] = "F22", e[e.F23 = 120] = "F23", e[e.F24 = 121] = "F24", e[e.Open = 122] = "Open", e[e.Help = 123] = "Help", e[e.Select = 124] = "Select", e[e.Again = 125] = "Again", e[e.Undo = 126] = "Undo", e[e.Cut = 127] = "Cut", e[e.Copy = 128] = "Copy", e[e.Paste = 129] = "Paste", e[e.Find = 130] = "Find", e[e.AudioVolumeMute = 131] = "AudioVolumeMute", e[e.AudioVolumeUp = 132] = "AudioVolumeUp", e[e.AudioVolumeDown = 133] = "AudioVolumeDown", e[e.NumpadComma = 134] = "NumpadComma", e[e.IntlRo = 135] = "IntlRo", e[e.KanaMode = 136] = "KanaMode", e[e.IntlYen = 137] = "IntlYen", e[e.Convert = 138] = "Convert", e[e.NonConvert = 139] = "NonConvert", e[e.Lang1 = 140] = "Lang1", e[e.Lang2 = 141] = "Lang2", e[e.Lang3 = 142] = "Lang3", e[e.Lang4 = 143] = "Lang4", e[e.Lang5 = 144] = "Lang5", e[e.Abort = 145] = "Abort", e[e.Props = 146] = "Props", e[e.NumpadParenLeft = 147] = "NumpadParenLeft", e[e.NumpadParenRight = 148] = "NumpadParenRight", e[e.NumpadBackspace = 149] = "NumpadBackspace", e[e.NumpadMemoryStore = 150] = "NumpadMemoryStore", e[e.NumpadMemoryRecall = 151] = "NumpadMemoryRecall", e[e.NumpadMemoryClear = 152] = "NumpadMemoryClear", e[e.NumpadMemoryAdd = 153] = "NumpadMemoryAdd", e[e.NumpadMemorySubtract = 154] = "NumpadMemorySubtract", e[e.NumpadClear = 155] = "NumpadClear", e[e.NumpadClearEntry = 156] = "NumpadClearEntry", e[e.ControlLeft = 157] = "ControlLeft", e[e.ShiftLeft = 158] = "ShiftLeft", e[e.AltLeft = 159] = "AltLeft", e[e.MetaLeft = 160] = "MetaLeft", e[e.ControlRight = 161] = "ControlRight", e[e.ShiftRight = 162] = "ShiftRight", e[e.AltRight = 163] = "AltRight", e[e.MetaRight = 164] = "MetaRight", e[e.BrightnessUp = 165] = "BrightnessUp", e[e.BrightnessDown = 166] = "BrightnessDown", e[e.MediaPlay = 167] = "MediaPlay", e[e.MediaRecord = 168] = "MediaRecord", e[e.MediaFastForward = 169] = "MediaFastForward", e[e.MediaRewind = 170] = "MediaRewind", e[e.MediaTrackNext = 171] = "MediaTrackNext", e[e.MediaTrackPrevious = 172] = "MediaTrackPrevious", e[e.MediaStop = 173] = "MediaStop", e[e.Eject = 174] = "Eject", e[e.MediaPlayPause = 175] = "MediaPlayPause", e[e.MediaSelect = 176] = "MediaSelect", e[e.LaunchMail = 177] = "LaunchMail", e[e.LaunchApp2 = 178] = "LaunchApp2", e[e.LaunchApp1 = 179] = "LaunchApp1", e[e.SelectTask = 180] = "SelectTask", e[e.LaunchScreenSaver = 181] = "LaunchScreenSaver", e[e.BrowserSearch = 182] = "BrowserSearch", e[e.BrowserHome = 183] = "BrowserHome", e[e.BrowserBack = 184] = "BrowserBack", e[e.BrowserForward = 185] = "BrowserForward", e[e.BrowserStop = 186] = "BrowserStop", e[e.BrowserRefresh = 187] = "BrowserRefresh", e[e.BrowserFavorites = 188] = "BrowserFavorites", e[e.ZoomToggle = 189] = "ZoomToggle", e[e.MailReply = 190] = "MailReply", e[e.MailForward = 191] = "MailForward", e[e.MailSend = 192] = "MailSend", e[e.MAX_VALUE = 193] = "MAX_VALUE";
})(g || (g = {}));
var Dr = class {
	constructor() {
		this._keyCodeToStr = [], this._strToKeyCode = Object.create(null);
	}
	define(e, t) {
		this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
	}
	keyCodeToStr(e) {
		return this._keyCodeToStr[e];
	}
	strToKeyCode(e) {
		return this._strToKeyCode[e.toLowerCase()] || f.Unknown;
	}
};
const dn = new Dr(), mr = new Dr(), fr = new Dr(), ro = new Array(230), io = {}, so = [], ao = Object.create(null), lo = Object.create(null), q1 = [], gr = [];
for (let e = 0; e <= g.MAX_VALUE; e++) q1[e] = f.DependsOnKbLayout;
for (let e = 0; e <= f.MAX_VALUE; e++) gr[e] = g.DependsOnKbLayout;
(function() {
	const t = [
		[
			1,
			g.None,
			"None",
			f.Unknown,
			"unknown",
			0,
			"VK_UNKNOWN",
			"",
			""
		],
		[
			1,
			g.Hyper,
			"Hyper",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Super,
			"Super",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Fn,
			"Fn",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.FnLock,
			"FnLock",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Suspend,
			"Suspend",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Resume,
			"Resume",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Turbo,
			"Turbo",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Sleep,
			"Sleep",
			f.Unknown,
			"",
			0,
			"VK_SLEEP",
			"",
			""
		],
		[
			1,
			g.WakeUp,
			"WakeUp",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			0,
			g.KeyA,
			"KeyA",
			f.KeyA,
			"A",
			65,
			"VK_A",
			"",
			""
		],
		[
			0,
			g.KeyB,
			"KeyB",
			f.KeyB,
			"B",
			66,
			"VK_B",
			"",
			""
		],
		[
			0,
			g.KeyC,
			"KeyC",
			f.KeyC,
			"C",
			67,
			"VK_C",
			"",
			""
		],
		[
			0,
			g.KeyD,
			"KeyD",
			f.KeyD,
			"D",
			68,
			"VK_D",
			"",
			""
		],
		[
			0,
			g.KeyE,
			"KeyE",
			f.KeyE,
			"E",
			69,
			"VK_E",
			"",
			""
		],
		[
			0,
			g.KeyF,
			"KeyF",
			f.KeyF,
			"F",
			70,
			"VK_F",
			"",
			""
		],
		[
			0,
			g.KeyG,
			"KeyG",
			f.KeyG,
			"G",
			71,
			"VK_G",
			"",
			""
		],
		[
			0,
			g.KeyH,
			"KeyH",
			f.KeyH,
			"H",
			72,
			"VK_H",
			"",
			""
		],
		[
			0,
			g.KeyI,
			"KeyI",
			f.KeyI,
			"I",
			73,
			"VK_I",
			"",
			""
		],
		[
			0,
			g.KeyJ,
			"KeyJ",
			f.KeyJ,
			"J",
			74,
			"VK_J",
			"",
			""
		],
		[
			0,
			g.KeyK,
			"KeyK",
			f.KeyK,
			"K",
			75,
			"VK_K",
			"",
			""
		],
		[
			0,
			g.KeyL,
			"KeyL",
			f.KeyL,
			"L",
			76,
			"VK_L",
			"",
			""
		],
		[
			0,
			g.KeyM,
			"KeyM",
			f.KeyM,
			"M",
			77,
			"VK_M",
			"",
			""
		],
		[
			0,
			g.KeyN,
			"KeyN",
			f.KeyN,
			"N",
			78,
			"VK_N",
			"",
			""
		],
		[
			0,
			g.KeyO,
			"KeyO",
			f.KeyO,
			"O",
			79,
			"VK_O",
			"",
			""
		],
		[
			0,
			g.KeyP,
			"KeyP",
			f.KeyP,
			"P",
			80,
			"VK_P",
			"",
			""
		],
		[
			0,
			g.KeyQ,
			"KeyQ",
			f.KeyQ,
			"Q",
			81,
			"VK_Q",
			"",
			""
		],
		[
			0,
			g.KeyR,
			"KeyR",
			f.KeyR,
			"R",
			82,
			"VK_R",
			"",
			""
		],
		[
			0,
			g.KeyS,
			"KeyS",
			f.KeyS,
			"S",
			83,
			"VK_S",
			"",
			""
		],
		[
			0,
			g.KeyT,
			"KeyT",
			f.KeyT,
			"T",
			84,
			"VK_T",
			"",
			""
		],
		[
			0,
			g.KeyU,
			"KeyU",
			f.KeyU,
			"U",
			85,
			"VK_U",
			"",
			""
		],
		[
			0,
			g.KeyV,
			"KeyV",
			f.KeyV,
			"V",
			86,
			"VK_V",
			"",
			""
		],
		[
			0,
			g.KeyW,
			"KeyW",
			f.KeyW,
			"W",
			87,
			"VK_W",
			"",
			""
		],
		[
			0,
			g.KeyX,
			"KeyX",
			f.KeyX,
			"X",
			88,
			"VK_X",
			"",
			""
		],
		[
			0,
			g.KeyY,
			"KeyY",
			f.KeyY,
			"Y",
			89,
			"VK_Y",
			"",
			""
		],
		[
			0,
			g.KeyZ,
			"KeyZ",
			f.KeyZ,
			"Z",
			90,
			"VK_Z",
			"",
			""
		],
		[
			0,
			g.Digit1,
			"Digit1",
			f.Digit1,
			"1",
			49,
			"VK_1",
			"",
			""
		],
		[
			0,
			g.Digit2,
			"Digit2",
			f.Digit2,
			"2",
			50,
			"VK_2",
			"",
			""
		],
		[
			0,
			g.Digit3,
			"Digit3",
			f.Digit3,
			"3",
			51,
			"VK_3",
			"",
			""
		],
		[
			0,
			g.Digit4,
			"Digit4",
			f.Digit4,
			"4",
			52,
			"VK_4",
			"",
			""
		],
		[
			0,
			g.Digit5,
			"Digit5",
			f.Digit5,
			"5",
			53,
			"VK_5",
			"",
			""
		],
		[
			0,
			g.Digit6,
			"Digit6",
			f.Digit6,
			"6",
			54,
			"VK_6",
			"",
			""
		],
		[
			0,
			g.Digit7,
			"Digit7",
			f.Digit7,
			"7",
			55,
			"VK_7",
			"",
			""
		],
		[
			0,
			g.Digit8,
			"Digit8",
			f.Digit8,
			"8",
			56,
			"VK_8",
			"",
			""
		],
		[
			0,
			g.Digit9,
			"Digit9",
			f.Digit9,
			"9",
			57,
			"VK_9",
			"",
			""
		],
		[
			0,
			g.Digit0,
			"Digit0",
			f.Digit0,
			"0",
			48,
			"VK_0",
			"",
			""
		],
		[
			1,
			g.Enter,
			"Enter",
			f.Enter,
			"Enter",
			13,
			"VK_RETURN",
			"",
			""
		],
		[
			1,
			g.Escape,
			"Escape",
			f.Escape,
			"Escape",
			27,
			"VK_ESCAPE",
			"",
			""
		],
		[
			1,
			g.Backspace,
			"Backspace",
			f.Backspace,
			"Backspace",
			8,
			"VK_BACK",
			"",
			""
		],
		[
			1,
			g.Tab,
			"Tab",
			f.Tab,
			"Tab",
			9,
			"VK_TAB",
			"",
			""
		],
		[
			1,
			g.Space,
			"Space",
			f.Space,
			"Space",
			32,
			"VK_SPACE",
			"",
			""
		],
		[
			0,
			g.Minus,
			"Minus",
			f.Minus,
			"-",
			189,
			"VK_OEM_MINUS",
			"-",
			"OEM_MINUS"
		],
		[
			0,
			g.Equal,
			"Equal",
			f.Equal,
			"=",
			187,
			"VK_OEM_PLUS",
			"=",
			"OEM_PLUS"
		],
		[
			0,
			g.BracketLeft,
			"BracketLeft",
			f.BracketLeft,
			"[",
			219,
			"VK_OEM_4",
			"[",
			"OEM_4"
		],
		[
			0,
			g.BracketRight,
			"BracketRight",
			f.BracketRight,
			"]",
			221,
			"VK_OEM_6",
			"]",
			"OEM_6"
		],
		[
			0,
			g.Backslash,
			"Backslash",
			f.Backslash,
			"\\",
			220,
			"VK_OEM_5",
			"\\",
			"OEM_5"
		],
		[
			0,
			g.IntlHash,
			"IntlHash",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			0,
			g.Semicolon,
			"Semicolon",
			f.Semicolon,
			";",
			186,
			"VK_OEM_1",
			";",
			"OEM_1"
		],
		[
			0,
			g.Quote,
			"Quote",
			f.Quote,
			"'",
			222,
			"VK_OEM_7",
			"'",
			"OEM_7"
		],
		[
			0,
			g.Backquote,
			"Backquote",
			f.Backquote,
			"`",
			192,
			"VK_OEM_3",
			"`",
			"OEM_3"
		],
		[
			0,
			g.Comma,
			"Comma",
			f.Comma,
			",",
			188,
			"VK_OEM_COMMA",
			",",
			"OEM_COMMA"
		],
		[
			0,
			g.Period,
			"Period",
			f.Period,
			".",
			190,
			"VK_OEM_PERIOD",
			".",
			"OEM_PERIOD"
		],
		[
			0,
			g.Slash,
			"Slash",
			f.Slash,
			"/",
			191,
			"VK_OEM_2",
			"/",
			"OEM_2"
		],
		[
			1,
			g.CapsLock,
			"CapsLock",
			f.CapsLock,
			"CapsLock",
			20,
			"VK_CAPITAL",
			"",
			""
		],
		[
			1,
			g.F1,
			"F1",
			f.F1,
			"F1",
			112,
			"VK_F1",
			"",
			""
		],
		[
			1,
			g.F2,
			"F2",
			f.F2,
			"F2",
			113,
			"VK_F2",
			"",
			""
		],
		[
			1,
			g.F3,
			"F3",
			f.F3,
			"F3",
			114,
			"VK_F3",
			"",
			""
		],
		[
			1,
			g.F4,
			"F4",
			f.F4,
			"F4",
			115,
			"VK_F4",
			"",
			""
		],
		[
			1,
			g.F5,
			"F5",
			f.F5,
			"F5",
			116,
			"VK_F5",
			"",
			""
		],
		[
			1,
			g.F6,
			"F6",
			f.F6,
			"F6",
			117,
			"VK_F6",
			"",
			""
		],
		[
			1,
			g.F7,
			"F7",
			f.F7,
			"F7",
			118,
			"VK_F7",
			"",
			""
		],
		[
			1,
			g.F8,
			"F8",
			f.F8,
			"F8",
			119,
			"VK_F8",
			"",
			""
		],
		[
			1,
			g.F9,
			"F9",
			f.F9,
			"F9",
			120,
			"VK_F9",
			"",
			""
		],
		[
			1,
			g.F10,
			"F10",
			f.F10,
			"F10",
			121,
			"VK_F10",
			"",
			""
		],
		[
			1,
			g.F11,
			"F11",
			f.F11,
			"F11",
			122,
			"VK_F11",
			"",
			""
		],
		[
			1,
			g.F12,
			"F12",
			f.F12,
			"F12",
			123,
			"VK_F12",
			"",
			""
		],
		[
			1,
			g.PrintScreen,
			"PrintScreen",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.ScrollLock,
			"ScrollLock",
			f.ScrollLock,
			"ScrollLock",
			145,
			"VK_SCROLL",
			"",
			""
		],
		[
			1,
			g.Pause,
			"Pause",
			f.PauseBreak,
			"PauseBreak",
			19,
			"VK_PAUSE",
			"",
			""
		],
		[
			1,
			g.Insert,
			"Insert",
			f.Insert,
			"Insert",
			45,
			"VK_INSERT",
			"",
			""
		],
		[
			1,
			g.Home,
			"Home",
			f.Home,
			"Home",
			36,
			"VK_HOME",
			"",
			""
		],
		[
			1,
			g.PageUp,
			"PageUp",
			f.PageUp,
			"PageUp",
			33,
			"VK_PRIOR",
			"",
			""
		],
		[
			1,
			g.Delete,
			"Delete",
			f.Delete,
			"Delete",
			46,
			"VK_DELETE",
			"",
			""
		],
		[
			1,
			g.End,
			"End",
			f.End,
			"End",
			35,
			"VK_END",
			"",
			""
		],
		[
			1,
			g.PageDown,
			"PageDown",
			f.PageDown,
			"PageDown",
			34,
			"VK_NEXT",
			"",
			""
		],
		[
			1,
			g.ArrowRight,
			"ArrowRight",
			f.RightArrow,
			"RightArrow",
			39,
			"VK_RIGHT",
			"Right",
			""
		],
		[
			1,
			g.ArrowLeft,
			"ArrowLeft",
			f.LeftArrow,
			"LeftArrow",
			37,
			"VK_LEFT",
			"Left",
			""
		],
		[
			1,
			g.ArrowDown,
			"ArrowDown",
			f.DownArrow,
			"DownArrow",
			40,
			"VK_DOWN",
			"Down",
			""
		],
		[
			1,
			g.ArrowUp,
			"ArrowUp",
			f.UpArrow,
			"UpArrow",
			38,
			"VK_UP",
			"Up",
			""
		],
		[
			1,
			g.NumLock,
			"NumLock",
			f.NumLock,
			"NumLock",
			144,
			"VK_NUMLOCK",
			"",
			""
		],
		[
			1,
			g.NumpadDivide,
			"NumpadDivide",
			f.NumpadDivide,
			"NumPad_Divide",
			111,
			"VK_DIVIDE",
			"",
			""
		],
		[
			1,
			g.NumpadMultiply,
			"NumpadMultiply",
			f.NumpadMultiply,
			"NumPad_Multiply",
			106,
			"VK_MULTIPLY",
			"",
			""
		],
		[
			1,
			g.NumpadSubtract,
			"NumpadSubtract",
			f.NumpadSubtract,
			"NumPad_Subtract",
			109,
			"VK_SUBTRACT",
			"",
			""
		],
		[
			1,
			g.NumpadAdd,
			"NumpadAdd",
			f.NumpadAdd,
			"NumPad_Add",
			107,
			"VK_ADD",
			"",
			""
		],
		[
			1,
			g.NumpadEnter,
			"NumpadEnter",
			f.Enter,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Numpad1,
			"Numpad1",
			f.Numpad1,
			"NumPad1",
			97,
			"VK_NUMPAD1",
			"",
			""
		],
		[
			1,
			g.Numpad2,
			"Numpad2",
			f.Numpad2,
			"NumPad2",
			98,
			"VK_NUMPAD2",
			"",
			""
		],
		[
			1,
			g.Numpad3,
			"Numpad3",
			f.Numpad3,
			"NumPad3",
			99,
			"VK_NUMPAD3",
			"",
			""
		],
		[
			1,
			g.Numpad4,
			"Numpad4",
			f.Numpad4,
			"NumPad4",
			100,
			"VK_NUMPAD4",
			"",
			""
		],
		[
			1,
			g.Numpad5,
			"Numpad5",
			f.Numpad5,
			"NumPad5",
			101,
			"VK_NUMPAD5",
			"",
			""
		],
		[
			1,
			g.Numpad6,
			"Numpad6",
			f.Numpad6,
			"NumPad6",
			102,
			"VK_NUMPAD6",
			"",
			""
		],
		[
			1,
			g.Numpad7,
			"Numpad7",
			f.Numpad7,
			"NumPad7",
			103,
			"VK_NUMPAD7",
			"",
			""
		],
		[
			1,
			g.Numpad8,
			"Numpad8",
			f.Numpad8,
			"NumPad8",
			104,
			"VK_NUMPAD8",
			"",
			""
		],
		[
			1,
			g.Numpad9,
			"Numpad9",
			f.Numpad9,
			"NumPad9",
			105,
			"VK_NUMPAD9",
			"",
			""
		],
		[
			1,
			g.Numpad0,
			"Numpad0",
			f.Numpad0,
			"NumPad0",
			96,
			"VK_NUMPAD0",
			"",
			""
		],
		[
			1,
			g.NumpadDecimal,
			"NumpadDecimal",
			f.NumpadDecimal,
			"NumPad_Decimal",
			110,
			"VK_DECIMAL",
			"",
			""
		],
		[
			0,
			g.IntlBackslash,
			"IntlBackslash",
			f.IntlBackslash,
			"OEM_102",
			226,
			"VK_OEM_102",
			"",
			""
		],
		[
			1,
			g.ContextMenu,
			"ContextMenu",
			f.ContextMenu,
			"ContextMenu",
			93,
			"",
			"",
			""
		],
		[
			1,
			g.Power,
			"Power",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadEqual,
			"NumpadEqual",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.F13,
			"F13",
			f.F13,
			"F13",
			124,
			"VK_F13",
			"",
			""
		],
		[
			1,
			g.F14,
			"F14",
			f.F14,
			"F14",
			125,
			"VK_F14",
			"",
			""
		],
		[
			1,
			g.F15,
			"F15",
			f.F15,
			"F15",
			126,
			"VK_F15",
			"",
			""
		],
		[
			1,
			g.F16,
			"F16",
			f.F16,
			"F16",
			127,
			"VK_F16",
			"",
			""
		],
		[
			1,
			g.F17,
			"F17",
			f.F17,
			"F17",
			128,
			"VK_F17",
			"",
			""
		],
		[
			1,
			g.F18,
			"F18",
			f.F18,
			"F18",
			129,
			"VK_F18",
			"",
			""
		],
		[
			1,
			g.F19,
			"F19",
			f.F19,
			"F19",
			130,
			"VK_F19",
			"",
			""
		],
		[
			1,
			g.F20,
			"F20",
			f.F20,
			"F20",
			131,
			"VK_F20",
			"",
			""
		],
		[
			1,
			g.F21,
			"F21",
			f.F21,
			"F21",
			132,
			"VK_F21",
			"",
			""
		],
		[
			1,
			g.F22,
			"F22",
			f.F22,
			"F22",
			133,
			"VK_F22",
			"",
			""
		],
		[
			1,
			g.F23,
			"F23",
			f.F23,
			"F23",
			134,
			"VK_F23",
			"",
			""
		],
		[
			1,
			g.F24,
			"F24",
			f.F24,
			"F24",
			135,
			"VK_F24",
			"",
			""
		],
		[
			1,
			g.Open,
			"Open",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Help,
			"Help",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Select,
			"Select",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Again,
			"Again",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Undo,
			"Undo",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Cut,
			"Cut",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Copy,
			"Copy",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Paste,
			"Paste",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Find,
			"Find",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.AudioVolumeMute,
			"AudioVolumeMute",
			f.AudioVolumeMute,
			"AudioVolumeMute",
			173,
			"VK_VOLUME_MUTE",
			"",
			""
		],
		[
			1,
			g.AudioVolumeUp,
			"AudioVolumeUp",
			f.AudioVolumeUp,
			"AudioVolumeUp",
			175,
			"VK_VOLUME_UP",
			"",
			""
		],
		[
			1,
			g.AudioVolumeDown,
			"AudioVolumeDown",
			f.AudioVolumeDown,
			"AudioVolumeDown",
			174,
			"VK_VOLUME_DOWN",
			"",
			""
		],
		[
			1,
			g.NumpadComma,
			"NumpadComma",
			f.NUMPAD_SEPARATOR,
			"NumPad_Separator",
			108,
			"VK_SEPARATOR",
			"",
			""
		],
		[
			0,
			g.IntlRo,
			"IntlRo",
			f.ABNT_C1,
			"ABNT_C1",
			193,
			"VK_ABNT_C1",
			"",
			""
		],
		[
			1,
			g.KanaMode,
			"KanaMode",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			0,
			g.IntlYen,
			"IntlYen",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Convert,
			"Convert",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NonConvert,
			"NonConvert",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Lang1,
			"Lang1",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Lang2,
			"Lang2",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Lang3,
			"Lang3",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Lang4,
			"Lang4",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Lang5,
			"Lang5",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Abort,
			"Abort",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.Props,
			"Props",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadParenLeft,
			"NumpadParenLeft",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadParenRight,
			"NumpadParenRight",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadBackspace,
			"NumpadBackspace",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadMemoryStore,
			"NumpadMemoryStore",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadMemoryRecall,
			"NumpadMemoryRecall",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadMemoryClear,
			"NumpadMemoryClear",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadMemoryAdd,
			"NumpadMemoryAdd",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadMemorySubtract,
			"NumpadMemorySubtract",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.NumpadClear,
			"NumpadClear",
			f.Clear,
			"Clear",
			12,
			"VK_CLEAR",
			"",
			""
		],
		[
			1,
			g.NumpadClearEntry,
			"NumpadClearEntry",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Ctrl,
			"Ctrl",
			17,
			"VK_CONTROL",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Shift,
			"Shift",
			16,
			"VK_SHIFT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Alt,
			"Alt",
			18,
			"VK_MENU",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Meta,
			"Meta",
			91,
			"VK_COMMAND",
			"",
			""
		],
		[
			1,
			g.ControlLeft,
			"ControlLeft",
			f.Ctrl,
			"",
			0,
			"VK_LCONTROL",
			"",
			""
		],
		[
			1,
			g.ShiftLeft,
			"ShiftLeft",
			f.Shift,
			"",
			0,
			"VK_LSHIFT",
			"",
			""
		],
		[
			1,
			g.AltLeft,
			"AltLeft",
			f.Alt,
			"",
			0,
			"VK_LMENU",
			"",
			""
		],
		[
			1,
			g.MetaLeft,
			"MetaLeft",
			f.Meta,
			"",
			0,
			"VK_LWIN",
			"",
			""
		],
		[
			1,
			g.ControlRight,
			"ControlRight",
			f.Ctrl,
			"",
			0,
			"VK_RCONTROL",
			"",
			""
		],
		[
			1,
			g.ShiftRight,
			"ShiftRight",
			f.Shift,
			"",
			0,
			"VK_RSHIFT",
			"",
			""
		],
		[
			1,
			g.AltRight,
			"AltRight",
			f.Alt,
			"",
			0,
			"VK_RMENU",
			"",
			""
		],
		[
			1,
			g.MetaRight,
			"MetaRight",
			f.Meta,
			"",
			0,
			"VK_RWIN",
			"",
			""
		],
		[
			1,
			g.BrightnessUp,
			"BrightnessUp",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.BrightnessDown,
			"BrightnessDown",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MediaPlay,
			"MediaPlay",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MediaRecord,
			"MediaRecord",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MediaFastForward,
			"MediaFastForward",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MediaRewind,
			"MediaRewind",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MediaTrackNext,
			"MediaTrackNext",
			f.MediaTrackNext,
			"MediaTrackNext",
			176,
			"VK_MEDIA_NEXT_TRACK",
			"",
			""
		],
		[
			1,
			g.MediaTrackPrevious,
			"MediaTrackPrevious",
			f.MediaTrackPrevious,
			"MediaTrackPrevious",
			177,
			"VK_MEDIA_PREV_TRACK",
			"",
			""
		],
		[
			1,
			g.MediaStop,
			"MediaStop",
			f.MediaStop,
			"MediaStop",
			178,
			"VK_MEDIA_STOP",
			"",
			""
		],
		[
			1,
			g.Eject,
			"Eject",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MediaPlayPause,
			"MediaPlayPause",
			f.MediaPlayPause,
			"MediaPlayPause",
			179,
			"VK_MEDIA_PLAY_PAUSE",
			"",
			""
		],
		[
			1,
			g.MediaSelect,
			"MediaSelect",
			f.LaunchMediaPlayer,
			"LaunchMediaPlayer",
			181,
			"VK_MEDIA_LAUNCH_MEDIA_SELECT",
			"",
			""
		],
		[
			1,
			g.LaunchMail,
			"LaunchMail",
			f.LaunchMail,
			"LaunchMail",
			180,
			"VK_MEDIA_LAUNCH_MAIL",
			"",
			""
		],
		[
			1,
			g.LaunchApp2,
			"LaunchApp2",
			f.LaunchApp2,
			"LaunchApp2",
			183,
			"VK_MEDIA_LAUNCH_APP2",
			"",
			""
		],
		[
			1,
			g.LaunchApp1,
			"LaunchApp1",
			f.Unknown,
			"",
			0,
			"VK_MEDIA_LAUNCH_APP1",
			"",
			""
		],
		[
			1,
			g.SelectTask,
			"SelectTask",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.LaunchScreenSaver,
			"LaunchScreenSaver",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.BrowserSearch,
			"BrowserSearch",
			f.BrowserSearch,
			"BrowserSearch",
			170,
			"VK_BROWSER_SEARCH",
			"",
			""
		],
		[
			1,
			g.BrowserHome,
			"BrowserHome",
			f.BrowserHome,
			"BrowserHome",
			172,
			"VK_BROWSER_HOME",
			"",
			""
		],
		[
			1,
			g.BrowserBack,
			"BrowserBack",
			f.BrowserBack,
			"BrowserBack",
			166,
			"VK_BROWSER_BACK",
			"",
			""
		],
		[
			1,
			g.BrowserForward,
			"BrowserForward",
			f.BrowserForward,
			"BrowserForward",
			167,
			"VK_BROWSER_FORWARD",
			"",
			""
		],
		[
			1,
			g.BrowserStop,
			"BrowserStop",
			f.Unknown,
			"",
			0,
			"VK_BROWSER_STOP",
			"",
			""
		],
		[
			1,
			g.BrowserRefresh,
			"BrowserRefresh",
			f.Unknown,
			"",
			0,
			"VK_BROWSER_REFRESH",
			"",
			""
		],
		[
			1,
			g.BrowserFavorites,
			"BrowserFavorites",
			f.Unknown,
			"",
			0,
			"VK_BROWSER_FAVORITES",
			"",
			""
		],
		[
			1,
			g.ZoomToggle,
			"ZoomToggle",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MailReply,
			"MailReply",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MailForward,
			"MailForward",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.MailSend,
			"MailSend",
			f.Unknown,
			"",
			0,
			"",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.KEY_IN_COMPOSITION,
			"KeyInComposition",
			229,
			"",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.ABNT_C2,
			"ABNT_C2",
			194,
			"VK_ABNT_C2",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.OEM_8,
			"OEM_8",
			223,
			"VK_OEM_8",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_KANA",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_HANGUL",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_JUNJA",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_FINAL",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_HANJA",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_KANJI",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_CONVERT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_NONCONVERT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_ACCEPT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_MODECHANGE",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_SELECT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_PRINT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_EXECUTE",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_SNAPSHOT",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_HELP",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_APPS",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_PROCESSKEY",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_PACKET",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_DBE_SBCSCHAR",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_DBE_DBCSCHAR",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_ATTN",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_CRSEL",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_EXSEL",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_EREOF",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_PLAY",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_ZOOM",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_NONAME",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_PA1",
			"",
			""
		],
		[
			1,
			g.None,
			"",
			f.Unknown,
			"",
			0,
			"VK_OEM_CLEAR",
			"",
			""
		]
	], n = [], r = [];
	for (const i of t) {
		const [s, a, o, u, c, m, h, p, _] = i;
		if (r[a] || (r[a] = !0, so[a] = o, ao[o] = a, lo[o.toLowerCase()] = a, s && (q1[a] = u, u !== f.Unknown && u !== f.Enter && !uo(u) && (gr[u] = a))), !n[u]) {
			if (n[u] = !0, !c) throw new Error(`String representation missing for key code ${u} around scan code ${o}`);
			dn.define(u, c), mr.define(u, p || c), fr.define(u, _ || p || c);
		}
		m && (ro[m] = u), h && (io[h] = u);
	}
	gr[f.Enter] = g.Enter;
})();
var ri;
(function(e) {
	function t(o) {
		return dn.keyCodeToStr(o);
	}
	e.toString = t;
	function n(o) {
		return dn.strToKeyCode(o);
	}
	e.fromString = n;
	function r(o) {
		return mr.keyCodeToStr(o);
	}
	e.toUserSettingsUS = r;
	function i(o) {
		return fr.keyCodeToStr(o);
	}
	e.toUserSettingsGeneral = i;
	function s(o) {
		return mr.strToKeyCode(o) || fr.strToKeyCode(o);
	}
	e.fromUserSettings = s;
	function a(o) {
		if (o >= f.Numpad0 && o <= f.NumpadDivide) return null;
		switch (o) {
			case f.UpArrow: return "Up";
			case f.DownArrow: return "Down";
			case f.LeftArrow: return "Left";
			case f.RightArrow: return "Right";
		}
		return dn.keyCodeToStr(o);
	}
	e.toElectronAccelerator = a;
})(ri || (ri = {}));
var Nt;
(function(e) {
	e[e.CtrlCmd = 2048] = "CtrlCmd", e[e.Shift = 1024] = "Shift", e[e.Alt = 512] = "Alt", e[e.WinCtrl = 256] = "WinCtrl";
})(Nt || (Nt = {}));
function oo(e, t) {
	return (e | (t & 65535) << 16 >>> 0) >>> 0;
}
function uo(e) {
	return e === f.Ctrl || e === f.Shift || e === f.Alt || e === f.Meta;
}
var _r;
(function(e) {
	e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelThinkingPart = 22] = "LanguageModelThinkingPart", e[e.LanguageModelPromptTsxPart = 23] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 24] = "LanguageModelDataPart", e[e.AgentSessionContext = 25] = "AgentSessionContext", e[e.ChatResponsePullRequestPart = 26] = "ChatResponsePullRequestPart";
})(_r || (_r = {}));
let ut;
const Xn = globalThis.vscode;
if (typeof Xn < "u" && typeof Xn.process < "u") {
	const e = Xn.process;
	ut = {
		get platform() {
			return e.platform;
		},
		get arch() {
			return e.arch;
		},
		get env() {
			return e.env;
		},
		cwd() {
			return e.cwd();
		}
	};
} else typeof process < "u" && typeof process?.versions?.node == "string" ? ut = {
	get platform() {
		return process.platform;
	},
	get arch() {
		return process.arch;
	},
	get env() {
		return {};
	},
	cwd() {
		return {}.VSCODE_CWD || process.cwd();
	}
} : ut = {
	get platform() {
		return Mt ? "win32" : sl ? "darwin" : "linux";
	},
	get arch() {},
	get env() {
		return {};
	},
	cwd() {
		return "/";
	}
};
const Un = ut.cwd, co = ut.env, ho = ut.platform;
ut.arch;
const mo = 65, fo = 97, go = 90, _o = 122, ct = 46, oe = 47, ge = 92, Fe = 58, po = 63;
var W1 = class extends Error {
	constructor(e, t, n) {
		let r;
		typeof t == "string" && t.indexOf("not ") === 0 ? (r = "must not be", t = t.replace(/^not /, "")) : r = "must be";
		let i = `The "${e}" ${e.indexOf(".") !== -1 ? "property" : "argument"} ${r} of type ${t}`;
		i += `. Received type ${typeof n}`, super(i), this.code = "ERR_INVALID_ARG_TYPE";
	}
};
function bo(e, t) {
	if (e === null || typeof e != "object") throw new W1(t, "Object", e);
}
function ae(e, t) {
	if (typeof e != "string") throw new W1(t, "string", e);
}
const De = ho === "win32";
function j(e) {
	return e === oe || e === ge;
}
function pr(e) {
	return e === oe;
}
function Pe(e) {
	return e >= mo && e <= go || e >= fo && e <= _o;
}
function Dn(e, t, n, r) {
	let i = "", s = 0, a = -1, o = 0, u = 0;
	for (let c = 0; c <= e.length; ++c) {
		if (c < e.length) u = e.charCodeAt(c);
		else {
			if (r(u)) break;
			u = oe;
		}
		if (r(u)) {
			if (!(a === c - 1 || o === 1)) if (o === 2) {
				if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== ct || i.charCodeAt(i.length - 2) !== ct) {
					if (i.length > 2) {
						const m = i.lastIndexOf(n);
						m === -1 ? (i = "", s = 0) : (i = i.slice(0, m), s = i.length - 1 - i.lastIndexOf(n)), a = c, o = 0;
						continue;
					} else if (i.length !== 0) {
						i = "", s = 0, a = c, o = 0;
						continue;
					}
				}
				t && (i += i.length > 0 ? `${n}..` : "..", s = 2);
			} else i.length > 0 ? i += `${n}${e.slice(a + 1, c)}` : i = e.slice(a + 1, c), s = c - a - 1;
			a = c, o = 0;
		} else u === ct && o !== -1 ? ++o : o = -1;
	}
	return i;
}
function wo(e) {
	return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function $1(e, t) {
	bo(t, "pathObject");
	const n = t.dir || t.root, r = t.base || `${t.name || ""}${wo(t.ext)}`;
	return n ? n === t.root ? `${n}${r}` : `${n}${e}${r}` : r;
}
const ce = {
	resolve(...e) {
		let t = "", n = "", r = !1;
		for (let i = e.length - 1; i >= -1; i--) {
			let s;
			if (i >= 0) {
				if (s = e[i], ae(s, `paths[${i}]`), s.length === 0) continue;
			} else t.length === 0 ? s = Un() : (s = co[`=${t}`] || Un(), (s === void 0 || s.slice(0, 2).toLowerCase() !== t.toLowerCase() && s.charCodeAt(2) === ge) && (s = `${t}\\`));
			const a = s.length;
			let o = 0, u = "", c = !1;
			const m = s.charCodeAt(0);
			if (a === 1) j(m) && (o = 1, c = !0);
			else if (j(m)) if (c = !0, j(s.charCodeAt(1))) {
				let h = 2, p = h;
				for (; h < a && !j(s.charCodeAt(h));) h++;
				if (h < a && h !== p) {
					const _ = s.slice(p, h);
					for (p = h; h < a && j(s.charCodeAt(h));) h++;
					if (h < a && h !== p) {
						for (p = h; h < a && !j(s.charCodeAt(h));) h++;
						(h === a || h !== p) && (u = `\\\\${_}\\${s.slice(p, h)}`, o = h);
					}
				}
			} else o = 1;
			else Pe(m) && s.charCodeAt(1) === Fe && (u = s.slice(0, 2), o = 2, a > 2 && j(s.charCodeAt(2)) && (c = !0, o = 3));
			if (u.length > 0) if (t.length > 0) {
				if (u.toLowerCase() !== t.toLowerCase()) continue;
			} else t = u;
			if (r) {
				if (t.length > 0) break;
			} else if (n = `${s.slice(o)}\\${n}`, r = c, c && t.length > 0) break;
		}
		return n = Dn(n, !r, "\\", j), r ? `${t}\\${n}` : `${t}${n}` || ".";
	},
	normalize(e) {
		ae(e, "path");
		const t = e.length;
		if (t === 0) return ".";
		let n = 0, r, i = !1;
		const s = e.charCodeAt(0);
		if (t === 1) return pr(s) ? "\\" : e;
		if (j(s)) if (i = !0, j(e.charCodeAt(1))) {
			let o = 2, u = o;
			for (; o < t && !j(e.charCodeAt(o));) o++;
			if (o < t && o !== u) {
				const c = e.slice(u, o);
				for (u = o; o < t && j(e.charCodeAt(o));) o++;
				if (o < t && o !== u) {
					for (u = o; o < t && !j(e.charCodeAt(o));) o++;
					if (o === t) return `\\\\${c}\\${e.slice(u)}\\`;
					o !== u && (r = `\\\\${c}\\${e.slice(u, o)}`, n = o);
				}
			}
		} else n = 1;
		else Pe(s) && e.charCodeAt(1) === Fe && (r = e.slice(0, 2), n = 2, t > 2 && j(e.charCodeAt(2)) && (i = !0, n = 3));
		let a = n < t ? Dn(e.slice(n), !i, "\\", j) : "";
		if (a.length === 0 && !i && (a = "."), a.length > 0 && j(e.charCodeAt(t - 1)) && (a += "\\"), !i && r === void 0 && e.includes(":")) {
			if (a.length >= 2 && Pe(a.charCodeAt(0)) && a.charCodeAt(1) === Fe) return `.\\${a}`;
			let o = e.indexOf(":");
			do
				if (o === t - 1 || j(e.charCodeAt(o + 1))) return `.\\${a}`;
			while ((o = e.indexOf(":", o + 1)) !== -1);
		}
		return r === void 0 ? i ? `\\${a}` : a : i ? `${r}\\${a}` : `${r}${a}`;
	},
	isAbsolute(e) {
		ae(e, "path");
		const t = e.length;
		if (t === 0) return !1;
		const n = e.charCodeAt(0);
		return j(n) || t > 2 && Pe(n) && e.charCodeAt(1) === Fe && j(e.charCodeAt(2));
	},
	join(...e) {
		if (e.length === 0) return ".";
		let t, n;
		for (let s = 0; s < e.length; ++s) {
			const a = e[s];
			ae(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
		}
		if (t === void 0) return ".";
		let r = !0, i = 0;
		if (typeof n == "string" && j(n.charCodeAt(0))) {
			++i;
			const s = n.length;
			s > 1 && j(n.charCodeAt(1)) && (++i, s > 2 && (j(n.charCodeAt(2)) ? ++i : r = !1));
		}
		if (r) {
			for (; i < t.length && j(t.charCodeAt(i));) i++;
			i >= 2 && (t = `\\${t.slice(i)}`);
		}
		return ce.normalize(t);
	},
	relative(e, t) {
		if (ae(e, "from"), ae(t, "to"), e === t) return "";
		const n = ce.resolve(e), r = ce.resolve(t);
		if (n === r || (e = n.toLowerCase(), t = r.toLowerCase(), e === t)) return "";
		if (n.length !== e.length || r.length !== t.length) {
			const d = n.split("\\"), b = r.split("\\");
			d[d.length - 1] === "" && d.pop(), b[b.length - 1] === "" && b.pop();
			const A = d.length, R = b.length, E = A < R ? A : R;
			let y;
			for (y = 0; y < E && d[y].toLowerCase() === b[y].toLowerCase(); y++);
			return y === 0 ? r : y === E ? R > E ? b.slice(y).join("\\") : A > E ? "..\\".repeat(A - 1 - y) + ".." : "" : "..\\".repeat(A - y) + b.slice(y).join("\\");
		}
		let i = 0;
		for (; i < e.length && e.charCodeAt(i) === ge;) i++;
		let s = e.length;
		for (; s - 1 > i && e.charCodeAt(s - 1) === ge;) s--;
		const a = s - i;
		let o = 0;
		for (; o < t.length && t.charCodeAt(o) === ge;) o++;
		let u = t.length;
		for (; u - 1 > o && t.charCodeAt(u - 1) === ge;) u--;
		const c = u - o, m = a < c ? a : c;
		let h = -1, p = 0;
		for (; p < m; p++) {
			const d = e.charCodeAt(i + p);
			if (d !== t.charCodeAt(o + p)) break;
			d === ge && (h = p);
		}
		if (p !== m) {
			if (h === -1) return r;
		} else {
			if (c > m) {
				if (t.charCodeAt(o + p) === ge) return r.slice(o + p + 1);
				if (p === 2) return r.slice(o + p);
			}
			a > m && (e.charCodeAt(i + p) === ge ? h = p : p === 2 && (h = 3)), h === -1 && (h = 0);
		}
		let _ = "";
		for (p = i + h + 1; p <= s; ++p) (p === s || e.charCodeAt(p) === ge) && (_ += _.length === 0 ? ".." : "\\..");
		return o += h, _.length > 0 ? `${_}${r.slice(o, u)}` : (r.charCodeAt(o) === ge && ++o, r.slice(o, u));
	},
	toNamespacedPath(e) {
		if (typeof e != "string" || e.length === 0) return e;
		const t = ce.resolve(e);
		if (t.length <= 2) return e;
		if (t.charCodeAt(0) === ge) {
			if (t.charCodeAt(1) === ge) {
				const n = t.charCodeAt(2);
				if (n !== po && n !== ct) return `\\\\?\\UNC\\${t.slice(2)}`;
			}
		} else if (Pe(t.charCodeAt(0)) && t.charCodeAt(1) === Fe && t.charCodeAt(2) === ge) return `\\\\?\\${t}`;
		return t;
	},
	dirname(e) {
		ae(e, "path");
		const t = e.length;
		if (t === 0) return ".";
		let n = -1, r = 0;
		const i = e.charCodeAt(0);
		if (t === 1) return j(i) ? e : ".";
		if (j(i)) {
			if (n = r = 1, j(e.charCodeAt(1))) {
				let o = 2, u = o;
				for (; o < t && !j(e.charCodeAt(o));) o++;
				if (o < t && o !== u) {
					for (u = o; o < t && j(e.charCodeAt(o));) o++;
					if (o < t && o !== u) {
						for (u = o; o < t && !j(e.charCodeAt(o));) o++;
						if (o === t) return e;
						o !== u && (n = r = o + 1);
					}
				}
			}
		} else Pe(i) && e.charCodeAt(1) === Fe && (n = t > 2 && j(e.charCodeAt(2)) ? 3 : 2, r = n);
		let s = -1, a = !0;
		for (let o = t - 1; o >= r; --o) if (j(e.charCodeAt(o))) {
			if (!a) {
				s = o;
				break;
			}
		} else a = !1;
		if (s === -1) {
			if (n === -1) return ".";
			s = n;
		}
		return e.slice(0, s);
	},
	basename(e, t) {
		t !== void 0 && ae(t, "suffix"), ae(e, "path");
		let n = 0, r = -1, i = !0, s;
		if (e.length >= 2 && Pe(e.charCodeAt(0)) && e.charCodeAt(1) === Fe && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
			if (t === e) return "";
			let a = t.length - 1, o = -1;
			for (s = e.length - 1; s >= n; --s) {
				const u = e.charCodeAt(s);
				if (j(u)) {
					if (!i) {
						n = s + 1;
						break;
					}
				} else o === -1 && (i = !1, o = s + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1, r = o));
			}
			return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
		}
		for (s = e.length - 1; s >= n; --s) if (j(e.charCodeAt(s))) {
			if (!i) {
				n = s + 1;
				break;
			}
		} else r === -1 && (i = !1, r = s + 1);
		return r === -1 ? "" : e.slice(n, r);
	},
	extname(e) {
		ae(e, "path");
		let t = 0, n = -1, r = 0, i = -1, s = !0, a = 0;
		e.length >= 2 && e.charCodeAt(1) === Fe && Pe(e.charCodeAt(0)) && (t = r = 2);
		for (let o = e.length - 1; o >= t; --o) {
			const u = e.charCodeAt(o);
			if (j(u)) {
				if (!s) {
					r = o + 1;
					break;
				}
				continue;
			}
			i === -1 && (s = !1, i = o + 1), u === ct ? n === -1 ? n = o : a !== 1 && (a = 1) : n !== -1 && (a = -1);
		}
		return n === -1 || i === -1 || a === 0 || a === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
	},
	format: $1.bind(null, "\\"),
	parse(e) {
		ae(e, "path");
		const t = {
			root: "",
			dir: "",
			base: "",
			ext: "",
			name: ""
		};
		if (e.length === 0) return t;
		const n = e.length;
		let r = 0, i = e.charCodeAt(0);
		if (n === 1) return j(i) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
		if (j(i)) {
			if (r = 1, j(e.charCodeAt(1))) {
				let h = 2, p = h;
				for (; h < n && !j(e.charCodeAt(h));) h++;
				if (h < n && h !== p) {
					for (p = h; h < n && j(e.charCodeAt(h));) h++;
					if (h < n && h !== p) {
						for (p = h; h < n && !j(e.charCodeAt(h));) h++;
						h === n ? r = h : h !== p && (r = h + 1);
					}
				}
			}
		} else if (Pe(i) && e.charCodeAt(1) === Fe) {
			if (n <= 2) return t.root = t.dir = e, t;
			if (r = 2, j(e.charCodeAt(2))) {
				if (n === 3) return t.root = t.dir = e, t;
				r = 3;
			}
		}
		r > 0 && (t.root = e.slice(0, r));
		let s = -1, a = r, o = -1, u = !0, c = e.length - 1, m = 0;
		for (; c >= r; --c) {
			if (i = e.charCodeAt(c), j(i)) {
				if (!u) {
					a = c + 1;
					break;
				}
				continue;
			}
			o === -1 && (u = !1, o = c + 1), i === ct ? s === -1 ? s = c : m !== 1 && (m = 1) : s !== -1 && (m = -1);
		}
		return o !== -1 && (s === -1 || m === 0 || m === 1 && s === o - 1 && s === a + 1 ? t.base = t.name = e.slice(a, o) : (t.name = e.slice(a, s), t.base = e.slice(a, o), t.ext = e.slice(s, o))), a > 0 && a !== r ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
	},
	sep: "\\",
	delimiter: ";",
	win32: null,
	posix: null
}, Lo = (() => {
	if (De) {
		const e = /\\/g;
		return () => {
			const t = Un().replace(e, "/");
			return t.slice(t.indexOf("/"));
		};
	}
	return () => Un();
})(), te = {
	resolve(...e) {
		let t = "", n = !1;
		for (let r = e.length - 1; r >= 0 && !n; r--) {
			const i = e[r];
			ae(i, `paths[${r}]`), i.length !== 0 && (t = `${i}/${t}`, n = i.charCodeAt(0) === oe);
		}
		if (!n) {
			const r = Lo();
			t = `${r}/${t}`, n = r.charCodeAt(0) === oe;
		}
		return t = Dn(t, !n, "/", pr), n ? `/${t}` : t.length > 0 ? t : ".";
	},
	normalize(e) {
		if (ae(e, "path"), e.length === 0) return ".";
		const t = e.charCodeAt(0) === oe, n = e.charCodeAt(e.length - 1) === oe;
		return e = Dn(e, !t, "/", pr), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
	},
	isAbsolute(e) {
		return ae(e, "path"), e.length > 0 && e.charCodeAt(0) === oe;
	},
	join(...e) {
		if (e.length === 0) return ".";
		const t = [];
		for (let n = 0; n < e.length; ++n) {
			const r = e[n];
			ae(r, "path"), r.length > 0 && t.push(r);
		}
		return t.length === 0 ? "." : te.normalize(t.join("/"));
	},
	relative(e, t) {
		if (ae(e, "from"), ae(t, "to"), e === t || (e = te.resolve(e), t = te.resolve(t), e === t)) return "";
		const n = 1, r = e.length, i = r - n, s = 1, a = t.length - s, o = i < a ? i : a;
		let u = -1, c = 0;
		for (; c < o; c++) {
			const h = e.charCodeAt(n + c);
			if (h !== t.charCodeAt(s + c)) break;
			h === oe && (u = c);
		}
		if (c === o) if (a > o) {
			if (t.charCodeAt(s + c) === oe) return t.slice(s + c + 1);
			if (c === 0) return t.slice(s + c);
		} else i > o && (e.charCodeAt(n + c) === oe ? u = c : c === 0 && (u = 0));
		let m = "";
		for (c = n + u + 1; c <= r; ++c) (c === r || e.charCodeAt(c) === oe) && (m += m.length === 0 ? ".." : "/..");
		return `${m}${t.slice(s + u)}`;
	},
	toNamespacedPath(e) {
		return e;
	},
	dirname(e) {
		if (ae(e, "path"), e.length === 0) return ".";
		const t = e.charCodeAt(0) === oe;
		let n = -1, r = !0;
		for (let i = e.length - 1; i >= 1; --i) if (e.charCodeAt(i) === oe) {
			if (!r) {
				n = i;
				break;
			}
		} else r = !1;
		return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
	},
	basename(e, t) {
		t !== void 0 && ae(t, "suffix"), ae(e, "path");
		let n = 0, r = -1, i = !0, s;
		if (t !== void 0 && t.length > 0 && t.length <= e.length) {
			if (t === e) return "";
			let a = t.length - 1, o = -1;
			for (s = e.length - 1; s >= 0; --s) {
				const u = e.charCodeAt(s);
				if (u === oe) {
					if (!i) {
						n = s + 1;
						break;
					}
				} else o === -1 && (i = !1, o = s + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1, r = o));
			}
			return n === r ? r = o : r === -1 && (r = e.length), e.slice(n, r);
		}
		for (s = e.length - 1; s >= 0; --s) if (e.charCodeAt(s) === oe) {
			if (!i) {
				n = s + 1;
				break;
			}
		} else r === -1 && (i = !1, r = s + 1);
		return r === -1 ? "" : e.slice(n, r);
	},
	extname(e) {
		ae(e, "path");
		let t = -1, n = 0, r = -1, i = !0, s = 0;
		for (let a = e.length - 1; a >= 0; --a) {
			const o = e[a];
			if (o === "/") {
				if (!i) {
					n = a + 1;
					break;
				}
				continue;
			}
			r === -1 && (i = !1, r = a + 1), o === "." ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1);
		}
		return t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === n + 1 ? "" : e.slice(t, r);
	},
	format: $1.bind(null, "/"),
	parse(e) {
		ae(e, "path");
		const t = {
			root: "",
			dir: "",
			base: "",
			ext: "",
			name: ""
		};
		if (e.length === 0) return t;
		const n = e.charCodeAt(0) === oe;
		let r;
		n ? (t.root = "/", r = 1) : r = 0;
		let i = -1, s = 0, a = -1, o = !0, u = e.length - 1, c = 0;
		for (; u >= r; --u) {
			const m = e.charCodeAt(u);
			if (m === oe) {
				if (!o) {
					s = u + 1;
					break;
				}
				continue;
			}
			a === -1 && (o = !1, a = u + 1), m === ct ? i === -1 ? i = u : c !== 1 && (c = 1) : i !== -1 && (c = -1);
		}
		if (a !== -1) {
			const m = s === 0 && n ? 1 : s;
			i === -1 || c === 0 || c === 1 && i === a - 1 && i === s + 1 ? t.base = t.name = e.slice(m, a) : (t.name = e.slice(m, i), t.base = e.slice(m, a), t.ext = e.slice(i, a));
		}
		return s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"), t;
	},
	sep: "/",
	delimiter: ":",
	win32: null,
	posix: null
};
te.win32 = ce.win32 = ce;
te.posix = ce.posix = te;
const vo = De ? ce.normalize : te.normalize;
De ? ce.isAbsolute : te.isAbsolute;
const No = De ? ce.join : te.join, Ro = De ? ce.resolve : te.resolve, Eo = De ? ce.relative : te.relative, Ao = De ? ce.dirname : te.dirname;
De ? ce.basename : te.basename;
De ? ce.extname : te.extname;
De ? ce.parse : te.parse;
const bn = De ? ce.sep : te.sep, yo = /^\w[\w\d+.-]*$/, To = /^\//, xo = /^\/\//;
function Mo(e, t) {
	if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
	if (e.scheme && !yo.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
	if (e.path) {
		if (e.authority) {
			if (!To.test(e.path)) throw new Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
		} else if (xo.test(e.path)) throw new Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
	}
}
function So(e, t) {
	return !e && !t ? "file" : e;
}
function ko(e, t) {
	switch (e) {
		case "https":
		case "http":
		case "file":
			t ? t[0] !== Ue && (t = Ue + t) : t = Ue;
			break;
	}
	return t;
}
const ee = "", Ue = "/", Uo = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var ve = class wn {
	static isUri(t) {
		return t instanceof wn ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
	}
	constructor(t, n, r, i, s, a = !1) {
		typeof t == "object" ? (this.scheme = t.scheme || ee, this.authority = t.authority || ee, this.path = t.path || ee, this.query = t.query || ee, this.fragment = t.fragment || ee) : (this.scheme = So(t, a), this.authority = n || ee, this.path = ko(this.scheme, r || ee), this.query = i || ee, this.fragment = s || ee, Mo(this, a));
	}
	get fsPath() {
		return In(this, !1);
	}
	with(t) {
		if (!t) return this;
		let { scheme: n, authority: r, path: i, query: s, fragment: a } = t;
		return n === void 0 ? n = this.scheme : n === null && (n = ee), r === void 0 ? r = this.authority : r === null && (r = ee), i === void 0 ? i = this.path : i === null && (i = ee), s === void 0 ? s = this.query : s === null && (s = ee), a === void 0 ? a = this.fragment : a === null && (a = ee), n === this.scheme && r === this.authority && i === this.path && s === this.query && a === this.fragment ? this : new gt(n, r, i, s, a);
	}
	static parse(t, n = !1) {
		const r = Uo.exec(t);
		return r ? new gt(r[2] || ee, on(r[4] || ee), on(r[5] || ee), on(r[7] || ee), on(r[9] || ee), n) : new gt(ee, ee, ee, ee, ee);
	}
	static file(t) {
		let n = ee;
		if (Mt && (t = t.replace(/\\/g, Ue)), t[0] === Ue && t[1] === Ue) {
			const r = t.indexOf(Ue, 2);
			r === -1 ? (n = t.substring(2), t = Ue) : (n = t.substring(2, r), t = t.substring(r) || Ue);
		}
		return new gt("file", n, t, ee, ee);
	}
	static from(t, n) {
		return new gt(t.scheme, t.authority, t.path, t.query, t.fragment, n);
	}
	static joinPath(t, ...n) {
		if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
		let r;
		return Mt && t.scheme === "file" ? r = wn.file(ce.join(In(t, !0), ...n)).path : r = te.join(t.path, ...n), t.with({ path: r });
	}
	toString(t = !1) {
		return dr(this, t);
	}
	toJSON() {
		return this;
	}
	static revive(t) {
		if (t) {
			if (t instanceof wn) return t;
			{
				const n = new gt(t);
				return n._formatted = t.external ?? null, n._fsPath = t._sep === G1 ? t.fsPath ?? null : null, n;
			}
		} else return t;
	}
	[Symbol.for("debug.description")]() {
		return `URI(${this.toString()})`;
	}
};
const G1 = Mt ? 1 : void 0;
var gt = class extends ve {
	constructor() {
		super(...arguments), this._formatted = null, this._fsPath = null;
	}
	get fsPath() {
		return this._fsPath || (this._fsPath = In(this, !1)), this._fsPath;
	}
	toString(e = !1) {
		return e ? dr(this, !0) : (this._formatted || (this._formatted = dr(this, !1)), this._formatted);
	}
	toJSON() {
		const e = { $mid: _r.Uri };
		return this._fsPath && (e.fsPath = this._fsPath, e._sep = G1), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
	}
};
const z1 = {
	[L.Colon]: "%3A",
	[L.Slash]: "%2F",
	[L.QuestionMark]: "%3F",
	[L.Hash]: "%23",
	[L.OpenSquareBracket]: "%5B",
	[L.CloseSquareBracket]: "%5D",
	[L.AtSign]: "%40",
	[L.ExclamationMark]: "%21",
	[L.DollarSign]: "%24",
	[L.Ampersand]: "%26",
	[L.SingleQuote]: "%27",
	[L.OpenParen]: "%28",
	[L.CloseParen]: "%29",
	[L.Asterisk]: "%2A",
	[L.Plus]: "%2B",
	[L.Comma]: "%2C",
	[L.Semicolon]: "%3B",
	[L.Equals]: "%3D",
	[L.Space]: "%20"
};
function ii(e, t, n) {
	let r, i = -1;
	for (let s = 0; s < e.length; s++) {
		const a = e.charCodeAt(s);
		if (a >= L.a && a <= L.z || a >= L.A && a <= L.Z || a >= L.Digit0 && a <= L.Digit9 || a === L.Dash || a === L.Period || a === L.Underline || a === L.Tilde || t && a === L.Slash || n && a === L.OpenSquareBracket || n && a === L.CloseSquareBracket || n && a === L.Colon) i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r !== void 0 && (r += e.charAt(s));
		else {
			r === void 0 && (r = e.substr(0, s));
			const o = z1[a];
			o !== void 0 ? (i !== -1 && (r += encodeURIComponent(e.substring(i, s)), i = -1), r += o) : i === -1 && (i = s);
		}
	}
	return i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e;
}
function Do(e) {
	let t;
	for (let n = 0; n < e.length; n++) {
		const r = e.charCodeAt(n);
		r === L.Hash || r === L.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += z1[r]) : t !== void 0 && (t += e[n]);
	}
	return t !== void 0 ? t : e;
}
function In(e, t) {
	let n;
	return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === L.Slash && (e.path.charCodeAt(1) >= L.A && e.path.charCodeAt(1) <= L.Z || e.path.charCodeAt(1) >= L.a && e.path.charCodeAt(1) <= L.z) && e.path.charCodeAt(2) === L.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, Mt && (n = n.replace(/\//g, "\\")), n;
}
function dr(e, t) {
	const n = t ? Do : ii;
	let r = "", { scheme: i, authority: s, path: a, query: o, fragment: u } = e;
	if (i && (r += i, r += ":"), (s || i === "file") && (r += Ue, r += Ue), s) {
		let c = s.indexOf("@");
		if (c !== -1) {
			const m = s.substr(0, c);
			s = s.substr(c + 1), c = m.lastIndexOf(":"), c === -1 ? r += n(m, !1, !1) : (r += n(m.substr(0, c), !1, !1), r += ":", r += n(m.substr(c + 1), !1, !0)), r += "@";
		}
		s = s.toLowerCase(), c = s.lastIndexOf(":"), c === -1 ? r += n(s, !1, !0) : (r += n(s.substr(0, c), !1, !0), r += s.substr(c));
	}
	if (a) {
		if (a.length >= 3 && a.charCodeAt(0) === L.Slash && a.charCodeAt(2) === L.Colon) {
			const c = a.charCodeAt(1);
			c >= L.A && c <= L.Z && (a = `/${String.fromCharCode(c + 32)}:${a.substr(3)}`);
		} else if (a.length >= 2 && a.charCodeAt(1) === L.Colon) {
			const c = a.charCodeAt(0);
			c >= L.A && c <= L.Z && (a = `${String.fromCharCode(c + 32)}:${a.substr(2)}`);
		}
		r += n(a, !0, !1);
	}
	return o && (r += "?", r += n(o, !1, !1)), u && (r += "#", r += t ? u : ii(u, !1, !1)), r;
}
function j1(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e.length > 3 ? e.substr(0, 3) + j1(e.substr(3)) : e;
	}
}
const si = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function on(e) {
	return e.match(si) ? e.replace(si, (t) => j1(t)) : e;
}
var Je;
(function(e) {
	e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Je || (Je = {}));
var Io = class ye extends V {
	constructor(t, n, r, i) {
		super(t, n, r, i), this.selectionStartLineNumber = t, this.selectionStartColumn = n, this.positionLineNumber = r, this.positionColumn = i;
	}
	toString() {
		return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
	}
	equalsSelection(t) {
		return ye.selectionsEqual(this, t);
	}
	static selectionsEqual(t, n) {
		return t.selectionStartLineNumber === n.selectionStartLineNumber && t.selectionStartColumn === n.selectionStartColumn && t.positionLineNumber === n.positionLineNumber && t.positionColumn === n.positionColumn;
	}
	getDirection() {
		return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? Je.LTR : Je.RTL;
	}
	setEndPosition(t, n) {
		return this.getDirection() === Je.LTR ? new ye(this.startLineNumber, this.startColumn, t, n) : new ye(t, n, this.startLineNumber, this.startColumn);
	}
	getPosition() {
		return new Y(this.positionLineNumber, this.positionColumn);
	}
	getSelectionStart() {
		return new Y(this.selectionStartLineNumber, this.selectionStartColumn);
	}
	setStartPosition(t, n) {
		return this.getDirection() === Je.LTR ? new ye(t, n, this.endLineNumber, this.endColumn) : new ye(this.endLineNumber, this.endColumn, t, n);
	}
	static fromPositions(t, n = t) {
		return new ye(t.lineNumber, t.column, n.lineNumber, n.column);
	}
	static fromRange(t, n) {
		return n === Je.LTR ? new ye(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : new ye(t.endLineNumber, t.endColumn, t.startLineNumber, t.startColumn);
	}
	static liftSelection(t) {
		return new ye(t.selectionStartLineNumber, t.selectionStartColumn, t.positionLineNumber, t.positionColumn);
	}
	static selectionsArrEqual(t, n) {
		if (t && !n || !t && n) return !1;
		if (!t && !n) return !0;
		if (t.length !== n.length) return !1;
		for (let r = 0, i = t.length; r < i; r++) if (!this.selectionsEqual(t[r], n[r])) return !1;
		return !0;
	}
	static isISelection(t) {
		return !!t && typeof t.selectionStartLineNumber == "number" && typeof t.selectionStartColumn == "number" && typeof t.positionLineNumber == "number" && typeof t.positionColumn == "number";
	}
	static createWithDirection(t, n, r, i, s) {
		return s === Je.LTR ? new ye(t, n, r, i) : new ye(r, i, t, n);
	}
};
const ai = Object.create(null);
function l(e, t) {
	if (Fa(t)) {
		const n = ai[t];
		if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
		t = n;
	}
	return ai[e] = t, { id: e };
}
const Fo = {
	add: l("add", 6e4),
	plus: l("plus", 6e4),
	gistNew: l("gist-new", 6e4),
	repoCreate: l("repo-create", 6e4),
	lightbulb: l("lightbulb", 60001),
	lightBulb: l("light-bulb", 60001),
	repo: l("repo", 60002),
	repoDelete: l("repo-delete", 60002),
	gistFork: l("gist-fork", 60003),
	repoForked: l("repo-forked", 60003),
	gitPullRequest: l("git-pull-request", 60004),
	gitPullRequestAbandoned: l("git-pull-request-abandoned", 60004),
	recordKeys: l("record-keys", 60005),
	keyboard: l("keyboard", 60005),
	tag: l("tag", 60006),
	gitPullRequestLabel: l("git-pull-request-label", 60006),
	tagAdd: l("tag-add", 60006),
	tagRemove: l("tag-remove", 60006),
	person: l("person", 60007),
	personFollow: l("person-follow", 60007),
	personOutline: l("person-outline", 60007),
	personFilled: l("person-filled", 60007),
	sourceControl: l("source-control", 60008),
	mirror: l("mirror", 60009),
	mirrorPublic: l("mirror-public", 60009),
	star: l("star", 60010),
	starAdd: l("star-add", 60010),
	starDelete: l("star-delete", 60010),
	starEmpty: l("star-empty", 60010),
	comment: l("comment", 60011),
	commentAdd: l("comment-add", 60011),
	alert: l("alert", 60012),
	warning: l("warning", 60012),
	search: l("search", 60013),
	searchSave: l("search-save", 60013),
	logOut: l("log-out", 60014),
	signOut: l("sign-out", 60014),
	logIn: l("log-in", 60015),
	signIn: l("sign-in", 60015),
	eye: l("eye", 60016),
	eyeUnwatch: l("eye-unwatch", 60016),
	eyeWatch: l("eye-watch", 60016),
	circleFilled: l("circle-filled", 60017),
	primitiveDot: l("primitive-dot", 60017),
	closeDirty: l("close-dirty", 60017),
	debugBreakpoint: l("debug-breakpoint", 60017),
	debugBreakpointDisabled: l("debug-breakpoint-disabled", 60017),
	debugHint: l("debug-hint", 60017),
	terminalDecorationSuccess: l("terminal-decoration-success", 60017),
	primitiveSquare: l("primitive-square", 60018),
	edit: l("edit", 60019),
	pencil: l("pencil", 60019),
	info: l("info", 60020),
	issueOpened: l("issue-opened", 60020),
	gistPrivate: l("gist-private", 60021),
	gitForkPrivate: l("git-fork-private", 60021),
	lock: l("lock", 60021),
	mirrorPrivate: l("mirror-private", 60021),
	close: l("close", 60022),
	removeClose: l("remove-close", 60022),
	x: l("x", 60022),
	repoSync: l("repo-sync", 60023),
	sync: l("sync", 60023),
	clone: l("clone", 60024),
	desktopDownload: l("desktop-download", 60024),
	beaker: l("beaker", 60025),
	microscope: l("microscope", 60025),
	vm: l("vm", 60026),
	deviceDesktop: l("device-desktop", 60026),
	file: l("file", 60027),
	more: l("more", 60028),
	ellipsis: l("ellipsis", 60028),
	kebabHorizontal: l("kebab-horizontal", 60028),
	mailReply: l("mail-reply", 60029),
	reply: l("reply", 60029),
	organization: l("organization", 60030),
	organizationFilled: l("organization-filled", 60030),
	organizationOutline: l("organization-outline", 60030),
	newFile: l("new-file", 60031),
	fileAdd: l("file-add", 60031),
	newFolder: l("new-folder", 60032),
	fileDirectoryCreate: l("file-directory-create", 60032),
	trash: l("trash", 60033),
	trashcan: l("trashcan", 60033),
	history: l("history", 60034),
	clock: l("clock", 60034),
	folder: l("folder", 60035),
	fileDirectory: l("file-directory", 60035),
	symbolFolder: l("symbol-folder", 60035),
	logoGithub: l("logo-github", 60036),
	markGithub: l("mark-github", 60036),
	github: l("github", 60036),
	terminal: l("terminal", 60037),
	console: l("console", 60037),
	repl: l("repl", 60037),
	zap: l("zap", 60038),
	symbolEvent: l("symbol-event", 60038),
	error: l("error", 60039),
	stop: l("stop", 60039),
	variable: l("variable", 60040),
	symbolVariable: l("symbol-variable", 60040),
	array: l("array", 60042),
	symbolArray: l("symbol-array", 60042),
	symbolModule: l("symbol-module", 60043),
	symbolPackage: l("symbol-package", 60043),
	symbolNamespace: l("symbol-namespace", 60043),
	symbolObject: l("symbol-object", 60043),
	symbolMethod: l("symbol-method", 60044),
	symbolFunction: l("symbol-function", 60044),
	symbolConstructor: l("symbol-constructor", 60044),
	symbolBoolean: l("symbol-boolean", 60047),
	symbolNull: l("symbol-null", 60047),
	symbolNumeric: l("symbol-numeric", 60048),
	symbolNumber: l("symbol-number", 60048),
	symbolStructure: l("symbol-structure", 60049),
	symbolStruct: l("symbol-struct", 60049),
	symbolParameter: l("symbol-parameter", 60050),
	symbolTypeParameter: l("symbol-type-parameter", 60050),
	symbolKey: l("symbol-key", 60051),
	symbolText: l("symbol-text", 60051),
	symbolReference: l("symbol-reference", 60052),
	goToFile: l("go-to-file", 60052),
	symbolEnum: l("symbol-enum", 60053),
	symbolValue: l("symbol-value", 60053),
	symbolRuler: l("symbol-ruler", 60054),
	symbolUnit: l("symbol-unit", 60054),
	activateBreakpoints: l("activate-breakpoints", 60055),
	archive: l("archive", 60056),
	arrowBoth: l("arrow-both", 60057),
	arrowDown: l("arrow-down", 60058),
	arrowLeft: l("arrow-left", 60059),
	arrowRight: l("arrow-right", 60060),
	arrowSmallDown: l("arrow-small-down", 60061),
	arrowSmallLeft: l("arrow-small-left", 60062),
	arrowSmallRight: l("arrow-small-right", 60063),
	arrowSmallUp: l("arrow-small-up", 60064),
	arrowUp: l("arrow-up", 60065),
	bell: l("bell", 60066),
	bold: l("bold", 60067),
	book: l("book", 60068),
	bookmark: l("bookmark", 60069),
	debugBreakpointConditionalUnverified: l("debug-breakpoint-conditional-unverified", 60070),
	debugBreakpointConditional: l("debug-breakpoint-conditional", 60071),
	debugBreakpointConditionalDisabled: l("debug-breakpoint-conditional-disabled", 60071),
	debugBreakpointDataUnverified: l("debug-breakpoint-data-unverified", 60072),
	debugBreakpointData: l("debug-breakpoint-data", 60073),
	debugBreakpointDataDisabled: l("debug-breakpoint-data-disabled", 60073),
	debugBreakpointLogUnverified: l("debug-breakpoint-log-unverified", 60074),
	debugBreakpointLog: l("debug-breakpoint-log", 60075),
	debugBreakpointLogDisabled: l("debug-breakpoint-log-disabled", 60075),
	briefcase: l("briefcase", 60076),
	broadcast: l("broadcast", 60077),
	browser: l("browser", 60078),
	bug: l("bug", 60079),
	calendar: l("calendar", 60080),
	caseSensitive: l("case-sensitive", 60081),
	check: l("check", 60082),
	checklist: l("checklist", 60083),
	chevronDown: l("chevron-down", 60084),
	chevronLeft: l("chevron-left", 60085),
	chevronRight: l("chevron-right", 60086),
	chevronUp: l("chevron-up", 60087),
	chromeClose: l("chrome-close", 60088),
	chromeMaximize: l("chrome-maximize", 60089),
	chromeMinimize: l("chrome-minimize", 60090),
	chromeRestore: l("chrome-restore", 60091),
	circleOutline: l("circle-outline", 60092),
	circle: l("circle", 60092),
	debugBreakpointUnverified: l("debug-breakpoint-unverified", 60092),
	terminalDecorationIncomplete: l("terminal-decoration-incomplete", 60092),
	circleSlash: l("circle-slash", 60093),
	circuitBoard: l("circuit-board", 60094),
	clearAll: l("clear-all", 60095),
	clippy: l("clippy", 60096),
	closeAll: l("close-all", 60097),
	cloudDownload: l("cloud-download", 60098),
	cloudUpload: l("cloud-upload", 60099),
	code: l("code", 60100),
	collapseAll: l("collapse-all", 60101),
	colorMode: l("color-mode", 60102),
	commentDiscussion: l("comment-discussion", 60103),
	creditCard: l("credit-card", 60105),
	dash: l("dash", 60108),
	dashboard: l("dashboard", 60109),
	database: l("database", 60110),
	debugContinue: l("debug-continue", 60111),
	debugDisconnect: l("debug-disconnect", 60112),
	debugPause: l("debug-pause", 60113),
	debugRestart: l("debug-restart", 60114),
	debugStart: l("debug-start", 60115),
	debugStepInto: l("debug-step-into", 60116),
	debugStepOut: l("debug-step-out", 60117),
	debugStepOver: l("debug-step-over", 60118),
	debugStop: l("debug-stop", 60119),
	debug: l("debug", 60120),
	deviceCameraVideo: l("device-camera-video", 60121),
	deviceCamera: l("device-camera", 60122),
	deviceMobile: l("device-mobile", 60123),
	diffAdded: l("diff-added", 60124),
	diffIgnored: l("diff-ignored", 60125),
	diffModified: l("diff-modified", 60126),
	diffRemoved: l("diff-removed", 60127),
	diffRenamed: l("diff-renamed", 60128),
	diff: l("diff", 60129),
	diffSidebyside: l("diff-sidebyside", 60129),
	discard: l("discard", 60130),
	editorLayout: l("editor-layout", 60131),
	emptyWindow: l("empty-window", 60132),
	exclude: l("exclude", 60133),
	extensions: l("extensions", 60134),
	eyeClosed: l("eye-closed", 60135),
	fileBinary: l("file-binary", 60136),
	fileCode: l("file-code", 60137),
	fileMedia: l("file-media", 60138),
	filePdf: l("file-pdf", 60139),
	fileSubmodule: l("file-submodule", 60140),
	fileSymlinkDirectory: l("file-symlink-directory", 60141),
	fileSymlinkFile: l("file-symlink-file", 60142),
	fileZip: l("file-zip", 60143),
	files: l("files", 60144),
	filter: l("filter", 60145),
	flame: l("flame", 60146),
	foldDown: l("fold-down", 60147),
	foldUp: l("fold-up", 60148),
	fold: l("fold", 60149),
	folderActive: l("folder-active", 60150),
	folderOpened: l("folder-opened", 60151),
	gear: l("gear", 60152),
	gift: l("gift", 60153),
	gistSecret: l("gist-secret", 60154),
	gist: l("gist", 60155),
	gitCommit: l("git-commit", 60156),
	gitCompare: l("git-compare", 60157),
	compareChanges: l("compare-changes", 60157),
	gitMerge: l("git-merge", 60158),
	githubAction: l("github-action", 60159),
	githubAlt: l("github-alt", 60160),
	globe: l("globe", 60161),
	grabber: l("grabber", 60162),
	graph: l("graph", 60163),
	gripper: l("gripper", 60164),
	heart: l("heart", 60165),
	home: l("home", 60166),
	horizontalRule: l("horizontal-rule", 60167),
	hubot: l("hubot", 60168),
	inbox: l("inbox", 60169),
	issueReopened: l("issue-reopened", 60171),
	issues: l("issues", 60172),
	italic: l("italic", 60173),
	jersey: l("jersey", 60174),
	json: l("json", 60175),
	bracket: l("bracket", 60175),
	kebabVertical: l("kebab-vertical", 60176),
	key: l("key", 60177),
	law: l("law", 60178),
	lightbulbAutofix: l("lightbulb-autofix", 60179),
	linkExternal: l("link-external", 60180),
	link: l("link", 60181),
	listOrdered: l("list-ordered", 60182),
	listUnordered: l("list-unordered", 60183),
	liveShare: l("live-share", 60184),
	loading: l("loading", 60185),
	location: l("location", 60186),
	mailRead: l("mail-read", 60187),
	mail: l("mail", 60188),
	markdown: l("markdown", 60189),
	megaphone: l("megaphone", 60190),
	mention: l("mention", 60191),
	milestone: l("milestone", 60192),
	gitPullRequestMilestone: l("git-pull-request-milestone", 60192),
	mortarBoard: l("mortar-board", 60193),
	move: l("move", 60194),
	multipleWindows: l("multiple-windows", 60195),
	mute: l("mute", 60196),
	noNewline: l("no-newline", 60197),
	note: l("note", 60198),
	octoface: l("octoface", 60199),
	openPreview: l("open-preview", 60200),
	package: l("package", 60201),
	paintcan: l("paintcan", 60202),
	pin: l("pin", 60203),
	play: l("play", 60204),
	run: l("run", 60204),
	plug: l("plug", 60205),
	preserveCase: l("preserve-case", 60206),
	preview: l("preview", 60207),
	project: l("project", 60208),
	pulse: l("pulse", 60209),
	question: l("question", 60210),
	quote: l("quote", 60211),
	radioTower: l("radio-tower", 60212),
	reactions: l("reactions", 60213),
	references: l("references", 60214),
	refresh: l("refresh", 60215),
	regex: l("regex", 60216),
	remoteExplorer: l("remote-explorer", 60217),
	remote: l("remote", 60218),
	remove: l("remove", 60219),
	replaceAll: l("replace-all", 60220),
	replace: l("replace", 60221),
	repoClone: l("repo-clone", 60222),
	repoForcePush: l("repo-force-push", 60223),
	repoPull: l("repo-pull", 60224),
	repoPush: l("repo-push", 60225),
	report: l("report", 60226),
	requestChanges: l("request-changes", 60227),
	rocket: l("rocket", 60228),
	rootFolderOpened: l("root-folder-opened", 60229),
	rootFolder: l("root-folder", 60230),
	rss: l("rss", 60231),
	ruby: l("ruby", 60232),
	saveAll: l("save-all", 60233),
	saveAs: l("save-as", 60234),
	save: l("save", 60235),
	screenFull: l("screen-full", 60236),
	screenNormal: l("screen-normal", 60237),
	searchStop: l("search-stop", 60238),
	server: l("server", 60240),
	settingsGear: l("settings-gear", 60241),
	settings: l("settings", 60242),
	shield: l("shield", 60243),
	smiley: l("smiley", 60244),
	sortPrecedence: l("sort-precedence", 60245),
	splitHorizontal: l("split-horizontal", 60246),
	splitVertical: l("split-vertical", 60247),
	squirrel: l("squirrel", 60248),
	starFull: l("star-full", 60249),
	starHalf: l("star-half", 60250),
	symbolClass: l("symbol-class", 60251),
	symbolColor: l("symbol-color", 60252),
	symbolConstant: l("symbol-constant", 60253),
	symbolEnumMember: l("symbol-enum-member", 60254),
	symbolField: l("symbol-field", 60255),
	symbolFile: l("symbol-file", 60256),
	symbolInterface: l("symbol-interface", 60257),
	symbolKeyword: l("symbol-keyword", 60258),
	symbolMisc: l("symbol-misc", 60259),
	symbolOperator: l("symbol-operator", 60260),
	symbolProperty: l("symbol-property", 60261),
	wrench: l("wrench", 60261),
	wrenchSubaction: l("wrench-subaction", 60261),
	symbolSnippet: l("symbol-snippet", 60262),
	tasklist: l("tasklist", 60263),
	telescope: l("telescope", 60264),
	textSize: l("text-size", 60265),
	threeBars: l("three-bars", 60266),
	thumbsdown: l("thumbsdown", 60267),
	thumbsup: l("thumbsup", 60268),
	tools: l("tools", 60269),
	triangleDown: l("triangle-down", 60270),
	triangleLeft: l("triangle-left", 60271),
	triangleRight: l("triangle-right", 60272),
	triangleUp: l("triangle-up", 60273),
	twitter: l("twitter", 60274),
	unfold: l("unfold", 60275),
	unlock: l("unlock", 60276),
	unmute: l("unmute", 60277),
	unverified: l("unverified", 60278),
	verified: l("verified", 60279),
	versions: l("versions", 60280),
	vmActive: l("vm-active", 60281),
	vmOutline: l("vm-outline", 60282),
	vmRunning: l("vm-running", 60283),
	watch: l("watch", 60284),
	whitespace: l("whitespace", 60285),
	wholeWord: l("whole-word", 60286),
	window: l("window", 60287),
	wordWrap: l("word-wrap", 60288),
	zoomIn: l("zoom-in", 60289),
	zoomOut: l("zoom-out", 60290),
	listFilter: l("list-filter", 60291),
	listFlat: l("list-flat", 60292),
	listSelection: l("list-selection", 60293),
	selection: l("selection", 60293),
	listTree: l("list-tree", 60294),
	debugBreakpointFunctionUnverified: l("debug-breakpoint-function-unverified", 60295),
	debugBreakpointFunction: l("debug-breakpoint-function", 60296),
	debugBreakpointFunctionDisabled: l("debug-breakpoint-function-disabled", 60296),
	debugStackframeActive: l("debug-stackframe-active", 60297),
	circleSmallFilled: l("circle-small-filled", 60298),
	debugStackframeDot: l("debug-stackframe-dot", 60298),
	terminalDecorationMark: l("terminal-decoration-mark", 60298),
	debugStackframe: l("debug-stackframe", 60299),
	debugStackframeFocused: l("debug-stackframe-focused", 60299),
	debugBreakpointUnsupported: l("debug-breakpoint-unsupported", 60300),
	symbolString: l("symbol-string", 60301),
	debugReverseContinue: l("debug-reverse-continue", 60302),
	debugStepBack: l("debug-step-back", 60303),
	debugRestartFrame: l("debug-restart-frame", 60304),
	debugAlt: l("debug-alt", 60305),
	callIncoming: l("call-incoming", 60306),
	callOutgoing: l("call-outgoing", 60307),
	menu: l("menu", 60308),
	expandAll: l("expand-all", 60309),
	feedback: l("feedback", 60310),
	gitPullRequestReviewer: l("git-pull-request-reviewer", 60310),
	groupByRefType: l("group-by-ref-type", 60311),
	ungroupByRefType: l("ungroup-by-ref-type", 60312),
	account: l("account", 60313),
	gitPullRequestAssignee: l("git-pull-request-assignee", 60313),
	bellDot: l("bell-dot", 60314),
	debugConsole: l("debug-console", 60315),
	library: l("library", 60316),
	output: l("output", 60317),
	runAll: l("run-all", 60318),
	syncIgnored: l("sync-ignored", 60319),
	pinned: l("pinned", 60320),
	githubInverted: l("github-inverted", 60321),
	serverProcess: l("server-process", 60322),
	serverEnvironment: l("server-environment", 60323),
	pass: l("pass", 60324),
	issueClosed: l("issue-closed", 60324),
	stopCircle: l("stop-circle", 60325),
	playCircle: l("play-circle", 60326),
	record: l("record", 60327),
	debugAltSmall: l("debug-alt-small", 60328),
	vmConnect: l("vm-connect", 60329),
	cloud: l("cloud", 60330),
	merge: l("merge", 60331),
	export: l("export", 60332),
	graphLeft: l("graph-left", 60333),
	magnet: l("magnet", 60334),
	notebook: l("notebook", 60335),
	redo: l("redo", 60336),
	checkAll: l("check-all", 60337),
	pinnedDirty: l("pinned-dirty", 60338),
	passFilled: l("pass-filled", 60339),
	circleLargeFilled: l("circle-large-filled", 60340),
	circleLarge: l("circle-large", 60341),
	circleLargeOutline: l("circle-large-outline", 60341),
	combine: l("combine", 60342),
	gather: l("gather", 60342),
	table: l("table", 60343),
	variableGroup: l("variable-group", 60344),
	typeHierarchy: l("type-hierarchy", 60345),
	typeHierarchySub: l("type-hierarchy-sub", 60346),
	typeHierarchySuper: l("type-hierarchy-super", 60347),
	gitPullRequestCreate: l("git-pull-request-create", 60348),
	runAbove: l("run-above", 60349),
	runBelow: l("run-below", 60350),
	notebookTemplate: l("notebook-template", 60351),
	debugRerun: l("debug-rerun", 60352),
	workspaceTrusted: l("workspace-trusted", 60353),
	workspaceUntrusted: l("workspace-untrusted", 60354),
	workspaceUnknown: l("workspace-unknown", 60355),
	terminalCmd: l("terminal-cmd", 60356),
	terminalDebian: l("terminal-debian", 60357),
	terminalLinux: l("terminal-linux", 60358),
	terminalPowershell: l("terminal-powershell", 60359),
	terminalTmux: l("terminal-tmux", 60360),
	terminalUbuntu: l("terminal-ubuntu", 60361),
	terminalBash: l("terminal-bash", 60362),
	arrowSwap: l("arrow-swap", 60363),
	copy: l("copy", 60364),
	personAdd: l("person-add", 60365),
	filterFilled: l("filter-filled", 60366),
	wand: l("wand", 60367),
	debugLineByLine: l("debug-line-by-line", 60368),
	inspect: l("inspect", 60369),
	layers: l("layers", 60370),
	layersDot: l("layers-dot", 60371),
	layersActive: l("layers-active", 60372),
	compass: l("compass", 60373),
	compassDot: l("compass-dot", 60374),
	compassActive: l("compass-active", 60375),
	azure: l("azure", 60376),
	issueDraft: l("issue-draft", 60377),
	gitPullRequestClosed: l("git-pull-request-closed", 60378),
	gitPullRequestDraft: l("git-pull-request-draft", 60379),
	debugAll: l("debug-all", 60380),
	debugCoverage: l("debug-coverage", 60381),
	runErrors: l("run-errors", 60382),
	folderLibrary: l("folder-library", 60383),
	debugContinueSmall: l("debug-continue-small", 60384),
	beakerStop: l("beaker-stop", 60385),
	graphLine: l("graph-line", 60386),
	graphScatter: l("graph-scatter", 60387),
	pieChart: l("pie-chart", 60388),
	bracketDot: l("bracket-dot", 60389),
	bracketError: l("bracket-error", 60390),
	lockSmall: l("lock-small", 60391),
	azureDevops: l("azure-devops", 60392),
	verifiedFilled: l("verified-filled", 60393),
	newline: l("newline", 60394),
	layout: l("layout", 60395),
	layoutActivitybarLeft: l("layout-activitybar-left", 60396),
	layoutActivitybarRight: l("layout-activitybar-right", 60397),
	layoutPanelLeft: l("layout-panel-left", 60398),
	layoutPanelCenter: l("layout-panel-center", 60399),
	layoutPanelJustify: l("layout-panel-justify", 60400),
	layoutPanelRight: l("layout-panel-right", 60401),
	layoutPanel: l("layout-panel", 60402),
	layoutSidebarLeft: l("layout-sidebar-left", 60403),
	layoutSidebarRight: l("layout-sidebar-right", 60404),
	layoutStatusbar: l("layout-statusbar", 60405),
	layoutMenubar: l("layout-menubar", 60406),
	layoutCentered: l("layout-centered", 60407),
	target: l("target", 60408),
	indent: l("indent", 60409),
	recordSmall: l("record-small", 60410),
	errorSmall: l("error-small", 60411),
	terminalDecorationError: l("terminal-decoration-error", 60411),
	arrowCircleDown: l("arrow-circle-down", 60412),
	arrowCircleLeft: l("arrow-circle-left", 60413),
	arrowCircleRight: l("arrow-circle-right", 60414),
	arrowCircleUp: l("arrow-circle-up", 60415),
	layoutSidebarRightOff: l("layout-sidebar-right-off", 60416),
	layoutPanelOff: l("layout-panel-off", 60417),
	layoutSidebarLeftOff: l("layout-sidebar-left-off", 60418),
	blank: l("blank", 60419),
	heartFilled: l("heart-filled", 60420),
	map: l("map", 60421),
	mapHorizontal: l("map-horizontal", 60421),
	foldHorizontal: l("fold-horizontal", 60421),
	mapFilled: l("map-filled", 60422),
	mapHorizontalFilled: l("map-horizontal-filled", 60422),
	foldHorizontalFilled: l("fold-horizontal-filled", 60422),
	circleSmall: l("circle-small", 60423),
	bellSlash: l("bell-slash", 60424),
	bellSlashDot: l("bell-slash-dot", 60425),
	commentUnresolved: l("comment-unresolved", 60426),
	gitPullRequestGoToChanges: l("git-pull-request-go-to-changes", 60427),
	gitPullRequestNewChanges: l("git-pull-request-new-changes", 60428),
	searchFuzzy: l("search-fuzzy", 60429),
	commentDraft: l("comment-draft", 60430),
	send: l("send", 60431),
	sparkle: l("sparkle", 60432),
	insert: l("insert", 60433),
	mic: l("mic", 60434),
	thumbsdownFilled: l("thumbsdown-filled", 60435),
	thumbsupFilled: l("thumbsup-filled", 60436),
	coffee: l("coffee", 60437),
	snake: l("snake", 60438),
	game: l("game", 60439),
	vr: l("vr", 60440),
	chip: l("chip", 60441),
	piano: l("piano", 60442),
	music: l("music", 60443),
	micFilled: l("mic-filled", 60444),
	repoFetch: l("repo-fetch", 60445),
	copilot: l("copilot", 60446),
	lightbulbSparkle: l("lightbulb-sparkle", 60447),
	robot: l("robot", 60448),
	sparkleFilled: l("sparkle-filled", 60449),
	diffSingle: l("diff-single", 60450),
	diffMultiple: l("diff-multiple", 60451),
	surroundWith: l("surround-with", 60452),
	share: l("share", 60453),
	gitStash: l("git-stash", 60454),
	gitStashApply: l("git-stash-apply", 60455),
	gitStashPop: l("git-stash-pop", 60456),
	vscode: l("vscode", 60457),
	vscodeInsiders: l("vscode-insiders", 60458),
	codeOss: l("code-oss", 60459),
	runCoverage: l("run-coverage", 60460),
	runAllCoverage: l("run-all-coverage", 60461),
	coverage: l("coverage", 60462),
	githubProject: l("github-project", 60463),
	mapVertical: l("map-vertical", 60464),
	foldVertical: l("fold-vertical", 60464),
	mapVerticalFilled: l("map-vertical-filled", 60465),
	foldVerticalFilled: l("fold-vertical-filled", 60465),
	goToSearch: l("go-to-search", 60466),
	percentage: l("percentage", 60467),
	sortPercentage: l("sort-percentage", 60467),
	attach: l("attach", 60468),
	goToEditingSession: l("go-to-editing-session", 60469),
	editSession: l("edit-session", 60470),
	codeReview: l("code-review", 60471),
	copilotWarning: l("copilot-warning", 60472),
	python: l("python", 60473),
	copilotLarge: l("copilot-large", 60474),
	copilotWarningLarge: l("copilot-warning-large", 60475),
	keyboardTab: l("keyboard-tab", 60476),
	copilotBlocked: l("copilot-blocked", 60477),
	copilotNotConnected: l("copilot-not-connected", 60478),
	flag: l("flag", 60479),
	lightbulbEmpty: l("lightbulb-empty", 60480),
	symbolMethodArrow: l("symbol-method-arrow", 60481),
	copilotUnavailable: l("copilot-unavailable", 60482),
	repoPinned: l("repo-pinned", 60483),
	keyboardTabAbove: l("keyboard-tab-above", 60484),
	keyboardTabBelow: l("keyboard-tab-below", 60485),
	gitPullRequestDone: l("git-pull-request-done", 60486),
	mcp: l("mcp", 60487),
	extensionsLarge: l("extensions-large", 60488),
	layoutPanelDock: l("layout-panel-dock", 60489),
	layoutSidebarLeftDock: l("layout-sidebar-left-dock", 60490),
	layoutSidebarRightDock: l("layout-sidebar-right-dock", 60491),
	copilotInProgress: l("copilot-in-progress", 60492),
	copilotError: l("copilot-error", 60493),
	copilotSuccess: l("copilot-success", 60494),
	chatSparkle: l("chat-sparkle", 60495),
	searchSparkle: l("search-sparkle", 60496),
	editSparkle: l("edit-sparkle", 60497),
	copilotSnooze: l("copilot-snooze", 60498),
	sendToRemoteAgent: l("send-to-remote-agent", 60499),
	commentDiscussionSparkle: l("comment-discussion-sparkle", 60500),
	chatSparkleWarning: l("chat-sparkle-warning", 60501),
	chatSparkleError: l("chat-sparkle-error", 60502),
	collection: l("collection", 60503),
	newCollection: l("new-collection", 60504),
	thinking: l("thinking", 60505),
	build: l("build", 60506),
	commentDiscussionQuote: l("comment-discussion-quote", 60507),
	cursor: l("cursor", 60508),
	eraser: l("eraser", 60509),
	fileText: l("file-text", 60510),
	quotes: l("quotes", 60512),
	rename: l("rename", 60513),
	runWithDeps: l("run-with-deps", 60514),
	debugConnected: l("debug-connected", 60515),
	strikethrough: l("strikethrough", 60516),
	openInProduct: l("open-in-product", 60517),
	indexZero: l("index-zero", 60518),
	agent: l("agent", 60519),
	editCode: l("edit-code", 60520),
	repoSelected: l("repo-selected", 60521),
	skip: l("skip", 60522),
	mergeInto: l("merge-into", 60523),
	gitBranchChanges: l("git-branch-changes", 60524),
	gitBranchStagedChanges: l("git-branch-staged-changes", 60525),
	gitBranchConflicts: l("git-branch-conflicts", 60526),
	gitBranch: l("git-branch", 60527),
	gitBranchCreate: l("git-branch-create", 60527),
	gitBranchDelete: l("git-branch-delete", 60527),
	searchLarge: l("search-large", 60528),
	terminalGitBash: l("terminal-git-bash", 60529),
	windowActive: l("window-active", 60530),
	forward: l("forward", 60531),
	download: l("download", 60532),
	clockface: l("clockface", 60533),
	unarchive: l("unarchive", 60534),
	sessionInProgress: l("session-in-progress", 60535),
	collectionSmall: l("collection-small", 60536),
	vmSmall: l("vm-small", 60537),
	cloudSmall: l("cloud-small", 60538),
	addSmall: l("add-small", 60539),
	removeSmall: l("remove-small", 60540),
	worktreeSmall: l("worktree-small", 60541),
	worktree: l("worktree", 60542)
}, Po = {
	dialogError: l("dialog-error", "error"),
	dialogWarning: l("dialog-warning", "warning"),
	dialogInfo: l("dialog-info", "info"),
	dialogClose: l("dialog-close", "close"),
	treeItemExpanded: l("tree-item-expanded", "chevron-down"),
	treeFilterOnTypeOn: l("tree-filter-on-type-on", "list-filter"),
	treeFilterOnTypeOff: l("tree-filter-on-type-off", "list-selection"),
	treeFilterClear: l("tree-filter-clear", "close"),
	treeItemLoading: l("tree-item-loading", "loading"),
	menuSelection: l("menu-selection", "check"),
	menuSubmenu: l("menu-submenu", "chevron-right"),
	menuBarMore: l("menubar-more", "more"),
	scrollbarButtonLeft: l("scrollbar-button-left", "triangle-left"),
	scrollbarButtonRight: l("scrollbar-button-right", "triangle-right"),
	scrollbarButtonUp: l("scrollbar-button-up", "triangle-up"),
	scrollbarButtonDown: l("scrollbar-button-down", "triangle-down"),
	toolBarMore: l("toolbar-more", "more"),
	quickInputBack: l("quick-input-back", "arrow-left"),
	dropDownButton: l("drop-down-button", 60084),
	symbolCustomColor: l("symbol-customcolor", 60252),
	exportIcon: l("export", 60332),
	workspaceUnspecified: l("workspace-unspecified", 60355),
	newLine: l("newline", 60394),
	thumbsDownFilled: l("thumbsdown-filled", 60435),
	thumbsUpFilled: l("thumbsup-filled", 60436),
	gitFetch: l("git-fetch", 60445),
	lightbulbSparkleAutofix: l("lightbulb-sparkle-autofix", 60447),
	debugBreakpointPending: l("debug-breakpoint-pending", 60377)
}, q = {
	...Fo,
	...Po
};
var li;
(function(e) {
	e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(li || (li = {}));
var oi;
(function(e) {
	e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(oi || (oi = {}));
var Fn;
(function(e) {
	e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(Fn || (Fn = {}));
var ui;
(function(e) {
	e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(ui || (ui = {}));
var ci;
(function(e) {
	e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(ci || (ci = {}));
var Bo = class {
	constructor() {
		this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new ke(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
	}
	handleChange(e) {
		this._onDidChange.fire({
			changedLanguages: e,
			changedColorMap: !1
		});
	}
	register(e, t) {
		return this._tokenizationSupports.set(e, t), this.handleChange([e]), Ct(() => {
			this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
		});
	}
	get(e) {
		return this._tokenizationSupports.get(e) || null;
	}
	registerFactory(e, t) {
		this._factories.get(e)?.dispose();
		const n = new Oo(this, e, t);
		return this._factories.set(e, n), Ct(() => {
			const r = this._factories.get(e);
			!r || r !== n || (this._factories.delete(e), r.dispose());
		});
	}
	async getOrCreate(e) {
		const t = this.get(e);
		if (t) return t;
		const n = this._factories.get(e);
		return !n || n.isResolved ? null : (await n.resolve(), this.get(e));
	}
	isResolved(e) {
		if (this.get(e)) return !0;
		const t = this._factories.get(e);
		return !!(!t || t.isResolved);
	}
	setColorMap(e) {
		this._colorMap = e, this._onDidChange.fire({
			changedLanguages: Array.from(this._tokenizationSupports.keys()),
			changedColorMap: !0
		});
	}
	getColorMap() {
		return this._colorMap;
	}
	getDefaultBackground() {
		return this._colorMap && this._colorMap.length > Fn.DefaultBackground ? this._colorMap[Fn.DefaultBackground] : null;
	}
}, Oo = class extends en {
	get isResolved() {
		return this._isResolved;
	}
	constructor(e, t, n) {
		super(), this._registry = e, this._languageId = t, this._factory = n, this._isDisposed = !1, this._resolvePromise = null, this._isResolved = !1;
	}
	dispose() {
		this._isDisposed = !0, super.dispose();
	}
	async resolve() {
		return this._resolvePromise || (this._resolvePromise = this._create()), this._resolvePromise;
	}
	async _create() {
		const e = await this._factory.tokenizationSupport;
		this._isResolved = !0, e && !this._isDisposed && this._register(this._registry.register(this._languageId, e));
	}
}, Vo = class {
	constructor(e, t, n) {
		this.offset = e, this.type = t, this.language = n, this._tokenBrand = void 0;
	}
	toString() {
		return "(" + this.offset + ", " + this.type + ")";
	}
}, hi;
(function(e) {
	e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(hi || (hi = {}));
var N;
(function(e) {
	e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(N || (N = {}));
var mi;
(function(e) {
	const t = /* @__PURE__ */ new Map();
	t.set(N.Method, q.symbolMethod), t.set(N.Function, q.symbolFunction), t.set(N.Constructor, q.symbolConstructor), t.set(N.Field, q.symbolField), t.set(N.Variable, q.symbolVariable), t.set(N.Class, q.symbolClass), t.set(N.Struct, q.symbolStruct), t.set(N.Interface, q.symbolInterface), t.set(N.Module, q.symbolModule), t.set(N.Property, q.symbolProperty), t.set(N.Event, q.symbolEvent), t.set(N.Operator, q.symbolOperator), t.set(N.Unit, q.symbolUnit), t.set(N.Value, q.symbolValue), t.set(N.Enum, q.symbolEnum), t.set(N.Constant, q.symbolConstant), t.set(N.Enum, q.symbolEnum), t.set(N.EnumMember, q.symbolEnumMember), t.set(N.Keyword, q.symbolKeyword), t.set(N.Snippet, q.symbolSnippet), t.set(N.Text, q.symbolText), t.set(N.Color, q.symbolColor), t.set(N.File, q.symbolFile), t.set(N.Reference, q.symbolReference), t.set(N.Customcolor, q.symbolCustomColor), t.set(N.Folder, q.symbolFolder), t.set(N.TypeParameter, q.symbolTypeParameter), t.set(N.User, q.account), t.set(N.Issue, q.issues), t.set(N.Tool, q.tools);
	function n(a) {
		let o = t.get(a);
		return o || (console.info("No codicon found for CompletionItemKind " + a), o = q.symbolProperty), o;
	}
	e.toIcon = n;
	function r(a) {
		switch (a) {
			case N.Method: return $(798, "Method");
			case N.Function: return $(799, "Function");
			case N.Constructor: return $(800, "Constructor");
			case N.Field: return $(801, "Field");
			case N.Variable: return $(802, "Variable");
			case N.Class: return $(803, "Class");
			case N.Struct: return $(804, "Struct");
			case N.Interface: return $(805, "Interface");
			case N.Module: return $(806, "Module");
			case N.Property: return $(807, "Property");
			case N.Event: return $(808, "Event");
			case N.Operator: return $(809, "Operator");
			case N.Unit: return $(810, "Unit");
			case N.Value: return $(811, "Value");
			case N.Constant: return $(812, "Constant");
			case N.Enum: return $(813, "Enum");
			case N.EnumMember: return $(814, "Enum Member");
			case N.Keyword: return $(815, "Keyword");
			case N.Text: return $(816, "Text");
			case N.Color: return $(817, "Color");
			case N.File: return $(818, "File");
			case N.Reference: return $(819, "Reference");
			case N.Customcolor: return $(820, "Custom Color");
			case N.Folder: return $(821, "Folder");
			case N.TypeParameter: return $(822, "Type Parameter");
			case N.User: return $(823, "User");
			case N.Issue: return $(824, "Issue");
			case N.Tool: return $(825, "Tool");
			case N.Snippet: return $(826, "Snippet");
			default: return "";
		}
	}
	e.toLabel = r;
	const i = /* @__PURE__ */ new Map();
	i.set("method", N.Method), i.set("function", N.Function), i.set("constructor", N.Constructor), i.set("field", N.Field), i.set("variable", N.Variable), i.set("class", N.Class), i.set("struct", N.Struct), i.set("interface", N.Interface), i.set("module", N.Module), i.set("property", N.Property), i.set("event", N.Event), i.set("operator", N.Operator), i.set("unit", N.Unit), i.set("value", N.Value), i.set("constant", N.Constant), i.set("enum", N.Enum), i.set("enum-member", N.EnumMember), i.set("enumMember", N.EnumMember), i.set("keyword", N.Keyword), i.set("snippet", N.Snippet), i.set("text", N.Text), i.set("color", N.Color), i.set("file", N.File), i.set("reference", N.Reference), i.set("customcolor", N.Customcolor), i.set("folder", N.Folder), i.set("type-parameter", N.TypeParameter), i.set("typeParameter", N.TypeParameter), i.set("account", N.User), i.set("issue", N.Issue), i.set("tool", N.Tool);
	function s(a, o) {
		let u = i.get(a);
		return typeof u > "u" && !o && (u = N.Property), u;
	}
	e.fromString = s;
})(mi || (mi = {}));
var fi;
(function(e) {
	e[e.Deprecated = 1] = "Deprecated";
})(fi || (fi = {}));
var gi;
(function(e) {
	e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(gi || (gi = {}));
var _i;
(function(e) {
	e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(_i || (_i = {}));
var pi;
(function(e) {
	e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(pi || (pi = {}));
var di;
(function(e) {
	e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(di || (di = {}));
var bi;
(function(e) {
	e[e.Code = 1] = "Code", e[e.Label = 2] = "Label";
})(bi || (bi = {}));
var wi;
(function(e) {
	e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(wi || (wi = {}));
var Li;
(function(e) {
	e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Li || (Li = {}));
var vi;
(function(e) {
	e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(vi || (vi = {}));
var Ni;
(function(e) {
	e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Ni || (Ni = {}));
var Ri;
(function(e) {
	e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Ri || (Ri = {}));
var I;
(function(e) {
	e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(I || (I = {}));
I.Array, $(827, "array"), I.Boolean, $(828, "boolean"), I.Class, $(829, "class"), I.Constant, $(830, "constant"), I.Constructor, $(831, "constructor"), I.Enum, $(832, "enumeration"), I.EnumMember, $(833, "enumeration member"), I.Event, $(834, "event"), I.Field, $(835, "field"), I.File, $(836, "file"), I.Function, $(837, "function"), I.Interface, $(838, "interface"), I.Key, $(839, "key"), I.Method, $(840, "method"), I.Module, $(841, "module"), I.Namespace, $(842, "namespace"), I.Null, $(843, "null"), I.Number, $(844, "number"), I.Object, $(845, "object"), I.Operator, $(846, "operator"), I.Package, $(847, "package"), I.Property, $(848, "property"), I.String, $(849, "string"), I.Struct, $(850, "struct"), I.TypeParameter, $(851, "type parameter"), I.Variable, $(852, "variable");
var Ei;
(function(e) {
	e[e.Deprecated = 1] = "Deprecated";
})(Ei || (Ei = {}));
var Ai;
(function(e) {
	const t = /* @__PURE__ */ new Map();
	t.set(I.File, q.symbolFile), t.set(I.Module, q.symbolModule), t.set(I.Namespace, q.symbolNamespace), t.set(I.Package, q.symbolPackage), t.set(I.Class, q.symbolClass), t.set(I.Method, q.symbolMethod), t.set(I.Property, q.symbolProperty), t.set(I.Field, q.symbolField), t.set(I.Constructor, q.symbolConstructor), t.set(I.Enum, q.symbolEnum), t.set(I.Interface, q.symbolInterface), t.set(I.Function, q.symbolFunction), t.set(I.Variable, q.symbolVariable), t.set(I.Constant, q.symbolConstant), t.set(I.String, q.symbolString), t.set(I.Number, q.symbolNumber), t.set(I.Boolean, q.symbolBoolean), t.set(I.Array, q.symbolArray), t.set(I.Object, q.symbolObject), t.set(I.Key, q.symbolKey), t.set(I.Null, q.symbolNull), t.set(I.EnumMember, q.symbolEnumMember), t.set(I.Struct, q.symbolStruct), t.set(I.Event, q.symbolEvent), t.set(I.Operator, q.symbolOperator), t.set(I.TypeParameter, q.symbolTypeParameter);
	function n(s) {
		let a = t.get(s);
		return a || (console.info("No codicon found for SymbolKind " + s), a = q.symbolProperty), a;
	}
	e.toIcon = n;
	const r = /* @__PURE__ */ new Map();
	r.set(I.File, N.File), r.set(I.Module, N.Module), r.set(I.Namespace, N.Module), r.set(I.Package, N.Module), r.set(I.Class, N.Class), r.set(I.Method, N.Method), r.set(I.Property, N.Property), r.set(I.Field, N.Field), r.set(I.Constructor, N.Constructor), r.set(I.Enum, N.Enum), r.set(I.Interface, N.Interface), r.set(I.Function, N.Function), r.set(I.Variable, N.Variable), r.set(I.Constant, N.Constant), r.set(I.String, N.Text), r.set(I.Number, N.Value), r.set(I.Boolean, N.Value), r.set(I.Array, N.Value), r.set(I.Object, N.Value), r.set(I.Key, N.Keyword), r.set(I.Null, N.Value), r.set(I.EnumMember, N.EnumMember), r.set(I.Struct, N.Struct), r.set(I.Event, N.Event), r.set(I.Operator, N.Operator), r.set(I.TypeParameter, N.TypeParameter);
	function i(s) {
		let a = r.get(s);
		return a === void 0 && (console.info("No completion kind found for SymbolKind " + s), a = N.File), a;
	}
	e.toCompletionKind = i;
})(Ai || (Ai = {}));
(class Ye {
	static {
		this.Comment = new Ye("comment");
	}
	static {
		this.Imports = new Ye("imports");
	}
	static {
		this.Region = new Ye("region");
	}
	static fromValue(t) {
		switch (t) {
			case "comment": return Ye.Comment;
			case "imports": return Ye.Imports;
			case "region": return Ye.Region;
		}
		return new Ye(t);
	}
	constructor(t) {
		this.value = t;
	}
});
var yi;
(function(e) {
	e[e.AIGenerated = 1] = "AIGenerated";
})(yi || (yi = {}));
var Ti;
(function(e) {
	e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Ti || (Ti = {}));
var xi;
(function(e) {
	function t(n) {
		return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
	}
	e.is = t;
})(xi || (xi = {}));
var Mi;
(function(e) {
	e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(Mi || (Mi = {}));
var Si;
(function(e) {
	e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(Si || (Si = {}));
var ki;
(function(e) {
	e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(ki || (ki = {}));
var Ui;
(function(e) {
	e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(Ui || (Ui = {}));
var Di;
(function(e) {
	e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(Di || (Di = {}));
var Ii;
(function(e) {
	e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(Ii || (Ii = {}));
new Bo();
var Fi;
(function(e) {
	e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(Fi || (Fi = {}));
var Pi;
(function(e) {
	e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled";
})(Pi || (Pi = {}));
var Bi;
(function(e) {
	e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Bi || (Bi = {}));
var Oi;
(function(e) {
	e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(Oi || (Oi = {}));
var Vi;
(function(e) {
	e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(Vi || (Vi = {}));
var Hi;
(function(e) {
	e[e.Deprecated = 1] = "Deprecated";
})(Hi || (Hi = {}));
var qi;
(function(e) {
	e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(qi || (qi = {}));
var Wi;
(function(e) {
	e[e.EXACT = 0] = "EXACT", e[e.ABOVE = 1] = "ABOVE", e[e.BELOW = 2] = "BELOW";
})(Wi || (Wi = {}));
var $i;
(function(e) {
	e[e.NotSet = 0] = "NotSet", e[e.ContentFlush = 1] = "ContentFlush", e[e.RecoverFromMarkers = 2] = "RecoverFromMarkers", e[e.Explicit = 3] = "Explicit", e[e.Paste = 4] = "Paste", e[e.Undo = 5] = "Undo", e[e.Redo = 6] = "Redo";
})($i || ($i = {}));
var Gi;
(function(e) {
	e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Gi || (Gi = {}));
var zi;
(function(e) {
	e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(zi || (zi = {}));
var ji;
(function(e) {
	e[e.None = 0] = "None", e[e.Keep = 1] = "Keep", e[e.Brackets = 2] = "Brackets", e[e.Advanced = 3] = "Advanced", e[e.Full = 4] = "Full";
})(ji || (ji = {}));
var Xi;
(function(e) {
	e[e.acceptSuggestionOnCommitCharacter = 0] = "acceptSuggestionOnCommitCharacter", e[e.acceptSuggestionOnEnter = 1] = "acceptSuggestionOnEnter", e[e.accessibilitySupport = 2] = "accessibilitySupport", e[e.accessibilityPageSize = 3] = "accessibilityPageSize", e[e.allowOverflow = 4] = "allowOverflow", e[e.allowVariableLineHeights = 5] = "allowVariableLineHeights", e[e.allowVariableFonts = 6] = "allowVariableFonts", e[e.allowVariableFontsInAccessibilityMode = 7] = "allowVariableFontsInAccessibilityMode", e[e.ariaLabel = 8] = "ariaLabel", e[e.ariaRequired = 9] = "ariaRequired", e[e.autoClosingBrackets = 10] = "autoClosingBrackets", e[e.autoClosingComments = 11] = "autoClosingComments", e[e.screenReaderAnnounceInlineSuggestion = 12] = "screenReaderAnnounceInlineSuggestion", e[e.autoClosingDelete = 13] = "autoClosingDelete", e[e.autoClosingOvertype = 14] = "autoClosingOvertype", e[e.autoClosingQuotes = 15] = "autoClosingQuotes", e[e.autoIndent = 16] = "autoIndent", e[e.autoIndentOnPaste = 17] = "autoIndentOnPaste", e[e.autoIndentOnPasteWithinString = 18] = "autoIndentOnPasteWithinString", e[e.automaticLayout = 19] = "automaticLayout", e[e.autoSurround = 20] = "autoSurround", e[e.bracketPairColorization = 21] = "bracketPairColorization", e[e.guides = 22] = "guides", e[e.codeLens = 23] = "codeLens", e[e.codeLensFontFamily = 24] = "codeLensFontFamily", e[e.codeLensFontSize = 25] = "codeLensFontSize", e[e.colorDecorators = 26] = "colorDecorators", e[e.colorDecoratorsLimit = 27] = "colorDecoratorsLimit", e[e.columnSelection = 28] = "columnSelection", e[e.comments = 29] = "comments", e[e.contextmenu = 30] = "contextmenu", e[e.copyWithSyntaxHighlighting = 31] = "copyWithSyntaxHighlighting", e[e.cursorBlinking = 32] = "cursorBlinking", e[e.cursorSmoothCaretAnimation = 33] = "cursorSmoothCaretAnimation", e[e.cursorStyle = 34] = "cursorStyle", e[e.cursorSurroundingLines = 35] = "cursorSurroundingLines", e[e.cursorSurroundingLinesStyle = 36] = "cursorSurroundingLinesStyle", e[e.cursorWidth = 37] = "cursorWidth", e[e.cursorHeight = 38] = "cursorHeight", e[e.disableLayerHinting = 39] = "disableLayerHinting", e[e.disableMonospaceOptimizations = 40] = "disableMonospaceOptimizations", e[e.domReadOnly = 41] = "domReadOnly", e[e.dragAndDrop = 42] = "dragAndDrop", e[e.dropIntoEditor = 43] = "dropIntoEditor", e[e.editContext = 44] = "editContext", e[e.emptySelectionClipboard = 45] = "emptySelectionClipboard", e[e.experimentalGpuAcceleration = 46] = "experimentalGpuAcceleration", e[e.experimentalWhitespaceRendering = 47] = "experimentalWhitespaceRendering", e[e.extraEditorClassName = 48] = "extraEditorClassName", e[e.fastScrollSensitivity = 49] = "fastScrollSensitivity", e[e.find = 50] = "find", e[e.fixedOverflowWidgets = 51] = "fixedOverflowWidgets", e[e.folding = 52] = "folding", e[e.foldingStrategy = 53] = "foldingStrategy", e[e.foldingHighlight = 54] = "foldingHighlight", e[e.foldingImportsByDefault = 55] = "foldingImportsByDefault", e[e.foldingMaximumRegions = 56] = "foldingMaximumRegions", e[e.unfoldOnClickAfterEndOfLine = 57] = "unfoldOnClickAfterEndOfLine", e[e.fontFamily = 58] = "fontFamily", e[e.fontInfo = 59] = "fontInfo", e[e.fontLigatures = 60] = "fontLigatures", e[e.fontSize = 61] = "fontSize", e[e.fontWeight = 62] = "fontWeight", e[e.fontVariations = 63] = "fontVariations", e[e.formatOnPaste = 64] = "formatOnPaste", e[e.formatOnType = 65] = "formatOnType", e[e.glyphMargin = 66] = "glyphMargin", e[e.gotoLocation = 67] = "gotoLocation", e[e.hideCursorInOverviewRuler = 68] = "hideCursorInOverviewRuler", e[e.hover = 69] = "hover", e[e.inDiffEditor = 70] = "inDiffEditor", e[e.inlineSuggest = 71] = "inlineSuggest", e[e.letterSpacing = 72] = "letterSpacing", e[e.lightbulb = 73] = "lightbulb", e[e.lineDecorationsWidth = 74] = "lineDecorationsWidth", e[e.lineHeight = 75] = "lineHeight", e[e.lineNumbers = 76] = "lineNumbers", e[e.lineNumbersMinChars = 77] = "lineNumbersMinChars", e[e.linkedEditing = 78] = "linkedEditing", e[e.links = 79] = "links", e[e.matchBrackets = 80] = "matchBrackets", e[e.minimap = 81] = "minimap", e[e.mouseStyle = 82] = "mouseStyle", e[e.mouseWheelScrollSensitivity = 83] = "mouseWheelScrollSensitivity", e[e.mouseWheelZoom = 84] = "mouseWheelZoom", e[e.multiCursorMergeOverlapping = 85] = "multiCursorMergeOverlapping", e[e.multiCursorModifier = 86] = "multiCursorModifier", e[e.mouseMiddleClickAction = 87] = "mouseMiddleClickAction", e[e.multiCursorPaste = 88] = "multiCursorPaste", e[e.multiCursorLimit = 89] = "multiCursorLimit", e[e.occurrencesHighlight = 90] = "occurrencesHighlight", e[e.occurrencesHighlightDelay = 91] = "occurrencesHighlightDelay", e[e.overtypeCursorStyle = 92] = "overtypeCursorStyle", e[e.overtypeOnPaste = 93] = "overtypeOnPaste", e[e.overviewRulerBorder = 94] = "overviewRulerBorder", e[e.overviewRulerLanes = 95] = "overviewRulerLanes", e[e.padding = 96] = "padding", e[e.pasteAs = 97] = "pasteAs", e[e.parameterHints = 98] = "parameterHints", e[e.peekWidgetDefaultFocus = 99] = "peekWidgetDefaultFocus", e[e.placeholder = 100] = "placeholder", e[e.definitionLinkOpensInPeek = 101] = "definitionLinkOpensInPeek", e[e.quickSuggestions = 102] = "quickSuggestions", e[e.quickSuggestionsDelay = 103] = "quickSuggestionsDelay", e[e.readOnly = 104] = "readOnly", e[e.readOnlyMessage = 105] = "readOnlyMessage", e[e.renameOnType = 106] = "renameOnType", e[e.renderRichScreenReaderContent = 107] = "renderRichScreenReaderContent", e[e.renderControlCharacters = 108] = "renderControlCharacters", e[e.renderFinalNewline = 109] = "renderFinalNewline", e[e.renderLineHighlight = 110] = "renderLineHighlight", e[e.renderLineHighlightOnlyWhenFocus = 111] = "renderLineHighlightOnlyWhenFocus", e[e.renderValidationDecorations = 112] = "renderValidationDecorations", e[e.renderWhitespace = 113] = "renderWhitespace", e[e.revealHorizontalRightPadding = 114] = "revealHorizontalRightPadding", e[e.roundedSelection = 115] = "roundedSelection", e[e.rulers = 116] = "rulers", e[e.scrollbar = 117] = "scrollbar", e[e.scrollBeyondLastColumn = 118] = "scrollBeyondLastColumn", e[e.scrollBeyondLastLine = 119] = "scrollBeyondLastLine", e[e.scrollPredominantAxis = 120] = "scrollPredominantAxis", e[e.selectionClipboard = 121] = "selectionClipboard", e[e.selectionHighlight = 122] = "selectionHighlight", e[e.selectionHighlightMaxLength = 123] = "selectionHighlightMaxLength", e[e.selectionHighlightMultiline = 124] = "selectionHighlightMultiline", e[e.selectOnLineNumbers = 125] = "selectOnLineNumbers", e[e.showFoldingControls = 126] = "showFoldingControls", e[e.showUnused = 127] = "showUnused", e[e.snippetSuggestions = 128] = "snippetSuggestions", e[e.smartSelect = 129] = "smartSelect", e[e.smoothScrolling = 130] = "smoothScrolling", e[e.stickyScroll = 131] = "stickyScroll", e[e.stickyTabStops = 132] = "stickyTabStops", e[e.stopRenderingLineAfter = 133] = "stopRenderingLineAfter", e[e.suggest = 134] = "suggest", e[e.suggestFontSize = 135] = "suggestFontSize", e[e.suggestLineHeight = 136] = "suggestLineHeight", e[e.suggestOnTriggerCharacters = 137] = "suggestOnTriggerCharacters", e[e.suggestSelection = 138] = "suggestSelection", e[e.tabCompletion = 139] = "tabCompletion", e[e.tabIndex = 140] = "tabIndex", e[e.trimWhitespaceOnDelete = 141] = "trimWhitespaceOnDelete", e[e.unicodeHighlighting = 142] = "unicodeHighlighting", e[e.unusualLineTerminators = 143] = "unusualLineTerminators", e[e.useShadowDOM = 144] = "useShadowDOM", e[e.useTabStops = 145] = "useTabStops", e[e.wordBreak = 146] = "wordBreak", e[e.wordSegmenterLocales = 147] = "wordSegmenterLocales", e[e.wordSeparators = 148] = "wordSeparators", e[e.wordWrap = 149] = "wordWrap", e[e.wordWrapBreakAfterCharacters = 150] = "wordWrapBreakAfterCharacters", e[e.wordWrapBreakBeforeCharacters = 151] = "wordWrapBreakBeforeCharacters", e[e.wordWrapColumn = 152] = "wordWrapColumn", e[e.wordWrapOverride1 = 153] = "wordWrapOverride1", e[e.wordWrapOverride2 = 154] = "wordWrapOverride2", e[e.wrappingIndent = 155] = "wrappingIndent", e[e.wrappingStrategy = 156] = "wrappingStrategy", e[e.showDeprecated = 157] = "showDeprecated", e[e.inertialScroll = 158] = "inertialScroll", e[e.inlayHints = 159] = "inlayHints", e[e.wrapOnEscapedLineFeeds = 160] = "wrapOnEscapedLineFeeds", e[e.effectiveCursorStyle = 161] = "effectiveCursorStyle", e[e.editorClassName = 162] = "editorClassName", e[e.pixelRatio = 163] = "pixelRatio", e[e.tabFocusMode = 164] = "tabFocusMode", e[e.layoutInfo = 165] = "layoutInfo", e[e.wrappingInfo = 166] = "wrappingInfo", e[e.defaultColorDecorators = 167] = "defaultColorDecorators", e[e.colorDecoratorsActivatedOn = 168] = "colorDecoratorsActivatedOn", e[e.inlineCompletionsAccessibilityVerbose = 169] = "inlineCompletionsAccessibilityVerbose", e[e.effectiveEditContext = 170] = "effectiveEditContext", e[e.scrollOnMiddleClick = 171] = "scrollOnMiddleClick", e[e.effectiveAllowVariableFonts = 172] = "effectiveAllowVariableFonts";
})(Xi || (Xi = {}));
var Yi;
(function(e) {
	e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Yi || (Yi = {}));
var Qi;
(function(e) {
	e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Qi || (Qi = {}));
var Zi;
(function(e) {
	e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(Zi || (Zi = {}));
var Ji;
(function(e) {
	e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(Ji || (Ji = {}));
var Ki;
(function(e) {
	e[e.None = 0] = "None", e[e.Indent = 1] = "Indent", e[e.IndentOutdent = 2] = "IndentOutdent", e[e.Outdent = 3] = "Outdent";
})(Ki || (Ki = {}));
var Ci;
(function(e) {
	e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(Ci || (Ci = {}));
var es;
(function(e) {
	e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(es || (es = {}));
var ts;
(function(e) {
	e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(ts || (ts = {}));
var ns;
(function(e) {
	e[e.Code = 1] = "Code", e[e.Label = 2] = "Label";
})(ns || (ns = {}));
var rs;
(function(e) {
	e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(rs || (rs = {}));
var br;
(function(e) {
	e[e.DependsOnKbLayout = -1] = "DependsOnKbLayout", e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.Digit0 = 21] = "Digit0", e[e.Digit1 = 22] = "Digit1", e[e.Digit2 = 23] = "Digit2", e[e.Digit3 = 24] = "Digit3", e[e.Digit4 = 25] = "Digit4", e[e.Digit5 = 26] = "Digit5", e[e.Digit6 = 27] = "Digit6", e[e.Digit7 = 28] = "Digit7", e[e.Digit8 = 29] = "Digit8", e[e.Digit9 = 30] = "Digit9", e[e.KeyA = 31] = "KeyA", e[e.KeyB = 32] = "KeyB", e[e.KeyC = 33] = "KeyC", e[e.KeyD = 34] = "KeyD", e[e.KeyE = 35] = "KeyE", e[e.KeyF = 36] = "KeyF", e[e.KeyG = 37] = "KeyG", e[e.KeyH = 38] = "KeyH", e[e.KeyI = 39] = "KeyI", e[e.KeyJ = 40] = "KeyJ", e[e.KeyK = 41] = "KeyK", e[e.KeyL = 42] = "KeyL", e[e.KeyM = 43] = "KeyM", e[e.KeyN = 44] = "KeyN", e[e.KeyO = 45] = "KeyO", e[e.KeyP = 46] = "KeyP", e[e.KeyQ = 47] = "KeyQ", e[e.KeyR = 48] = "KeyR", e[e.KeyS = 49] = "KeyS", e[e.KeyT = 50] = "KeyT", e[e.KeyU = 51] = "KeyU", e[e.KeyV = 52] = "KeyV", e[e.KeyW = 53] = "KeyW", e[e.KeyX = 54] = "KeyX", e[e.KeyY = 55] = "KeyY", e[e.KeyZ = 56] = "KeyZ", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.F20 = 78] = "F20", e[e.F21 = 79] = "F21", e[e.F22 = 80] = "F22", e[e.F23 = 81] = "F23", e[e.F24 = 82] = "F24", e[e.NumLock = 83] = "NumLock", e[e.ScrollLock = 84] = "ScrollLock", e[e.Semicolon = 85] = "Semicolon", e[e.Equal = 86] = "Equal", e[e.Comma = 87] = "Comma", e[e.Minus = 88] = "Minus", e[e.Period = 89] = "Period", e[e.Slash = 90] = "Slash", e[e.Backquote = 91] = "Backquote", e[e.BracketLeft = 92] = "BracketLeft", e[e.Backslash = 93] = "Backslash", e[e.BracketRight = 94] = "BracketRight", e[e.Quote = 95] = "Quote", e[e.OEM_8 = 96] = "OEM_8", e[e.IntlBackslash = 97] = "IntlBackslash", e[e.Numpad0 = 98] = "Numpad0", e[e.Numpad1 = 99] = "Numpad1", e[e.Numpad2 = 100] = "Numpad2", e[e.Numpad3 = 101] = "Numpad3", e[e.Numpad4 = 102] = "Numpad4", e[e.Numpad5 = 103] = "Numpad5", e[e.Numpad6 = 104] = "Numpad6", e[e.Numpad7 = 105] = "Numpad7", e[e.Numpad8 = 106] = "Numpad8", e[e.Numpad9 = 107] = "Numpad9", e[e.NumpadMultiply = 108] = "NumpadMultiply", e[e.NumpadAdd = 109] = "NumpadAdd", e[e.NUMPAD_SEPARATOR = 110] = "NUMPAD_SEPARATOR", e[e.NumpadSubtract = 111] = "NumpadSubtract", e[e.NumpadDecimal = 112] = "NumpadDecimal", e[e.NumpadDivide = 113] = "NumpadDivide", e[e.KEY_IN_COMPOSITION = 114] = "KEY_IN_COMPOSITION", e[e.ABNT_C1 = 115] = "ABNT_C1", e[e.ABNT_C2 = 116] = "ABNT_C2", e[e.AudioVolumeMute = 117] = "AudioVolumeMute", e[e.AudioVolumeUp = 118] = "AudioVolumeUp", e[e.AudioVolumeDown = 119] = "AudioVolumeDown", e[e.BrowserSearch = 120] = "BrowserSearch", e[e.BrowserHome = 121] = "BrowserHome", e[e.BrowserBack = 122] = "BrowserBack", e[e.BrowserForward = 123] = "BrowserForward", e[e.MediaTrackNext = 124] = "MediaTrackNext", e[e.MediaTrackPrevious = 125] = "MediaTrackPrevious", e[e.MediaStop = 126] = "MediaStop", e[e.MediaPlayPause = 127] = "MediaPlayPause", e[e.LaunchMediaPlayer = 128] = "LaunchMediaPlayer", e[e.LaunchMail = 129] = "LaunchMail", e[e.LaunchApp2 = 130] = "LaunchApp2", e[e.Clear = 131] = "Clear", e[e.MAX_VALUE = 132] = "MAX_VALUE";
})(br || (br = {}));
var wr;
(function(e) {
	e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
})(wr || (wr = {}));
var Lr;
(function(e) {
	e[e.Unnecessary = 1] = "Unnecessary", e[e.Deprecated = 2] = "Deprecated";
})(Lr || (Lr = {}));
var is;
(function(e) {
	e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(is || (is = {}));
var ss;
(function(e) {
	e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(ss || (ss = {}));
var as;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TEXTAREA = 1] = "TEXTAREA", e[e.GUTTER_GLYPH_MARGIN = 2] = "GUTTER_GLYPH_MARGIN", e[e.GUTTER_LINE_NUMBERS = 3] = "GUTTER_LINE_NUMBERS", e[e.GUTTER_LINE_DECORATIONS = 4] = "GUTTER_LINE_DECORATIONS", e[e.GUTTER_VIEW_ZONE = 5] = "GUTTER_VIEW_ZONE", e[e.CONTENT_TEXT = 6] = "CONTENT_TEXT", e[e.CONTENT_EMPTY = 7] = "CONTENT_EMPTY", e[e.CONTENT_VIEW_ZONE = 8] = "CONTENT_VIEW_ZONE", e[e.CONTENT_WIDGET = 9] = "CONTENT_WIDGET", e[e.OVERVIEW_RULER = 10] = "OVERVIEW_RULER", e[e.SCROLLBAR = 11] = "SCROLLBAR", e[e.OVERLAY_WIDGET = 12] = "OVERLAY_WIDGET", e[e.OUTSIDE_EDITOR = 13] = "OUTSIDE_EDITOR";
})(as || (as = {}));
var ls;
(function(e) {
	e[e.AIGenerated = 1] = "AIGenerated";
})(ls || (ls = {}));
var os;
(function(e) {
	e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(os || (os = {}));
var us;
(function(e) {
	e[e.TOP_RIGHT_CORNER = 0] = "TOP_RIGHT_CORNER", e[e.BOTTOM_RIGHT_CORNER = 1] = "BOTTOM_RIGHT_CORNER", e[e.TOP_CENTER = 2] = "TOP_CENTER";
})(us || (us = {}));
var cs;
(function(e) {
	e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(cs || (cs = {}));
var hs;
(function(e) {
	e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(hs || (hs = {}));
var ms;
(function(e) {
	e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(ms || (ms = {}));
var fs;
(function(e) {
	e[e.Off = 0] = "Off", e[e.On = 1] = "On", e[e.Relative = 2] = "Relative", e[e.Interval = 3] = "Interval", e[e.Custom = 4] = "Custom";
})(fs || (fs = {}));
var gs;
(function(e) {
	e[e.None = 0] = "None", e[e.Text = 1] = "Text", e[e.Blocks = 2] = "Blocks";
})(gs || (gs = {}));
var _s;
(function(e) {
	e[e.Smooth = 0] = "Smooth", e[e.Immediate = 1] = "Immediate";
})(_s || (_s = {}));
var ps;
(function(e) {
	e[e.Auto = 1] = "Auto", e[e.Hidden = 2] = "Hidden", e[e.Visible = 3] = "Visible";
})(ps || (ps = {}));
var vr;
(function(e) {
	e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(vr || (vr = {}));
var ds;
(function(e) {
	e.Off = "off", e.OnCode = "onCode", e.On = "on";
})(ds || (ds = {}));
var bs;
(function(e) {
	e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(bs || (bs = {}));
var ws;
(function(e) {
	e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(ws || (ws = {}));
var Ls;
(function(e) {
	e[e.Deprecated = 1] = "Deprecated";
})(Ls || (Ls = {}));
var vs;
(function(e) {
	e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(vs || (vs = {}));
var Ns;
(function(e) {
	e[e.Hidden = 0] = "Hidden", e[e.Blink = 1] = "Blink", e[e.Smooth = 2] = "Smooth", e[e.Phase = 3] = "Phase", e[e.Expand = 4] = "Expand", e[e.Solid = 5] = "Solid";
})(Ns || (Ns = {}));
var Rs;
(function(e) {
	e[e.Line = 1] = "Line", e[e.Block = 2] = "Block", e[e.Underline = 3] = "Underline", e[e.LineThin = 4] = "LineThin", e[e.BlockOutline = 5] = "BlockOutline", e[e.UnderlineThin = 6] = "UnderlineThin";
})(Rs || (Rs = {}));
var Es;
(function(e) {
	e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(Es || (Es = {}));
var As;
(function(e) {
	e[e.None = 0] = "None", e[e.Same = 1] = "Same", e[e.Indent = 2] = "Indent", e[e.DeepIndent = 3] = "DeepIndent";
})(As || (As = {}));
var Ho = class {
	static {
		this.CtrlCmd = Nt.CtrlCmd;
	}
	static {
		this.Shift = Nt.Shift;
	}
	static {
		this.Alt = Nt.Alt;
	}
	static {
		this.WinCtrl = Nt.WinCtrl;
	}
	static chord(e, t) {
		return oo(e, t);
	}
};
function qo() {
	return {
		editor: void 0,
		languages: void 0,
		CancellationTokenSource: gl,
		Emitter: ke,
		KeyCode: br,
		KeyMod: Ho,
		Position: Y,
		Range: V,
		Selection: Io,
		SelectionDirection: vr,
		MarkerSeverity: wr,
		MarkerTag: Lr,
		Uri: ve,
		Token: Vo
	};
}
const Ir = 3600 * 24;
Ir * 7;
Ir * 30;
Ir * 365;
var St;
(function(e) {
	e[e.Regular = 0] = "Regular", e[e.Whitespace = 1] = "Whitespace", e[e.WordSeparator = 2] = "WordSeparator";
})(St || (St = {}));
new Ua(10);
var ys;
(function(e) {
	e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 4] = "Right", e[e.Full = 7] = "Full";
})(ys || (ys = {}));
var Ts;
(function(e) {
	e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right";
})(Ts || (Ts = {}));
var xs;
(function(e) {
	e[e.Inline = 1] = "Inline", e[e.Gutter = 2] = "Gutter";
})(xs || (xs = {}));
var Ms;
(function(e) {
	e[e.Normal = 1] = "Normal", e[e.Underlined = 2] = "Underlined";
})(Ms || (Ms = {}));
var Ss;
(function(e) {
	e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
})(Ss || (Ss = {}));
var ks;
(function(e) {
	e[e.Both = 0] = "Both", e[e.Right = 1] = "Right", e[e.Left = 2] = "Left", e[e.None = 3] = "None";
})(ks || (ks = {}));
var Us;
(function(e) {
	e[e.TextDefined = 0] = "TextDefined", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Us || (Us = {}));
var Ds;
(function(e) {
	e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Ds || (Ds = {}));
var Is;
(function(e) {
	e[e.LF = 0] = "LF", e[e.CRLF = 1] = "CRLF";
})(Is || (Is = {}));
var Fs;
(function(e) {
	e[e.AlwaysGrowsWhenTypingAtEdges = 0] = "AlwaysGrowsWhenTypingAtEdges", e[e.NeverGrowsWhenTypingAtEdges = 1] = "NeverGrowsWhenTypingAtEdges", e[e.GrowsOnlyWhenTypingBefore = 2] = "GrowsOnlyWhenTypingBefore", e[e.GrowsOnlyWhenTypingAfter = 3] = "GrowsOnlyWhenTypingAfter";
})(Fs || (Fs = {}));
var Ps;
(function(e) {
	e[e.Left = 0] = "Left", e[e.Right = 1] = "Right", e[e.None = 2] = "None", e[e.LeftOfInjectedText = 3] = "LeftOfInjectedText", e[e.RightOfInjectedText = 4] = "RightOfInjectedText";
})(Ps || (Ps = {}));
var Bs;
(function(e) {
	e[e.FIRST_LINE_DETECTION_LENGTH_LIMIT = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(Bs || (Bs = {}));
function Go(e) {
	if (!e || e.length === 0) return !1;
	for (let t = 0, n = e.length; t < n; t++) {
		const r = e.charCodeAt(t);
		if (r === L.LineFeed) return !0;
		if (r === L.Backslash) {
			if (t++, t >= n) break;
			const i = e.charCodeAt(t);
			if (i === L.n || i === L.r || i === L.W) return !0;
		}
	}
	return !1;
}
function zo(e, t, n, r, i) {
	if (r === 0) return !0;
	const s = t.charCodeAt(r - 1);
	if (e.get(s) !== St.Regular || s === L.CarriageReturn || s === L.LineFeed) return !0;
	if (i > 0) {
		const a = t.charCodeAt(r);
		if (e.get(a) !== St.Regular) return !0;
	}
	return !1;
}
function jo(e, t, n, r, i) {
	if (r + i === n) return !0;
	const s = t.charCodeAt(r + i);
	if (e.get(s) !== St.Regular || s === L.CarriageReturn || s === L.LineFeed) return !0;
	if (i > 0) {
		const a = t.charCodeAt(r + i - 1);
		if (e.get(a) !== St.Regular) return !0;
	}
	return !1;
}
function Xo(e, t, n, r, i) {
	return zo(e, t, n, r, i) && jo(e, t, n, r, i);
}
var Yo = class {
	constructor(e, t) {
		this._wordSeparators = e, this._searchRegex = t, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
	}
	reset(e) {
		this._searchRegex.lastIndex = e, this._prevMatchStartIndex = -1, this._prevMatchLength = 0;
	}
	next(e) {
		const t = e.length;
		let n;
		do {
			if (this._prevMatchStartIndex + this._prevMatchLength === t || (n = this._searchRegex.exec(e), !n)) return null;
			const r = n.index, i = n[0].length;
			if (r === this._prevMatchStartIndex && i === this._prevMatchLength) {
				if (i === 0) {
					Al(e, t, this._searchRegex.lastIndex) > 65535 ? this._searchRegex.lastIndex += 2 : this._searchRegex.lastIndex += 1;
					continue;
				}
				return null;
			}
			if (this._prevMatchStartIndex = r, this._prevMatchLength = i, !this._wordSeparators || Xo(this._wordSeparators, e, t, r, i)) return n;
		} while (n);
		return null;
	}
};
const Qo = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function Zo(e = "") {
	let t = "(-?\\d*\\.\\d\\w*)|([^";
	for (const n of Qo) e.indexOf(n) >= 0 || (t += "\\" + n);
	return t += "\\s]+)", new RegExp(t, "g");
}
const X1 = Zo();
function Y1(e) {
	let t = X1;
	if (e && e instanceof RegExp) if (e.global) t = e;
	else {
		let n = "g";
		e.ignoreCase && (n += "i"), e.multiline && (n += "m"), e.unicode && (n += "u"), t = new RegExp(e.source, n);
	}
	return t.lastIndex = 0, t;
}
const Q1 = new Ha();
Q1.unshift({
	maxLen: 1e3,
	windowSize: 15,
	timeBudget: 150
});
function Fr(e, t, n, r, i) {
	if (t = Y1(t), i || (i = yn.first(Q1)), n.length > i.maxLen) {
		let c = e - i.maxLen / 2;
		return c < 0 ? c = 0 : r += c, n = n.substring(c, e + i.maxLen / 2), Fr(e, t, n, r, i);
	}
	const s = Date.now(), a = e - 1 - r;
	let o = -1, u = null;
	for (let c = 1; !(Date.now() - s >= i.timeBudget); c++) {
		const m = a - i.windowSize * c;
		t.lastIndex = Math.max(0, m);
		const h = Jo(t, n, a, o);
		if (!h && u || (u = h, m <= 0)) break;
		o = m;
	}
	if (u) {
		const c = {
			word: u[0],
			startColumn: r + 1 + u.index,
			endColumn: r + 1 + u.index + u[0].length
		};
		return t.lastIndex = 0, c;
	}
	return null;
}
function Jo(e, t, n, r) {
	let i;
	for (; i = e.exec(t);) {
		const s = i.index || 0;
		if (s <= n && e.lastIndex >= n) return i;
		if (r > 0 && s > r) return null;
	}
	return null;
}
var Ko = class {
	static computeUnicodeHighlights(e, t, n) {
		const r = n ? n.startLineNumber : 1, i = n ? n.endLineNumber : e.getLineCount(), s = new Os(t), a = s.getCandidateCodePoints();
		let o;
		a === "allNonBasicAscii" ? o = /* @__PURE__ */ new RegExp("[^\\t\\n\\r\\x20-\\x7E]", "g") : o = new RegExp(`${Co(Array.from(a))}`, "g");
		const u = new Yo(null, o), c = [];
		let m = !1, h, p = 0, _ = 0, d = 0;
		e: for (let b = r, A = i; b <= A; b++) {
			const R = e.getLineContent(b), E = R.length;
			u.reset(0);
			do
				if (h = u.next(R), h) {
					let y = h.index, S = h.index + h[0].length;
					y > 0 && kn(R.charCodeAt(y - 1)) && y--, S + 1 < E && kn(R.charCodeAt(S - 1)) && S++;
					const D = R.substring(y, S);
					let T = Fr(y + 1, X1, R, 0);
					T && T.endColumn <= y + 1 && (T = null);
					const v = s.shouldHighlightNonBasicASCII(D, T ? T.word : null);
					if (v !== me.None) {
						if (v === me.Ambiguous ? p++ : v === me.Invisible ? _++ : v === me.NonBasicASCII ? d++ : Da(), c.length >= 1e3) {
							m = !0;
							break e;
						}
						c.push(new V(b, y + 1, b, S + 1));
					}
				}
			while (h);
		}
		return {
			ranges: c,
			hasMore: m,
			ambiguousCharacterCount: p,
			invisibleCharacterCount: _,
			nonBasicAsciiCharacterCount: d
		};
	}
	static computeUnicodeHighlightReason(e, t) {
		const n = new Os(t);
		switch (n.shouldHighlightNonBasicASCII(e, null)) {
			case me.None: return null;
			case me.Invisible: return { kind: Qt.Invisible };
			case me.Ambiguous: {
				const r = e.codePointAt(0), i = n.ambiguousCharacters.getPrimaryConfusable(r), s = ur.getLocales().filter((a) => !ur.getInstance(new Set([...t.allowedLocales, a])).isAmbiguous(r));
				return {
					kind: Qt.Ambiguous,
					confusableWith: String.fromCodePoint(i),
					notAmbiguousInLocales: s
				};
			}
			case me.NonBasicASCII: return { kind: Qt.NonBasicAscii };
		}
	}
};
function Co(e, t) {
	return `[${dl(e.map((n) => String.fromCodePoint(n)).join(""))}]`;
}
var Qt;
(function(e) {
	e[e.Ambiguous = 0] = "Ambiguous", e[e.Invisible = 1] = "Invisible", e[e.NonBasicAscii = 2] = "NonBasicAscii";
})(Qt || (Qt = {}));
var Os = class {
	constructor(e) {
		this.options = e, this.allowedCodePoints = new Set(e.allowedCodePoints), this.ambiguousCharacters = ur.getInstance(new Set(e.allowedLocales));
	}
	getCandidateCodePoints() {
		if (this.options.nonBasicASCII) return "allNonBasicAscii";
		const e = /* @__PURE__ */ new Set();
		if (this.options.invisibleCharacters) for (const t of qn.codePoints) Vs(String.fromCodePoint(t)) || e.add(t);
		if (this.options.ambiguousCharacters) for (const t of this.ambiguousCharacters.getConfusableCodePoints()) e.add(t);
		for (const t of this.allowedCodePoints) e.delete(t);
		return e;
	}
	shouldHighlightNonBasicASCII(e, t) {
		const n = e.codePointAt(0);
		if (this.allowedCodePoints.has(n)) return me.None;
		if (this.options.nonBasicASCII) return me.NonBasicASCII;
		let r = !1, i = !1;
		if (t) for (const s of t) {
			const a = s.codePointAt(0), o = Tl(s);
			r = r || o, !o && !this.ambiguousCharacters.isAmbiguous(a) && !qn.isInvisibleCharacter(a) && (i = !0);
		}
		return !r && i ? me.None : this.options.invisibleCharacters && !Vs(e) && qn.isInvisibleCharacter(n) ? me.Invisible : this.options.ambiguousCharacters && this.ambiguousCharacters.isAmbiguous(n) ? me.Ambiguous : me.None;
	}
};
function Vs(e) {
	return e === " " || e === `
` || e === "	";
}
var me;
(function(e) {
	e[e.None = 0] = "None", e[e.NonBasicASCII = 1] = "NonBasicASCII", e[e.Invisible = 2] = "Invisible", e[e.Ambiguous = 3] = "Ambiguous";
})(me || (me = {}));
var Ln = class {
	constructor(e, t, n) {
		this.changes = e, this.moves = t, this.hitTimeout = n;
	}
}, eu = class Z1 {
	constructor(t, n) {
		this.lineRangeMapping = t, this.changes = n;
	}
	flip() {
		return new Z1(this.lineRangeMapping.flip(), this.changes.map((t) => t.flip()));
	}
}, G = class _e {
	static fromTo(t, n) {
		return new _e(t, n);
	}
	static addRange(t, n) {
		let r = 0;
		for (; r < n.length && n[r].endExclusive < t.start;) r++;
		let i = r;
		for (; i < n.length && n[i].start <= t.endExclusive;) i++;
		if (r === i) n.splice(r, 0, t);
		else {
			const s = Math.min(t.start, n[r].start), a = Math.max(t.endExclusive, n[i - 1].endExclusive);
			n.splice(r, i - r, new _e(s, a));
		}
	}
	static tryCreate(t, n) {
		if (!(t > n)) return new _e(t, n);
	}
	static ofLength(t) {
		return new _e(0, t);
	}
	static ofStartAndLength(t, n) {
		return new _e(t, t + n);
	}
	static emptyAt(t) {
		return new _e(t, t);
	}
	constructor(t, n) {
		if (this.start = t, this.endExclusive = n, t > n) throw new se(`Invalid range: ${this.toString()}`);
	}
	get isEmpty() {
		return this.start === this.endExclusive;
	}
	delta(t) {
		return new _e(this.start + t, this.endExclusive + t);
	}
	deltaStart(t) {
		return new _e(this.start + t, this.endExclusive);
	}
	deltaEnd(t) {
		return new _e(this.start, this.endExclusive + t);
	}
	get length() {
		return this.endExclusive - this.start;
	}
	toString() {
		return `[${this.start}, ${this.endExclusive})`;
	}
	equals(t) {
		return this.start === t.start && this.endExclusive === t.endExclusive;
	}
	containsRange(t) {
		return this.start <= t.start && t.endExclusive <= this.endExclusive;
	}
	contains(t) {
		return this.start <= t && t < this.endExclusive;
	}
	join(t) {
		return new _e(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
	}
	intersect(t) {
		const n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
		if (n <= r) return new _e(n, r);
	}
	intersectionLength(t) {
		const n = Math.max(this.start, t.start), r = Math.min(this.endExclusive, t.endExclusive);
		return Math.max(0, r - n);
	}
	intersects(t) {
		return Math.max(this.start, t.start) < Math.min(this.endExclusive, t.endExclusive);
	}
	intersectsOrTouches(t) {
		return Math.max(this.start, t.start) <= Math.min(this.endExclusive, t.endExclusive);
	}
	isBefore(t) {
		return this.endExclusive <= t.start;
	}
	isAfter(t) {
		return this.start >= t.endExclusive;
	}
	slice(t) {
		return t.slice(this.start, this.endExclusive);
	}
	substring(t) {
		return t.substring(this.start, this.endExclusive);
	}
	clip(t) {
		if (this.isEmpty) throw new se(`Invalid clipping range: ${this.toString()}`);
		return Math.max(this.start, Math.min(this.endExclusive - 1, t));
	}
	clipCyclic(t) {
		if (this.isEmpty) throw new se(`Invalid clipping range: ${this.toString()}`);
		return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
	}
	map(t) {
		const n = [];
		for (let r = this.start; r < this.endExclusive; r++) n.push(t(r));
		return n;
	}
	forEach(t) {
		for (let n = this.start; n < this.endExclusive; n++) t(n);
	}
	joinRightTouching(t) {
		if (this.endExclusive !== t.start) throw new se(`Invalid join: ${this.toString()} and ${t.toString()}`);
		return new _e(this.start, t.endExclusive);
	}
	withMargin(t, n) {
		return n === void 0 && (n = t), new _e(this.start - t, this.endExclusive + n);
	}
}, Q = class fe {
	static ofLength(t, n) {
		return new fe(t, t + n);
	}
	static fromRange(t) {
		return new fe(t.startLineNumber, t.endLineNumber);
	}
	static fromRangeInclusive(t) {
		return new fe(t.startLineNumber, t.endLineNumber + 1);
	}
	static {
		this.compareByStart = ot((t) => t.startLineNumber, Et);
	}
	static subtract(t, n) {
		return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [new fe(t.startLineNumber, n.startLineNumber), new fe(n.endLineNumberExclusive, t.endLineNumberExclusive)] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new fe(Math.max(n.endLineNumberExclusive, t.startLineNumber), t.endLineNumberExclusive)] : [new fe(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
	}
	static joinMany(t) {
		if (t.length === 0) return [];
		let n = new Pn(t[0].slice());
		for (let r = 1; r < t.length; r++) n = n.getUnion(new Pn(t[r].slice()));
		return n.ranges;
	}
	static join(t) {
		if (t.length === 0) throw new se("lineRanges cannot be empty");
		let n = t[0].startLineNumber, r = t[0].endLineNumberExclusive;
		for (let i = 1; i < t.length; i++) n = Math.min(n, t[i].startLineNumber), r = Math.max(r, t[i].endLineNumberExclusive);
		return new fe(n, r);
	}
	static deserialize(t) {
		return new fe(t[0], t[1]);
	}
	constructor(t, n) {
		if (t > n) throw new se(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
		this.startLineNumber = t, this.endLineNumberExclusive = n;
	}
	contains(t) {
		return this.startLineNumber <= t && t < this.endLineNumberExclusive;
	}
	containsRange(t) {
		return this.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= this.endLineNumberExclusive;
	}
	get isEmpty() {
		return this.startLineNumber === this.endLineNumberExclusive;
	}
	delta(t) {
		return new fe(this.startLineNumber + t, this.endLineNumberExclusive + t);
	}
	deltaLength(t) {
		return new fe(this.startLineNumber, this.endLineNumberExclusive + t);
	}
	get length() {
		return this.endLineNumberExclusive - this.startLineNumber;
	}
	join(t) {
		return new fe(Math.min(this.startLineNumber, t.startLineNumber), Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive));
	}
	toString() {
		return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
	}
	intersect(t) {
		const n = Math.max(this.startLineNumber, t.startLineNumber), r = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
		if (n <= r) return new fe(n, r);
	}
	intersectsStrict(t) {
		return this.startLineNumber < t.endLineNumberExclusive && t.startLineNumber < this.endLineNumberExclusive;
	}
	intersectsOrTouches(t) {
		return this.startLineNumber <= t.endLineNumberExclusive && t.startLineNumber <= this.endLineNumberExclusive;
	}
	equals(t) {
		return this.startLineNumber === t.startLineNumber && this.endLineNumberExclusive === t.endLineNumberExclusive;
	}
	toInclusiveRange() {
		return this.isEmpty ? null : new V(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
	}
	toExclusiveRange() {
		return new V(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
	}
	mapToLineArray(t) {
		const n = [];
		for (let r = this.startLineNumber; r < this.endLineNumberExclusive; r++) n.push(t(r));
		return n;
	}
	forEach(t) {
		for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) t(n);
	}
	serialize() {
		return [this.startLineNumber, this.endLineNumberExclusive];
	}
	toOffsetRange() {
		return new G(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
	}
	distanceToRange(t) {
		return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
	}
	distanceToLine(t) {
		return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
	}
	addMargin(t, n) {
		return new fe(this.startLineNumber - t, this.endLineNumberExclusive + n);
	}
}, Pn = class bt {
	constructor(t = []) {
		this._normalizedRanges = t;
	}
	get ranges() {
		return this._normalizedRanges;
	}
	addRange(t) {
		if (t.length === 0) return;
		const n = er(this._normalizedRanges, (i) => i.endLineNumberExclusive >= t.startLineNumber), r = xt(this._normalizedRanges, (i) => i.startLineNumber <= t.endLineNumberExclusive) + 1;
		if (n === r) this._normalizedRanges.splice(n, 0, t);
		else if (n === r - 1) {
			const i = this._normalizedRanges[n];
			this._normalizedRanges[n] = i.join(t);
		} else {
			const i = this._normalizedRanges[n].join(this._normalizedRanges[r - 1]).join(t);
			this._normalizedRanges.splice(n, r - n, i);
		}
	}
	contains(t) {
		const n = Tt(this._normalizedRanges, (r) => r.startLineNumber <= t);
		return !!n && n.endLineNumberExclusive > t;
	}
	intersects(t) {
		const n = Tt(this._normalizedRanges, (r) => r.startLineNumber < t.endLineNumberExclusive);
		return !!n && n.endLineNumberExclusive > t.startLineNumber;
	}
	getUnion(t) {
		if (this._normalizedRanges.length === 0) return t;
		if (t._normalizedRanges.length === 0) return this;
		const n = [];
		let r = 0, i = 0, s = null;
		for (; r < this._normalizedRanges.length || i < t._normalizedRanges.length;) {
			let a = null;
			if (r < this._normalizedRanges.length && i < t._normalizedRanges.length) {
				const o = this._normalizedRanges[r], u = t._normalizedRanges[i];
				o.startLineNumber < u.startLineNumber ? (a = o, r++) : (a = u, i++);
			} else r < this._normalizedRanges.length ? (a = this._normalizedRanges[r], r++) : (a = t._normalizedRanges[i], i++);
			s === null ? s = a : s.endLineNumberExclusive >= a.startLineNumber ? s = new Q(s.startLineNumber, Math.max(s.endLineNumberExclusive, a.endLineNumberExclusive)) : (n.push(s), s = a);
		}
		return s !== null && n.push(s), new bt(n);
	}
	subtractFrom(t) {
		const n = er(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), r = xt(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
		if (n === r) return new bt([t]);
		const i = [];
		let s = t.startLineNumber;
		for (let a = n; a < r; a++) {
			const o = this._normalizedRanges[a];
			o.startLineNumber > s && i.push(new Q(s, o.startLineNumber)), s = o.endLineNumberExclusive;
		}
		return s < t.endLineNumberExclusive && i.push(new Q(s, t.endLineNumberExclusive)), new bt(i);
	}
	toString() {
		return this._normalizedRanges.map((t) => t.toString()).join(", ");
	}
	getIntersection(t) {
		const n = [];
		let r = 0, i = 0;
		for (; r < this._normalizedRanges.length && i < t._normalizedRanges.length;) {
			const s = this._normalizedRanges[r], a = t._normalizedRanges[i], o = s.intersect(a);
			o && !o.isEmpty && n.push(o), s.endLineNumberExclusive < a.endLineNumberExclusive ? r++ : i++;
		}
		return new bt(n);
	}
	getWithDelta(t) {
		return new bt(this._normalizedRanges.map((n) => n.delta(t)));
	}
}, kt = class pe {
	static {
		this.zero = new pe(0, 0);
	}
	static lengthDiffNonNegative(t, n) {
		return n.isLessThan(t) ? pe.zero : t.lineCount === n.lineCount ? new pe(0, n.columnCount - t.columnCount) : new pe(n.lineCount - t.lineCount, n.columnCount);
	}
	static betweenPositions(t, n) {
		return t.lineNumber === n.lineNumber ? new pe(0, n.column - t.column) : new pe(n.lineNumber - t.lineNumber, n.column - 1);
	}
	static fromPosition(t) {
		return new pe(t.lineNumber - 1, t.column - 1);
	}
	static ofRange(t) {
		return pe.betweenPositions(t.getStartPosition(), t.getEndPosition());
	}
	static ofText(t) {
		let n = 0, r = 0;
		for (const i of t) i === `
` ? (n++, r = 0) : r++;
		return new pe(n, r);
	}
	static ofSubstr(t, n) {
		return pe.ofText(n.substring(t));
	}
	static sum(t, n) {
		return t.reduce((r, i) => r.add(n(i)), pe.zero);
	}
	constructor(t, n) {
		this.lineCount = t, this.columnCount = n;
	}
	isZero() {
		return this.lineCount === 0 && this.columnCount === 0;
	}
	isLessThan(t) {
		return this.lineCount !== t.lineCount ? this.lineCount < t.lineCount : this.columnCount < t.columnCount;
	}
	isGreaterThan(t) {
		return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount > t.columnCount;
	}
	isGreaterThanOrEqualTo(t) {
		return this.lineCount !== t.lineCount ? this.lineCount > t.lineCount : this.columnCount >= t.columnCount;
	}
	equals(t) {
		return this.lineCount === t.lineCount && this.columnCount === t.columnCount;
	}
	compare(t) {
		return this.lineCount !== t.lineCount ? this.lineCount - t.lineCount : this.columnCount - t.columnCount;
	}
	add(t) {
		return t.lineCount === 0 ? new pe(this.lineCount, this.columnCount + t.columnCount) : new pe(this.lineCount + t.lineCount, t.columnCount);
	}
	createRange(t) {
		return this.lineCount === 0 ? new V(t.lineNumber, t.column, t.lineNumber, t.column + this.columnCount) : new V(t.lineNumber, t.column, t.lineNumber + this.lineCount, this.columnCount + 1);
	}
	toRange() {
		return new V(1, 1, this.lineCount + 1, this.columnCount + 1);
	}
	toLineRange() {
		return Q.ofLength(1, this.lineCount + 1);
	}
	addToPosition(t) {
		return this.lineCount === 0 ? new Y(t.lineNumber, t.column + this.columnCount) : new Y(t.lineNumber + this.lineCount, this.columnCount + 1);
	}
	addToRange(t) {
		return V.fromPositions(this.addToPosition(t.getStartPosition()), this.addToPosition(t.getEndPosition()));
	}
	toString() {
		return `${this.lineCount},${this.columnCount}`;
	}
}, tu = class {
	getOffsetRange(e) {
		return new G(this.getOffset(e.getStartPosition()), this.getOffset(e.getEndPosition()));
	}
	getRange(e) {
		return V.fromPositions(this.getPosition(e.start), this.getPosition(e.endExclusive));
	}
	getStringEdit(e) {
		const t = e.replacements.map((n) => this.getStringReplacement(n));
		return new at.deps.StringEdit(t);
	}
	getStringReplacement(e) {
		return new at.deps.StringReplacement(this.getOffsetRange(e.range), e.text);
	}
	getTextReplacement(e) {
		return new at.deps.TextReplacement(this.getRange(e.replaceRange), e.newText);
	}
	getTextEdit(e) {
		const t = e.replacements.map((n) => this.getTextReplacement(n));
		return new at.deps.TextEdit(t);
	}
}, at = class {
	static {
		this._deps = void 0;
	}
	static get deps() {
		if (!this._deps) throw new Error("Dependencies not set. Call _setDependencies first.");
		return this._deps;
	}
};
function nu(e) {
	at._deps = e;
}
var J1 = class extends tu {
	constructor(e) {
		super(), this.text = e;
	}
	get lineStartOffsetByLineIdx() {
		return this._lineStartOffsetByLineIdx || this._computeLineOffsets(), this._lineStartOffsetByLineIdx;
	}
	get lineEndOffsetByLineIdx() {
		return this._lineEndOffsetByLineIdx || this._computeLineOffsets(), this._lineEndOffsetByLineIdx;
	}
	_computeLineOffsets() {
		this._lineStartOffsetByLineIdx = [], this._lineEndOffsetByLineIdx = [], this._lineStartOffsetByLineIdx.push(0);
		for (let e = 0; e < this.text.length; e++) this.text.charAt(e) === `
` && (this._lineStartOffsetByLineIdx.push(e + 1), e > 0 && this.text.charAt(e - 1) === "\r" ? this._lineEndOffsetByLineIdx.push(e - 1) : this._lineEndOffsetByLineIdx.push(e));
		this._lineEndOffsetByLineIdx.push(this.text.length);
	}
	getOffset(e) {
		const t = this._validatePosition(e);
		return this.lineStartOffsetByLineIdx[t.lineNumber - 1] + t.column - 1;
	}
	_validatePosition(e) {
		if (e.lineNumber < 1) return new Y(1, 1);
		const t = this.textLength.lineCount + 1;
		if (e.lineNumber > t) return new Y(t, this.getLineLength(t) + 1);
		if (e.column < 1) return new Y(e.lineNumber, 1);
		const n = this.getLineLength(e.lineNumber);
		return e.column - 1 > n ? new Y(e.lineNumber, n + 1) : e;
	}
	getPosition(e) {
		const t = xt(this.lineStartOffsetByLineIdx, (n) => n <= e);
		return new Y(t + 1, e - this.lineStartOffsetByLineIdx[t] + 1);
	}
	getTextLength(e) {
		return at.deps.TextLength.ofRange(this.getRange(e));
	}
	get textLength() {
		const e = this.lineStartOffsetByLineIdx.length - 1;
		return new at.deps.TextLength(e, this.text.length - this.lineStartOffsetByLineIdx[e]);
	}
	getLineLength(e) {
		return this.lineEndOffsetByLineIdx[e - 1] - this.lineStartOffsetByLineIdx[e - 1];
	}
}, K1 = class {
	constructor() {
		this._transformer = void 0;
	}
	get endPositionExclusive() {
		return this.length.addToPosition(new Y(1, 1));
	}
	get lineRange() {
		return this.length.toLineRange();
	}
	getValue() {
		return this.getValueOfRange(this.length.toRange());
	}
	getValueOfOffsetRange(e) {
		return this.getValueOfRange(this.getTransformer().getRange(e));
	}
	getLineLength(e) {
		return this.getValueOfRange(new V(e, 1, e, Number.MAX_SAFE_INTEGER)).length;
	}
	getTransformer() {
		return this._transformer || (this._transformer = new J1(this.getValue())), this._transformer;
	}
	getLineAt(e) {
		return this.getValueOfRange(new V(e, 1, e, Number.MAX_SAFE_INTEGER));
	}
	getLines() {
		return S1(this.getValue());
	}
	getLinesOfRange(e) {
		return e.mapToLineArray((t) => this.getLineAt(t));
	}
	equals(e) {
		return this === e ? !0 : this.getValue() === e.getValue();
	}
}, ru = class extends K1 {
	constructor(e, t) {
		Ia(t >= 1), super(), this._getLineContent = e, this._lineCount = t;
	}
	getValueOfRange(e) {
		if (e.startLineNumber === e.endLineNumber) return this._getLineContent(e.startLineNumber).substring(e.startColumn - 1, e.endColumn - 1);
		let t = this._getLineContent(e.startLineNumber).substring(e.startColumn - 1);
		for (let n = e.startLineNumber + 1; n < e.endLineNumber; n++) t += `
` + this._getLineContent(n);
		return t += `
` + this._getLineContent(e.endLineNumber).substring(0, e.endColumn - 1), t;
	}
	getLineLength(e) {
		return this._getLineContent(e).length;
	}
	get length() {
		const e = this._getLineContent(this._lineCount);
		return new kt(this._lineCount - 1, e.length);
	}
}, un = class extends ru {
	constructor(e) {
		super((t) => e[t - 1], e.length);
	}
}, rn = class extends K1 {
	constructor(e) {
		super(), this.value = e, this._t = new J1(this.value);
	}
	getValueOfRange(e) {
		return this._t.getOffsetRange(e).substring(this.value);
	}
	get length() {
		return this._t.textLength;
	}
	getTransformer() {
		return this._t;
	}
}, Pr = class Ve {
	static fromStringEdit(t, n) {
		return new Ve(t.replacements.map((r) => be.fromStringReplacement(r, n)));
	}
	static replace(t, n) {
		return new Ve([new be(t, n)]);
	}
	static delete(t) {
		return new Ve([new be(t, "")]);
	}
	static insert(t, n) {
		return new Ve([new be(V.fromPositions(t, t), n)]);
	}
	static fromParallelReplacementsUnsorted(t) {
		return new Ve(t.slice().sort(ot((n) => n.range, V.compareRangesUsingStarts)));
	}
	constructor(t) {
		this.replacements = t, Jt(() => xr(t, (n, r) => n.range.getEndPosition().isBeforeOrEqual(r.range.getStartPosition())));
	}
	normalize() {
		const t = [];
		for (const n of this.replacements) if (t.length > 0 && t[t.length - 1].range.getEndPosition().equals(n.range.getStartPosition())) {
			const r = t[t.length - 1];
			t[t.length - 1] = new be(r.range.plusRange(n.range), r.text + n.text);
		} else n.isEmpty || t.push(n);
		return new Ve(t);
	}
	mapPosition(t) {
		let n = 0, r = 0, i = 0;
		for (const s of this.replacements) {
			const a = s.range.getStartPosition();
			if (t.isBeforeOrEqual(a)) break;
			const o = s.range.getEndPosition(), u = kt.ofText(s.text);
			if (t.isBefore(o)) {
				const c = new Y(a.lineNumber + n, a.column + (a.lineNumber + n === r ? i : 0));
				return cn(c, u.addToPosition(c));
			}
			a.lineNumber + n !== r && (i = 0), n += u.lineCount - (s.range.endLineNumber - s.range.startLineNumber), u.lineCount === 0 ? o.lineNumber !== a.lineNumber ? i += u.columnCount - (o.column - 1) : i += u.columnCount - (o.column - a.column) : i = u.columnCount, r = o.lineNumber + n;
		}
		return new Y(t.lineNumber + n, t.column + (t.lineNumber + n === r ? i : 0));
	}
	mapRange(t) {
		function n(i) {
			return i instanceof Y ? i : i.getStartPosition();
		}
		function r(i) {
			return i instanceof Y ? i : i.getEndPosition();
		}
		return cn(n(this.mapPosition(t.getStartPosition())), r(this.mapPosition(t.getEndPosition())));
	}
	inverseMapPosition(t, n) {
		return this.inverse(n).mapPosition(t);
	}
	inverseMapRange(t, n) {
		return this.inverse(n).mapRange(t);
	}
	apply(t) {
		let n = "", r = new Y(1, 1);
		for (const s of this.replacements) {
			const a = s.range, o = a.getStartPosition(), u = a.getEndPosition(), c = cn(r, o);
			c.isEmpty() || (n += t.getValueOfRange(c)), n += s.text, r = u;
		}
		const i = cn(r, t.endPositionExclusive);
		return i.isEmpty() || (n += t.getValueOfRange(i)), n;
	}
	applyToString(t) {
		const n = new rn(t);
		return this.apply(n);
	}
	inverse(t) {
		const n = this.getNewRanges();
		return new Ve(this.replacements.map((r, i) => new be(n[i], t.getValueOfRange(r.range))));
	}
	getNewRanges() {
		const t = [];
		let n = 0, r = 0, i = 0;
		for (const s of this.replacements) {
			const a = kt.ofText(s.text), o = Y.lift({
				lineNumber: s.range.startLineNumber + r,
				column: s.range.startColumn + (s.range.startLineNumber === n ? i : 0)
			}), u = a.createRange(o);
			t.push(u), r = u.endLineNumber - s.range.endLineNumber, i = u.endColumn - s.range.endColumn, n = s.range.endLineNumber;
		}
		return t;
	}
	toReplacement(t) {
		if (this.replacements.length === 0) throw new se();
		if (this.replacements.length === 1) return this.replacements[0];
		const n = this.replacements[0].range.getStartPosition(), r = this.replacements[this.replacements.length - 1].range.getEndPosition();
		let i = "";
		for (let s = 0; s < this.replacements.length; s++) {
			const a = this.replacements[s];
			if (i += a.text, s < this.replacements.length - 1) {
				const o = this.replacements[s + 1], u = V.fromPositions(a.range.getEndPosition(), o.range.getStartPosition()), c = t.getValueOfRange(u);
				i += c;
			}
		}
		return new be(V.fromPositions(n, r), i);
	}
	equals(t) {
		return p1(this.replacements, t.replacements, (n, r) => n.equals(r));
	}
	compose(t) {
		const n = this.normalize(), r = t.normalize();
		if (n.replacements.length === 0) return r;
		if (r.replacements.length === 0) return n;
		const i = [];
		let s = 0, a = 1, o = 1, u = 0, c = 0, m = 0, h = 0, p = null, _ = 0, d = 0, b = !1, A = !1, R = 1, E = 1;
		function y() {
			if (!b) if (s < n.replacements.length) {
				const D = n.replacements[s], T = D.range.getStartPosition();
				if (!(a === T.lineNumber && o === T.column)) u = a, c = o, m = T.lineNumber, h = T.column, p = null, a === T.lineNumber ? (_ = 0, d = T.column - o) : (_ = T.lineNumber - a, d = T.column - 1), b = !0, a = T.lineNumber, o = T.column;
				else {
					const v = D.range.getEndPosition();
					u = T.lineNumber, c = T.column, m = v.lineNumber, h = v.column, p = D.text;
					let k = 0, B = 0;
					const X = D.text;
					for (let P = 0; P < X.length; P++) X.charCodeAt(P) === 10 ? (k++, B = 0) : B++;
					_ = k, d = B, b = !0, a = v.lineNumber, o = v.column, s++;
				}
			} else A = !0, u = a, c = o, b = !0;
		}
		function S(D, T, v) {
			if (T === 0 && v === 0) return ["", D];
			let k = 0, B = 0;
			for (; k < T;) {
				const X = D.indexOf(`
`, B);
				if (X === -1) throw new se("Text length mismatch");
				B = X + 1, k++;
			}
			return B += v, [D.substring(0, B), D.substring(B)];
		}
		for (const D of r.replacements) {
			const T = D.range.getStartPosition(), v = D.range.getEndPosition();
			for (; !(R === T.lineNumber && E === T.column);) {
				if (y(), A) {
					let M, F;
					R === T.lineNumber ? (M = 0, F = T.column - E) : (M = T.lineNumber - R, F = T.column - 1), R = T.lineNumber, E = T.column, M === 0 ? c += F : (u += M, c = F + 1);
					break;
				}
				let U, x;
				_ === 0 ? (U = R, x = E + d) : (U = R + _, x = d + 1);
				let O = !1;
				if (T.lineNumber < U ? O = !0 : T.lineNumber === U && (O = T.column < x), O) {
					let M, F;
					R === T.lineNumber ? (M = 0, F = T.column - E) : (M = T.lineNumber - R, F = T.column - 1);
					let H, z;
					if (M === _ ? (H = 0, z = d - F) : (H = _ - M, z = d), p !== null) {
						const [J, C] = S(p, M, F);
						i.push(new be(new V(u, c, m, h), J)), p = C, _ = H, d = z, u = m, c = h;
					} else {
						let J, C;
						M === 0 ? (J = u, C = c + F) : (J = u + M, C = F + 1), u = J, c = C, _ = H, d = z;
					}
					R = T.lineNumber, E = T.column;
					break;
				}
				p !== null && i.push(new be(new V(u, c, m, h), p)), R = U, E = x, b = !1;
			}
			let k = null, B = null, X = null, P = null;
			for (; !(R === v.lineNumber && E === v.column);) {
				if (y(), A) {
					let M, F;
					R === v.lineNumber ? (M = 0, F = v.column - E) : (M = v.lineNumber - R, F = v.column - 1);
					let H, z;
					M === 0 ? (H = u, z = c + F) : (H = u + M, z = F + 1), k === null && (k = u, B = c), X = H, P = z, R = v.lineNumber, E = v.column, u = H, c = z;
					break;
				}
				let U, x;
				_ === 0 ? (U = R, x = E + d) : (U = R + _, x = d + 1);
				let O = !1;
				if (v.lineNumber < U ? O = !0 : v.lineNumber === U && (O = v.column < x), O) {
					let M, F;
					R === v.lineNumber ? (M = 0, F = v.column - E) : (M = v.lineNumber - R, F = v.column - 1);
					let H, z;
					if (M === _ ? (H = 0, z = d - F) : (H = _ - M, z = d), p !== null) {
						k === null && (k = u, B = c), X = m, P = h;
						const [, J] = S(p, M, F);
						p = J, _ = H, d = z, u = m, c = h;
					} else {
						let J, C;
						M === 0 ? (J = u, C = c + F) : (J = u + M, C = F + 1), k === null && (k = u, B = c), X = J, P = C, u = J, c = C, _ = H, d = z;
					}
					R = v.lineNumber, E = v.column;
					break;
				}
				k === null && (k = u, B = c), X = m, P = h, R = U, E = x, b = !1;
			}
			if (k !== null) i.push(new be(new V(k, B, X, P), D.text));
			else {
				y();
				const U = u, x = c;
				i.push(new be(new V(U, x, U, x), D.text));
			}
		}
		for (; y(), !A;) p !== null && i.push(new be(new V(u, c, m, h), p)), b = !1;
		return new Ve(i).normalize();
	}
	toString(t) {
		return t === void 0 ? this.replacements.map((n) => n.toString()).join(`
`) : typeof t == "string" ? this.toString(new rn(t)) : this.replacements.length === 0 ? "" : this.replacements.map((n) => {
			const i = t.getValueOfRange(n.range), s = V.fromPositions(new Y(Math.max(1, n.range.startLineNumber - 1), 1), n.range.getStartPosition());
			let a = t.getValueOfRange(s);
			a.length > 10 && (a = "..." + a.substring(a.length - 10));
			const o = V.fromPositions(n.range.getEndPosition(), new Y(n.range.endLineNumber + 1, 1));
			let u = t.getValueOfRange(o);
			u.length > 10 && (u = u.substring(0, 10) + "...");
			let c = i;
			if (c.length > 10) {
				const h = Math.floor(5);
				c = c.substring(0, h) + "..." + c.substring(c.length - h);
			}
			let m = n.text;
			if (m.length > 10) {
				const h = Math.floor(5);
				m = m.substring(0, h) + "..." + m.substring(m.length - h);
			}
			return c.length === 0 ? `${a}❰${m}❱${u}` : `${a}❰${c}↦${m}❱${u}`;
		}).join(`
`);
	}
}, be = class Qe {
	static joinReplacements(t, n) {
		if (t.length === 0) throw new se();
		if (t.length === 1) return t[0];
		const r = t[0].range.getStartPosition(), i = t[t.length - 1].range.getEndPosition();
		let s = "";
		for (let a = 0; a < t.length; a++) {
			const o = t[a];
			if (s += o.text, a < t.length - 1) {
				const u = t[a + 1], c = V.fromPositions(o.range.getEndPosition(), u.range.getStartPosition()), m = n.getValueOfRange(c);
				s += m;
			}
		}
		return new Qe(V.fromPositions(r, i), s);
	}
	static fromStringReplacement(t, n) {
		return new Qe(n.getTransformer().getRange(t.replaceRange), t.newText);
	}
	static delete(t) {
		return new Qe(t, "");
	}
	constructor(t, n) {
		this.range = t, this.text = n;
	}
	get isEmpty() {
		return this.range.isEmpty() && this.text.length === 0;
	}
	static equals(t, n) {
		return t.range.equalsRange(n.range) && t.text === n.text;
	}
	toSingleEditOperation() {
		return {
			range: this.range,
			text: this.text
		};
	}
	toEdit() {
		return new Pr([this]);
	}
	equals(t) {
		return Qe.equals(this, t);
	}
	extendToCoverRange(t, n) {
		if (this.range.containsRange(t)) return this;
		const r = this.range.plusRange(t), i = n.getValueOfRange(V.fromPositions(r.getStartPosition(), this.range.getStartPosition())), s = n.getValueOfRange(V.fromPositions(this.range.getEndPosition(), r.getEndPosition()));
		return new Qe(r, i + this.text + s);
	}
	extendToFullLine(t) {
		const n = new V(this.range.startLineNumber, 1, this.range.endLineNumber, t.getTransformer().getLineLength(this.range.endLineNumber) + 1);
		return this.extendToCoverRange(n, t);
	}
	removeCommonPrefixAndSuffix(t) {
		return this.removeCommonPrefix(t).removeCommonSuffix(t);
	}
	removeCommonPrefix(t) {
		const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = Mn(n, r), s = kt.ofText(n.substring(0, i)).addToPosition(this.range.getStartPosition()), a = r.substring(i);
		return new Qe(V.fromPositions(s, this.range.getEndPosition()), a);
	}
	removeCommonSuffix(t) {
		const n = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`), r = this.text.replaceAll(`\r
`, `
`), i = Sn(n, r), s = kt.ofText(n.substring(0, n.length - i)).addToPosition(this.range.getStartPosition()), a = r.substring(0, r.length - i);
		return new Qe(V.fromPositions(this.range.getStartPosition(), s), a);
	}
	isEffectiveDeletion(t) {
		let n = this.text.replaceAll(`\r
`, `
`), r = t.getValueOfRange(this.range).replaceAll(`\r
`, `
`);
		const i = Mn(n, r);
		n = n.substring(i), r = r.substring(i);
		const s = Sn(n, r);
		return n = n.substring(0, n.length - s), r = r.substring(0, r.length - s), n === "";
	}
	toString() {
		const t = this.range.getStartPosition(), n = this.range.getEndPosition();
		return `(${t.lineNumber},${t.column} -> ${n.lineNumber},${n.column}): "${this.text}"`;
	}
};
function cn(e, t) {
	if (e.lineNumber === t.lineNumber && e.column === Number.MAX_SAFE_INTEGER) return V.fromPositions(t, t);
	if (!e.isBeforeOrEqual(t)) throw new se("start must be before end");
	return new V(e.lineNumber, e.column, t.lineNumber, t.column);
}
var Ut = class wt {
	static inverse(t, n, r) {
		const i = [];
		let s = 1, a = 1;
		for (const u of t) {
			const c = new wt(new Q(s, u.original.startLineNumber), new Q(a, u.modified.startLineNumber));
			c.modified.isEmpty || i.push(c), s = u.original.endLineNumberExclusive, a = u.modified.endLineNumberExclusive;
		}
		const o = new wt(new Q(s, n + 1), new Q(a, r + 1));
		return o.modified.isEmpty || i.push(o), i;
	}
	static clip(t, n, r) {
		const i = [];
		for (const s of t) {
			const a = s.original.intersect(n), o = s.modified.intersect(r);
			a && !a.isEmpty && o && !o.isEmpty && i.push(new wt(a, o));
		}
		return i;
	}
	constructor(t, n) {
		this.original = t, this.modified = n;
	}
	toString() {
		return `{${this.original.toString()}->${this.modified.toString()}}`;
	}
	flip() {
		return new wt(this.modified, this.original);
	}
	join(t) {
		return new wt(this.original.join(t.original), this.modified.join(t.modified));
	}
	get changedLineCount() {
		return Math.max(this.original.length, this.modified.length);
	}
	toRangeMapping() {
		const t = this.original.toInclusiveRange(), n = this.modified.toInclusiveRange();
		if (t && n) return new $e(t, n);
		if (this.original.startLineNumber === 1 || this.modified.startLineNumber === 1) {
			if (!(this.modified.startLineNumber === 1 && this.original.startLineNumber === 1)) throw new se("not a valid diff");
			return new $e(new V(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new V(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
		} else return new $e(new V(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), new V(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER, this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER));
	}
	toRangeMapping2(t, n) {
		if (Hs(this.original.endLineNumberExclusive, t) && Hs(this.modified.endLineNumberExclusive, n)) return new $e(new V(this.original.startLineNumber, 1, this.original.endLineNumberExclusive, 1), new V(this.modified.startLineNumber, 1, this.modified.endLineNumberExclusive, 1));
		if (!this.original.isEmpty && !this.modified.isEmpty) return new $e(V.fromPositions(new Y(this.original.startLineNumber, 1), _t(new Y(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), V.fromPositions(new Y(this.modified.startLineNumber, 1), _t(new Y(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
		if (this.original.startLineNumber > 1 && this.modified.startLineNumber > 1) return new $e(V.fromPositions(_t(new Y(this.original.startLineNumber - 1, Number.MAX_SAFE_INTEGER), t), _t(new Y(this.original.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), t)), V.fromPositions(_t(new Y(this.modified.startLineNumber - 1, Number.MAX_SAFE_INTEGER), n), _t(new Y(this.modified.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER), n)));
		throw new se();
	}
};
function _t(e, t) {
	if (e.lineNumber < 1) return new Y(1, 1);
	if (e.lineNumber > t.length) return new Y(t.length, t[t.length - 1].length + 1);
	const n = t[e.lineNumber - 1];
	return e.column > n.length + 1 ? new Y(e.lineNumber, n.length + 1) : e;
}
function Hs(e, t) {
	return e >= 1 && e <= t.length;
}
var Dt = class vn extends Ut {
	static toTextEdit(t, n) {
		const r = [];
		for (const i of t) for (const s of i.innerChanges ?? []) {
			const a = s.toTextEdit(n);
			r.push(a);
		}
		return new Pr(r);
	}
	static fromRangeMappings(t) {
		return new vn(Q.join(t.map((n) => Q.fromRangeInclusive(n.originalRange))), Q.join(t.map((n) => Q.fromRangeInclusive(n.modifiedRange))), t);
	}
	constructor(t, n, r) {
		super(t, n), this.innerChanges = r;
	}
	flip() {
		return new vn(this.modified, this.original, this.innerChanges?.map((t) => t.flip()));
	}
	withInnerChangesFromLineRanges() {
		return new vn(this.original, this.modified, [this.toRangeMapping()]);
	}
}, $e = class Lt {
	static fromEdit(t) {
		const n = t.getNewRanges();
		return t.replacements.map((r, i) => new Lt(r.range, n[i]));
	}
	static fromEditJoin(t) {
		const n = t.getNewRanges(), r = t.replacements.map((i, s) => new Lt(i.range, n[s]));
		return Lt.join(r);
	}
	static join(t) {
		if (t.length === 0) throw new se("Cannot join an empty list of range mappings");
		let n = t[0];
		for (let r = 1; r < t.length; r++) n = n.join(t[r]);
		return n;
	}
	static assertSorted(t) {
		for (let n = 1; n < t.length; n++) {
			const r = t[n - 1], i = t[n];
			if (!(r.originalRange.getEndPosition().isBeforeOrEqual(i.originalRange.getStartPosition()) && r.modifiedRange.getEndPosition().isBeforeOrEqual(i.modifiedRange.getStartPosition()))) throw new se("Range mappings must be sorted");
		}
	}
	constructor(t, n) {
		this.originalRange = t, this.modifiedRange = n;
	}
	toString() {
		return `{${this.originalRange.toString()}->${this.modifiedRange.toString()}}`;
	}
	flip() {
		return new Lt(this.modifiedRange, this.originalRange);
	}
	toTextEdit(t) {
		const n = t.getValueOfRange(this.modifiedRange);
		return new be(this.originalRange, n);
	}
	join(t) {
		return new Lt(this.originalRange.plusRange(t.originalRange), this.modifiedRange.plusRange(t.modifiedRange));
	}
};
function qs(e, t, n, r = !1) {
	const i = [];
	for (const s of Na(e.map((a) => iu(a, t, n)), (a, o) => a.original.intersectsOrTouches(o.original) || a.modified.intersectsOrTouches(o.modified))) {
		const a = s[0], o = s[s.length - 1];
		i.push(new Dt(a.original.join(o.original), a.modified.join(o.modified), s.map((u) => u.innerChanges[0])));
	}
	return Jt(() => !r && i.length > 0 && (i[0].modified.startLineNumber !== i[0].original.startLineNumber || n.length.lineCount - i[i.length - 1].modified.endLineNumberExclusive !== t.length.lineCount - i[i.length - 1].original.endLineNumberExclusive) ? !1 : xr(i, (s, a) => a.original.startLineNumber - s.original.endLineNumberExclusive === a.modified.startLineNumber - s.modified.endLineNumberExclusive && s.original.endLineNumberExclusive < a.original.startLineNumber && s.modified.endLineNumberExclusive < a.modified.startLineNumber)), i;
}
function iu(e, t, n) {
	let r = 0, i = 0;
	return e.modifiedRange.endColumn === 1 && e.originalRange.endColumn === 1 && e.originalRange.startLineNumber + r <= e.originalRange.endLineNumber && e.modifiedRange.startLineNumber + r <= e.modifiedRange.endLineNumber && (i = -1), e.modifiedRange.startColumn - 1 >= n.getLineLength(e.modifiedRange.startLineNumber) && e.originalRange.startColumn - 1 >= t.getLineLength(e.originalRange.startLineNumber) && e.originalRange.startLineNumber <= e.originalRange.endLineNumber + i && e.modifiedRange.startLineNumber <= e.modifiedRange.endLineNumber + i && (r = 1), new Dt(new Q(e.originalRange.startLineNumber + r, e.originalRange.endLineNumber + 1 + i), new Q(e.modifiedRange.startLineNumber + r, e.modifiedRange.endLineNumber + 1 + i), [e]);
}
const su = 3;
var au = class {
	computeDiff(e, t, n) {
		const r = new na(e, t, {
			maxComputationTime: n.maxComputationTimeMs,
			shouldIgnoreTrimWhitespace: n.ignoreTrimWhitespace,
			shouldComputeCharChanges: !0,
			shouldMakePrettyDiff: !0,
			shouldPostProcessCharChanges: !0
		}).computeDiff(), i = [];
		let s = null;
		for (const a of r.changes) {
			let o;
			a.originalEndLineNumber === 0 ? o = new Q(a.originalStartLineNumber + 1, a.originalStartLineNumber + 1) : o = new Q(a.originalStartLineNumber, a.originalEndLineNumber + 1);
			let u;
			a.modifiedEndLineNumber === 0 ? u = new Q(a.modifiedStartLineNumber + 1, a.modifiedStartLineNumber + 1) : u = new Q(a.modifiedStartLineNumber, a.modifiedEndLineNumber + 1);
			let c = new Dt(o, u, a.charChanges?.map((m) => new $e(new V(m.originalStartLineNumber, m.originalStartColumn, m.originalEndLineNumber, m.originalEndColumn), new V(m.modifiedStartLineNumber, m.modifiedStartColumn, m.modifiedEndLineNumber, m.modifiedEndColumn))));
			s && (s.modified.endLineNumberExclusive === c.modified.startLineNumber || s.original.endLineNumberExclusive === c.original.startLineNumber) && (c = new Dt(s.original.join(c.original), s.modified.join(c.modified), s.innerChanges && c.innerChanges ? s.innerChanges.concat(c.innerChanges) : void 0), i.pop()), i.push(c), s = c;
		}
		return Jt(() => xr(i, (a, o) => o.original.startLineNumber - a.original.endLineNumberExclusive === o.modified.startLineNumber - a.modified.endLineNumberExclusive && a.original.endLineNumberExclusive < o.original.startLineNumber && a.modified.endLineNumberExclusive < o.modified.startLineNumber)), new Ln(i, [], r.quitEarly);
	}
};
function C1(e, t, n, r) {
	return new O1(e, t, n).ComputeDiff(r);
}
var Ws = class {
	constructor(e) {
		const t = [], n = [];
		for (let r = 0, i = e.length; r < i; r++) t[r] = Nr(e[r], 1), n[r] = Rr(e[r], 1);
		this.lines = e, this._startColumns = t, this._endColumns = n;
	}
	getElements() {
		const e = [];
		for (let t = 0, n = this.lines.length; t < n; t++) e[t] = this.lines[t].substring(this._startColumns[t] - 1, this._endColumns[t] - 1);
		return e;
	}
	getStrictElement(e) {
		return this.lines[e];
	}
	getStartLineNumber(e) {
		return e + 1;
	}
	getEndLineNumber(e) {
		return e + 1;
	}
	createCharSequence(e, t, n) {
		const r = [], i = [], s = [];
		let a = 0;
		for (let o = t; o <= n; o++) {
			const u = this.lines[o], c = e ? this._startColumns[o] : 1, m = e ? this._endColumns[o] : u.length + 1;
			for (let h = c; h < m; h++) r[a] = u.charCodeAt(h - 1), i[a] = o + 1, s[a] = h, a++;
			!e && o < n && (r[a] = L.LineFeed, i[a] = o + 1, s[a] = u.length + 1, a++);
		}
		return new lu(r, i, s);
	}
}, lu = class {
	constructor(e, t, n) {
		this._charCodes = e, this._lineNumbers = t, this._columns = n;
	}
	toString() {
		return "[" + this._charCodes.map((e, t) => (e === L.LineFeed ? "\\n" : String.fromCharCode(e)) + `-(${this._lineNumbers[t]},${this._columns[t]})`).join(", ") + "]";
	}
	_assertIndex(e, t) {
		if (e < 0 || e >= t.length) throw new Error("Illegal index");
	}
	getElements() {
		return this._charCodes;
	}
	getStartLineNumber(e) {
		return e > 0 && e === this._lineNumbers.length ? this.getEndLineNumber(e - 1) : (this._assertIndex(e, this._lineNumbers), this._lineNumbers[e]);
	}
	getEndLineNumber(e) {
		return e === -1 ? this.getStartLineNumber(e + 1) : (this._assertIndex(e, this._lineNumbers), this._charCodes[e] === L.LineFeed ? this._lineNumbers[e] + 1 : this._lineNumbers[e]);
	}
	getStartColumn(e) {
		return e > 0 && e === this._columns.length ? this.getEndColumn(e - 1) : (this._assertIndex(e, this._columns), this._columns[e]);
	}
	getEndColumn(e) {
		return e === -1 ? this.getStartColumn(e + 1) : (this._assertIndex(e, this._columns), this._charCodes[e] === L.LineFeed ? 1 : this._columns[e] + 1);
	}
}, Nn = class ea {
	constructor(t, n, r, i, s, a, o, u) {
		this.originalStartLineNumber = t, this.originalStartColumn = n, this.originalEndLineNumber = r, this.originalEndColumn = i, this.modifiedStartLineNumber = s, this.modifiedStartColumn = a, this.modifiedEndLineNumber = o, this.modifiedEndColumn = u;
	}
	static createFromDiffChange(t, n, r) {
		return new ea(n.getStartLineNumber(t.originalStart), n.getStartColumn(t.originalStart), n.getEndLineNumber(t.originalStart + t.originalLength - 1), n.getEndColumn(t.originalStart + t.originalLength - 1), r.getStartLineNumber(t.modifiedStart), r.getStartColumn(t.modifiedStart), r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), r.getEndColumn(t.modifiedStart + t.modifiedLength - 1));
	}
};
function ou(e) {
	if (e.length <= 1) return e;
	const t = [e[0]];
	let n = t[0];
	for (let r = 1, i = e.length; r < i; r++) {
		const s = e[r], a = s.originalStart - (n.originalStart + n.originalLength), o = s.modifiedStart - (n.modifiedStart + n.modifiedLength);
		Math.min(a, o) < su ? (n.originalLength = s.originalStart + s.originalLength - n.originalStart, n.modifiedLength = s.modifiedStart + s.modifiedLength - n.modifiedStart) : (t.push(s), n = s);
	}
	return t;
}
var Yn = class ta {
	constructor(t, n, r, i, s) {
		this.originalStartLineNumber = t, this.originalEndLineNumber = n, this.modifiedStartLineNumber = r, this.modifiedEndLineNumber = i, this.charChanges = s;
	}
	static createFromDiffResult(t, n, r, i, s, a, o) {
		let u, c, m, h, p;
		if (n.originalLength === 0 ? (u = r.getStartLineNumber(n.originalStart) - 1, c = 0) : (u = r.getStartLineNumber(n.originalStart), c = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), n.modifiedLength === 0 ? (m = i.getStartLineNumber(n.modifiedStart) - 1, h = 0) : (m = i.getStartLineNumber(n.modifiedStart), h = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), a && n.originalLength > 0 && n.originalLength < 20 && n.modifiedLength > 0 && n.modifiedLength < 20 && s()) {
			const _ = r.createCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1), d = i.createCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1);
			if (_.getElements().length > 0 && d.getElements().length > 0) {
				let b = C1(_, d, s, !0).changes;
				o && (b = ou(b)), p = [];
				for (let A = 0, R = b.length; A < R; A++) p.push(Nn.createFromDiffChange(b[A], _, d));
			}
		}
		return new ta(u, c, m, h, p);
	}
}, na = class {
	constructor(e, t, n) {
		this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.originalLines = e, this.modifiedLines = t, this.original = new Ws(e), this.modified = new Ws(t), this.continueLineDiff = $s(n.maxComputationTime), this.continueCharDiff = $s(n.maxComputationTime === 0 ? 0 : Math.min(n.maxComputationTime, 5e3));
	}
	computeDiff() {
		if (this.original.lines.length === 1 && this.original.lines[0].length === 0) return this.modified.lines.length === 1 && this.modified.lines[0].length === 0 ? {
			quitEarly: !1,
			changes: []
		} : {
			quitEarly: !1,
			changes: [{
				originalStartLineNumber: 1,
				originalEndLineNumber: 1,
				modifiedStartLineNumber: 1,
				modifiedEndLineNumber: this.modified.lines.length,
				charChanges: void 0
			}]
		};
		if (this.modified.lines.length === 1 && this.modified.lines[0].length === 0) return {
			quitEarly: !1,
			changes: [{
				originalStartLineNumber: 1,
				originalEndLineNumber: this.original.lines.length,
				modifiedStartLineNumber: 1,
				modifiedEndLineNumber: 1,
				charChanges: void 0
			}]
		};
		const e = C1(this.original, this.modified, this.continueLineDiff, this.shouldMakePrettyDiff), t = e.changes, n = e.quitEarly;
		if (this.shouldIgnoreTrimWhitespace) {
			const a = [];
			for (let o = 0, u = t.length; o < u; o++) a.push(Yn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, t[o], this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
			return {
				quitEarly: n,
				changes: a
			};
		}
		const r = [];
		let i = 0, s = 0;
		for (let a = -1, o = t.length; a < o; a++) {
			const u = a + 1 < o ? t[a + 1] : null, c = u ? u.originalStart : this.originalLines.length, m = u ? u.modifiedStart : this.modifiedLines.length;
			for (; i < c && s < m;) {
				const h = this.originalLines[i], p = this.modifiedLines[s];
				if (h !== p) {
					{
						let _ = Nr(h, 1), d = Nr(p, 1);
						for (; _ > 1 && d > 1 && h.charCodeAt(_ - 2) === p.charCodeAt(d - 2);) _--, d--;
						(_ > 1 || d > 1) && this._pushTrimWhitespaceCharChange(r, i + 1, 1, _, s + 1, 1, d);
					}
					{
						let _ = Rr(h, 1), d = Rr(p, 1);
						const b = h.length + 1, A = p.length + 1;
						for (; _ < b && d < A && h.charCodeAt(_ - 1) === h.charCodeAt(d - 1);) _++, d++;
						(_ < b || d < A) && this._pushTrimWhitespaceCharChange(r, i + 1, _, b, s + 1, d, A);
					}
				}
				i++, s++;
			}
			u && (r.push(Yn.createFromDiffResult(this.shouldIgnoreTrimWhitespace, u, this.original, this.modified, this.continueCharDiff, this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), i += u.originalLength, s += u.modifiedLength);
		}
		return {
			quitEarly: n,
			changes: r
		};
	}
	_pushTrimWhitespaceCharChange(e, t, n, r, i, s, a) {
		if (this._mergeTrimWhitespaceCharChange(e, t, n, r, i, s, a)) return;
		let o;
		this.shouldComputeCharChanges && (o = [new Nn(t, n, t, r, i, s, i, a)]), e.push(new Yn(t, t, i, i, o));
	}
	_mergeTrimWhitespaceCharChange(e, t, n, r, i, s, a) {
		const o = e.length;
		if (o === 0) return !1;
		const u = e[o - 1];
		return u.originalEndLineNumber === 0 || u.modifiedEndLineNumber === 0 ? !1 : u.originalEndLineNumber === t && u.modifiedEndLineNumber === i ? (this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Nn(t, n, t, r, i, s, i, a)), !0) : u.originalEndLineNumber + 1 === t && u.modifiedEndLineNumber + 1 === i ? (u.originalEndLineNumber = t, u.modifiedEndLineNumber = i, this.shouldComputeCharChanges && u.charChanges && u.charChanges.push(new Nn(t, n, t, r, i, s, i, a)), !0) : !1;
	}
};
function Nr(e, t) {
	const n = wl(e);
	return n === -1 ? t : n + 1;
}
function Rr(e, t) {
	const n = Ll(e);
	return n === -1 ? t : n + 2;
}
function $s(e) {
	if (e === 0) return () => !0;
	const t = Date.now();
	return () => Date.now() - t < e;
}
var yt = class Er {
	static trivial(t, n) {
		return new Er([new Ne(G.ofLength(t.length), G.ofLength(n.length))], !1);
	}
	static trivialTimedOut(t, n) {
		return new Er([new Ne(G.ofLength(t.length), G.ofLength(n.length))], !0);
	}
	constructor(t, n) {
		this.diffs = t, this.hitTimeout = n;
	}
}, Ne = class He {
	static invert(t, n) {
		const r = [];
		return Ra(t, (i, s) => {
			r.push(He.fromOffsetPairs(i ? i.getEndExclusives() : lt.zero, s ? s.getStarts() : new lt(n, (i ? i.seq2Range.endExclusive - i.seq1Range.endExclusive : 0) + n)));
		}), r;
	}
	static fromOffsetPairs(t, n) {
		return new He(new G(t.offset1, n.offset1), new G(t.offset2, n.offset2));
	}
	static assertSorted(t) {
		let n;
		for (const r of t) {
			if (n && !(n.seq1Range.endExclusive <= r.seq1Range.start && n.seq2Range.endExclusive <= r.seq2Range.start)) throw new se("Sequence diffs must be sorted");
			n = r;
		}
	}
	constructor(t, n) {
		this.seq1Range = t, this.seq2Range = n;
	}
	swap() {
		return new He(this.seq2Range, this.seq1Range);
	}
	toString() {
		return `${this.seq1Range} <-> ${this.seq2Range}`;
	}
	join(t) {
		return new He(this.seq1Range.join(t.seq1Range), this.seq2Range.join(t.seq2Range));
	}
	delta(t) {
		return t === 0 ? this : new He(this.seq1Range.delta(t), this.seq2Range.delta(t));
	}
	deltaStart(t) {
		return t === 0 ? this : new He(this.seq1Range.deltaStart(t), this.seq2Range.deltaStart(t));
	}
	deltaEnd(t) {
		return t === 0 ? this : new He(this.seq1Range.deltaEnd(t), this.seq2Range.deltaEnd(t));
	}
	intersectsOrTouches(t) {
		return this.seq1Range.intersectsOrTouches(t.seq1Range) || this.seq2Range.intersectsOrTouches(t.seq2Range);
	}
	intersect(t) {
		const n = this.seq1Range.intersect(t.seq1Range), r = this.seq2Range.intersect(t.seq2Range);
		if (!(!n || !r)) return new He(n, r);
	}
	getStarts() {
		return new lt(this.seq1Range.start, this.seq2Range.start);
	}
	getEndExclusives() {
		return new lt(this.seq1Range.endExclusive, this.seq2Range.endExclusive);
	}
}, lt = class Rn {
	static {
		this.zero = new Rn(0, 0);
	}
	static {
		this.max = new Rn(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
	}
	constructor(t, n) {
		this.offset1 = t, this.offset2 = n;
	}
	toString() {
		return `${this.offset1} <-> ${this.offset2}`;
	}
	delta(t) {
		return t === 0 ? this : new Rn(this.offset1 + t, this.offset2 + t);
	}
	equals(t) {
		return this.offset1 === t.offset1 && this.offset2 === t.offset2;
	}
}, Br = class ra {
	static {
		this.instance = new ra();
	}
	isValid() {
		return !0;
	}
}, uu = class {
	constructor(e) {
		if (this.timeout = e, this.startTime = Date.now(), this.valid = !0, e <= 0) throw new se("timeout must be positive");
	}
	isValid() {
		return !(Date.now() - this.startTime < this.timeout) && this.valid && (this.valid = !1), this.valid;
	}
	disable() {
		this.timeout = Number.MAX_SAFE_INTEGER, this.isValid = () => !0, this.valid = !0;
	}
}, Qn = class {
	constructor(e, t) {
		this.width = e, this.height = t, this.array = [], this.array = new Array(e * t);
	}
	get(e, t) {
		return this.array[e + t * this.width];
	}
	set(e, t, n) {
		this.array[e + t * this.width] = n;
	}
};
function Ar(e) {
	return e === L.Space || e === L.Tab;
}
var Gs = class yr {
	static {
		this.chrKeys = /* @__PURE__ */ new Map();
	}
	static getKey(t) {
		let n = this.chrKeys.get(t);
		return n === void 0 && (n = this.chrKeys.size, this.chrKeys.set(t, n)), n;
	}
	constructor(t, n, r) {
		this.range = t, this.lines = n, this.source = r, this.histogram = [];
		let i = 0;
		for (let s = t.startLineNumber - 1; s < t.endLineNumberExclusive - 1; s++) {
			const a = n[s];
			for (let u = 0; u < a.length; u++) {
				i++;
				const c = a[u], m = yr.getKey(c);
				this.histogram[m] = (this.histogram[m] || 0) + 1;
			}
			i++;
			const o = yr.getKey(`
`);
			this.histogram[o] = (this.histogram[o] || 0) + 1;
		}
		this.totalCount = i;
	}
	computeSimilarity(t) {
		let n = 0;
		const r = Math.max(this.histogram.length, t.histogram.length);
		for (let i = 0; i < r; i++) n += Math.abs((this.histogram[i] ?? 0) - (t.histogram[i] ?? 0));
		return 1 - n / (this.totalCount + t.totalCount);
	}
}, cu = class {
	compute(e, t, n = Br.instance, r) {
		if (e.length === 0 || t.length === 0) return yt.trivial(e, t);
		const i = new Qn(e.length, t.length), s = new Qn(e.length, t.length), a = new Qn(e.length, t.length);
		for (let _ = 0; _ < e.length; _++) for (let d = 0; d < t.length; d++) {
			if (!n.isValid()) return yt.trivialTimedOut(e, t);
			const b = _ === 0 ? 0 : i.get(_ - 1, d), A = d === 0 ? 0 : i.get(_, d - 1);
			let R;
			e.getElement(_) === t.getElement(d) ? (_ === 0 || d === 0 ? R = 0 : R = i.get(_ - 1, d - 1), _ > 0 && d > 0 && s.get(_ - 1, d - 1) === 3 && (R += a.get(_ - 1, d - 1)), R += r ? r(_, d) : 1) : R = -1;
			const E = Math.max(b, A, R);
			if (E === R) {
				const y = _ > 0 && d > 0 ? a.get(_ - 1, d - 1) : 0;
				a.set(_, d, y + 1), s.set(_, d, 3);
			} else E === b ? (a.set(_, d, 0), s.set(_, d, 1)) : E === A && (a.set(_, d, 0), s.set(_, d, 2));
			i.set(_, d, E);
		}
		const o = [];
		let u = e.length, c = t.length;
		function m(_, d) {
			(_ + 1 !== u || d + 1 !== c) && o.push(new Ne(new G(_ + 1, u), new G(d + 1, c))), u = _, c = d;
		}
		let h = e.length - 1, p = t.length - 1;
		for (; h >= 0 && p >= 0;) s.get(h, p) === 3 ? (m(h, p), h--, p--) : s.get(h, p) === 1 ? h-- : p--;
		return m(-1, -1), o.reverse(), new yt(o, !1);
	}
}, ia = class {
	compute(e, t, n = Br.instance) {
		if (e.length === 0 || t.length === 0) return yt.trivial(e, t);
		const r = e, i = t;
		function s(d, b) {
			for (; d < r.length && b < i.length && r.getElement(d) === i.getElement(b);) d++, b++;
			return d;
		}
		let a = 0;
		const o = new hu();
		o.set(0, s(0, 0));
		const u = new mu();
		u.set(0, o.get(0) === 0 ? null : new zs(null, 0, 0, o.get(0)));
		let c = 0;
		e: for (;;) {
			if (a++, !n.isValid()) return yt.trivialTimedOut(r, i);
			const d = -Math.min(a, i.length + a % 2), b = Math.min(a, r.length + a % 2);
			for (c = d; c <= b; c += 2) {
				const A = c === b ? -1 : o.get(c + 1), R = c === d ? -1 : o.get(c - 1) + 1, E = Math.min(Math.max(A, R), r.length), y = E - c;
				if (E > r.length || y > i.length) continue;
				const S = s(E, y);
				o.set(c, S);
				const D = E === A ? u.get(c + 1) : u.get(c - 1);
				if (u.set(c, S !== E ? new zs(D, E, y, S - E) : D), o.get(c) === r.length && o.get(c) - c === i.length) break e;
			}
		}
		let m = u.get(c);
		const h = [];
		let p = r.length, _ = i.length;
		for (;;) {
			const d = m ? m.x + m.length : 0, b = m ? m.y + m.length : 0;
			if ((d !== p || b !== _) && h.push(new Ne(new G(d, p), new G(b, _))), !m) break;
			p = m.x, _ = m.y, m = m.prev;
		}
		return h.reverse(), new yt(h, !1);
	}
}, zs = class {
	constructor(e, t, n, r) {
		this.prev = e, this.x = t, this.y = n, this.length = r;
	}
}, hu = class {
	constructor() {
		this.positiveArr = new Int32Array(10), this.negativeArr = new Int32Array(10);
	}
	get(e) {
		return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
	}
	set(e, t) {
		if (e < 0) {
			if (e = -e - 1, e >= this.negativeArr.length) {
				const n = this.negativeArr;
				this.negativeArr = new Int32Array(n.length * 2), this.negativeArr.set(n);
			}
			this.negativeArr[e] = t;
		} else {
			if (e >= this.positiveArr.length) {
				const n = this.positiveArr;
				this.positiveArr = new Int32Array(n.length * 2), this.positiveArr.set(n);
			}
			this.positiveArr[e] = t;
		}
	}
}, mu = class {
	constructor() {
		this.positiveArr = [], this.negativeArr = [];
	}
	get(e) {
		return e < 0 ? (e = -e - 1, this.negativeArr[e]) : this.positiveArr[e];
	}
	set(e, t) {
		e < 0 ? (e = -e - 1, this.negativeArr[e] = t) : this.positiveArr[e] = t;
	}
}, Bn = class {
	constructor(e, t, n) {
		this.lines = e, this.range = t, this.considerWhitespaceChanges = n, this.elements = [], this.firstElementOffsetByLineIdx = [], this.lineStartOffsets = [], this.trimmedWsLengthsByLineIdx = [], this.firstElementOffsetByLineIdx.push(0);
		for (let r = this.range.startLineNumber; r <= this.range.endLineNumber; r++) {
			let i = e[r - 1], s = 0;
			r === this.range.startLineNumber && this.range.startColumn > 1 && (s = this.range.startColumn - 1, i = i.substring(s)), this.lineStartOffsets.push(s);
			let a = 0;
			if (!n) {
				const u = i.trimStart();
				a = i.length - u.length, i = u.trimEnd();
			}
			this.trimmedWsLengthsByLineIdx.push(a);
			const o = r === this.range.endLineNumber ? Math.min(this.range.endColumn - 1 - s - a, i.length) : i.length;
			for (let u = 0; u < o; u++) this.elements.push(i.charCodeAt(u));
			r < this.range.endLineNumber && (this.elements.push(10), this.firstElementOffsetByLineIdx.push(this.elements.length));
		}
	}
	toString() {
		return `Slice: "${this.text}"`;
	}
	get text() {
		return this.getText(new G(0, this.length));
	}
	getText(e) {
		return this.elements.slice(e.start, e.endExclusive).map((t) => String.fromCharCode(t)).join("");
	}
	getElement(e) {
		return this.elements[e];
	}
	get length() {
		return this.elements.length;
	}
	getBoundaryScore(e) {
		const t = Ys(e > 0 ? this.elements[e - 1] : -1), n = Ys(e < this.elements.length ? this.elements[e] : -1);
		if (t === re.LineBreakCR && n === re.LineBreakLF) return 0;
		if (t === re.LineBreakLF) return 150;
		let r = 0;
		return t !== n && (r += 10, t === re.WordLower && n === re.WordUpper && (r += 1)), r += Xs(t), r += Xs(n), r;
	}
	translateOffset(e, t = "right") {
		const n = xt(this.firstElementOffsetByLineIdx, (i) => i <= e), r = e - this.firstElementOffsetByLineIdx[n];
		return new Y(this.range.startLineNumber + n, 1 + this.lineStartOffsets[n] + r + (r === 0 && t === "left" ? 0 : this.trimmedWsLengthsByLineIdx[n]));
	}
	translateRange(e) {
		const t = this.translateOffset(e.start, "right"), n = this.translateOffset(e.endExclusive, "left");
		return n.isBefore(t) ? V.fromPositions(n, n) : V.fromPositions(t, n);
	}
	findWordContaining(e) {
		if (e < 0 || e >= this.elements.length || !pt(this.elements[e])) return;
		let t = e;
		for (; t > 0 && pt(this.elements[t - 1]);) t--;
		let n = e;
		for (; n < this.elements.length && pt(this.elements[n]);) n++;
		return new G(t, n);
	}
	findSubWordContaining(e) {
		if (e < 0 || e >= this.elements.length || !pt(this.elements[e])) return;
		let t = e;
		for (; t > 0 && pt(this.elements[t - 1]) && !js(this.elements[t]);) t--;
		let n = e;
		for (; n < this.elements.length && pt(this.elements[n]) && !js(this.elements[n]);) n++;
		return new G(t, n);
	}
	countLinesIn(e) {
		return this.translateOffset(e.endExclusive).lineNumber - this.translateOffset(e.start).lineNumber;
	}
	isStronglyEqual(e, t) {
		return this.elements[e] === this.elements[t];
	}
	extendToFullLines(e) {
		return new G(Tt(this.firstElementOffsetByLineIdx, (t) => t <= e.start) ?? 0, va(this.firstElementOffsetByLineIdx, (t) => e.endExclusive <= t) ?? this.elements.length);
	}
};
function pt(e) {
	return e >= L.a && e <= L.z || e >= L.A && e <= L.Z || e >= L.Digit0 && e <= L.Digit9;
}
function js(e) {
	return e >= L.A && e <= L.Z;
}
var re;
(function(e) {
	e[e.WordLower = 0] = "WordLower", e[e.WordUpper = 1] = "WordUpper", e[e.WordNumber = 2] = "WordNumber", e[e.End = 3] = "End", e[e.Other = 4] = "Other", e[e.Separator = 5] = "Separator", e[e.Space = 6] = "Space", e[e.LineBreakCR = 7] = "LineBreakCR", e[e.LineBreakLF = 8] = "LineBreakLF";
})(re || (re = {}));
const fu = {
	[re.WordLower]: 0,
	[re.WordUpper]: 0,
	[re.WordNumber]: 0,
	[re.End]: 10,
	[re.Other]: 2,
	[re.Separator]: 30,
	[re.Space]: 3,
	[re.LineBreakCR]: 10,
	[re.LineBreakLF]: 10
};
function Xs(e) {
	return fu[e];
}
function Ys(e) {
	return e === L.LineFeed ? re.LineBreakLF : e === L.CarriageReturn ? re.LineBreakCR : Ar(e) ? re.Space : e >= L.a && e <= L.z ? re.WordLower : e >= L.A && e <= L.Z ? re.WordUpper : e >= L.Digit0 && e <= L.Digit9 ? re.WordNumber : e === -1 ? re.End : e === L.Comma || e === L.Semicolon ? re.Separator : re.Other;
}
function gu(e, t, n, r, i, s) {
	let { moves: a, excludedChanges: o } = pu(e, t, n, s);
	if (!s.isValid()) return [];
	const u = du(e.filter((c) => !o.has(c)), r, i, t, n, s);
	return Aa(a, u), a = bu(a), a = a.filter((c) => {
		const m = c.original.toOffsetRange().slice(t).map((h) => h.trim());
		return m.join(`
`).length >= 15 && _u(m, (h) => h.length >= 2) >= 2;
	}), a = wu(e, a), a;
}
function _u(e, t) {
	let n = 0;
	for (const r of e) t(r) && n++;
	return n;
}
function pu(e, t, n, r) {
	const i = [], s = e.filter((u) => u.modified.isEmpty && u.original.length >= 3).map((u) => new Gs(u.original, t, u)), a = new Set(e.filter((u) => u.original.isEmpty && u.modified.length >= 3).map((u) => new Gs(u.modified, n, u))), o = /* @__PURE__ */ new Set();
	for (const u of s) {
		let c = -1, m;
		for (const h of a) {
			const p = u.computeSimilarity(h);
			p > c && (c = p, m = h);
		}
		if (c > .9 && m && (a.delete(m), i.push(new Ut(u.range, m.range)), o.add(u.source), o.add(m.source)), !r.isValid()) return {
			moves: i,
			excludedChanges: o
		};
	}
	return {
		moves: i,
		excludedChanges: o
	};
}
function du(e, t, n, r, i, s) {
	const a = [], o = new d1();
	for (const p of e) for (let _ = p.original.startLineNumber; _ < p.original.endLineNumberExclusive - 2; _++) {
		const d = `${t[_ - 1]}:${t[_ + 1 - 1]}:${t[_ + 2 - 1]}`;
		o.add(d, { range: new Q(_, _ + 3) });
	}
	const u = [];
	e.sort(ot((p) => p.modified.startLineNumber, Et));
	for (const p of e) {
		let _ = [];
		for (let d = p.modified.startLineNumber; d < p.modified.endLineNumberExclusive - 2; d++) {
			const b = `${n[d - 1]}:${n[d + 1 - 1]}:${n[d + 2 - 1]}`, A = new Q(d, d + 3), R = [];
			o.forEach(b, ({ range: E }) => {
				for (const S of _) if (S.originalLineRange.endLineNumberExclusive + 1 === E.endLineNumberExclusive && S.modifiedLineRange.endLineNumberExclusive + 1 === A.endLineNumberExclusive) {
					S.originalLineRange = new Q(S.originalLineRange.startLineNumber, E.endLineNumberExclusive), S.modifiedLineRange = new Q(S.modifiedLineRange.startLineNumber, A.endLineNumberExclusive), R.push(S);
					return;
				}
				const y = {
					modifiedLineRange: A,
					originalLineRange: E
				};
				u.push(y), R.push(y);
			}), _ = R;
		}
		if (!s.isValid()) return [];
	}
	u.sort(ya(ot((p) => p.modifiedLineRange.length, Et)));
	const c = new Pn(), m = new Pn();
	for (const p of u) {
		const _ = p.modifiedLineRange.startLineNumber - p.originalLineRange.startLineNumber, d = c.subtractFrom(p.modifiedLineRange), b = m.subtractFrom(p.originalLineRange).getWithDelta(_), A = d.getIntersection(b);
		for (const R of A.ranges) {
			if (R.length < 3) continue;
			const E = R, y = R.delta(-_);
			a.push(new Ut(y, E)), c.addRange(E), m.addRange(y);
		}
	}
	a.sort(ot((p) => p.original.startLineNumber, Et));
	const h = new g1(e);
	for (let p = 0; p < a.length; p++) {
		const _ = a[p], d = h.findLastMonotonous((T) => T.original.startLineNumber <= _.original.startLineNumber), b = Tt(e, (T) => T.modified.startLineNumber <= _.modified.startLineNumber), A = Math.max(_.original.startLineNumber - d.original.startLineNumber, _.modified.startLineNumber - b.modified.startLineNumber), R = h.findLastMonotonous((T) => T.original.startLineNumber < _.original.endLineNumberExclusive), E = Tt(e, (T) => T.modified.startLineNumber < _.modified.endLineNumberExclusive), y = Math.max(R.original.endLineNumberExclusive - _.original.endLineNumberExclusive, E.modified.endLineNumberExclusive - _.modified.endLineNumberExclusive);
		let S;
		for (S = 0; S < A; S++) {
			const T = _.original.startLineNumber - S - 1, v = _.modified.startLineNumber - S - 1;
			if (T > r.length || v > i.length || c.contains(v) || m.contains(T) || !Qs(r[T - 1], i[v - 1], s)) break;
		}
		S > 0 && (m.addRange(new Q(_.original.startLineNumber - S, _.original.startLineNumber)), c.addRange(new Q(_.modified.startLineNumber - S, _.modified.startLineNumber)));
		let D;
		for (D = 0; D < y; D++) {
			const T = _.original.endLineNumberExclusive + D, v = _.modified.endLineNumberExclusive + D;
			if (T > r.length || v > i.length || c.contains(v) || m.contains(T) || !Qs(r[T - 1], i[v - 1], s)) break;
		}
		D > 0 && (m.addRange(new Q(_.original.endLineNumberExclusive, _.original.endLineNumberExclusive + D)), c.addRange(new Q(_.modified.endLineNumberExclusive, _.modified.endLineNumberExclusive + D))), (S > 0 || D > 0) && (a[p] = new Ut(new Q(_.original.startLineNumber - S, _.original.endLineNumberExclusive + D), new Q(_.modified.startLineNumber - S, _.modified.endLineNumberExclusive + D)));
	}
	return a;
}
function Qs(e, t, n) {
	if (e.trim() === t.trim()) return !0;
	if (e.length > 300 && t.length > 300) return !1;
	const r = new ia().compute(new Bn([e], new V(1, 1, 1, e.length), !1), new Bn([t], new V(1, 1, 1, t.length), !1), n);
	let i = 0;
	const s = Ne.invert(r.diffs, e.length);
	for (const u of s) u.seq1Range.forEach((c) => {
		Ar(e.charCodeAt(c)) || i++;
	});
	function a(u) {
		let c = 0;
		for (let m = 0; m < e.length; m++) Ar(u.charCodeAt(m)) || c++;
		return c;
	}
	const o = a(e.length > t.length ? e : t);
	return i / o > .6 && o > 10;
}
function bu(e) {
	if (e.length === 0) return e;
	e.sort(ot((n) => n.original.startLineNumber, Et));
	const t = [e[0]];
	for (let n = 1; n < e.length; n++) {
		const r = t[t.length - 1], i = e[n], s = i.original.startLineNumber - r.original.endLineNumberExclusive, a = i.modified.startLineNumber - r.modified.endLineNumberExclusive;
		if (s >= 0 && a >= 0 && s + a <= 2) {
			t[t.length - 1] = r.join(i);
			continue;
		}
		t.push(i);
	}
	return t;
}
function wu(e, t) {
	const n = new g1(e);
	return t = t.filter((r) => (n.findLastMonotonous((i) => i.original.startLineNumber < r.original.endLineNumberExclusive) || new Ut(new Q(1, 1), new Q(1, 1))) !== Tt(e, (i) => i.modified.startLineNumber < r.modified.endLineNumberExclusive)), t;
}
function Zs(e, t, n) {
	let r = n;
	return r = Js(e, t, r), r = Js(e, t, r), r = Lu(e, t, r), r;
}
function Js(e, t, n) {
	if (n.length === 0) return n;
	const r = [];
	r.push(n[0]);
	for (let s = 1; s < n.length; s++) {
		const a = r[r.length - 1];
		let o = n[s];
		if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
			const u = o.seq1Range.start - a.seq1Range.endExclusive;
			let c;
			for (c = 1; c <= u && !(e.getElement(o.seq1Range.start - c) !== e.getElement(o.seq1Range.endExclusive - c) || t.getElement(o.seq2Range.start - c) !== t.getElement(o.seq2Range.endExclusive - c)); c++);
			if (c--, c === u) {
				r[r.length - 1] = new Ne(new G(a.seq1Range.start, o.seq1Range.endExclusive - u), new G(a.seq2Range.start, o.seq2Range.endExclusive - u));
				continue;
			}
			o = o.delta(-c);
		}
		r.push(o);
	}
	const i = [];
	for (let s = 0; s < r.length - 1; s++) {
		const a = r[s + 1];
		let o = r[s];
		if (o.seq1Range.isEmpty || o.seq2Range.isEmpty) {
			const u = a.seq1Range.start - o.seq1Range.endExclusive;
			let c;
			for (c = 0; c < u && !(!e.isStronglyEqual(o.seq1Range.start + c, o.seq1Range.endExclusive + c) || !t.isStronglyEqual(o.seq2Range.start + c, o.seq2Range.endExclusive + c)); c++);
			if (c === u) {
				r[s + 1] = new Ne(new G(o.seq1Range.start + u, a.seq1Range.endExclusive), new G(o.seq2Range.start + u, a.seq2Range.endExclusive));
				continue;
			}
			c > 0 && (o = o.delta(c));
		}
		i.push(o);
	}
	return r.length > 0 && i.push(r[r.length - 1]), i;
}
function Lu(e, t, n) {
	if (!e.getBoundaryScore || !t.getBoundaryScore) return n;
	for (let r = 0; r < n.length; r++) {
		const i = r > 0 ? n[r - 1] : void 0, s = n[r], a = r + 1 < n.length ? n[r + 1] : void 0, o = new G(i ? i.seq1Range.endExclusive + 1 : 0, a ? a.seq1Range.start - 1 : e.length), u = new G(i ? i.seq2Range.endExclusive + 1 : 0, a ? a.seq2Range.start - 1 : t.length);
		s.seq1Range.isEmpty ? n[r] = Ks(s, e, t, o, u) : s.seq2Range.isEmpty && (n[r] = Ks(s.swap(), t, e, u, o).swap());
	}
	return n;
}
function Ks(e, t, n, r, i) {
	let a = 1;
	for (; e.seq1Range.start - a >= r.start && e.seq2Range.start - a >= i.start && n.isStronglyEqual(e.seq2Range.start - a, e.seq2Range.endExclusive - a) && a < 100;) a++;
	a--;
	let o = 0;
	for (; e.seq1Range.start + o < r.endExclusive && e.seq2Range.endExclusive + o < i.endExclusive && n.isStronglyEqual(e.seq2Range.start + o, e.seq2Range.endExclusive + o) && o < 100;) o++;
	if (a === 0 && o === 0) return e;
	let u = 0, c = -1;
	for (let m = -a; m <= o; m++) {
		const h = e.seq2Range.start + m, p = e.seq2Range.endExclusive + m, _ = e.seq1Range.start + m, d = t.getBoundaryScore(_) + n.getBoundaryScore(h) + n.getBoundaryScore(p);
		d > c && (c = d, u = m);
	}
	return e.delta(u);
}
function vu(e, t, n) {
	const r = [];
	for (const i of n) {
		const s = r[r.length - 1];
		if (!s) {
			r.push(i);
			continue;
		}
		i.seq1Range.start - s.seq1Range.endExclusive <= 2 || i.seq2Range.start - s.seq2Range.endExclusive <= 2 ? r[r.length - 1] = new Ne(s.seq1Range.join(i.seq1Range), s.seq2Range.join(i.seq2Range)) : r.push(i);
	}
	return r;
}
function Cs(e, t, n, r, i = !1) {
	const s = Ne.invert(n, e.length), a = [];
	let o = new lt(0, 0);
	function u(c, m) {
		if (c.offset1 < o.offset1 || c.offset2 < o.offset2) return;
		const h = r(e, c.offset1), p = r(t, c.offset2);
		if (!h || !p) return;
		let _ = new Ne(h, p);
		const d = _.intersect(m);
		let b = d.seq1Range.length, A = d.seq2Range.length;
		for (; s.length > 0;) {
			const R = s[0];
			if (!(R.seq1Range.intersects(_.seq1Range) || R.seq2Range.intersects(_.seq2Range))) break;
			const E = new Ne(r(e, R.seq1Range.start), r(t, R.seq2Range.start)), y = E.intersect(R);
			if (b += y.seq1Range.length, A += y.seq2Range.length, _ = _.join(E), _.seq1Range.endExclusive >= R.seq1Range.endExclusive) s.shift();
			else break;
		}
		(i && b + A < _.seq1Range.length + _.seq2Range.length || b + A < (_.seq1Range.length + _.seq2Range.length) * 2 / 3) && a.push(_), o = _.getEndExclusives();
	}
	for (; s.length > 0;) {
		const c = s.shift();
		c.seq1Range.isEmpty || (u(c.getStarts(), c), u(c.getEndExclusives().delta(-1), c));
	}
	return Nu(n, a);
}
function Nu(e, t) {
	const n = [];
	for (; e.length > 0 || t.length > 0;) {
		const r = e[0], i = t[0];
		let s;
		r && (!i || r.seq1Range.start < i.seq1Range.start) ? s = e.shift() : s = t.shift(), n.length > 0 && n[n.length - 1].seq1Range.endExclusive >= s.seq1Range.start ? n[n.length - 1] = n[n.length - 1].join(s) : n.push(s);
	}
	return n;
}
function Ru(e, t, n) {
	let r = n;
	if (r.length === 0) return r;
	let i = 0, s;
	do {
		s = !1;
		const a = [r[0]];
		for (let o = 1; o < r.length; o++) {
			let m = function(h, p) {
				const _ = new G(c.seq1Range.endExclusive, u.seq1Range.start);
				return e.getText(_).replace(/\s/g, "").length <= 4 && (h.seq1Range.length + h.seq2Range.length > 5 || p.seq1Range.length + p.seq2Range.length > 5);
			};
			const u = r[o], c = a[a.length - 1];
			m(c, u) ? (s = !0, a[a.length - 1] = a[a.length - 1].join(u)) : a.push(u);
		}
		r = a;
	} while (i++ < 10 && s);
	return r;
}
function Eu(e, t, n) {
	let r = n;
	if (r.length === 0) return r;
	let i = 0, s;
	do {
		s = !1;
		const o = [r[0]];
		for (let u = 1; u < r.length; u++) {
			let h = function(p, _) {
				const d = new G(m.seq1Range.endExclusive, c.seq1Range.start);
				if (e.countLinesIn(d) > 5 || d.length > 500) return !1;
				const b = e.getText(d).trim();
				if (b.length > 20 || b.split(/\r\n|\r|\n/).length > 1) return !1;
				const A = e.countLinesIn(p.seq1Range), R = p.seq1Range.length, E = t.countLinesIn(p.seq2Range), y = p.seq2Range.length, S = e.countLinesIn(_.seq1Range), D = _.seq1Range.length, T = t.countLinesIn(_.seq2Range), v = _.seq2Range.length, k = 130;
				function B(X) {
					return Math.min(X, k);
				}
				return Math.pow(Math.pow(B(A * 40 + R), 1.5) + Math.pow(B(E * 40 + y), 1.5), 1.5) + Math.pow(Math.pow(B(S * 40 + D), 1.5) + Math.pow(B(T * 40 + v), 1.5), 1.5) > (k ** 1.5) ** 1.5 * 1.3;
			};
			const c = r[u], m = o[o.length - 1];
			h(m, c) ? (s = !0, o[o.length - 1] = o[o.length - 1].join(c)) : o.push(c);
		}
		r = o;
	} while (i++ < 10 && s);
	const a = [];
	return Ea(r, (o, u, c) => {
		let m = u;
		function h(R) {
			return R.length > 0 && R.trim().length <= 3 && u.seq1Range.length + u.seq2Range.length > 100;
		}
		const p = e.extendToFullLines(u.seq1Range), _ = e.getText(new G(p.start, u.seq1Range.start));
		h(_) && (m = m.deltaStart(-_.length));
		const d = e.getText(new G(u.seq1Range.endExclusive, p.endExclusive));
		h(d) && (m = m.deltaEnd(d.length));
		const b = Ne.fromOffsetPairs(o ? o.getEndExclusives() : lt.zero, c ? c.getStarts() : lt.max), A = m.intersect(b);
		a.length > 0 && A.getStarts().equals(a[a.length - 1].getEndExclusives()) ? a[a.length - 1] = a[a.length - 1].join(A) : a.push(A);
	}), a;
}
var e1 = class {
	constructor(e, t) {
		this.trimmedHash = e, this.lines = t;
	}
	getElement(e) {
		return this.trimmedHash[e];
	}
	get length() {
		return this.trimmedHash.length;
	}
	getBoundaryScore(e) {
		return 1e3 - ((e === 0 ? 0 : t1(this.lines[e - 1])) + (e === this.lines.length ? 0 : t1(this.lines[e])));
	}
	getText(e) {
		return this.lines.slice(e.start, e.endExclusive).join(`
`);
	}
	isStronglyEqual(e, t) {
		return this.lines[e] === this.lines[t];
	}
};
function t1(e) {
	let t = 0;
	for (; t < e.length && (e.charCodeAt(t) === L.Space || e.charCodeAt(t) === L.Tab);) t++;
	return t;
}
var Au = class {
	constructor() {
		this.dynamicProgrammingDiffing = new cu(), this.myersDiffingAlgorithm = new ia();
	}
	computeDiff(e, t, n) {
		if (e.length <= 1 && p1(e, t, (S, D) => S === D)) return new Ln([], [], !1);
		if (e.length === 1 && e[0].length === 0 || t.length === 1 && t[0].length === 0) return new Ln([new Dt(new Q(1, e.length + 1), new Q(1, t.length + 1), [new $e(new V(1, 1, e.length, e[e.length - 1].length + 1), new V(1, 1, t.length, t[t.length - 1].length + 1))])], [], !1);
		const r = n.maxComputationTimeMs === 0 ? Br.instance : new uu(n.maxComputationTimeMs), i = !n.ignoreTrimWhitespace, s = /* @__PURE__ */ new Map();
		function a(S) {
			let D = s.get(S);
			return D === void 0 && (D = s.size, s.set(S, D)), D;
		}
		const o = e.map((S) => a(S.trim())), u = t.map((S) => a(S.trim())), c = new e1(o, e), m = new e1(u, t), h = c.length + m.length < 1700 ? this.dynamicProgrammingDiffing.compute(c, m, r, (S, D) => e[S] === t[D] ? t[D].length === 0 ? .1 : 1 + Math.log(1 + t[D].length) : .99) : this.myersDiffingAlgorithm.compute(c, m, r);
		let p = h.diffs, _ = h.hitTimeout;
		p = Zs(c, m, p), p = Ru(c, m, p);
		const d = [], b = (S) => {
			if (i) for (let D = 0; D < S; D++) {
				const T = A + D, v = R + D;
				if (e[T] !== t[v]) {
					const k = this.refineDiff(e, t, new Ne(new G(T, T + 1), new G(v, v + 1)), r, i, n);
					for (const B of k.mappings) d.push(B);
					k.hitTimeout && (_ = !0);
				}
			}
		};
		let A = 0, R = 0;
		for (const S of p) {
			Jt(() => S.seq1Range.start - A === S.seq2Range.start - R), b(S.seq1Range.start - A), A = S.seq1Range.endExclusive, R = S.seq2Range.endExclusive;
			const D = this.refineDiff(e, t, S, r, i, n);
			D.hitTimeout && (_ = !0);
			for (const T of D.mappings) d.push(T);
		}
		b(e.length - A);
		const E = qs(d, new un(e), new un(t));
		let y = [];
		return n.computeMoves && (y = this.computeMoves(E, e, t, o, u, r, i, n)), Jt(() => {
			function S(T, v) {
				if (T.lineNumber < 1 || T.lineNumber > v.length) return !1;
				const k = v[T.lineNumber - 1];
				return !(T.column < 1 || T.column > k.length + 1);
			}
			function D(T, v) {
				return !(T.startLineNumber < 1 || T.startLineNumber > v.length + 1 || T.endLineNumberExclusive < 1 || T.endLineNumberExclusive > v.length + 1);
			}
			for (const T of E) {
				if (!T.innerChanges) return !1;
				for (const v of T.innerChanges) if (!(S(v.modifiedRange.getStartPosition(), t) && S(v.modifiedRange.getEndPosition(), t) && S(v.originalRange.getStartPosition(), e) && S(v.originalRange.getEndPosition(), e))) return !1;
				if (!D(T.modified, t) || !D(T.original, e)) return !1;
			}
			return !0;
		}), new Ln(E, y, _);
	}
	computeMoves(e, t, n, r, i, s, a, o) {
		return gu(e, t, n, r, i, s).map((u) => new eu(u, qs(this.refineDiff(t, n, new Ne(u.original.toOffsetRange(), u.modified.toOffsetRange()), s, a, o).mappings, new un(t), new un(n), !0)));
	}
	refineDiff(e, t, n, r, i, s) {
		const a = yu(n).toRangeMapping2(e, t), o = new Bn(e, a.originalRange, i), u = new Bn(t, a.modifiedRange, i), c = o.length + u.length < 500 ? this.dynamicProgrammingDiffing.compute(o, u, r) : this.myersDiffingAlgorithm.compute(o, u, r);
		let m = c.diffs;
		return m = Zs(o, u, m), m = Cs(o, u, m, (h, p) => h.findWordContaining(p)), s.extendToSubwords && (m = Cs(o, u, m, (h, p) => h.findSubWordContaining(p), !0)), m = vu(o, u, m), m = Eu(o, u, m), {
			mappings: m.map((h) => new $e(o.translateRange(h.seq1Range), u.translateRange(h.seq2Range))),
			hitTimeout: c.hitTimeout
		};
	}
};
function yu(e) {
	return new Ut(new Q(e.seq1Range.start + 1, e.seq1Range.endExclusive + 1), new Q(e.seq2Range.start + 1, e.seq2Range.endExclusive + 1));
}
const Zt = {
	getLegacy: () => new au(),
	getDefault: () => new Au()
};
function Ce(e, t) {
	const n = Math.pow(10, t);
	return Math.round(e * n) / n;
}
var w = class {
	constructor(e, t, n, r = 1) {
		this._rgbaBrand = void 0, this.r = Math.min(255, Math.max(0, e)) | 0, this.g = Math.min(255, Math.max(0, t)) | 0, this.b = Math.min(255, Math.max(0, n)) | 0, this.a = Ce(Math.max(Math.min(1, r), 0), 3);
	}
	static equals(e, t) {
		return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
	}
}, nt = class Gt {
	constructor(t, n, r, i) {
		this._hslaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Ce(Math.max(Math.min(1, n), 0), 3), this.l = Ce(Math.max(Math.min(1, r), 0), 3), this.a = Ce(Math.max(Math.min(1, i), 0), 3);
	}
	static equals(t, n) {
		return t.h === n.h && t.s === n.s && t.l === n.l && t.a === n.a;
	}
	static fromRGBA(t) {
		const n = t.r / 255, r = t.g / 255, i = t.b / 255, s = t.a, a = Math.max(n, r, i), o = Math.min(n, r, i);
		let u = 0, c = 0;
		const m = (o + a) / 2, h = a - o;
		if (h > 0) {
			switch (c = Math.min(m <= .5 ? h / (2 * m) : h / (2 - 2 * m), 1), a) {
				case n:
					u = (r - i) / h + (r < i ? 6 : 0);
					break;
				case r:
					u = (i - n) / h + 2;
					break;
				case i:
					u = (n - r) / h + 4;
					break;
			}
			u *= 60, u = Math.round(u);
		}
		return new Gt(u, c, m, s);
	}
	static _hue2rgb(t, n, r) {
		return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (n - t) * 6 * r : r < 1 / 2 ? n : r < 2 / 3 ? t + (n - t) * (2 / 3 - r) * 6 : t;
	}
	static toRGBA(t) {
		const n = t.h / 360, { s: r, l: i, a: s } = t;
		let a, o, u;
		if (r === 0) a = o = u = i;
		else {
			const c = i < .5 ? i * (1 + r) : i + r - i * r, m = 2 * i - c;
			a = Gt._hue2rgb(m, c, n + 1 / 3), o = Gt._hue2rgb(m, c, n), u = Gt._hue2rgb(m, c, n - 1 / 3);
		}
		return new w(Math.round(a * 255), Math.round(o * 255), Math.round(u * 255), s);
	}
}, hn = class sa {
	constructor(t, n, r, i) {
		this._hsvaBrand = void 0, this.h = Math.max(Math.min(360, t), 0) | 0, this.s = Ce(Math.max(Math.min(1, n), 0), 3), this.v = Ce(Math.max(Math.min(1, r), 0), 3), this.a = Ce(Math.max(Math.min(1, i), 0), 3);
	}
	static equals(t, n) {
		return t.h === n.h && t.s === n.s && t.v === n.v && t.a === n.a;
	}
	static fromRGBA(t) {
		const n = t.r / 255, r = t.g / 255, i = t.b / 255, s = Math.max(n, r, i), a = s - Math.min(n, r, i), o = s === 0 ? 0 : a / s;
		let u;
		return a === 0 ? u = 0 : s === n ? u = ((r - i) / a % 6 + 6) % 6 : s === r ? u = (i - n) / a + 2 : u = (n - r) / a + 4, new sa(Math.round(u * 60), o, s, t.a);
	}
	static toRGBA(t) {
		const { h: n, s: r, v: i, a: s } = t, a = i * r, o = a * (1 - Math.abs(n / 60 % 2 - 1)), u = i - a;
		let [c, m, h] = [
			0,
			0,
			0
		];
		return n < 60 ? (c = a, m = o) : n < 120 ? (c = o, m = a) : n < 180 ? (m = a, h = o) : n < 240 ? (m = o, h = a) : n < 300 ? (c = o, h = a) : n <= 360 && (c = a, h = o), c = Math.round((c + u) * 255), m = Math.round((m + u) * 255), h = Math.round((h + u) * 255), new w(c, m, h, s);
	}
}, On = class K {
	static fromHex(t) {
		return K.Format.CSS.parseHex(t) || K.red;
	}
	static equals(t, n) {
		return !t && !n ? !0 : !t || !n ? !1 : t.equals(n);
	}
	get hsla() {
		return this._hsla ? this._hsla : nt.fromRGBA(this.rgba);
	}
	get hsva() {
		return this._hsva ? this._hsva : hn.fromRGBA(this.rgba);
	}
	constructor(t) {
		if (t) if (t instanceof w) this.rgba = t;
		else if (t instanceof nt) this._hsla = t, this.rgba = nt.toRGBA(t);
		else if (t instanceof hn) this._hsva = t, this.rgba = hn.toRGBA(t);
		else throw new Error("Invalid color ctor argument");
		else throw new Error("Color needs a value");
	}
	equals(t) {
		return !!t && w.equals(this.rgba, t.rgba) && nt.equals(this.hsla, t.hsla) && hn.equals(this.hsva, t.hsva);
	}
	getRelativeLuminance() {
		const t = K._relativeLuminanceForComponent(this.rgba.r), n = K._relativeLuminanceForComponent(this.rgba.g), r = K._relativeLuminanceForComponent(this.rgba.b);
		return Ce(.2126 * t + .7152 * n + .0722 * r, 4);
	}
	reduceRelativeLuminace(t, n) {
		let { r, g: i, b: s } = t.rgba, a = this.getContrastRatio(t);
		for (; a < n && (r > 0 || i > 0 || s > 0);) r -= Math.max(0, Math.ceil(r * .1)), i -= Math.max(0, Math.ceil(i * .1)), s -= Math.max(0, Math.ceil(s * .1)), a = this.getContrastRatio(new K(new w(r, i, s)));
		return new K(new w(r, i, s));
	}
	increaseRelativeLuminace(t, n) {
		let { r, g: i, b: s } = t.rgba, a = this.getContrastRatio(t);
		for (; a < n && (r < 255 || i < 255 || s < 255);) r = Math.min(255, r + Math.ceil((255 - r) * .1)), i = Math.min(255, i + Math.ceil((255 - i) * .1)), s = Math.min(255, s + Math.ceil((255 - s) * .1)), a = this.getContrastRatio(new K(new w(r, i, s)));
		return new K(new w(r, i, s));
	}
	static _relativeLuminanceForComponent(t) {
		const n = t / 255;
		return n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4);
	}
	getContrastRatio(t) {
		const n = this.getRelativeLuminance(), r = t.getRelativeLuminance();
		return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05);
	}
	isDarker() {
		return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 < 128;
	}
	isLighter() {
		return (this.rgba.r * 299 + this.rgba.g * 587 + this.rgba.b * 114) / 1e3 >= 128;
	}
	isLighterThan(t) {
		return this.getRelativeLuminance() > t.getRelativeLuminance();
	}
	isDarkerThan(t) {
		return this.getRelativeLuminance() < t.getRelativeLuminance();
	}
	ensureConstrast(t, n) {
		const r = this.getRelativeLuminance(), i = t.getRelativeLuminance();
		if (this.getContrastRatio(t) < n) {
			if (i < r) {
				const o = this.reduceRelativeLuminace(t, n), u = this.getContrastRatio(o);
				if (u < n) {
					const c = this.increaseRelativeLuminace(t, n);
					return u > this.getContrastRatio(c) ? o : c;
				}
				return o;
			}
			const s = this.increaseRelativeLuminace(t, n), a = this.getContrastRatio(s);
			if (a < n) {
				const o = this.reduceRelativeLuminace(t, n);
				return a > this.getContrastRatio(o) ? s : o;
			}
			return s;
		}
		return t;
	}
	lighten(t) {
		return new K(new nt(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * t, this.hsla.a));
	}
	darken(t) {
		return new K(new nt(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * t, this.hsla.a));
	}
	transparent(t) {
		const { r: n, g: r, b: i, a: s } = this.rgba;
		return new K(new w(n, r, i, s * t));
	}
	isTransparent() {
		return this.rgba.a === 0;
	}
	isOpaque() {
		return this.rgba.a === 1;
	}
	opposite() {
		return new K(new w(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
	}
	blend(t) {
		const n = t.rgba, r = this.rgba.a, i = n.a, s = r + i * (1 - r);
		if (s < 1e-6) return K.transparent;
		return new K(new w(this.rgba.r * r / s + n.r * i * (1 - r) / s, this.rgba.g * r / s + n.g * i * (1 - r) / s, this.rgba.b * r / s + n.b * i * (1 - r) / s, s));
	}
	mix(t, n = .5) {
		const r = Math.min(Math.max(n, 0), 1), i = this.rgba, s = t.rgba;
		return new K(new w(i.r + (s.r - i.r) * r, i.g + (s.g - i.g) * r, i.b + (s.b - i.b) * r, i.a + (s.a - i.a) * r));
	}
	makeOpaque(t) {
		if (this.isOpaque() || t.rgba.a !== 1) return this;
		const { r: n, g: r, b: i, a: s } = this.rgba;
		return new K(new w(t.rgba.r - s * (t.rgba.r - n), t.rgba.g - s * (t.rgba.g - r), t.rgba.b - s * (t.rgba.b - i), 1));
	}
	flatten(...t) {
		const n = t.reduceRight((r, i) => K._flatten(i, r));
		return K._flatten(this, n);
	}
	static _flatten(t, n) {
		const r = 1 - t.rgba.a;
		return new K(new w(r * n.rgba.r + t.rgba.a * t.rgba.r, r * n.rgba.g + t.rgba.a * t.rgba.g, r * n.rgba.b + t.rgba.a * t.rgba.b));
	}
	toString() {
		return this._toString || (this._toString = K.Format.CSS.format(this)), this._toString;
	}
	toNumber32Bit() {
		return this._toNumber32Bit || (this._toNumber32Bit = (this.rgba.r << 24 | this.rgba.g << 16 | this.rgba.b << 8 | this.rgba.a * 255 << 0) >>> 0), this._toNumber32Bit;
	}
	static getLighterColor(t, n, r) {
		if (t.isLighterThan(n)) return t;
		r = r || .5;
		const i = t.getRelativeLuminance(), s = n.getRelativeLuminance();
		return r = r * (s - i) / s, t.lighten(r);
	}
	static getDarkerColor(t, n, r) {
		if (t.isDarkerThan(n)) return t;
		r = r || .5;
		const i = t.getRelativeLuminance(), s = n.getRelativeLuminance();
		return r = r * (i - s) / i, t.darken(r);
	}
	static {
		this.white = new K(new w(255, 255, 255, 1));
	}
	static {
		this.black = new K(new w(0, 0, 0, 1));
	}
	static {
		this.red = new K(new w(255, 0, 0, 1));
	}
	static {
		this.blue = new K(new w(0, 0, 255, 1));
	}
	static {
		this.green = new K(new w(0, 255, 0, 1));
	}
	static {
		this.cyan = new K(new w(0, 255, 255, 1));
	}
	static {
		this.lightgrey = new K(new w(211, 211, 211, 1));
	}
	static {
		this.transparent = new K(new w(0, 0, 0, 0));
	}
};
(function(e) {
	(function(t) {
		(function(n) {
			function r(b) {
				return b.rgba.a === 1 ? `rgb(${b.rgba.r}, ${b.rgba.g}, ${b.rgba.b})` : e.Format.CSS.formatRGBA(b);
			}
			n.formatRGB = r;
			function i(b) {
				return `rgba(${b.rgba.r}, ${b.rgba.g}, ${b.rgba.b}, ${+b.rgba.a.toFixed(2)})`;
			}
			n.formatRGBA = i;
			function s(b) {
				return b.hsla.a === 1 ? `hsl(${b.hsla.h}, ${Math.round(b.hsla.s * 100)}%, ${Math.round(b.hsla.l * 100)}%)` : e.Format.CSS.formatHSLA(b);
			}
			n.formatHSL = s;
			function a(b) {
				return `hsla(${b.hsla.h}, ${Math.round(b.hsla.s * 100)}%, ${Math.round(b.hsla.l * 100)}%, ${b.hsla.a.toFixed(2)})`;
			}
			n.formatHSLA = a;
			function o(b) {
				const A = b.toString(16);
				return A.length !== 2 ? "0" + A : A;
			}
			function u(b) {
				return `#${o(b.rgba.r)}${o(b.rgba.g)}${o(b.rgba.b)}`;
			}
			n.formatHex = u;
			function c(b, A = !1) {
				return A && b.rgba.a === 1 ? e.Format.CSS.formatHex(b) : `#${o(b.rgba.r)}${o(b.rgba.g)}${o(b.rgba.b)}${o(Math.round(b.rgba.a * 255))}`;
			}
			n.formatHexA = c;
			function m(b) {
				return b.isOpaque() ? e.Format.CSS.formatHex(b) : e.Format.CSS.formatRGBA(b);
			}
			n.format = m;
			function h(b) {
				if (b === "transparent") return e.transparent;
				if (b.startsWith("#")) return _(b);
				if (b.startsWith("rgba(")) {
					const A = b.match(/rgba\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+), *(?<a>(?:\+|-)?\d+(\.\d+)?)\)/);
					if (!A) throw new Error("Invalid color format " + b);
					return new e(new w(parseInt(A.groups?.r ?? "0"), parseInt(A.groups?.g ?? "0"), parseInt(A.groups?.b ?? "0"), parseFloat(A.groups?.a ?? "0")));
				}
				if (b.startsWith("rgb(")) {
					const A = b.match(/rgb\((?<r>(?:\+|-)?\d+), *(?<g>(?:\+|-)?\d+), *(?<b>(?:\+|-)?\d+)\)/);
					if (!A) throw new Error("Invalid color format " + b);
					return new e(new w(parseInt(A.groups?.r ?? "0"), parseInt(A.groups?.g ?? "0"), parseInt(A.groups?.b ?? "0")));
				}
				return p(b);
			}
			n.parse = h;
			function p(b) {
				switch (b) {
					case "aliceblue": return new e(new w(240, 248, 255, 1));
					case "antiquewhite": return new e(new w(250, 235, 215, 1));
					case "aqua": return new e(new w(0, 255, 255, 1));
					case "aquamarine": return new e(new w(127, 255, 212, 1));
					case "azure": return new e(new w(240, 255, 255, 1));
					case "beige": return new e(new w(245, 245, 220, 1));
					case "bisque": return new e(new w(255, 228, 196, 1));
					case "black": return new e(new w(0, 0, 0, 1));
					case "blanchedalmond": return new e(new w(255, 235, 205, 1));
					case "blue": return new e(new w(0, 0, 255, 1));
					case "blueviolet": return new e(new w(138, 43, 226, 1));
					case "brown": return new e(new w(165, 42, 42, 1));
					case "burlywood": return new e(new w(222, 184, 135, 1));
					case "cadetblue": return new e(new w(95, 158, 160, 1));
					case "chartreuse": return new e(new w(127, 255, 0, 1));
					case "chocolate": return new e(new w(210, 105, 30, 1));
					case "coral": return new e(new w(255, 127, 80, 1));
					case "cornflowerblue": return new e(new w(100, 149, 237, 1));
					case "cornsilk": return new e(new w(255, 248, 220, 1));
					case "crimson": return new e(new w(220, 20, 60, 1));
					case "cyan": return new e(new w(0, 255, 255, 1));
					case "darkblue": return new e(new w(0, 0, 139, 1));
					case "darkcyan": return new e(new w(0, 139, 139, 1));
					case "darkgoldenrod": return new e(new w(184, 134, 11, 1));
					case "darkgray": return new e(new w(169, 169, 169, 1));
					case "darkgreen": return new e(new w(0, 100, 0, 1));
					case "darkgrey": return new e(new w(169, 169, 169, 1));
					case "darkkhaki": return new e(new w(189, 183, 107, 1));
					case "darkmagenta": return new e(new w(139, 0, 139, 1));
					case "darkolivegreen": return new e(new w(85, 107, 47, 1));
					case "darkorange": return new e(new w(255, 140, 0, 1));
					case "darkorchid": return new e(new w(153, 50, 204, 1));
					case "darkred": return new e(new w(139, 0, 0, 1));
					case "darksalmon": return new e(new w(233, 150, 122, 1));
					case "darkseagreen": return new e(new w(143, 188, 143, 1));
					case "darkslateblue": return new e(new w(72, 61, 139, 1));
					case "darkslategray": return new e(new w(47, 79, 79, 1));
					case "darkslategrey": return new e(new w(47, 79, 79, 1));
					case "darkturquoise": return new e(new w(0, 206, 209, 1));
					case "darkviolet": return new e(new w(148, 0, 211, 1));
					case "deeppink": return new e(new w(255, 20, 147, 1));
					case "deepskyblue": return new e(new w(0, 191, 255, 1));
					case "dimgray": return new e(new w(105, 105, 105, 1));
					case "dimgrey": return new e(new w(105, 105, 105, 1));
					case "dodgerblue": return new e(new w(30, 144, 255, 1));
					case "firebrick": return new e(new w(178, 34, 34, 1));
					case "floralwhite": return new e(new w(255, 250, 240, 1));
					case "forestgreen": return new e(new w(34, 139, 34, 1));
					case "fuchsia": return new e(new w(255, 0, 255, 1));
					case "gainsboro": return new e(new w(220, 220, 220, 1));
					case "ghostwhite": return new e(new w(248, 248, 255, 1));
					case "gold": return new e(new w(255, 215, 0, 1));
					case "goldenrod": return new e(new w(218, 165, 32, 1));
					case "gray": return new e(new w(128, 128, 128, 1));
					case "green": return new e(new w(0, 128, 0, 1));
					case "greenyellow": return new e(new w(173, 255, 47, 1));
					case "grey": return new e(new w(128, 128, 128, 1));
					case "honeydew": return new e(new w(240, 255, 240, 1));
					case "hotpink": return new e(new w(255, 105, 180, 1));
					case "indianred": return new e(new w(205, 92, 92, 1));
					case "indigo": return new e(new w(75, 0, 130, 1));
					case "ivory": return new e(new w(255, 255, 240, 1));
					case "khaki": return new e(new w(240, 230, 140, 1));
					case "lavender": return new e(new w(230, 230, 250, 1));
					case "lavenderblush": return new e(new w(255, 240, 245, 1));
					case "lawngreen": return new e(new w(124, 252, 0, 1));
					case "lemonchiffon": return new e(new w(255, 250, 205, 1));
					case "lightblue": return new e(new w(173, 216, 230, 1));
					case "lightcoral": return new e(new w(240, 128, 128, 1));
					case "lightcyan": return new e(new w(224, 255, 255, 1));
					case "lightgoldenrodyellow": return new e(new w(250, 250, 210, 1));
					case "lightgray": return new e(new w(211, 211, 211, 1));
					case "lightgreen": return new e(new w(144, 238, 144, 1));
					case "lightgrey": return new e(new w(211, 211, 211, 1));
					case "lightpink": return new e(new w(255, 182, 193, 1));
					case "lightsalmon": return new e(new w(255, 160, 122, 1));
					case "lightseagreen": return new e(new w(32, 178, 170, 1));
					case "lightskyblue": return new e(new w(135, 206, 250, 1));
					case "lightslategray": return new e(new w(119, 136, 153, 1));
					case "lightslategrey": return new e(new w(119, 136, 153, 1));
					case "lightsteelblue": return new e(new w(176, 196, 222, 1));
					case "lightyellow": return new e(new w(255, 255, 224, 1));
					case "lime": return new e(new w(0, 255, 0, 1));
					case "limegreen": return new e(new w(50, 205, 50, 1));
					case "linen": return new e(new w(250, 240, 230, 1));
					case "magenta": return new e(new w(255, 0, 255, 1));
					case "maroon": return new e(new w(128, 0, 0, 1));
					case "mediumaquamarine": return new e(new w(102, 205, 170, 1));
					case "mediumblue": return new e(new w(0, 0, 205, 1));
					case "mediumorchid": return new e(new w(186, 85, 211, 1));
					case "mediumpurple": return new e(new w(147, 112, 219, 1));
					case "mediumseagreen": return new e(new w(60, 179, 113, 1));
					case "mediumslateblue": return new e(new w(123, 104, 238, 1));
					case "mediumspringgreen": return new e(new w(0, 250, 154, 1));
					case "mediumturquoise": return new e(new w(72, 209, 204, 1));
					case "mediumvioletred": return new e(new w(199, 21, 133, 1));
					case "midnightblue": return new e(new w(25, 25, 112, 1));
					case "mintcream": return new e(new w(245, 255, 250, 1));
					case "mistyrose": return new e(new w(255, 228, 225, 1));
					case "moccasin": return new e(new w(255, 228, 181, 1));
					case "navajowhite": return new e(new w(255, 222, 173, 1));
					case "navy": return new e(new w(0, 0, 128, 1));
					case "oldlace": return new e(new w(253, 245, 230, 1));
					case "olive": return new e(new w(128, 128, 0, 1));
					case "olivedrab": return new e(new w(107, 142, 35, 1));
					case "orange": return new e(new w(255, 165, 0, 1));
					case "orangered": return new e(new w(255, 69, 0, 1));
					case "orchid": return new e(new w(218, 112, 214, 1));
					case "palegoldenrod": return new e(new w(238, 232, 170, 1));
					case "palegreen": return new e(new w(152, 251, 152, 1));
					case "paleturquoise": return new e(new w(175, 238, 238, 1));
					case "palevioletred": return new e(new w(219, 112, 147, 1));
					case "papayawhip": return new e(new w(255, 239, 213, 1));
					case "peachpuff": return new e(new w(255, 218, 185, 1));
					case "peru": return new e(new w(205, 133, 63, 1));
					case "pink": return new e(new w(255, 192, 203, 1));
					case "plum": return new e(new w(221, 160, 221, 1));
					case "powderblue": return new e(new w(176, 224, 230, 1));
					case "purple": return new e(new w(128, 0, 128, 1));
					case "rebeccapurple": return new e(new w(102, 51, 153, 1));
					case "red": return new e(new w(255, 0, 0, 1));
					case "rosybrown": return new e(new w(188, 143, 143, 1));
					case "royalblue": return new e(new w(65, 105, 225, 1));
					case "saddlebrown": return new e(new w(139, 69, 19, 1));
					case "salmon": return new e(new w(250, 128, 114, 1));
					case "sandybrown": return new e(new w(244, 164, 96, 1));
					case "seagreen": return new e(new w(46, 139, 87, 1));
					case "seashell": return new e(new w(255, 245, 238, 1));
					case "sienna": return new e(new w(160, 82, 45, 1));
					case "silver": return new e(new w(192, 192, 192, 1));
					case "skyblue": return new e(new w(135, 206, 235, 1));
					case "slateblue": return new e(new w(106, 90, 205, 1));
					case "slategray": return new e(new w(112, 128, 144, 1));
					case "slategrey": return new e(new w(112, 128, 144, 1));
					case "snow": return new e(new w(255, 250, 250, 1));
					case "springgreen": return new e(new w(0, 255, 127, 1));
					case "steelblue": return new e(new w(70, 130, 180, 1));
					case "tan": return new e(new w(210, 180, 140, 1));
					case "teal": return new e(new w(0, 128, 128, 1));
					case "thistle": return new e(new w(216, 191, 216, 1));
					case "tomato": return new e(new w(255, 99, 71, 1));
					case "turquoise": return new e(new w(64, 224, 208, 1));
					case "violet": return new e(new w(238, 130, 238, 1));
					case "wheat": return new e(new w(245, 222, 179, 1));
					case "white": return new e(new w(255, 255, 255, 1));
					case "whitesmoke": return new e(new w(245, 245, 245, 1));
					case "yellow": return new e(new w(255, 255, 0, 1));
					case "yellowgreen": return new e(new w(154, 205, 50, 1));
					default: return null;
				}
			}
			function _(b) {
				const A = b.length;
				if (A === 0 || b.charCodeAt(0) !== L.Hash) return null;
				if (A === 7) return new e(new w(16 * d(b.charCodeAt(1)) + d(b.charCodeAt(2)), 16 * d(b.charCodeAt(3)) + d(b.charCodeAt(4)), 16 * d(b.charCodeAt(5)) + d(b.charCodeAt(6)), 1));
				if (A === 9) return new e(new w(16 * d(b.charCodeAt(1)) + d(b.charCodeAt(2)), 16 * d(b.charCodeAt(3)) + d(b.charCodeAt(4)), 16 * d(b.charCodeAt(5)) + d(b.charCodeAt(6)), (16 * d(b.charCodeAt(7)) + d(b.charCodeAt(8))) / 255));
				if (A === 4) {
					const R = d(b.charCodeAt(1)), E = d(b.charCodeAt(2)), y = d(b.charCodeAt(3));
					return new e(new w(16 * R + R, 16 * E + E, 16 * y + y));
				}
				if (A === 5) {
					const R = d(b.charCodeAt(1)), E = d(b.charCodeAt(2)), y = d(b.charCodeAt(3)), S = d(b.charCodeAt(4));
					return new e(new w(16 * R + R, 16 * E + E, 16 * y + y, (16 * S + S) / 255));
				}
				return null;
			}
			n.parseHex = _;
			function d(b) {
				switch (b) {
					case L.Digit0: return 0;
					case L.Digit1: return 1;
					case L.Digit2: return 2;
					case L.Digit3: return 3;
					case L.Digit4: return 4;
					case L.Digit5: return 5;
					case L.Digit6: return 6;
					case L.Digit7: return 7;
					case L.Digit8: return 8;
					case L.Digit9: return 9;
					case L.a: return 10;
					case L.A: return 10;
					case L.b: return 11;
					case L.B: return 11;
					case L.c: return 12;
					case L.C: return 12;
					case L.d: return 13;
					case L.D: return 13;
					case L.e: return 14;
					case L.E: return 14;
					case L.f: return 15;
					case L.F: return 15;
				}
				return 0;
			}
		})(t.CSS || (t.CSS = {}));
	})(e.Format || (e.Format = {}));
})(On || (On = {}));
function aa(e) {
	const t = [];
	for (const n of e) {
		const r = Number(n);
		(r || r === 0 && n.replace(/\s/g, "") !== "") && t.push(r);
	}
	return t;
}
function Or(e, t, n, r) {
	return {
		red: e / 255,
		blue: n / 255,
		green: t / 255,
		alpha: r
	};
}
function Ot(e, t) {
	const n = t.index, r = t[0].length;
	if (n === void 0) return;
	const i = e.positionAt(n);
	return {
		startLineNumber: i.lineNumber,
		startColumn: i.column,
		endLineNumber: i.lineNumber,
		endColumn: i.column + r
	};
}
function Tu(e, t) {
	if (!e) return;
	const n = On.Format.CSS.parseHex(t);
	if (n) return {
		range: e,
		color: Or(n.rgba.r, n.rgba.g, n.rgba.b, n.rgba.a)
	};
}
function n1(e, t, n) {
	if (!e || t.length !== 1) return;
	const r = aa(t[0].values());
	return {
		range: e,
		color: Or(r[0], r[1], r[2], n ? r[3] : 1)
	};
}
function r1(e, t, n) {
	if (!e || t.length !== 1) return;
	const r = aa(t[0].values()), i = new On(new nt(r[0], r[1] / 100, r[2] / 100, n ? r[3] : 1));
	return {
		range: e,
		color: Or(i.rgba.r, i.rgba.g, i.rgba.b, i.rgba.a)
	};
}
function Vt(e, t) {
	return typeof e == "string" ? [...e.matchAll(t)] : e.findMatches(t);
}
function xu(e) {
	const t = [], n = Vt(e, /\b(rgb|rgba|hsl|hsla)(\([0-9\s,.\%\/]*\))|^(#)([A-Fa-f0-9]{3})\b|^(#)([A-Fa-f0-9]{4})\b|^(#)([A-Fa-f0-9]{6})\b|^(#)([A-Fa-f0-9]{8})\b|(?<=['"\s])(#)([A-Fa-f0-9]{3})\b|(?<=['"\s])(#)([A-Fa-f0-9]{4})\b|(?<=['"\s])(#)([A-Fa-f0-9]{6})\b|(?<=['"\s])(#)([A-Fa-f0-9]{8})\b/gm);
	if (n.length > 0) for (const r of n) {
		const i = r.filter((u) => u !== void 0), s = i[1], a = i[2];
		if (!a) continue;
		let o;
		s === "rgb" ? o = n1(Ot(e, r), Vt(a, /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*[\s,]\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*[\s,]\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*\)$/gm), !1) : s === "rgba" ? o = n1(Ot(e, r), Vt(a, /^\(\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*[\s,]\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*[\s,]\s*(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\s*(?:[\s,]|[\s]*\/)\s*(0[.][0-9]+|[.][0-9]+|[01][.]|[01])\s*\)$/gm), !0) : s === "hsl" ? o = r1(Ot(e, r), Vt(a, /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100(?:\.0+)?|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100(?:\.0+)?|\d{1,2}[.]\d*|\d{1,2})%\s*\)$/gm), !1) : s === "hsla" ? o = r1(Ot(e, r), Vt(a, /^\(\s*((?:360(?:\.0+)?|(?:36[0]|3[0-5][0-9]|[12][0-9][0-9]|[1-9]?[0-9])(?:\.\d+)?))\s*[\s,]\s*(100(?:\.0+)?|\d{1,2}[.]\d*|\d{1,2})%\s*[\s,]\s*(100(?:\.0+)?|\d{1,2}[.]\d*|\d{1,2})%\s*(?:[\s,]|[\s]*\/)\s*(0[.][0-9]+|[.][0-9]+|[01][.]0*|[01])\s*\)$/gm), !0) : s === "#" && (o = Tu(Ot(e, r), s + a)), o && t.push(o);
	}
	return t;
}
function Mu(e) {
	return !e || typeof e.getValue != "function" || typeof e.positionAt != "function" ? [] : xu(e);
}
const Su = /^-+|-+$/g, i1 = 100, ku = 5;
function Uu(e, t) {
	let n = [];
	if (t.findRegionSectionHeaders && t.foldingRules?.markers) {
		const r = Du(e, t);
		n = n.concat(r);
	}
	if (t.findMarkSectionHeaders) {
		const r = Iu(e, t);
		n = n.concat(r);
	}
	return n;
}
function Du(e, t) {
	const n = [], r = e.getLineCount();
	for (let i = 1; i <= r; i++) {
		const s = e.getLineContent(i), a = s.match(t.foldingRules.markers.start);
		if (a) {
			const o = {
				startLineNumber: i,
				startColumn: a[0].length + 1,
				endLineNumber: i,
				endColumn: s.length + 1
			};
			if (o.endColumn > o.startColumn) {
				const u = {
					range: o,
					...Fu(s.substring(a[0].length)),
					shouldBeInComments: !1
				};
				(u.text || u.hasSeparatorLine) && n.push(u);
			}
		}
	}
	return n;
}
function Iu(e, t) {
	const n = [], r = e.getLineCount();
	if (!t.markSectionHeaderRegex || t.markSectionHeaderRegex.trim() === "") return n;
	const i = Go(t.markSectionHeaderRegex), s = new RegExp(t.markSectionHeaderRegex, `gdm${i ? "s" : ""}`);
	if (bl(s)) return n;
	for (let a = 1; a <= r; a += i1 - ku) {
		const o = Math.min(a + i1 - 1, r), u = [];
		for (let h = a; h <= o; h++) u.push(e.getLineContent(h));
		const c = u.join(`
`);
		s.lastIndex = 0;
		let m;
		for (; (m = s.exec(c)) !== null;) {
			const h = c.substring(0, m.index), p = (h.match(/\n/g) || []).length, _ = a + p, d = m[0].split(`
`), b = d.length, A = _ + b - 1, R = h.lastIndexOf(`
`) + 1, E = m.index - R + 1, y = d[d.length - 1], S = {
				range: {
					startLineNumber: _,
					startColumn: E,
					endLineNumber: A,
					endColumn: b === 1 ? E + m[0].length : y.length + 1
				},
				text: (m.groups ?? {}).label ?? "",
				hasSeparatorLine: ((m.groups ?? {}).separator ?? "") !== "",
				shouldBeInComments: !0
			};
			(S.text || S.hasSeparatorLine) && (n.length === 0 || n[n.length - 1].range.endLineNumber < S.range.startLineNumber) && n.push(S), s.lastIndex = m.index + m[0].length;
		}
	}
	return n;
}
function Fu(e) {
	e = e.trim();
	const t = e.startsWith("-");
	return e = e.replace(Su, ""), {
		text: e,
		hasSeparatorLine: t
	};
}
function je(e) {
	return e === L.Slash || e === L.Backslash;
}
function la(e) {
	return e.replace(/[\\/]/g, te.sep);
}
function Pu(e) {
	return e.indexOf("/") === -1 && (e = la(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function s1(e, t = te.sep) {
	if (!e) return "";
	const n = e.length, r = e.charCodeAt(0);
	if (je(r)) {
		if (je(e.charCodeAt(1)) && !je(e.charCodeAt(2))) {
			let s = 3;
			const a = s;
			for (; s < n && !je(e.charCodeAt(s)); s++);
			if (a !== s && !je(e.charCodeAt(s + 1))) {
				for (s += 1; s < n; s++) if (je(e.charCodeAt(s))) return e.slice(0, s + 1).replace(/[\\/]/g, t);
			}
		}
		return t;
	} else if (Bu(r) && e.charCodeAt(1) === L.Colon) return je(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
	let i = e.indexOf("://");
	if (i !== -1) {
		for (i += 3; i < n; i++) if (je(e.charCodeAt(i))) return e.slice(0, i + 1);
	}
	return "";
}
function a1(e, t, n, r = bn) {
	if (e === t) return !0;
	if (!e || !t || t.length > e.length) return !1;
	if (n) {
		if (!El(e, t)) return !1;
		if (t.length === e.length) return !0;
		let i = t.length;
		return t.charAt(t.length - 1) === r && i--, e.charAt(i) === r;
	}
	return t.charAt(t.length - 1) !== r && (t += r), e.indexOf(t) === 0;
}
function Bu(e) {
	return e >= L.A && e <= L.Z || e >= L.a && e <= L.z;
}
var ue;
(function(e) {
	e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatEditor = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.vscodeLocalChatSession = "vscode-chat-session", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view", e.chatEditingSnapshotScheme = "chat-editing-snapshot-text-model", e.chatEditingModel = "chat-editing-text-model", e.copilotPr = "copilot-pr";
})(ue || (ue = {}));
var Ou = class {
	constructor() {
		this._hosts = Object.create(null), this._ports = Object.create(null), this._connectionTokens = Object.create(null), this._preferredWebSchema = "http", this._delegate = null, this._serverRootPath = "/";
	}
	setPreferredWebSchema(e) {
		this._preferredWebSchema = e;
	}
	setDelegate(e) {
		this._delegate = e;
	}
	setServerRootPath(e, t) {
		this._serverRootPath = te.join(t ?? "/", Hu(e));
	}
	getServerRootPath() {
		return this._serverRootPath;
	}
	get _remoteResourcesPath() {
		return te.join(this._serverRootPath, ue.vscodeRemoteResource);
	}
	set(e, t, n) {
		this._hosts[e] = t, this._ports[e] = n;
	}
	setConnectionToken(e, t) {
		this._connectionTokens[e] = t;
	}
	getPreferredWebSchema() {
		return this._preferredWebSchema;
	}
	rewrite(e) {
		if (this._delegate) try {
			return this._delegate(e);
		} catch (a) {
			return Rt(a), e;
		}
		const t = e.authority;
		let n = this._hosts[t];
		n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
		const r = this._ports[t], i = this._connectionTokens[t];
		let s = `path=${encodeURIComponent(e.path)}`;
		return typeof i == "string" && (s += `&tkn=${encodeURIComponent(i)}`), ve.from({
			scheme: ol ? this._preferredWebSchema : ue.vscodeRemoteResource,
			authority: `${n}:${r}`,
			path: this._remoteResourcesPath,
			query: s
		});
	}
};
const Vu = new Ou();
function Hu(e) {
	return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const qu = "vscode-app";
new class En {
	constructor() {
		this.staticBrowserUris = new nr(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
	}
	static {
		this.FALLBACK_AUTHORITY = qu;
	}
	registerAppResourcePathUrl(t, n) {
		this.appResourcePathUrls.set(t, n);
	}
	toUrl(t) {
		let n = this.appResourcePathUrls.get(t);
		return typeof n == "function" && (n = n()), new URL(n ?? t, globalThis.location?.href ?? import.meta.url).toString();
	}
	asBrowserUri(t) {
		const n = this.toUri(t);
		return this.uriToBrowserUri(n);
	}
	uriToBrowserUri(t) {
		return t.scheme === ue.vscodeRemote ? Vu.rewrite(t) : t.scheme === ue.file && (ll || cl === `${ue.vscodeFileResource}://${En.FALLBACK_AUTHORITY}`) ? t.with({
			scheme: ue.vscodeFileResource,
			authority: t.authority || En.FALLBACK_AUTHORITY,
			query: null,
			fragment: null
		}) : this.staticBrowserUris.get(t) ?? t;
	}
	asFileUri(t) {
		const n = this.toUri(t);
		return this.uriToFileUri(n);
	}
	uriToFileUri(t) {
		return t.scheme === ue.vscodeFileResource ? t.with({
			scheme: ue.file,
			authority: t.authority !== En.FALLBACK_AUTHORITY ? t.authority : null,
			query: null,
			fragment: null
		}) : t;
	}
	toUri(t) {
		if (ve.isUri(t)) return t;
		if (globalThis._VSCODE_FILE_ROOT) {
			const n = globalThis._VSCODE_FILE_ROOT;
			if (/^\w[\w\d+.-]*:\/\//.test(n)) return ve.joinPath(ve.parse(n, !0), t);
			const r = No(n, t);
			return ve.file(r);
		}
		return ve.parse(this.toUrl(t));
	}
	registerStaticBrowserUri(t, n) {
		return this.staticBrowserUris.set(t, n), Ct(() => {
			this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
		});
	}
	getRegisteredBrowserUris() {
		return this.staticBrowserUris.keys();
	}
}();
var l1;
(function(e) {
	const t = new Map([
		["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
		["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
		["3", {
			"Cross-Origin-Opener-Policy": "same-origin",
			"Cross-Origin-Embedder-Policy": "require-corp"
		}]
	]);
	e.CoopAndCoep = Object.freeze(t.get("3"));
	const n = "vscode-coi";
	function r(s) {
		let a;
		typeof s == "string" ? a = new URL(s).searchParams : s instanceof URL ? a = s.searchParams : ve.isUri(s) && (a = new URL(s.toString(!0)).searchParams);
		const o = a?.get(n);
		if (o) return t.get(o);
	}
	e.getHeadersFromQuery = r;
	function i(s, a, o) {
		if (!globalThis.crossOriginIsolated) return;
		const u = a && o ? "3" : o ? "2" : "1";
		s instanceof URLSearchParams ? s.set(n, u) : s[n] = u;
	}
	e.addSearchParam = i;
})(l1 || (l1 = {}));
function Be(e) {
	return In(e, !0);
}
var Vr = class {
	constructor(e) {
		this._ignorePathCasing = e;
	}
	compare(e, t, n = !1) {
		return e === t ? 0 : vl(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
	}
	isEqual(e, t, n = !1) {
		return e === t ? !0 : !e || !t ? !1 : this.getComparisonKey(e, n) === this.getComparisonKey(t, n);
	}
	getComparisonKey(e, t = !1) {
		return e.with({
			path: this._ignorePathCasing(e) ? e.path.toLowerCase() : void 0,
			fragment: t ? null : void 0
		}).toString();
	}
	ignorePathCasing(e) {
		return this._ignorePathCasing(e);
	}
	isEqualOrParent(e, t, n = !1) {
		if (e.scheme === t.scheme) {
			if (e.scheme === ue.file) return a1(Be(e), Be(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
			if (o1(e.authority, t.authority)) return a1(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
		}
		return !1;
	}
	joinPath(e, ...t) {
		return ve.joinPath(e, ...t);
	}
	basenameOrAuthority(e) {
		return $u(e) || e.authority;
	}
	basename(e) {
		return te.basename(e.path);
	}
	extname(e) {
		return te.extname(e.path);
	}
	dirname(e) {
		if (e.path.length === 0) return e;
		let t;
		return e.scheme === ue.file ? t = ve.file(Ao(Be(e))).path : (t = te.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== L.Slash && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
	}
	normalizePath(e) {
		if (!e.path.length) return e;
		let t;
		return e.scheme === ue.file ? t = ve.file(vo(Be(e))).path : t = te.normalize(e.path), e.with({ path: t });
	}
	relativePath(e, t) {
		if (e.scheme !== t.scheme || !o1(e.authority, t.authority)) return;
		if (e.scheme === ue.file) {
			const i = Eo(Be(e), Be(t));
			return Mt ? la(i) : i;
		}
		let n = e.path || "/";
		const r = t.path || "/";
		if (this._ignorePathCasing(e)) {
			let i = 0;
			for (const s = Math.min(n.length, r.length); i < s && !(n.charCodeAt(i) !== r.charCodeAt(i) && n.charAt(i).toLowerCase() !== r.charAt(i).toLowerCase()); i++);
			n = r.substr(0, i) + n.substr(i);
		}
		return te.relative(n, r);
	}
	resolvePath(e, t) {
		if (e.scheme === ue.file) {
			const n = ve.file(Ro(Be(e), t));
			return e.with({
				authority: n.authority,
				path: n.path
			});
		}
		return t = Pu(t), e.with({ path: te.resolve(e.path, t) });
	}
	isAbsolutePath(e) {
		return !!e.path && e.path[0] === "/";
	}
	isEqualAuthority(e, t) {
		return e === t || e !== void 0 && t !== void 0 && Rl(e, t);
	}
	hasTrailingPathSeparator(e, t = bn) {
		if (e.scheme === ue.file) {
			const n = Be(e);
			return n.length > s1(n).length && n[n.length - 1] === t;
		} else {
			const n = e.path;
			return n.length > 1 && n.charCodeAt(n.length - 1) === L.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
		}
	}
	removeTrailingPathSeparator(e, t = bn) {
		return u1(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
	}
	addTrailingPathSeparator(e, t = bn) {
		let n = !1;
		if (e.scheme === ue.file) {
			const r = Be(e);
			n = r !== void 0 && r.length === s1(r).length && r[r.length - 1] === t;
		} else {
			t = "/";
			const r = e.path;
			n = r.length === 1 && r.charCodeAt(r.length - 1) === L.Slash;
		}
		return !n && !u1(e, t) ? e.with({ path: e.path + "/" }) : e;
	}
};
const Z = new Vr(() => !1);
new Vr((e) => e.scheme === ue.file ? !al : !0);
new Vr((e) => !0);
Z.isEqual.bind(Z);
Z.isEqualOrParent.bind(Z);
Z.getComparisonKey.bind(Z);
Z.basenameOrAuthority.bind(Z);
const $u = Z.basename.bind(Z);
Z.extname.bind(Z);
Z.dirname.bind(Z);
Z.joinPath.bind(Z);
Z.normalizePath.bind(Z);
Z.relativePath.bind(Z);
Z.resolvePath.bind(Z);
Z.isAbsolutePath.bind(Z);
const o1 = Z.isEqualAuthority.bind(Z), u1 = Z.hasTrailingPathSeparator.bind(Z);
Z.removeTrailingPathSeparator.bind(Z);
Z.addTrailingPathSeparator.bind(Z);
var c1;
(function(e) {
	e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
	function t(n) {
		const r = /* @__PURE__ */ new Map();
		n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((s) => {
			const [a, o] = s.split(":");
			a && o && r.set(a, o);
		});
		const i = n.path.substring(0, n.path.indexOf(";"));
		return i && r.set(e.META_DATA_MIME, i), r;
	}
	e.parseMetaData = t;
})(c1 || (c1 = {}));
(function() {
	const e = globalThis;
	typeof e.requestIdleCallback != "function" || e.cancelIdleCallback;
})();
var st;
(function(e) {
	e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(st || (st = {}));
var oa = class ua {
	static fromPromise(t) {
		const n = new ua();
		return n.settleWith(t), n;
	}
	get isRejected() {
		return this.outcome?.outcome === st.Rejected;
	}
	get isResolved() {
		return this.outcome?.outcome === st.Resolved;
	}
	get isSettled() {
		return !!this.outcome;
	}
	get value() {
		return this.outcome?.outcome === st.Resolved ? this.outcome?.value : void 0;
	}
	constructor() {
		this.p = new Promise((t, n) => {
			this.completeCallback = t, this.errorCallback = n;
		});
	}
	complete(t) {
		return this.isSettled ? Promise.resolve() : new Promise((n) => {
			this.completeCallback(t), this.outcome = {
				outcome: st.Resolved,
				value: t
			}, n();
		});
	}
	error(t) {
		return this.isSettled ? Promise.resolve() : new Promise((n) => {
			this.errorCallback(t), this.outcome = {
				outcome: st.Rejected,
				value: t
			}, n();
		});
	}
	settleWith(t) {
		return t.then((n) => this.complete(n), (n) => this.error(n));
	}
	cancel() {
		return this.error(new m1());
	}
}, h1;
(function(e) {
	async function t(r) {
		let i;
		const s = await Promise.all(r.map((a) => a.then((o) => o, (o) => {
			i || (i = o);
		})));
		if (typeof i < "u") throw i;
		return s;
	}
	e.settled = t;
	function n(r) {
		return new Promise(async (i, s) => {
			try {
				await r(i, s);
			} catch (a) {
				s(a);
			}
		});
	}
	e.withAsyncBody = n;
})(h1 || (h1 = {}));
var Se;
(function(e) {
	e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(Se || (Se = {}));
(class Re {
	static fromArray(t) {
		return new Re((n) => {
			n.emitMany(t);
		});
	}
	static fromPromise(t) {
		return new Re(async (n) => {
			n.emitMany(await t);
		});
	}
	static fromPromisesResolveOrder(t) {
		return new Re(async (n) => {
			await Promise.all(t.map(async (r) => n.emitOne(await r)));
		});
	}
	static merge(t) {
		return new Re(async (n) => {
			await Promise.all(t.map(async (r) => {
				for await (const i of r) n.emitOne(i);
			}));
		});
	}
	static {
		this.EMPTY = Re.fromArray([]);
	}
	constructor(t, n) {
		this._state = Se.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new ke(), queueMicrotask(async () => {
			const r = {
				emitOne: (i) => this.emitOne(i),
				emitMany: (i) => this.emitMany(i),
				reject: (i) => this.reject(i)
			};
			try {
				await Promise.resolve(t(r)), this.resolve();
			} catch (i) {
				this.reject(i);
			} finally {
				r.emitOne = void 0, r.emitMany = void 0, r.reject = void 0;
			}
		});
	}
	[Symbol.asyncIterator]() {
		let t = 0;
		return {
			next: async () => {
				do {
					if (this._state === Se.DoneError) throw this._error;
					if (t < this._results.length) return {
						done: !1,
						value: this._results[t++]
					};
					if (this._state === Se.DoneOK) return {
						done: !0,
						value: void 0
					};
					await Tn.toPromise(this._onStateChanged.event);
				} while (!0);
			},
			return: async () => (this._onReturn?.(), {
				done: !0,
				value: void 0
			})
		};
	}
	static map(t, n) {
		return new Re(async (r) => {
			for await (const i of t) r.emitOne(n(i));
		});
	}
	map(t) {
		return Re.map(this, t);
	}
	static filter(t, n) {
		return new Re(async (r) => {
			for await (const i of t) n(i) && r.emitOne(i);
		});
	}
	filter(t) {
		return Re.filter(this, t);
	}
	static coalesce(t) {
		return Re.filter(t, (n) => !!n);
	}
	coalesce() {
		return Re.coalesce(this);
	}
	static async toPromise(t) {
		const n = [];
		for await (const r of t) n.push(r);
		return n;
	}
	toPromise() {
		return Re.toPromise(this);
	}
	emitOne(t) {
		this._state === Se.Initial && (this._results.push(t), this._onStateChanged.fire());
	}
	emitMany(t) {
		this._state === Se.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
	}
	resolve() {
		this._state === Se.Initial && (this._state = Se.DoneOK, this._onStateChanged.fire());
	}
	reject(t) {
		this._state === Se.Initial && (this._state = Se.DoneError, this._error = t, this._onStateChanged.fire());
	}
});
var zu = class {
	constructor() {
		this._unsatisfiedConsumers = [], this._unconsumedValues = [];
	}
	get hasFinalValue() {
		return !!this._finalValue;
	}
	produce(e) {
		if (this._ensureNoFinalValue(), this._unsatisfiedConsumers.length > 0) {
			const t = this._unsatisfiedConsumers.shift();
			this._resolveOrRejectDeferred(t, e);
		} else this._unconsumedValues.push(e);
	}
	produceFinal(e) {
		this._ensureNoFinalValue(), this._finalValue = e;
		for (const t of this._unsatisfiedConsumers) this._resolveOrRejectDeferred(t, e);
		this._unsatisfiedConsumers.length = 0;
	}
	_ensureNoFinalValue() {
		if (this._finalValue) throw new se("ProducerConsumer: cannot produce after final value has been set");
	}
	_resolveOrRejectDeferred(e, t) {
		t.ok ? e.complete(t.value) : e.error(t.error);
	}
	consume() {
		if (this._unconsumedValues.length > 0 || this._finalValue) {
			const e = this._unconsumedValues.length > 0 ? this._unconsumedValues.shift() : this._finalValue;
			return e.ok ? Promise.resolve(e.value) : Promise.reject(e.error);
		} else {
			const e = new oa();
			return this._unsatisfiedConsumers.push(e), e.p;
		}
	}
};
(class de {
	constructor(t, n) {
		this._onReturn = n, this._producerConsumer = new zu(), this._iterator = {
			next: () => this._producerConsumer.consume(),
			return: () => (this._onReturn?.(), Promise.resolve({
				done: !0,
				value: void 0
			})),
			throw: async (r) => (this._finishError(r), {
				done: !0,
				value: void 0
			})
		}, queueMicrotask(async () => {
			const r = t({
				emitOne: (i) => this._producerConsumer.produce({
					ok: !0,
					value: {
						done: !1,
						value: i
					}
				}),
				emitMany: (i) => {
					for (const s of i) this._producerConsumer.produce({
						ok: !0,
						value: {
							done: !1,
							value: s
						}
					});
				},
				reject: (i) => this._finishError(i)
			});
			if (!this._producerConsumer.hasFinalValue) try {
				await r, this._finishOk();
			} catch (i) {
				this._finishError(i);
			}
		});
	}
	static fromArray(t) {
		return new de((n) => {
			n.emitMany(t);
		});
	}
	static fromPromise(t) {
		return new de(async (n) => {
			n.emitMany(await t);
		});
	}
	static fromPromisesResolveOrder(t) {
		return new de(async (n) => {
			await Promise.all(t.map(async (r) => n.emitOne(await r)));
		});
	}
	static merge(t) {
		return new de(async (n) => {
			await Promise.all(t.map(async (r) => {
				for await (const i of r) n.emitOne(i);
			}));
		});
	}
	static {
		this.EMPTY = de.fromArray([]);
	}
	static map(t, n) {
		return new de(async (r) => {
			for await (const i of t) r.emitOne(n(i));
		});
	}
	static tee(t) {
		let n, r;
		const i = new oa(), s = async () => {
			if (!(!n || !r)) try {
				for await (const a of t) n.emitOne(a), r.emitOne(a);
			} catch (a) {
				n.reject(a), r.reject(a);
			} finally {
				i.complete();
			}
		};
		return [new de(async (a) => (n = a, s(), i.p)), new de(async (a) => (r = a, s(), i.p))];
	}
	map(t) {
		return de.map(this, t);
	}
	static coalesce(t) {
		return de.filter(t, (n) => !!n);
	}
	coalesce() {
		return de.coalesce(this);
	}
	static filter(t, n) {
		return new de(async (r) => {
			for await (const i of t) n(i) && r.emitOne(i);
		});
	}
	filter(t) {
		return de.filter(this, t);
	}
	_finishOk() {
		this._producerConsumer.hasFinalValue || this._producerConsumer.produceFinal({
			ok: !0,
			value: {
				done: !0,
				value: void 0
			}
		});
	}
	_finishError(t) {
		this._producerConsumer.hasFinalValue || this._producerConsumer.produceFinal({
			ok: !1,
			error: t
		});
	}
	[Symbol.asyncIterator]() {
		return this._iterator;
	}
});
var ju = class {
	constructor(e) {
		this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
	}
	getCount() {
		return this.values.length;
	}
	insertValues(e, t) {
		e = ht(e);
		const n = this.values, r = this.prefixSum, i = t.length;
		return i === 0 ? !1 : (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
	}
	setValue(e, t) {
		return e = ht(e), t = ht(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
	}
	removeValues(e, t) {
		e = ht(e), t = ht(t);
		const n = this.values, r = this.prefixSum;
		if (e >= n.length) return !1;
		const i = n.length - e;
		return t >= i && (t = i), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
	}
	getTotalSum() {
		return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
	}
	getPrefixSum(e) {
		return e < 0 ? 0 : (e = ht(e), this._getPrefixSum(e));
	}
	_getPrefixSum(e) {
		if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
		let t = this.prefixSumValidIndex[0] + 1;
		t === 0 && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
		for (let n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
		return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
	}
	getIndexOf(e) {
		e = Math.floor(e), this.getTotalSum();
		let t = 0, n = this.values.length - 1, r = 0, i = 0, s = 0;
		for (; t <= n;) if (r = t + (n - t) / 2 | 0, i = this.prefixSum[r], s = i - this.values[r], e < s) n = r - 1;
		else if (e >= i) t = r + 1;
		else break;
		return new Xu(r, e - s);
	}
}, Xu = class {
	constructor(e, t) {
		this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
	}
}, Yu = class {
	constructor(e, t, n, r) {
		this._uri = e, this._lines = t, this._eol = n, this._versionId = r, this._lineStarts = null, this._cachedTextValue = null;
	}
	dispose() {
		this._lines.length = 0;
	}
	get version() {
		return this._versionId;
	}
	getText() {
		return this._cachedTextValue === null && (this._cachedTextValue = this._lines.join(this._eol)), this._cachedTextValue;
	}
	onEvents(e) {
		e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
		const t = e.changes;
		for (const n of t) this._acceptDeleteRange(n.range), this._acceptInsertText(new Y(n.range.startLineNumber, n.range.startColumn), n.text);
		this._versionId = e.versionId, this._cachedTextValue = null;
	}
	_ensureLineStarts() {
		if (!this._lineStarts) {
			const e = this._eol.length, t = this._lines.length, n = new Uint32Array(t);
			for (let r = 0; r < t; r++) n[r] = this._lines[r].length + e;
			this._lineStarts = new ju(n);
		}
	}
	_setLineText(e, t) {
		this._lines[e] = t, this._lineStarts && this._lineStarts.setValue(e, this._lines[e].length + this._eol.length);
	}
	_acceptDeleteRange(e) {
		if (e.startLineNumber === e.endLineNumber) {
			if (e.startColumn === e.endColumn) return;
			this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
			return;
		}
		this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber);
	}
	_acceptInsertText(e, t) {
		if (t.length === 0) return;
		const n = S1(t);
		if (n.length === 1) {
			this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
			return;
		}
		n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
		const r = new Uint32Array(n.length - 1);
		for (let i = 1; i < n.length; i++) this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
		this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
	}
};
const Qu = "workerTextModelSync";
var Zu = class {
	constructor() {
		this._models = Object.create(null);
	}
	bindToServer(e) {
		e.setChannel(Qu, this);
	}
	getModel(e) {
		return this._models[e];
	}
	getModels() {
		const e = [];
		return Object.keys(this._models).forEach((t) => e.push(this._models[t])), e;
	}
	$acceptNewModel(e) {
		this._models[e.url] = new Ju(ve.parse(e.url), e.lines, e.EOL, e.versionId);
	}
	$acceptModelChanged(e, t) {
		this._models[e] && this._models[e].onEvents(t);
	}
	$acceptRemovedModel(e) {
		this._models[e] && delete this._models[e];
	}
}, Ju = class extends Yu {
	get uri() {
		return this._uri;
	}
	get eol() {
		return this._eol;
	}
	getValue() {
		return this.getText();
	}
	findMatches(e) {
		const t = [];
		for (let n = 0; n < this._lines.length; n++) {
			const r = this._lines[n], i = this.offsetAt(new Y(n + 1, 1)), s = r.matchAll(e);
			for (const a of s) (a.index || a.index === 0) && (a.index = a.index + i), t.push(a);
		}
		return t;
	}
	getLinesContent() {
		return this._lines.slice(0);
	}
	getLineCount() {
		return this._lines.length;
	}
	getLineContent(e) {
		return this._lines[e - 1];
	}
	getWordAtPosition(e, t) {
		const n = Fr(e.column, Y1(t), this._lines[e.lineNumber - 1], 0);
		return n ? new V(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
	}
	getWordUntilPosition(e, t) {
		const n = this.getWordAtPosition(e, t);
		return n ? {
			word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1),
			startColumn: n.startColumn,
			endColumn: e.column
		} : {
			word: "",
			startColumn: e.column,
			endColumn: e.column
		};
	}
	words(e) {
		const t = this._lines, n = this._wordenize.bind(this);
		let r = 0, i = "", s = 0, a = [];
		return { *[Symbol.iterator]() {
			for (;;) if (s < a.length) {
				const o = i.substring(a[s].start, a[s].end);
				s += 1, yield o;
			} else if (r < t.length) i = t[r], a = n(i, e), s = 0, r += 1;
			else break;
		} };
	}
	getLineWords(e, t) {
		const n = this._lines[e - 1], r = this._wordenize(n, t), i = [];
		for (const s of r) i.push({
			word: n.substring(s.start, s.end),
			startColumn: s.start + 1,
			endColumn: s.end + 1
		});
		return i;
	}
	_wordenize(e, t) {
		const n = [];
		let r;
		for (t.lastIndex = 0; (r = t.exec(e)) && r[0].length !== 0;) n.push({
			start: r.index,
			end: r.index + r[0].length
		});
		return n;
	}
	getValueInRange(e) {
		if (e = this._validateRange(e), e.startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
		const t = this._eol, n = e.startLineNumber - 1, r = e.endLineNumber - 1, i = [];
		i.push(this._lines[n].substring(e.startColumn - 1));
		for (let s = n + 1; s < r; s++) i.push(this._lines[s]);
		return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t);
	}
	offsetAt(e) {
		return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getPrefixSum(e.lineNumber - 2) + (e.column - 1);
	}
	positionAt(e) {
		e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
		const t = this._lineStarts.getIndexOf(e), n = this._lines[t.index].length;
		return {
			lineNumber: 1 + t.index,
			column: 1 + Math.min(t.remainder, n)
		};
	}
	_validateRange(e) {
		const t = this._validatePosition({
			lineNumber: e.startLineNumber,
			column: e.startColumn
		}), n = this._validatePosition({
			lineNumber: e.endLineNumber,
			column: e.endColumn
		});
		return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? {
			startLineNumber: t.lineNumber,
			startColumn: t.column,
			endLineNumber: n.lineNumber,
			endColumn: n.column
		} : e;
	}
	_validatePosition(e) {
		if (!Y.isIPosition(e)) throw new Error("bad position");
		let { lineNumber: t, column: n } = e, r = !1;
		if (t < 1) t = 1, n = 1, r = !0;
		else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0;
		else {
			const i = this._lines[t - 1].length + 1;
			n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
		}
		return r ? {
			lineNumber: t,
			column: n
		} : e;
	}
}, ca = class {
	constructor(e) {
		this.replacements = e;
		let t = -1;
		for (const n of e) {
			if (!(n.replaceRange.start >= t)) throw new se(`Edits must be disjoint and sorted. Found ${n} after ${t}`);
			t = n.replaceRange.endExclusive;
		}
	}
	equals(e) {
		if (this.replacements.length !== e.replacements.length) return !1;
		for (let t = 0; t < this.replacements.length; t++) if (!this.replacements[t].equals(e.replacements[t])) return !1;
		return !0;
	}
	toString() {
		return `[${this.replacements.map((e) => e.toString()).join(", ")}]`;
	}
	normalize() {
		const e = [];
		let t;
		for (const n of this.replacements) if (!(n.getNewLength() === 0 && n.replaceRange.length === 0)) {
			if (t && t.replaceRange.endExclusive === n.replaceRange.start) {
				const r = t.tryJoinTouching(n);
				if (r) {
					t = r;
					continue;
				}
			}
			t && e.push(t), t = n;
		}
		return t && e.push(t), this._createNew(e);
	}
	compose(e) {
		const t = this.normalize(), n = e.normalize();
		if (t.isEmpty()) return n;
		if (n.isEmpty()) return t;
		const r = [...t.replacements], i = [];
		let s = 0;
		for (const a of n.replacements) {
			for (;;) {
				const m = r[0];
				if (!m || m.replaceRange.start + s + m.getNewLength() >= a.replaceRange.start) break;
				r.shift(), i.push(m), s += m.getNewLength() - m.replaceRange.length;
			}
			const o = s;
			let u, c;
			for (;;) {
				const m = r[0];
				if (!m || m.replaceRange.start + s > a.replaceRange.endExclusive) break;
				u || (u = m), c = m, r.shift(), s += m.getNewLength() - m.replaceRange.length;
			}
			if (!u) i.push(a.delta(-s));
			else {
				const m = Math.min(u.replaceRange.start, a.replaceRange.start - o), h = a.replaceRange.start - (u.replaceRange.start + o);
				if (h > 0) {
					const b = u.slice(G.emptyAt(m), new G(0, h));
					i.push(b);
				}
				if (!c) throw new se("Invariant violation: lastIntersecting is undefined");
				const p = c.replaceRange.endExclusive + s - a.replaceRange.endExclusive;
				if (p > 0) {
					const b = c.slice(G.ofStartAndLength(c.replaceRange.endExclusive, 0), new G(c.getNewLength() - p, c.getNewLength()));
					r.unshift(b), s -= b.getNewLength() - b.replaceRange.length;
				}
				const _ = new G(m, a.replaceRange.endExclusive - s), d = a.slice(_, new G(0, a.getNewLength()));
				i.push(d);
			}
		}
		for (;;) {
			const a = r.shift();
			if (!a) break;
			i.push(a);
		}
		return this._createNew(i).normalize();
	}
	decomposeSplit(e) {
		const t = [], n = [];
		let r = 0;
		for (const i of this.replacements) e(i) ? (t.push(i), r += i.getNewLength() - i.replaceRange.length) : n.push(i.slice(i.replaceRange.delta(r), new G(0, i.getNewLength())));
		return {
			e1: this._createNew(t),
			e2: this._createNew(n)
		};
	}
	getNewRanges() {
		const e = [];
		let t = 0;
		for (const n of this.replacements) e.push(G.ofStartAndLength(n.replaceRange.start + t, n.getNewLength())), t += n.getLengthDelta();
		return e;
	}
	getJoinedReplaceRange() {
		if (this.replacements.length !== 0) return this.replacements[0].replaceRange.join(this.replacements.at(-1).replaceRange);
	}
	isEmpty() {
		return this.replacements.length === 0;
	}
	getLengthDelta() {
		return Ta(this.replacements, (e) => e.getLengthDelta());
	}
	getNewDataLength(e) {
		return e + this.getLengthDelta();
	}
	applyToOffset(e) {
		let t = 0;
		for (const n of this.replacements) if (n.replaceRange.start <= e) {
			if (e < n.replaceRange.endExclusive) return n.replaceRange.start + t;
			t += n.getNewLength() - n.replaceRange.length;
		} else break;
		return e + t;
	}
	applyToOffsetRange(e) {
		return new G(this.applyToOffset(e.start), this.applyToOffset(e.endExclusive));
	}
	applyInverseToOffset(e) {
		let t = 0;
		for (const n of this.replacements) {
			const r = n.getNewLength();
			if (n.replaceRange.start <= e - t) {
				if (e - t < n.replaceRange.start + r) return n.replaceRange.start;
				t += r - n.replaceRange.length;
			} else break;
		}
		return e - t;
	}
	applyToOffsetOrUndefined(e) {
		let t = 0;
		for (const n of this.replacements) if (n.replaceRange.start <= e) {
			if (e < n.replaceRange.endExclusive) return;
			t += n.getNewLength() - n.replaceRange.length;
		} else break;
		return e + t;
	}
	applyToOffsetRangeOrUndefined(e) {
		const t = this.applyToOffsetOrUndefined(e.start);
		if (t === void 0) return;
		const n = this.applyToOffsetOrUndefined(e.endExclusive);
		if (n !== void 0) return new G(t, n);
	}
}, Ku = class {
	constructor(e) {
		this.replaceRange = e;
	}
	delta(e) {
		return this.slice(this.replaceRange.delta(e), new G(0, this.getNewLength()));
	}
	getLengthDelta() {
		return this.getNewLength() - this.replaceRange.length;
	}
	toString() {
		return `{ ${this.replaceRange.toString()} -> ${this.getNewLength()} }`;
	}
	get isEmpty() {
		return this.getNewLength() === 0 && this.replaceRange.length === 0;
	}
	getRangeAfterReplace() {
		return new G(this.replaceRange.start, this.replaceRange.start + this.getNewLength());
	}
};
(class zt extends ca {
	static {
		this.empty = new zt([]);
	}
	static create(t) {
		return new zt(t);
	}
	static single(t) {
		return new zt([t]);
	}
	_createNew(t) {
		return new zt(t);
	}
});
var ha = class extends ca {
	get TReplacement() {
		throw new Error("TReplacement is not defined for BaseStringEdit");
	}
	static composeOrUndefined(e) {
		if (e.length === 0) return;
		let t = e[0];
		for (let n = 1; n < e.length; n++) t = t.compose(e[n]);
		return t;
	}
	static trySwap(e, t) {
		const n = e.inverseOnSlice((s, a) => " ".repeat(a - s)), r = t.tryRebase(n);
		if (!r) return;
		const i = e.tryRebase(r);
		if (i) return {
			e1: r,
			e2: i
		};
	}
	apply(e) {
		const t = [];
		let n = 0;
		for (const r of this.replacements) t.push(e.substring(n, r.replaceRange.start)), t.push(r.newText), n = r.replaceRange.endExclusive;
		return t.push(e.substring(n)), t.join("");
	}
	inverseOnSlice(e) {
		const t = [];
		let n = 0;
		for (const r of this.replacements) t.push(Me.replace(G.ofStartAndLength(r.replaceRange.start + n, r.newText.length), e(r.replaceRange.start, r.replaceRange.endExclusive))), n += r.newText.length - r.replaceRange.length;
		return new Ke(t);
	}
	inverse(e) {
		return this.inverseOnSlice((t, n) => e.substring(t, n));
	}
	rebaseSkipConflicting(e) {
		return this._tryRebase(e, !1);
	}
	tryRebase(e) {
		return this._tryRebase(e, !0);
	}
	_tryRebase(e, t) {
		const n = [];
		let r = 0, i = 0, s = 0;
		for (; i < this.replacements.length || r < e.replacements.length;) {
			const a = e.replacements[r], o = this.replacements[i];
			if (o) if (!a) n.push(new Me(o.replaceRange.delta(s), o.newText)), i++;
			else if (o.replaceRange.intersectsOrTouches(a.replaceRange)) {
				if (i++, t) return;
			} else o.replaceRange.start < a.replaceRange.start ? (n.push(new Me(o.replaceRange.delta(s), o.newText)), i++) : (r++, s += a.newText.length - a.replaceRange.length);
			else break;
		}
		return new Ke(n);
	}
	toJson() {
		return this.replacements.map((e) => e.toJson());
	}
	isNeutralOn(e) {
		return this.replacements.every((t) => t.isNeutralOn(e));
	}
	removeCommonSuffixPrefix(e) {
		const t = [];
		for (const n of this.replacements) {
			const r = n.removeCommonSuffixPrefix(e);
			r.isEmpty || t.push(r);
		}
		return new Ke(t);
	}
	normalizeEOL(e) {
		return new Ke(this.replacements.map((t) => t.normalizeEOL(e)));
	}
	normalizeOnSource(e) {
		const t = this.apply(e), n = Me.replace(G.ofLength(e.length), t).removeCommonSuffixAndPrefix(e);
		return n.isEmpty ? Ke.empty : n.toEdit();
	}
	removeCommonSuffixAndPrefix(e) {
		return this._createNew(this.replacements.map((t) => t.removeCommonSuffixAndPrefix(e))).normalize();
	}
	applyOnText(e) {
		return new rn(this.apply(e.value));
	}
	mapData(e) {
		return new Cu(this.replacements.map((t) => new An(t.replaceRange, t.newText, e(t))));
	}
}, ma = class extends Ku {
	constructor(e, t) {
		super(e), this.newText = t;
	}
	getNewLength() {
		return this.newText.length;
	}
	toString() {
		return `${this.replaceRange} -> ${JSON.stringify(this.newText)}`;
	}
	replace(e) {
		return e.substring(0, this.replaceRange.start) + this.newText + e.substring(this.replaceRange.endExclusive);
	}
	isNeutralOn(e) {
		return this.newText === e.substring(this.replaceRange.start, this.replaceRange.endExclusive);
	}
	removeCommonSuffixPrefix(e) {
		const t = e.substring(this.replaceRange.start, this.replaceRange.endExclusive), n = Mn(t, this.newText), r = Math.min(t.length - n, this.newText.length - n, Sn(t, this.newText));
		return new Me(new G(this.replaceRange.start + n, this.replaceRange.endExclusive - r), this.newText.substring(n, this.newText.length - r));
	}
	normalizeEOL(e) {
		const t = this.newText.replace(/\r\n|\n/g, e);
		return new Me(this.replaceRange, t);
	}
	removeCommonSuffixAndPrefix(e) {
		return this.removeCommonSuffix(e).removeCommonPrefix(e);
	}
	removeCommonPrefix(e) {
		const t = Mn(this.replaceRange.substring(e), this.newText);
		return t === 0 ? this : this.slice(this.replaceRange.deltaStart(t), new G(t, this.newText.length));
	}
	removeCommonSuffix(e) {
		const t = Sn(this.replaceRange.substring(e), this.newText);
		return t === 0 ? this : this.slice(this.replaceRange.deltaEnd(-t), new G(0, this.newText.length - t));
	}
	toEdit() {
		return new Ke([this]);
	}
	toJson() {
		return {
			txt: this.newText,
			pos: this.replaceRange.start,
			len: this.replaceRange.length
		};
	}
}, Ke = class Ee extends ha {
	static {
		this.empty = new Ee([]);
	}
	static create(t) {
		return new Ee(t);
	}
	static single(t) {
		return new Ee([t]);
	}
	static replace(t, n) {
		return new Ee([new Me(t, n)]);
	}
	static insert(t, n) {
		return new Ee([new Me(G.emptyAt(t), n)]);
	}
	static delete(t) {
		return new Ee([new Me(t, "")]);
	}
	static fromJson(t) {
		return new Ee(t.map(Me.fromJson));
	}
	static compose(t) {
		if (t.length === 0) return Ee.empty;
		let n = t[0];
		for (let r = 1; r < t.length; r++) n = n.compose(t[r]);
		return n;
	}
	static composeSequentialReplacements(t) {
		let n = Ee.empty, r = [];
		for (const i of t) {
			const s = r.at(-1);
			!s || i.replaceRange.isBefore(s.replaceRange) ? r.push(i) : (n = n.compose(Ee.create(r.reverse())), r = [i]);
		}
		return n = n.compose(Ee.create(r.reverse())), n;
	}
	constructor(t) {
		super(t);
	}
	_createNew(t) {
		return new Ee(t);
	}
}, Me = class rt extends ma {
	static insert(t, n) {
		return new rt(G.emptyAt(t), n);
	}
	static replace(t, n) {
		return new rt(t, n);
	}
	static delete(t) {
		return new rt(t, "");
	}
	static fromJson(t) {
		return new rt(G.ofStartAndLength(t.pos, t.len), t.txt);
	}
	equals(t) {
		return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText;
	}
	tryJoinTouching(t) {
		return new rt(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText);
	}
	slice(t, n) {
		return new rt(t, n ? n.substring(this.newText) : this.newText);
	}
}, Cu = class qe extends ha {
	static {
		this.empty = new qe([]);
	}
	static create(t) {
		return new qe(t);
	}
	static single(t) {
		return new qe([t]);
	}
	static replace(t, n, r) {
		return new qe([new An(t, n, r)]);
	}
	static insert(t, n, r) {
		return new qe([new An(G.emptyAt(t), n, r)]);
	}
	static delete(t, n) {
		return new qe([new An(t, "", n)]);
	}
	static compose(t) {
		if (t.length === 0) return qe.empty;
		let n = t[0];
		for (let r = 1; r < t.length; r++) n = n.compose(t[r]);
		return n;
	}
	constructor(t) {
		super(t);
	}
	_createNew(t) {
		return new qe(t);
	}
	toStringEdit(t) {
		const n = [];
		for (const r of this.replacements) (!t || t(r)) && n.push(new Me(r.replaceRange, r.newText));
		return new Ke(n);
	}
}, An = class vt extends ma {
	static insert(t, n, r) {
		return new vt(G.emptyAt(t), n, r);
	}
	static replace(t, n, r) {
		return new vt(t, n, r);
	}
	static delete(t, n) {
		return new vt(t, "", n);
	}
	constructor(t, n, r) {
		super(t, n), this.data = r;
	}
	equals(t) {
		return this.replaceRange.equals(t.replaceRange) && this.newText === t.newText && this.data === t.data;
	}
	tryJoinTouching(t) {
		const n = this.data.join(t.data);
		if (n !== void 0) return new vt(this.replaceRange.joinRightTouching(t.replaceRange), this.newText + t.newText, n);
	}
	slice(t, n) {
		return new vt(t, n ? n.substring(this.newText) : this.newText, this.data);
	}
};
nu({
	StringEdit: Ke,
	StringReplacement: Me,
	TextReplacement: be,
	TextEdit: Pr,
	TextLength: kt
});
var fa = class jt {
	constructor(t = null) {
		this._foreignModule = t, this._requestHandlerBrand = void 0, this._workerTextModelSyncServer = new Zu();
	}
	dispose() {}
	async $ping() {
		return "pong";
	}
	_getModel(t) {
		return this._workerTextModelSyncServer.getModel(t);
	}
	getModels() {
		return this._workerTextModelSyncServer.getModels();
	}
	$acceptNewModel(t) {
		this._workerTextModelSyncServer.$acceptNewModel(t);
	}
	$acceptModelChanged(t, n) {
		this._workerTextModelSyncServer.$acceptModelChanged(t, n);
	}
	$acceptRemovedModel(t) {
		this._workerTextModelSyncServer.$acceptRemovedModel(t);
	}
	async $computeUnicodeHighlights(t, n, r) {
		const i = this._getModel(t);
		return i ? Ko.computeUnicodeHighlights(i, n, r) : {
			ranges: [],
			hasMore: !1,
			ambiguousCharacterCount: 0,
			invisibleCharacterCount: 0,
			nonBasicAsciiCharacterCount: 0
		};
	}
	async $findSectionHeaders(t, n) {
		const r = this._getModel(t);
		return r ? Uu(r, n) : [];
	}
	async $computeDiff(t, n, r, i) {
		const s = this._getModel(t), a = this._getModel(n);
		return !s || !a ? null : jt.computeDiff(s, a, r, i);
	}
	static computeDiff(t, n, r, i) {
		const s = i === "advanced" ? Zt.getDefault() : Zt.getLegacy(), a = t.getLinesContent(), o = n.getLinesContent(), u = s.computeDiff(a, o, r), c = u.changes.length > 0 ? !1 : this._modelsAreIdentical(t, n);
		function m(h) {
			return h.map((p) => [
				p.original.startLineNumber,
				p.original.endLineNumberExclusive,
				p.modified.startLineNumber,
				p.modified.endLineNumberExclusive,
				p.innerChanges?.map((_) => [
					_.originalRange.startLineNumber,
					_.originalRange.startColumn,
					_.originalRange.endLineNumber,
					_.originalRange.endColumn,
					_.modifiedRange.startLineNumber,
					_.modifiedRange.startColumn,
					_.modifiedRange.endLineNumber,
					_.modifiedRange.endColumn
				])
			]);
		}
		return {
			identical: c,
			quitEarly: u.hitTimeout,
			changes: m(u.changes),
			moves: u.moves.map((h) => [
				h.lineRangeMapping.original.startLineNumber,
				h.lineRangeMapping.original.endLineNumberExclusive,
				h.lineRangeMapping.modified.startLineNumber,
				h.lineRangeMapping.modified.endLineNumberExclusive,
				m(h.changes)
			])
		};
	}
	static _modelsAreIdentical(t, n) {
		const r = t.getLineCount();
		if (r !== n.getLineCount()) return !1;
		for (let i = 1; i <= r; i++) if (t.getLineContent(i) !== n.getLineContent(i)) return !1;
		return !0;
	}
	async $computeDirtyDiff(t, n, r) {
		const i = this._getModel(t), s = this._getModel(n);
		return !i || !s ? null : new na(i.getLinesContent(), s.getLinesContent(), {
			shouldComputeCharChanges: !1,
			shouldPostProcessCharChanges: !1,
			shouldIgnoreTrimWhitespace: r,
			shouldMakePrettyDiff: !0,
			maxComputationTime: 1e3
		}).computeDiff().changes;
	}
	$computeStringDiff(t, n, r, i) {
		return e0(t, n, r, i).toJson();
	}
	static {
		this._diffLimit = 1e5;
	}
	async $computeMoreMinimalEdits(t, n, r) {
		const i = this._getModel(t);
		if (!i) return n;
		const s = [];
		let a;
		n = n.slice(0).sort((u, c) => u.range && c.range ? V.compareRangesUsingStarts(u.range, c.range) : (u.range ? 0 : 1) - (c.range ? 0 : 1));
		let o = 0;
		for (let u = 1; u < n.length; u++) V.getEndPosition(n[o].range).equals(V.getStartPosition(n[u].range)) ? (n[o].range = V.fromPositions(V.getStartPosition(n[o].range), V.getEndPosition(n[u].range)), n[o].text += n[u].text) : (o++, n[o] = n[u]);
		n.length = o + 1;
		for (let { range: u, text: c, eol: m } of n) {
			if (typeof m == "number" && (a = m), V.isEmpty(u) && !c) continue;
			const h = i.getValueInRange(u);
			if (c = c.replace(/\r\n|\n|\r/g, i.eol), h === c) continue;
			if (Math.max(c.length, h.length) > jt._diffLimit) {
				s.push({
					range: u,
					text: c
				});
				continue;
			}
			const p = Yl(h, c, r), _ = i.offsetAt(V.lift(u).getStartPosition());
			for (const d of p) {
				const b = i.positionAt(_ + d.originalStart), A = i.positionAt(_ + d.originalStart + d.originalLength), R = {
					text: c.substr(d.modifiedStart, d.modifiedLength),
					range: {
						startLineNumber: b.lineNumber,
						startColumn: b.column,
						endLineNumber: A.lineNumber,
						endColumn: A.column
					}
				};
				i.getValueInRange(R.range) !== R.text && s.push(R);
			}
		}
		return typeof a == "number" && s.push({
			eol: a,
			text: "",
			range: {
				startLineNumber: 0,
				startColumn: 0,
				endLineNumber: 0,
				endColumn: 0
			}
		}), s;
	}
	$computeHumanReadableDiff(t, n, r) {
		const i = this._getModel(t);
		if (!i) return n;
		const s = [];
		let a;
		n = n.slice(0).sort((o, u) => o.range && u.range ? V.compareRangesUsingStarts(o.range, u.range) : (o.range ? 0 : 1) - (u.range ? 0 : 1));
		for (let { range: o, text: u, eol: c } of n) {
			let b = function(R, E) {
				return new Y(R.lineNumber + E.lineNumber - 1, E.lineNumber === 1 ? R.column + E.column - 1 : E.column);
			}, A = function(R, E) {
				const y = [];
				for (let S = E.startLineNumber; S <= E.endLineNumber; S++) {
					const D = R[S - 1];
					S === E.startLineNumber && S === E.endLineNumber ? y.push(D.substring(E.startColumn - 1, E.endColumn - 1)) : S === E.startLineNumber ? y.push(D.substring(E.startColumn - 1)) : S === E.endLineNumber ? y.push(D.substring(0, E.endColumn - 1)) : y.push(D);
				}
				return y;
			};
			if (typeof c == "number" && (a = c), V.isEmpty(o) && !u) continue;
			const m = i.getValueInRange(o);
			if (u = u.replace(/\r\n|\n|\r/g, i.eol), m === u) continue;
			if (Math.max(u.length, m.length) > jt._diffLimit) {
				s.push({
					range: o,
					text: u
				});
				continue;
			}
			const h = m.split(/\r\n|\n|\r/), p = u.split(/\r\n|\n|\r/), _ = Zt.getDefault().computeDiff(h, p, r), d = V.lift(o).getStartPosition();
			for (const R of _.changes) if (R.innerChanges) for (const E of R.innerChanges) s.push({
				range: V.fromPositions(b(d, E.originalRange.getStartPosition()), b(d, E.originalRange.getEndPosition())),
				text: A(p, E.modifiedRange).join(i.eol)
			});
			else throw new se("The experimental diff algorithm always produces inner changes");
		}
		return typeof a == "number" && s.push({
			eol: a,
			text: "",
			range: {
				startLineNumber: 0,
				startColumn: 0,
				endLineNumber: 0,
				endColumn: 0
			}
		}), s;
	}
	async $computeLinks(t) {
		const n = this._getModel(t);
		return n ? to(n) : null;
	}
	async $computeDefaultDocumentColors(t) {
		const n = this._getModel(t);
		return n ? Mu(n) : null;
	}
	static {
		this._suggestionsLimit = 1e4;
	}
	async $textualSuggest(t, n, r, i) {
		const s = new v1(), a = new RegExp(r, i), o = /* @__PURE__ */ new Set();
		e: for (const u of t) {
			const c = this._getModel(u);
			if (c) {
				for (const m of c.words(a)) if (!(m === n || !isNaN(Number(m))) && (o.add(m), o.size > jt._suggestionsLimit)) break e;
			}
		}
		return {
			words: Array.from(o),
			duration: s.elapsed()
		};
	}
	async $computeWordRanges(t, n, r, i) {
		const s = this._getModel(t);
		if (!s) return Object.create(null);
		const a = new RegExp(r, i), o = Object.create(null);
		for (let u = n.startLineNumber; u < n.endLineNumber; u++) {
			const c = s.getLineWords(u, a);
			for (const m of c) {
				if (!isNaN(Number(m.word))) continue;
				let h = o[m.word];
				h || (h = [], o[m.word] = h), h.push({
					startLineNumber: u,
					startColumn: m.startColumn,
					endLineNumber: u,
					endColumn: m.endColumn
				});
			}
		}
		return o;
	}
	async $navigateValueSet(t, n, r, i, s) {
		const a = this._getModel(t);
		if (!a) return null;
		const o = new RegExp(i, s);
		n.startColumn === n.endColumn && (n = {
			startLineNumber: n.startLineNumber,
			startColumn: n.startColumn,
			endLineNumber: n.endLineNumber,
			endColumn: n.endColumn + 1
		});
		const u = a.getValueInRange(n), c = a.getWordAtPosition({
			lineNumber: n.startLineNumber,
			column: n.startColumn
		}, o);
		if (!c) return null;
		const m = a.getValueInRange(c);
		return no.INSTANCE.navigateValueSet(n, u, c, m, r);
	}
	$fmr(t, n) {
		if (!this._foreignModule || typeof this._foreignModule[t] != "function") return Promise.reject(/* @__PURE__ */ new Error("Missing requestHandler or method: " + t));
		try {
			return Promise.resolve(this._foreignModule[t].apply(this._foreignModule, n));
		} catch (r) {
			return Promise.reject(r);
		}
	}
};
typeof importScripts == "function" && (globalThis.monaco = qo());
function e0(e, t, n, r) {
	const i = r === "advanced" ? Zt.getDefault() : Zt.getLegacy(), s = new rn(e), a = s.getLines(), o = new rn(t), u = o.getLines(), c = i.computeDiff(a, u, {
		ignoreTrimWhitespace: !1,
		maxComputationTimeMs: n.maxComputationTimeMs,
		computeMoves: !1,
		extendToSubwords: !1
	}), m = Dt.toTextEdit(c.changes, o);
	return s.getTransformer().getStringEdit(m);
}
Pl(() => new fa(null));
var t0 = class Tr {
	static {
		this.CHANNEL_NAME = "editorWorkerHost";
	}
	static getChannel(t) {
		return t.getChannel(Tr.CHANNEL_NAME);
	}
	static setChannel(t, n) {
		t.setChannel(Tr.CHANNEL_NAME, n);
	}
};
function n0(e) {
	let t;
	const n = P1((r) => {
		const i = t0.getChannel(r);
		return t = e({
			host: new Proxy({}, { get(s, a, o) {
				if (a !== "then") {
					if (typeof a != "string") throw new Error("Not supported");
					return (...u) => i.$fhr(a, u);
				}
			} }),
			getMirrorModels: () => n.requestHandler.getModels()
		}), new fa(t);
	});
	return t;
}
let r0 = !1;
function i0() {
	return r0;
}
self.onmessage = () => {
	i0() || n0(() => ({}));
};
