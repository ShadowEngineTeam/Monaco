var m;
(function(e) {
	e[e.Null = 0] = "Null", e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.LineFeed = 10] = "LineFeed", e[e.CarriageReturn = 13] = "CarriageReturn", e[e.Space = 32] = "Space", e[e.ExclamationMark = 33] = "ExclamationMark", e[e.DoubleQuote = 34] = "DoubleQuote", e[e.Hash = 35] = "Hash", e[e.DollarSign = 36] = "DollarSign", e[e.PercentSign = 37] = "PercentSign", e[e.Ampersand = 38] = "Ampersand", e[e.SingleQuote = 39] = "SingleQuote", e[e.OpenParen = 40] = "OpenParen", e[e.CloseParen = 41] = "CloseParen", e[e.Asterisk = 42] = "Asterisk", e[e.Plus = 43] = "Plus", e[e.Comma = 44] = "Comma", e[e.Dash = 45] = "Dash", e[e.Period = 46] = "Period", e[e.Slash = 47] = "Slash", e[e.Digit0 = 48] = "Digit0", e[e.Digit1 = 49] = "Digit1", e[e.Digit2 = 50] = "Digit2", e[e.Digit3 = 51] = "Digit3", e[e.Digit4 = 52] = "Digit4", e[e.Digit5 = 53] = "Digit5", e[e.Digit6 = 54] = "Digit6", e[e.Digit7 = 55] = "Digit7", e[e.Digit8 = 56] = "Digit8", e[e.Digit9 = 57] = "Digit9", e[e.Colon = 58] = "Colon", e[e.Semicolon = 59] = "Semicolon", e[e.LessThan = 60] = "LessThan", e[e.Equals = 61] = "Equals", e[e.GreaterThan = 62] = "GreaterThan", e[e.QuestionMark = 63] = "QuestionMark", e[e.AtSign = 64] = "AtSign", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.OpenSquareBracket = 91] = "OpenSquareBracket", e[e.Backslash = 92] = "Backslash", e[e.CloseSquareBracket = 93] = "CloseSquareBracket", e[e.Caret = 94] = "Caret", e[e.Underline = 95] = "Underline", e[e.BackTick = 96] = "BackTick", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.OpenCurlyBrace = 123] = "OpenCurlyBrace", e[e.Pipe = 124] = "Pipe", e[e.CloseCurlyBrace = 125] = "CloseCurlyBrace", e[e.Tilde = 126] = "Tilde", e[e.NoBreakSpace = 160] = "NoBreakSpace", e[e.U_Combining_Grave_Accent = 768] = "U_Combining_Grave_Accent", e[e.U_Combining_Acute_Accent = 769] = "U_Combining_Acute_Accent", e[e.U_Combining_Circumflex_Accent = 770] = "U_Combining_Circumflex_Accent", e[e.U_Combining_Tilde = 771] = "U_Combining_Tilde", e[e.U_Combining_Macron = 772] = "U_Combining_Macron", e[e.U_Combining_Overline = 773] = "U_Combining_Overline", e[e.U_Combining_Breve = 774] = "U_Combining_Breve", e[e.U_Combining_Dot_Above = 775] = "U_Combining_Dot_Above", e[e.U_Combining_Diaeresis = 776] = "U_Combining_Diaeresis", e[e.U_Combining_Hook_Above = 777] = "U_Combining_Hook_Above", e[e.U_Combining_Ring_Above = 778] = "U_Combining_Ring_Above", e[e.U_Combining_Double_Acute_Accent = 779] = "U_Combining_Double_Acute_Accent", e[e.U_Combining_Caron = 780] = "U_Combining_Caron", e[e.U_Combining_Vertical_Line_Above = 781] = "U_Combining_Vertical_Line_Above", e[e.U_Combining_Double_Vertical_Line_Above = 782] = "U_Combining_Double_Vertical_Line_Above", e[e.U_Combining_Double_Grave_Accent = 783] = "U_Combining_Double_Grave_Accent", e[e.U_Combining_Candrabindu = 784] = "U_Combining_Candrabindu", e[e.U_Combining_Inverted_Breve = 785] = "U_Combining_Inverted_Breve", e[e.U_Combining_Turned_Comma_Above = 786] = "U_Combining_Turned_Comma_Above", e[e.U_Combining_Comma_Above = 787] = "U_Combining_Comma_Above", e[e.U_Combining_Reversed_Comma_Above = 788] = "U_Combining_Reversed_Comma_Above", e[e.U_Combining_Comma_Above_Right = 789] = "U_Combining_Comma_Above_Right", e[e.U_Combining_Grave_Accent_Below = 790] = "U_Combining_Grave_Accent_Below", e[e.U_Combining_Acute_Accent_Below = 791] = "U_Combining_Acute_Accent_Below", e[e.U_Combining_Left_Tack_Below = 792] = "U_Combining_Left_Tack_Below", e[e.U_Combining_Right_Tack_Below = 793] = "U_Combining_Right_Tack_Below", e[e.U_Combining_Left_Angle_Above = 794] = "U_Combining_Left_Angle_Above", e[e.U_Combining_Horn = 795] = "U_Combining_Horn", e[e.U_Combining_Left_Half_Ring_Below = 796] = "U_Combining_Left_Half_Ring_Below", e[e.U_Combining_Up_Tack_Below = 797] = "U_Combining_Up_Tack_Below", e[e.U_Combining_Down_Tack_Below = 798] = "U_Combining_Down_Tack_Below", e[e.U_Combining_Plus_Sign_Below = 799] = "U_Combining_Plus_Sign_Below", e[e.U_Combining_Minus_Sign_Below = 800] = "U_Combining_Minus_Sign_Below", e[e.U_Combining_Palatalized_Hook_Below = 801] = "U_Combining_Palatalized_Hook_Below", e[e.U_Combining_Retroflex_Hook_Below = 802] = "U_Combining_Retroflex_Hook_Below", e[e.U_Combining_Dot_Below = 803] = "U_Combining_Dot_Below", e[e.U_Combining_Diaeresis_Below = 804] = "U_Combining_Diaeresis_Below", e[e.U_Combining_Ring_Below = 805] = "U_Combining_Ring_Below", e[e.U_Combining_Comma_Below = 806] = "U_Combining_Comma_Below", e[e.U_Combining_Cedilla = 807] = "U_Combining_Cedilla", e[e.U_Combining_Ogonek = 808] = "U_Combining_Ogonek", e[e.U_Combining_Vertical_Line_Below = 809] = "U_Combining_Vertical_Line_Below", e[e.U_Combining_Bridge_Below = 810] = "U_Combining_Bridge_Below", e[e.U_Combining_Inverted_Double_Arch_Below = 811] = "U_Combining_Inverted_Double_Arch_Below", e[e.U_Combining_Caron_Below = 812] = "U_Combining_Caron_Below", e[e.U_Combining_Circumflex_Accent_Below = 813] = "U_Combining_Circumflex_Accent_Below", e[e.U_Combining_Breve_Below = 814] = "U_Combining_Breve_Below", e[e.U_Combining_Inverted_Breve_Below = 815] = "U_Combining_Inverted_Breve_Below", e[e.U_Combining_Tilde_Below = 816] = "U_Combining_Tilde_Below", e[e.U_Combining_Macron_Below = 817] = "U_Combining_Macron_Below", e[e.U_Combining_Low_Line = 818] = "U_Combining_Low_Line", e[e.U_Combining_Double_Low_Line = 819] = "U_Combining_Double_Low_Line", e[e.U_Combining_Tilde_Overlay = 820] = "U_Combining_Tilde_Overlay", e[e.U_Combining_Short_Stroke_Overlay = 821] = "U_Combining_Short_Stroke_Overlay", e[e.U_Combining_Long_Stroke_Overlay = 822] = "U_Combining_Long_Stroke_Overlay", e[e.U_Combining_Short_Solidus_Overlay = 823] = "U_Combining_Short_Solidus_Overlay", e[e.U_Combining_Long_Solidus_Overlay = 824] = "U_Combining_Long_Solidus_Overlay", e[e.U_Combining_Right_Half_Ring_Below = 825] = "U_Combining_Right_Half_Ring_Below", e[e.U_Combining_Inverted_Bridge_Below = 826] = "U_Combining_Inverted_Bridge_Below", e[e.U_Combining_Square_Below = 827] = "U_Combining_Square_Below", e[e.U_Combining_Seagull_Below = 828] = "U_Combining_Seagull_Below", e[e.U_Combining_X_Above = 829] = "U_Combining_X_Above", e[e.U_Combining_Vertical_Tilde = 830] = "U_Combining_Vertical_Tilde", e[e.U_Combining_Double_Overline = 831] = "U_Combining_Double_Overline", e[e.U_Combining_Grave_Tone_Mark = 832] = "U_Combining_Grave_Tone_Mark", e[e.U_Combining_Acute_Tone_Mark = 833] = "U_Combining_Acute_Tone_Mark", e[e.U_Combining_Greek_Perispomeni = 834] = "U_Combining_Greek_Perispomeni", e[e.U_Combining_Greek_Koronis = 835] = "U_Combining_Greek_Koronis", e[e.U_Combining_Greek_Dialytika_Tonos = 836] = "U_Combining_Greek_Dialytika_Tonos", e[e.U_Combining_Greek_Ypogegrammeni = 837] = "U_Combining_Greek_Ypogegrammeni", e[e.U_Combining_Bridge_Above = 838] = "U_Combining_Bridge_Above", e[e.U_Combining_Equals_Sign_Below = 839] = "U_Combining_Equals_Sign_Below", e[e.U_Combining_Double_Vertical_Line_Below = 840] = "U_Combining_Double_Vertical_Line_Below", e[e.U_Combining_Left_Angle_Below = 841] = "U_Combining_Left_Angle_Below", e[e.U_Combining_Not_Tilde_Above = 842] = "U_Combining_Not_Tilde_Above", e[e.U_Combining_Homothetic_Above = 843] = "U_Combining_Homothetic_Above", e[e.U_Combining_Almost_Equal_To_Above = 844] = "U_Combining_Almost_Equal_To_Above", e[e.U_Combining_Left_Right_Arrow_Below = 845] = "U_Combining_Left_Right_Arrow_Below", e[e.U_Combining_Upwards_Arrow_Below = 846] = "U_Combining_Upwards_Arrow_Below", e[e.U_Combining_Grapheme_Joiner = 847] = "U_Combining_Grapheme_Joiner", e[e.U_Combining_Right_Arrowhead_Above = 848] = "U_Combining_Right_Arrowhead_Above", e[e.U_Combining_Left_Half_Ring_Above = 849] = "U_Combining_Left_Half_Ring_Above", e[e.U_Combining_Fermata = 850] = "U_Combining_Fermata", e[e.U_Combining_X_Below = 851] = "U_Combining_X_Below", e[e.U_Combining_Left_Arrowhead_Below = 852] = "U_Combining_Left_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_Below = 853] = "U_Combining_Right_Arrowhead_Below", e[e.U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below = 854] = "U_Combining_Right_Arrowhead_And_Up_Arrowhead_Below", e[e.U_Combining_Right_Half_Ring_Above = 855] = "U_Combining_Right_Half_Ring_Above", e[e.U_Combining_Dot_Above_Right = 856] = "U_Combining_Dot_Above_Right", e[e.U_Combining_Asterisk_Below = 857] = "U_Combining_Asterisk_Below", e[e.U_Combining_Double_Ring_Below = 858] = "U_Combining_Double_Ring_Below", e[e.U_Combining_Zigzag_Above = 859] = "U_Combining_Zigzag_Above", e[e.U_Combining_Double_Breve_Below = 860] = "U_Combining_Double_Breve_Below", e[e.U_Combining_Double_Breve = 861] = "U_Combining_Double_Breve", e[e.U_Combining_Double_Macron = 862] = "U_Combining_Double_Macron", e[e.U_Combining_Double_Macron_Below = 863] = "U_Combining_Double_Macron_Below", e[e.U_Combining_Double_Tilde = 864] = "U_Combining_Double_Tilde", e[e.U_Combining_Double_Inverted_Breve = 865] = "U_Combining_Double_Inverted_Breve", e[e.U_Combining_Double_Rightwards_Arrow_Below = 866] = "U_Combining_Double_Rightwards_Arrow_Below", e[e.U_Combining_Latin_Small_Letter_A = 867] = "U_Combining_Latin_Small_Letter_A", e[e.U_Combining_Latin_Small_Letter_E = 868] = "U_Combining_Latin_Small_Letter_E", e[e.U_Combining_Latin_Small_Letter_I = 869] = "U_Combining_Latin_Small_Letter_I", e[e.U_Combining_Latin_Small_Letter_O = 870] = "U_Combining_Latin_Small_Letter_O", e[e.U_Combining_Latin_Small_Letter_U = 871] = "U_Combining_Latin_Small_Letter_U", e[e.U_Combining_Latin_Small_Letter_C = 872] = "U_Combining_Latin_Small_Letter_C", e[e.U_Combining_Latin_Small_Letter_D = 873] = "U_Combining_Latin_Small_Letter_D", e[e.U_Combining_Latin_Small_Letter_H = 874] = "U_Combining_Latin_Small_Letter_H", e[e.U_Combining_Latin_Small_Letter_M = 875] = "U_Combining_Latin_Small_Letter_M", e[e.U_Combining_Latin_Small_Letter_R = 876] = "U_Combining_Latin_Small_Letter_R", e[e.U_Combining_Latin_Small_Letter_T = 877] = "U_Combining_Latin_Small_Letter_T", e[e.U_Combining_Latin_Small_Letter_V = 878] = "U_Combining_Latin_Small_Letter_V", e[e.U_Combining_Latin_Small_Letter_X = 879] = "U_Combining_Latin_Small_Letter_X", e[e.LINE_SEPARATOR = 8232] = "LINE_SEPARATOR", e[e.PARAGRAPH_SEPARATOR = 8233] = "PARAGRAPH_SEPARATOR", e[e.NEXT_LINE = 133] = "NEXT_LINE", e[e.U_CIRCUMFLEX = 94] = "U_CIRCUMFLEX", e[e.U_GRAVE_ACCENT = 96] = "U_GRAVE_ACCENT", e[e.U_DIAERESIS = 168] = "U_DIAERESIS", e[e.U_MACRON = 175] = "U_MACRON", e[e.U_ACUTE_ACCENT = 180] = "U_ACUTE_ACCENT", e[e.U_CEDILLA = 184] = "U_CEDILLA", e[e.U_MODIFIER_LETTER_LEFT_ARROWHEAD = 706] = "U_MODIFIER_LETTER_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_RIGHT_ARROWHEAD = 707] = "U_MODIFIER_LETTER_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_UP_ARROWHEAD = 708] = "U_MODIFIER_LETTER_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_DOWN_ARROWHEAD = 709] = "U_MODIFIER_LETTER_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING = 722] = "U_MODIFIER_LETTER_CENTRED_RIGHT_HALF_RING", e[e.U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING = 723] = "U_MODIFIER_LETTER_CENTRED_LEFT_HALF_RING", e[e.U_MODIFIER_LETTER_UP_TACK = 724] = "U_MODIFIER_LETTER_UP_TACK", e[e.U_MODIFIER_LETTER_DOWN_TACK = 725] = "U_MODIFIER_LETTER_DOWN_TACK", e[e.U_MODIFIER_LETTER_PLUS_SIGN = 726] = "U_MODIFIER_LETTER_PLUS_SIGN", e[e.U_MODIFIER_LETTER_MINUS_SIGN = 727] = "U_MODIFIER_LETTER_MINUS_SIGN", e[e.U_BREVE = 728] = "U_BREVE", e[e.U_DOT_ABOVE = 729] = "U_DOT_ABOVE", e[e.U_RING_ABOVE = 730] = "U_RING_ABOVE", e[e.U_OGONEK = 731] = "U_OGONEK", e[e.U_SMALL_TILDE = 732] = "U_SMALL_TILDE", e[e.U_DOUBLE_ACUTE_ACCENT = 733] = "U_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_RHOTIC_HOOK = 734] = "U_MODIFIER_LETTER_RHOTIC_HOOK", e[e.U_MODIFIER_LETTER_CROSS_ACCENT = 735] = "U_MODIFIER_LETTER_CROSS_ACCENT", e[e.U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR = 741] = "U_MODIFIER_LETTER_EXTRA_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_HIGH_TONE_BAR = 742] = "U_MODIFIER_LETTER_HIGH_TONE_BAR", e[e.U_MODIFIER_LETTER_MID_TONE_BAR = 743] = "U_MODIFIER_LETTER_MID_TONE_BAR", e[e.U_MODIFIER_LETTER_LOW_TONE_BAR = 744] = "U_MODIFIER_LETTER_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR = 745] = "U_MODIFIER_LETTER_EXTRA_LOW_TONE_BAR", e[e.U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK = 746] = "U_MODIFIER_LETTER_YIN_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK = 747] = "U_MODIFIER_LETTER_YANG_DEPARTING_TONE_MARK", e[e.U_MODIFIER_LETTER_UNASPIRATED = 749] = "U_MODIFIER_LETTER_UNASPIRATED", e[e.U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD = 751] = "U_MODIFIER_LETTER_LOW_DOWN_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_UP_ARROWHEAD = 752] = "U_MODIFIER_LETTER_LOW_UP_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD = 753] = "U_MODIFIER_LETTER_LOW_LEFT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD = 754] = "U_MODIFIER_LETTER_LOW_RIGHT_ARROWHEAD", e[e.U_MODIFIER_LETTER_LOW_RING = 755] = "U_MODIFIER_LETTER_LOW_RING", e[e.U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT = 756] = "U_MODIFIER_LETTER_MIDDLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT = 757] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_GRAVE_ACCENT", e[e.U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT = 758] = "U_MODIFIER_LETTER_MIDDLE_DOUBLE_ACUTE_ACCENT", e[e.U_MODIFIER_LETTER_LOW_TILDE = 759] = "U_MODIFIER_LETTER_LOW_TILDE", e[e.U_MODIFIER_LETTER_RAISED_COLON = 760] = "U_MODIFIER_LETTER_RAISED_COLON", e[e.U_MODIFIER_LETTER_BEGIN_HIGH_TONE = 761] = "U_MODIFIER_LETTER_BEGIN_HIGH_TONE", e[e.U_MODIFIER_LETTER_END_HIGH_TONE = 762] = "U_MODIFIER_LETTER_END_HIGH_TONE", e[e.U_MODIFIER_LETTER_BEGIN_LOW_TONE = 763] = "U_MODIFIER_LETTER_BEGIN_LOW_TONE", e[e.U_MODIFIER_LETTER_END_LOW_TONE = 764] = "U_MODIFIER_LETTER_END_LOW_TONE", e[e.U_MODIFIER_LETTER_SHELF = 765] = "U_MODIFIER_LETTER_SHELF", e[e.U_MODIFIER_LETTER_OPEN_SHELF = 766] = "U_MODIFIER_LETTER_OPEN_SHELF", e[e.U_MODIFIER_LETTER_LOW_LEFT_ARROW = 767] = "U_MODIFIER_LETTER_LOW_LEFT_ARROW", e[e.U_GREEK_LOWER_NUMERAL_SIGN = 885] = "U_GREEK_LOWER_NUMERAL_SIGN", e[e.U_GREEK_TONOS = 900] = "U_GREEK_TONOS", e[e.U_GREEK_DIALYTIKA_TONOS = 901] = "U_GREEK_DIALYTIKA_TONOS", e[e.U_GREEK_KORONIS = 8125] = "U_GREEK_KORONIS", e[e.U_GREEK_PSILI = 8127] = "U_GREEK_PSILI", e[e.U_GREEK_PERISPOMENI = 8128] = "U_GREEK_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_PERISPOMENI = 8129] = "U_GREEK_DIALYTIKA_AND_PERISPOMENI", e[e.U_GREEK_PSILI_AND_VARIA = 8141] = "U_GREEK_PSILI_AND_VARIA", e[e.U_GREEK_PSILI_AND_OXIA = 8142] = "U_GREEK_PSILI_AND_OXIA", e[e.U_GREEK_PSILI_AND_PERISPOMENI = 8143] = "U_GREEK_PSILI_AND_PERISPOMENI", e[e.U_GREEK_DASIA_AND_VARIA = 8157] = "U_GREEK_DASIA_AND_VARIA", e[e.U_GREEK_DASIA_AND_OXIA = 8158] = "U_GREEK_DASIA_AND_OXIA", e[e.U_GREEK_DASIA_AND_PERISPOMENI = 8159] = "U_GREEK_DASIA_AND_PERISPOMENI", e[e.U_GREEK_DIALYTIKA_AND_VARIA = 8173] = "U_GREEK_DIALYTIKA_AND_VARIA", e[e.U_GREEK_DIALYTIKA_AND_OXIA = 8174] = "U_GREEK_DIALYTIKA_AND_OXIA", e[e.U_GREEK_VARIA = 8175] = "U_GREEK_VARIA", e[e.U_GREEK_OXIA = 8189] = "U_GREEK_OXIA", e[e.U_GREEK_DASIA = 8190] = "U_GREEK_DASIA", e[e.U_IDEOGRAPHIC_FULL_STOP = 12290] = "U_IDEOGRAPHIC_FULL_STOP", e[e.U_LEFT_CORNER_BRACKET = 12300] = "U_LEFT_CORNER_BRACKET", e[e.U_RIGHT_CORNER_BRACKET = 12301] = "U_RIGHT_CORNER_BRACKET", e[e.U_LEFT_BLACK_LENTICULAR_BRACKET = 12304] = "U_LEFT_BLACK_LENTICULAR_BRACKET", e[e.U_RIGHT_BLACK_LENTICULAR_BRACKET = 12305] = "U_RIGHT_BLACK_LENTICULAR_BRACKET", e[e.U_OVERLINE = 8254] = "U_OVERLINE", e[e.UTF8_BOM = 65279] = "UTF8_BOM", e[e.U_FULLWIDTH_SEMICOLON = 65307] = "U_FULLWIDTH_SEMICOLON", e[e.U_FULLWIDTH_COMMA = 65292] = "U_FULLWIDTH_COMMA";
})(m || (m = {}));
var tn;
(function(e) {
	e[e.Uri = 1] = "Uri", e[e.Regexp = 2] = "Regexp", e[e.ScmResource = 3] = "ScmResource", e[e.ScmResourceGroup = 4] = "ScmResourceGroup", e[e.ScmProvider = 5] = "ScmProvider", e[e.CommentController = 6] = "CommentController", e[e.CommentThread = 7] = "CommentThread", e[e.CommentThreadInstance = 8] = "CommentThreadInstance", e[e.CommentThreadReply = 9] = "CommentThreadReply", e[e.CommentNode = 10] = "CommentNode", e[e.CommentThreadNode = 11] = "CommentThreadNode", e[e.TimelineActionContext = 12] = "TimelineActionContext", e[e.NotebookCellActionContext = 13] = "NotebookCellActionContext", e[e.NotebookActionContext = 14] = "NotebookActionContext", e[e.TerminalContext = 15] = "TerminalContext", e[e.TestItemContext = 16] = "TestItemContext", e[e.Date = 17] = "Date", e[e.TestMessageMenuArgs = 18] = "TestMessageMenuArgs", e[e.ChatViewContext = 19] = "ChatViewContext", e[e.LanguageModelToolResult = 20] = "LanguageModelToolResult", e[e.LanguageModelTextPart = 21] = "LanguageModelTextPart", e[e.LanguageModelThinkingPart = 22] = "LanguageModelThinkingPart", e[e.LanguageModelPromptTsxPart = 23] = "LanguageModelPromptTsxPart", e[e.LanguageModelDataPart = 24] = "LanguageModelDataPart", e[e.AgentSessionContext = 25] = "AgentSessionContext", e[e.ChatResponsePullRequestPart = 26] = "ChatResponsePullRequestPart";
})(tn || (tn = {}));
function $s() {
	return globalThis._VSCODE_NLS_MESSAGES;
}
function Wi() {
	return globalThis._VSCODE_NLS_LANGUAGE;
}
const qs = Wi() === "pseudo" || typeof document < "u" && document.location && typeof document.location.hash == "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function Mn(e, t) {
	let n;
	return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (i, s) => {
		const o = t[s[0]];
		let a = i;
		return typeof o == "string" ? a = o : (typeof o == "number" || typeof o == "boolean" || o === void 0 || o === null) && (a = String(o)), a;
	}), qs && (n = "［" + n.replace(/[aouei]/g, "$&$&") + "］"), n;
}
function L(e, t, ...n) {
	return Mn(typeof e == "number" ? js(e, t) : t, n);
}
function js(e, t) {
	const n = $s()?.[e];
	if (typeof n != "string") {
		if (typeof t == "string") return t;
		throw new Error(`!!! NLS MISSING: ${e} !!!`);
	}
	return n;
}
let gt = !1, mt = !1, dt = !1, ji = !1, On = !1, Hi = !1, At = "en", Le;
const ye = globalThis;
let ne;
typeof ye.vscode < "u" && typeof ye.vscode.process < "u" ? ne = ye.vscode.process : typeof process < "u" && typeof process?.versions?.node == "string" && (ne = process);
const Xs = typeof ne?.versions?.electron == "string" && ne?.type === "renderer";
if (typeof ne == "object") {
	gt = ne.platform === "win32", mt = ne.platform === "darwin", dt = ne.platform === "linux", dt && ne.env.SNAP && ne.env.SNAP_REVISION, ne.env.CI || ne.env.BUILD_ARTIFACTSTAGINGDIRECTORY || ne.env.GITHUB_WORKSPACE, At = "en";
	const e = ne.env.VSCODE_NLS_CONFIG;
	if (e) try {
		const t = JSON.parse(e);
		t.userLocale, t.osLocale, At = t.resolvedLanguage || "en", t.languagePack?.translationsConfigFile;
	} catch {}
	ji = !0;
} else typeof navigator == "object" && !Xs ? (Le = navigator.userAgent, gt = Le.indexOf("Windows") >= 0, mt = Le.indexOf("Macintosh") >= 0, Hi = (Le.indexOf("Macintosh") >= 0 || Le.indexOf("iPad") >= 0 || Le.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0, dt = Le.indexOf("Linux") >= 0, Le?.indexOf("Mobi"), On = !0, At = Wi() || "en", navigator.language.toLowerCase()) : console.error("Unable to resolve platform.");
var et;
(function(e) {
	e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
})(et || (et = {}));
et.Web;
mt ? et.Mac : gt ? et.Windows : dt && et.Linux;
const tt = gt, Zs = mt, Js = dt, Cs = ji, er = On, nr = On && typeof ye.importScripts == "function" ? ye.origin : void 0, me = Le, Te = At;
var Pn;
(function(e) {
	function t() {
		return Te;
	}
	e.value = t;
	function n() {
		return Te.length === 2 ? Te === "en" : Te.length >= 3 ? Te[0] === "e" && Te[1] === "n" && Te[2] === "-" : !1;
	}
	e.isDefaultVariant = n;
	function i() {
		return Te === "en";
	}
	e.isDefault = i;
})(Pn || (Pn = {}));
const ir = typeof ye.postMessage == "function" && !ye.importScripts, Yi = (() => {
	if (ir) {
		const e = [];
		ye.addEventListener("message", (n) => {
			if (n.data && n.data.vscodeScheduleAsyncWork) for (let i = 0, s = e.length; i < s; i++) {
				const o = e[i];
				if (o.id === n.data.vscodeScheduleAsyncWork) {
					e.splice(i, 1), o.callback();
					return;
				}
			}
		});
		let t = 0;
		return (n) => {
			const i = ++t;
			e.push({
				id: i,
				callback: n
			}), ye.postMessage({ vscodeScheduleAsyncWork: i }, "*");
		};
	}
	return (e) => setTimeout(e);
})();
var ft;
(function(e) {
	e[e.Windows = 1] = "Windows", e[e.Macintosh = 2] = "Macintosh", e[e.Linux = 3] = "Linux";
})(ft || (ft = {}));
mt || Hi ? ft.Macintosh : gt ? ft.Windows : ft.Linux;
const sr = !!(me && me.indexOf("Chrome") >= 0);
me && me.indexOf("Firefox");
!sr && me && me.indexOf("Safari");
me && me.indexOf("Edg/");
me && me.indexOf("Android");
let Ge;
const Xt = globalThis.vscode;
if (typeof Xt < "u" && typeof Xt.process < "u") {
	const e = Xt.process;
	Ge = {
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
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Ge = {
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
} : Ge = {
	get platform() {
		return tt ? "win32" : Zs ? "darwin" : "linux";
	},
	get arch() {},
	get env() {
		return {};
	},
	cwd() {
		return "/";
	}
};
const Dt = Ge.cwd, nn = Ge.env, rr = Ge.platform;
Ge.arch;
const or = 65, ar = 97, lr = 90, ur = 122, $e = 46, q = 47, C = 92, pe = 58, cr = 63;
var Qi = class extends Error {
	constructor(e, t, n) {
		let i;
		typeof t == "string" && t.indexOf("not ") === 0 ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be";
		let s = `The "${e}" ${e.indexOf(".") !== -1 ? "property" : "argument"} ${i} of type ${t}`;
		s += `. Received type ${typeof n}`, super(s), this.code = "ERR_INVALID_ARG_TYPE";
	}
};
function hr(e, t) {
	if (e === null || typeof e != "object") throw new Qi(t, "Object", e);
}
function M(e, t) {
	if (typeof e != "string") throw new Qi(t, "string", e);
}
const _e = rr === "win32";
function R(e) {
	return e === q || e === C;
}
function sn(e) {
	return e === q;
}
function ve(e) {
	return e >= or && e <= lr || e >= ar && e <= ur;
}
function xt(e, t, n, i) {
	let s = "", o = 0, a = -1, l = 0, u = 0;
	for (let c = 0; c <= e.length; ++c) {
		if (c < e.length) u = e.charCodeAt(c);
		else {
			if (i(u)) break;
			u = q;
		}
		if (i(u)) {
			if (!(a === c - 1 || l === 1)) if (l === 2) {
				if (s.length < 2 || o !== 2 || s.charCodeAt(s.length - 1) !== $e || s.charCodeAt(s.length - 2) !== $e) {
					if (s.length > 2) {
						const f = s.lastIndexOf(n);
						f === -1 ? (s = "", o = 0) : (s = s.slice(0, f), o = s.length - 1 - s.lastIndexOf(n)), a = c, l = 0;
						continue;
					} else if (s.length !== 0) {
						s = "", o = 0, a = c, l = 0;
						continue;
					}
				}
				t && (s += s.length > 0 ? `${n}..` : "..", o = 2);
			} else s.length > 0 ? s += `${n}${e.slice(a + 1, c)}` : s = e.slice(a + 1, c), o = c - a - 1;
			a = c, l = 0;
		} else u === $e && l !== -1 ? ++l : l = -1;
	}
	return s;
}
function dr(e) {
	return e ? `${e[0] === "." ? "" : "."}${e}` : "";
}
function Xi(e, t) {
	hr(t, "pathObject");
	const n = t.dir || t.root, i = t.base || `${t.name || ""}${dr(t.ext)}`;
	return n ? n === t.root ? `${n}${i}` : `${n}${e}${i}` : i;
}
const j = {
	resolve(...e) {
		let t = "", n = "", i = !1;
		for (let s = e.length - 1; s >= -1; s--) {
			let o;
			if (s >= 0) {
				if (o = e[s], M(o, `paths[${s}]`), o.length === 0) continue;
			} else t.length === 0 ? o = Dt() : (o = nn[`=${t}`] || Dt(), (o === void 0 || o.slice(0, 2).toLowerCase() !== t.toLowerCase() && o.charCodeAt(2) === C) && (o = `${t}\\`));
			const a = o.length;
			let l = 0, u = "", c = !1;
			const f = o.charCodeAt(0);
			if (a === 1) R(f) && (l = 1, c = !0);
			else if (R(f)) if (c = !0, R(o.charCodeAt(1))) {
				let d = 2, p = d;
				for (; d < a && !R(o.charCodeAt(d));) d++;
				if (d < a && d !== p) {
					const k = o.slice(p, d);
					for (p = d; d < a && R(o.charCodeAt(d));) d++;
					if (d < a && d !== p) {
						for (p = d; d < a && !R(o.charCodeAt(d));) d++;
						(d === a || d !== p) && (u = `\\\\${k}\\${o.slice(p, d)}`, l = d);
					}
				}
			} else l = 1;
			else ve(f) && o.charCodeAt(1) === pe && (u = o.slice(0, 2), l = 2, a > 2 && R(o.charCodeAt(2)) && (c = !0, l = 3));
			if (u.length > 0) if (t.length > 0) {
				if (u.toLowerCase() !== t.toLowerCase()) continue;
			} else t = u;
			if (i) {
				if (t.length > 0) break;
			} else if (n = `${o.slice(l)}\\${n}`, i = c, c && t.length > 0) break;
		}
		return n = xt(n, !i, "\\", R), i ? `${t}\\${n}` : `${t}${n}` || ".";
	},
	normalize(e) {
		M(e, "path");
		const t = e.length;
		if (t === 0) return ".";
		let n = 0, i, s = !1;
		const o = e.charCodeAt(0);
		if (t === 1) return sn(o) ? "\\" : e;
		if (R(o)) if (s = !0, R(e.charCodeAt(1))) {
			let l = 2, u = l;
			for (; l < t && !R(e.charCodeAt(l));) l++;
			if (l < t && l !== u) {
				const c = e.slice(u, l);
				for (u = l; l < t && R(e.charCodeAt(l));) l++;
				if (l < t && l !== u) {
					for (u = l; l < t && !R(e.charCodeAt(l));) l++;
					if (l === t) return `\\\\${c}\\${e.slice(u)}\\`;
					l !== u && (i = `\\\\${c}\\${e.slice(u, l)}`, n = l);
				}
			}
		} else n = 1;
		else ve(o) && e.charCodeAt(1) === pe && (i = e.slice(0, 2), n = 2, t > 2 && R(e.charCodeAt(2)) && (s = !0, n = 3));
		let a = n < t ? xt(e.slice(n), !s, "\\", R) : "";
		if (a.length === 0 && !s && (a = "."), a.length > 0 && R(e.charCodeAt(t - 1)) && (a += "\\"), !s && i === void 0 && e.includes(":")) {
			if (a.length >= 2 && ve(a.charCodeAt(0)) && a.charCodeAt(1) === pe) return `.\\${a}`;
			let l = e.indexOf(":");
			do
				if (l === t - 1 || R(e.charCodeAt(l + 1))) return `.\\${a}`;
			while ((l = e.indexOf(":", l + 1)) !== -1);
		}
		return i === void 0 ? s ? `\\${a}` : a : s ? `${i}\\${a}` : `${i}${a}`;
	},
	isAbsolute(e) {
		M(e, "path");
		const t = e.length;
		if (t === 0) return !1;
		const n = e.charCodeAt(0);
		return R(n) || t > 2 && ve(n) && e.charCodeAt(1) === pe && R(e.charCodeAt(2));
	},
	join(...e) {
		if (e.length === 0) return ".";
		let t, n;
		for (let o = 0; o < e.length; ++o) {
			const a = e[o];
			M(a, "path"), a.length > 0 && (t === void 0 ? t = n = a : t += `\\${a}`);
		}
		if (t === void 0) return ".";
		let i = !0, s = 0;
		if (typeof n == "string" && R(n.charCodeAt(0))) {
			++s;
			const o = n.length;
			o > 1 && R(n.charCodeAt(1)) && (++s, o > 2 && (R(n.charCodeAt(2)) ? ++s : i = !1));
		}
		if (i) {
			for (; s < t.length && R(t.charCodeAt(s));) s++;
			s >= 2 && (t = `\\${t.slice(s)}`);
		}
		return j.normalize(t);
	},
	relative(e, t) {
		if (M(e, "from"), M(t, "to"), e === t) return "";
		const n = j.resolve(e), i = j.resolve(t);
		if (n === i || (e = n.toLowerCase(), t = i.toLowerCase(), e === t)) return "";
		if (n.length !== e.length || i.length !== t.length) {
			const $ = n.split("\\"), J = i.split("\\");
			$[$.length - 1] === "" && $.pop(), J[J.length - 1] === "" && J.pop();
			const be = $.length, Ue = J.length, le = be < Ue ? be : Ue;
			let X;
			for (X = 0; X < le && $[X].toLowerCase() === J[X].toLowerCase(); X++);
			return X === 0 ? i : X === le ? Ue > le ? J.slice(X).join("\\") : be > le ? "..\\".repeat(be - 1 - X) + ".." : "" : "..\\".repeat(be - X) + J.slice(X).join("\\");
		}
		let s = 0;
		for (; s < e.length && e.charCodeAt(s) === C;) s++;
		let o = e.length;
		for (; o - 1 > s && e.charCodeAt(o - 1) === C;) o--;
		const a = o - s;
		let l = 0;
		for (; l < t.length && t.charCodeAt(l) === C;) l++;
		let u = t.length;
		for (; u - 1 > l && t.charCodeAt(u - 1) === C;) u--;
		const c = u - l, f = a < c ? a : c;
		let d = -1, p = 0;
		for (; p < f; p++) {
			const $ = e.charCodeAt(s + p);
			if ($ !== t.charCodeAt(l + p)) break;
			$ === C && (d = p);
		}
		if (p !== f) {
			if (d === -1) return i;
		} else {
			if (c > f) {
				if (t.charCodeAt(l + p) === C) return i.slice(l + p + 1);
				if (p === 2) return i.slice(l + p);
			}
			a > f && (e.charCodeAt(s + p) === C ? d = p : p === 2 && (d = 3)), d === -1 && (d = 0);
		}
		let k = "";
		for (p = s + d + 1; p <= o; ++p) (p === o || e.charCodeAt(p) === C) && (k += k.length === 0 ? ".." : "\\..");
		return l += d, k.length > 0 ? `${k}${i.slice(l, u)}` : (i.charCodeAt(l) === C && ++l, i.slice(l, u));
	},
	toNamespacedPath(e) {
		if (typeof e != "string" || e.length === 0) return e;
		const t = j.resolve(e);
		if (t.length <= 2) return e;
		if (t.charCodeAt(0) === C) {
			if (t.charCodeAt(1) === C) {
				const n = t.charCodeAt(2);
				if (n !== cr && n !== $e) return `\\\\?\\UNC\\${t.slice(2)}`;
			}
		} else if (ve(t.charCodeAt(0)) && t.charCodeAt(1) === pe && t.charCodeAt(2) === C) return `\\\\?\\${t}`;
		return t;
	},
	dirname(e) {
		M(e, "path");
		const t = e.length;
		if (t === 0) return ".";
		let n = -1, i = 0;
		const s = e.charCodeAt(0);
		if (t === 1) return R(s) ? e : ".";
		if (R(s)) {
			if (n = i = 1, R(e.charCodeAt(1))) {
				let l = 2, u = l;
				for (; l < t && !R(e.charCodeAt(l));) l++;
				if (l < t && l !== u) {
					for (u = l; l < t && R(e.charCodeAt(l));) l++;
					if (l < t && l !== u) {
						for (u = l; l < t && !R(e.charCodeAt(l));) l++;
						if (l === t) return e;
						l !== u && (n = i = l + 1);
					}
				}
			}
		} else ve(s) && e.charCodeAt(1) === pe && (n = t > 2 && R(e.charCodeAt(2)) ? 3 : 2, i = n);
		let o = -1, a = !0;
		for (let l = t - 1; l >= i; --l) if (R(e.charCodeAt(l))) {
			if (!a) {
				o = l;
				break;
			}
		} else a = !1;
		if (o === -1) {
			if (n === -1) return ".";
			o = n;
		}
		return e.slice(0, o);
	},
	basename(e, t) {
		t !== void 0 && M(t, "suffix"), M(e, "path");
		let n = 0, i = -1, s = !0, o;
		if (e.length >= 2 && ve(e.charCodeAt(0)) && e.charCodeAt(1) === pe && (n = 2), t !== void 0 && t.length > 0 && t.length <= e.length) {
			if (t === e) return "";
			let a = t.length - 1, l = -1;
			for (o = e.length - 1; o >= n; --o) {
				const u = e.charCodeAt(o);
				if (R(u)) {
					if (!s) {
						n = o + 1;
						break;
					}
				} else l === -1 && (s = !1, l = o + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (i = o) : (a = -1, i = l));
			}
			return n === i ? i = l : i === -1 && (i = e.length), e.slice(n, i);
		}
		for (o = e.length - 1; o >= n; --o) if (R(e.charCodeAt(o))) {
			if (!s) {
				n = o + 1;
				break;
			}
		} else i === -1 && (s = !1, i = o + 1);
		return i === -1 ? "" : e.slice(n, i);
	},
	extname(e) {
		M(e, "path");
		let t = 0, n = -1, i = 0, s = -1, o = !0, a = 0;
		e.length >= 2 && e.charCodeAt(1) === pe && ve(e.charCodeAt(0)) && (t = i = 2);
		for (let l = e.length - 1; l >= t; --l) {
			const u = e.charCodeAt(l);
			if (R(u)) {
				if (!o) {
					i = l + 1;
					break;
				}
				continue;
			}
			s === -1 && (o = !1, s = l + 1), u === $e ? n === -1 ? n = l : a !== 1 && (a = 1) : n !== -1 && (a = -1);
		}
		return n === -1 || s === -1 || a === 0 || a === 1 && n === s - 1 && n === i + 1 ? "" : e.slice(n, s);
	},
	format: Xi.bind(null, "\\"),
	parse(e) {
		M(e, "path");
		const t = {
			root: "",
			dir: "",
			base: "",
			ext: "",
			name: ""
		};
		if (e.length === 0) return t;
		const n = e.length;
		let i = 0, s = e.charCodeAt(0);
		if (n === 1) return R(s) ? (t.root = t.dir = e, t) : (t.base = t.name = e, t);
		if (R(s)) {
			if (i = 1, R(e.charCodeAt(1))) {
				let d = 2, p = d;
				for (; d < n && !R(e.charCodeAt(d));) d++;
				if (d < n && d !== p) {
					for (p = d; d < n && R(e.charCodeAt(d));) d++;
					if (d < n && d !== p) {
						for (p = d; d < n && !R(e.charCodeAt(d));) d++;
						d === n ? i = d : d !== p && (i = d + 1);
					}
				}
			}
		} else if (ve(s) && e.charCodeAt(1) === pe) {
			if (n <= 2) return t.root = t.dir = e, t;
			if (i = 2, R(e.charCodeAt(2))) {
				if (n === 3) return t.root = t.dir = e, t;
				i = 3;
			}
		}
		i > 0 && (t.root = e.slice(0, i));
		let o = -1, a = i, l = -1, u = !0, c = e.length - 1, f = 0;
		for (; c >= i; --c) {
			if (s = e.charCodeAt(c), R(s)) {
				if (!u) {
					a = c + 1;
					break;
				}
				continue;
			}
			l === -1 && (u = !1, l = c + 1), s === $e ? o === -1 ? o = c : f !== 1 && (f = 1) : o !== -1 && (f = -1);
		}
		return l !== -1 && (o === -1 || f === 0 || f === 1 && o === l - 1 && o === a + 1 ? t.base = t.name = e.slice(a, l) : (t.name = e.slice(a, o), t.base = e.slice(a, l), t.ext = e.slice(o, l))), a > 0 && a !== i ? t.dir = e.slice(0, a - 1) : t.dir = t.root, t;
	},
	sep: "\\",
	delimiter: ";",
	win32: null,
	posix: null
}, fr = (() => {
	if (_e) {
		const e = /\\/g;
		return () => {
			const t = Dt().replace(e, "/");
			return t.slice(t.indexOf("/"));
		};
	}
	return () => Dt();
})(), x = {
	resolve(...e) {
		let t = "", n = !1;
		for (let i = e.length - 1; i >= 0 && !n; i--) {
			const s = e[i];
			M(s, `paths[${i}]`), s.length !== 0 && (t = `${s}/${t}`, n = s.charCodeAt(0) === q);
		}
		if (!n) {
			const i = fr();
			t = `${i}/${t}`, n = i.charCodeAt(0) === q;
		}
		return t = xt(t, !n, "/", sn), n ? `/${t}` : t.length > 0 ? t : ".";
	},
	normalize(e) {
		if (M(e, "path"), e.length === 0) return ".";
		const t = e.charCodeAt(0) === q, n = e.charCodeAt(e.length - 1) === q;
		return e = xt(e, !t, "/", sn), e.length === 0 ? t ? "/" : n ? "./" : "." : (n && (e += "/"), t ? `/${e}` : e);
	},
	isAbsolute(e) {
		return M(e, "path"), e.length > 0 && e.charCodeAt(0) === q;
	},
	join(...e) {
		if (e.length === 0) return ".";
		const t = [];
		for (let n = 0; n < e.length; ++n) {
			const i = e[n];
			M(i, "path"), i.length > 0 && t.push(i);
		}
		return t.length === 0 ? "." : x.normalize(t.join("/"));
	},
	relative(e, t) {
		if (M(e, "from"), M(t, "to"), e === t || (e = x.resolve(e), t = x.resolve(t), e === t)) return "";
		const n = 1, i = e.length, s = i - n, o = 1, a = t.length - o, l = s < a ? s : a;
		let u = -1, c = 0;
		for (; c < l; c++) {
			const d = e.charCodeAt(n + c);
			if (d !== t.charCodeAt(o + c)) break;
			d === q && (u = c);
		}
		if (c === l) if (a > l) {
			if (t.charCodeAt(o + c) === q) return t.slice(o + c + 1);
			if (c === 0) return t.slice(o + c);
		} else s > l && (e.charCodeAt(n + c) === q ? u = c : c === 0 && (u = 0));
		let f = "";
		for (c = n + u + 1; c <= i; ++c) (c === i || e.charCodeAt(c) === q) && (f += f.length === 0 ? ".." : "/..");
		return `${f}${t.slice(o + u)}`;
	},
	toNamespacedPath(e) {
		return e;
	},
	dirname(e) {
		if (M(e, "path"), e.length === 0) return ".";
		const t = e.charCodeAt(0) === q;
		let n = -1, i = !0;
		for (let s = e.length - 1; s >= 1; --s) if (e.charCodeAt(s) === q) {
			if (!i) {
				n = s;
				break;
			}
		} else i = !1;
		return n === -1 ? t ? "/" : "." : t && n === 1 ? "//" : e.slice(0, n);
	},
	basename(e, t) {
		t !== void 0 && M(t, "suffix"), M(e, "path");
		let n = 0, i = -1, s = !0, o;
		if (t !== void 0 && t.length > 0 && t.length <= e.length) {
			if (t === e) return "";
			let a = t.length - 1, l = -1;
			for (o = e.length - 1; o >= 0; --o) {
				const u = e.charCodeAt(o);
				if (u === q) {
					if (!s) {
						n = o + 1;
						break;
					}
				} else l === -1 && (s = !1, l = o + 1), a >= 0 && (u === t.charCodeAt(a) ? --a === -1 && (i = o) : (a = -1, i = l));
			}
			return n === i ? i = l : i === -1 && (i = e.length), e.slice(n, i);
		}
		for (o = e.length - 1; o >= 0; --o) if (e.charCodeAt(o) === q) {
			if (!s) {
				n = o + 1;
				break;
			}
		} else i === -1 && (s = !1, i = o + 1);
		return i === -1 ? "" : e.slice(n, i);
	},
	extname(e) {
		M(e, "path");
		let t = -1, n = 0, i = -1, s = !0, o = 0;
		for (let a = e.length - 1; a >= 0; --a) {
			const l = e[a];
			if (l === "/") {
				if (!s) {
					n = a + 1;
					break;
				}
				continue;
			}
			i === -1 && (s = !1, i = a + 1), l === "." ? t === -1 ? t = a : o !== 1 && (o = 1) : t !== -1 && (o = -1);
		}
		return t === -1 || i === -1 || o === 0 || o === 1 && t === i - 1 && t === n + 1 ? "" : e.slice(t, i);
	},
	format: Xi.bind(null, "/"),
	parse(e) {
		M(e, "path");
		const t = {
			root: "",
			dir: "",
			base: "",
			ext: "",
			name: ""
		};
		if (e.length === 0) return t;
		const n = e.charCodeAt(0) === q;
		let i;
		n ? (t.root = "/", i = 1) : i = 0;
		let s = -1, o = 0, a = -1, l = !0, u = e.length - 1, c = 0;
		for (; u >= i; --u) {
			const f = e.charCodeAt(u);
			if (f === q) {
				if (!l) {
					o = u + 1;
					break;
				}
				continue;
			}
			a === -1 && (l = !1, a = u + 1), f === $e ? s === -1 ? s = u : c !== 1 && (c = 1) : s !== -1 && (c = -1);
		}
		if (a !== -1) {
			const f = o === 0 && n ? 1 : o;
			s === -1 || c === 0 || c === 1 && s === a - 1 && s === o + 1 ? t.base = t.name = e.slice(f, a) : (t.name = e.slice(f, s), t.base = e.slice(f, a), t.ext = e.slice(s, a));
		}
		return o > 0 ? t.dir = e.slice(0, o - 1) : n && (t.dir = "/"), t;
	},
	sep: "/",
	delimiter: ":",
	win32: null,
	posix: null
};
x.win32 = j.win32 = j;
x.posix = j.posix = x;
const _r = _e ? j.normalize : x.normalize;
_e ? j.isAbsolute : x.isAbsolute;
const gr = _e ? j.join : x.join, mr = _e ? j.resolve : x.resolve, br = _e ? j.relative : x.relative, pr = _e ? j.dirname : x.dirname;
_e ? j.basename : x.basename;
_e ? j.extname : x.extname;
_e ? j.parse : x.parse;
const Tt = _e ? j.sep : x.sep, vr = /^\w[\w\d+.-]*$/, Er = /^\//, wr = /^\/\//;
function Lr(e, t) {
	if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
	if (e.scheme && !vr.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
	if (e.path) {
		if (e.authority) {
			if (!Er.test(e.path)) throw new Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
		} else if (wr.test(e.path)) throw new Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
	}
}
function yr(e, t) {
	return !e && !t ? "file" : e;
}
function Ar(e, t) {
	switch (e) {
		case "https":
		case "http":
		case "file":
			t ? t[0] !== he && (t = he + t) : t = he;
			break;
	}
	return t;
}
const D = "", he = "/", Tr = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var se = class St {
	static isUri(t) {
		return t instanceof St ? !0 : !t || typeof t != "object" ? !1 : typeof t.authority == "string" && typeof t.fragment == "string" && typeof t.path == "string" && typeof t.query == "string" && typeof t.scheme == "string" && typeof t.fsPath == "string" && typeof t.with == "function" && typeof t.toString == "function";
	}
	constructor(t, n, i, s, o, a = !1) {
		typeof t == "object" ? (this.scheme = t.scheme || D, this.authority = t.authority || D, this.path = t.path || D, this.query = t.query || D, this.fragment = t.fragment || D) : (this.scheme = yr(t, a), this.authority = n || D, this.path = Ar(this.scheme, i || D), this.query = s || D, this.fragment = o || D, Lr(this, a));
	}
	get fsPath() {
		return Mt(this, !1);
	}
	with(t) {
		if (!t) return this;
		let { scheme: n, authority: i, path: s, query: o, fragment: a } = t;
		return n === void 0 ? n = this.scheme : n === null && (n = D), i === void 0 ? i = this.authority : i === null && (i = D), s === void 0 ? s = this.path : s === null && (s = D), o === void 0 ? o = this.query : o === null && (o = D), a === void 0 ? a = this.fragment : a === null && (a = D), n === this.scheme && i === this.authority && s === this.path && o === this.query && a === this.fragment ? this : new Ke(n, i, s, o, a);
	}
	static parse(t, n = !1) {
		const i = Tr.exec(t);
		return i ? new Ke(i[2] || D, Lt(i[4] || D), Lt(i[5] || D), Lt(i[7] || D), Lt(i[9] || D), n) : new Ke(D, D, D, D, D);
	}
	static file(t) {
		let n = D;
		if (tt && (t = t.replace(/\\/g, he)), t[0] === he && t[1] === he) {
			const i = t.indexOf(he, 2);
			i === -1 ? (n = t.substring(2), t = he) : (n = t.substring(2, i), t = t.substring(i) || he);
		}
		return new Ke("file", n, t, D, D);
	}
	static from(t, n) {
		return new Ke(t.scheme, t.authority, t.path, t.query, t.fragment, n);
	}
	static joinPath(t, ...n) {
		if (!t.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
		let i;
		return tt && t.scheme === "file" ? i = St.file(j.join(Mt(t, !0), ...n)).path : i = x.join(t.path, ...n), t.with({ path: i });
	}
	toString(t = !1) {
		return rn(this, t);
	}
	toJSON() {
		return this;
	}
	static revive(t) {
		if (t) {
			if (t instanceof St) return t;
			{
				const n = new Ke(t);
				return n._formatted = t.external ?? null, n._fsPath = t._sep === Zi ? t.fsPath ?? null : null, n;
			}
		} else return t;
	}
	[Symbol.for("debug.description")]() {
		return `URI(${this.toString()})`;
	}
};
const Zi = tt ? 1 : void 0;
var Ke = class extends se {
	constructor() {
		super(...arguments), this._formatted = null, this._fsPath = null;
	}
	get fsPath() {
		return this._fsPath || (this._fsPath = Mt(this, !1)), this._fsPath;
	}
	toString(e = !1) {
		return e ? rn(this, !0) : (this._formatted || (this._formatted = rn(this, !1)), this._formatted);
	}
	toJSON() {
		const e = { $mid: tn.Uri };
		return this._fsPath && (e.fsPath = this._fsPath, e._sep = Zi), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
	}
};
const Ji = {
	[m.Colon]: "%3A",
	[m.Slash]: "%2F",
	[m.QuestionMark]: "%3F",
	[m.Hash]: "%23",
	[m.OpenSquareBracket]: "%5B",
	[m.CloseSquareBracket]: "%5D",
	[m.AtSign]: "%40",
	[m.ExclamationMark]: "%21",
	[m.DollarSign]: "%24",
	[m.Ampersand]: "%26",
	[m.SingleQuote]: "%27",
	[m.OpenParen]: "%28",
	[m.CloseParen]: "%29",
	[m.Asterisk]: "%2A",
	[m.Plus]: "%2B",
	[m.Comma]: "%2C",
	[m.Semicolon]: "%3B",
	[m.Equals]: "%3D",
	[m.Space]: "%20"
};
function Bn(e, t, n) {
	let i, s = -1;
	for (let o = 0; o < e.length; o++) {
		const a = e.charCodeAt(o);
		if (a >= m.a && a <= m.z || a >= m.A && a <= m.Z || a >= m.Digit0 && a <= m.Digit9 || a === m.Dash || a === m.Period || a === m.Underline || a === m.Tilde || t && a === m.Slash || n && a === m.OpenSquareBracket || n && a === m.CloseSquareBracket || n && a === m.Colon) s !== -1 && (i += encodeURIComponent(e.substring(s, o)), s = -1), i !== void 0 && (i += e.charAt(o));
		else {
			i === void 0 && (i = e.substr(0, o));
			const l = Ji[a];
			l !== void 0 ? (s !== -1 && (i += encodeURIComponent(e.substring(s, o)), s = -1), i += l) : s === -1 && (s = o);
		}
	}
	return s !== -1 && (i += encodeURIComponent(e.substring(s))), i !== void 0 ? i : e;
}
function Sr(e) {
	let t;
	for (let n = 0; n < e.length; n++) {
		const i = e.charCodeAt(n);
		i === m.Hash || i === m.QuestionMark ? (t === void 0 && (t = e.substr(0, n)), t += Ji[i]) : t !== void 0 && (t += e[n]);
	}
	return t !== void 0 ? t : e;
}
function Mt(e, t) {
	let n;
	return e.authority && e.path.length > 1 && e.scheme === "file" ? n = `//${e.authority}${e.path}` : e.path.charCodeAt(0) === m.Slash && (e.path.charCodeAt(1) >= m.A && e.path.charCodeAt(1) <= m.Z || e.path.charCodeAt(1) >= m.a && e.path.charCodeAt(1) <= m.z) && e.path.charCodeAt(2) === m.Colon ? t ? n = e.path.substr(1) : n = e.path[1].toLowerCase() + e.path.substr(2) : n = e.path, tt && (n = n.replace(/\//g, "\\")), n;
}
function rn(e, t) {
	const n = t ? Sr : Bn;
	let i = "", { scheme: s, authority: o, path: a, query: l, fragment: u } = e;
	if (s && (i += s, i += ":"), (o || s === "file") && (i += he, i += he), o) {
		let c = o.indexOf("@");
		if (c !== -1) {
			const f = o.substr(0, c);
			o = o.substr(c + 1), c = f.lastIndexOf(":"), c === -1 ? i += n(f, !1, !1) : (i += n(f.substr(0, c), !1, !1), i += ":", i += n(f.substr(c + 1), !1, !0)), i += "@";
		}
		o = o.toLowerCase(), c = o.lastIndexOf(":"), c === -1 ? i += n(o, !1, !0) : (i += n(o.substr(0, c), !1, !0), i += o.substr(c));
	}
	if (a) {
		if (a.length >= 3 && a.charCodeAt(0) === m.Slash && a.charCodeAt(2) === m.Colon) {
			const c = a.charCodeAt(1);
			c >= m.A && c <= m.Z && (a = `/${String.fromCharCode(c + 32)}:${a.substr(3)}`);
		} else if (a.length >= 2 && a.charCodeAt(1) === m.Colon) {
			const c = a.charCodeAt(0);
			c >= m.A && c <= m.Z && (a = `${String.fromCharCode(c + 32)}:${a.substr(2)}`);
		}
		i += n(a, !0, !1);
	}
	return l && (i += "?", i += n(l, !1, !1)), u && (i += "#", i += t ? u : Bn(u, !1, !1)), i;
}
function Ci(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e.length > 3 ? e.substr(0, 3) + Ci(e.substr(3)) : e;
	}
}
const zn = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function Lt(e) {
	return e.match(zn) ? e.replace(zn, (t) => Ci(t)) : e;
}
function Vn(e, t) {
	const n = Ft(e, t);
	return n === -1 ? void 0 : e[n];
}
function Ft(e, t, n = 0, i = e.length) {
	let s = n, o = i;
	for (; s < o;) {
		const a = Math.floor((s + o) / 2);
		t(e[a]) ? s = a + 1 : o = a;
	}
	return s - 1;
}
function Gn(e, t, n = 0, i = e.length) {
	let s = n, o = i;
	for (; s < o;) {
		const a = Math.floor((s + o) / 2);
		t(e[a]) ? o = a : s = a + 1;
	}
	return s;
}
(class es {
	static {
		this.assertInvariants = !1;
	}
	constructor(t) {
		this._array = t, this._findLastMonotonousLastIdx = 0;
	}
	findLastMonotonous(t) {
		if (es.assertInvariants) {
			if (this._prevFindLastPredicate) {
				for (const i of this._array) if (this._prevFindLastPredicate(i) && !t(i)) throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
			}
			this._prevFindLastPredicate = t;
		}
		const n = Ft(this._array, t, this._findLastMonotonousLastIdx);
		return this._findLastMonotonousLastIdx = n + 1, n === -1 ? void 0 : this._array[n];
	}
});
var Rr = class {
	constructor() {
		this.listeners = [], this.unexpectedErrorHandler = function(e) {
			setTimeout(() => {
				throw e.stack ? an.isErrorNoTelemetry(e) ? new an(e.message + `

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
const ts = new Rr();
function _t(e) {
	ts.onUnexpectedError(e);
}
function ge(e) {
	Nr(e) || ts.onUnexpectedError(e);
}
function on(e) {
	if (e instanceof Error) {
		const { name: t, message: n, cause: i } = e;
		return {
			$isError: !0,
			name: t,
			message: n,
			stack: e.stacktrace || e.stack,
			noTelemetry: an.isErrorNoTelemetry(e),
			cause: i ? on(i) : void 0,
			code: e.code
		};
	}
	return e;
}
const kr = "Canceled";
function Nr(e) {
	return e instanceof ns ? !0 : e instanceof Error && e.name === "Canceled" && e.message === "Canceled";
}
var ns = class extends Error {
	constructor() {
		super(kr), this.name = this.message;
	}
};
(class Rt extends Error {
	static {
		this._name = "PendingMigrationError";
	}
	static is(t) {
		return t instanceof Rt || t instanceof Error && t.name === Rt._name;
	}
	constructor(t) {
		super(t), this.name = Rt._name;
	}
});
var an = class ln extends Error {
	constructor(t) {
		super(t), this.name = "CodeExpectedError";
	}
	static fromError(t) {
		if (t instanceof ln) return t;
		const n = new ln();
		return n.message = t.message, n.stack = t.stack, n;
	}
	static isErrorNoTelemetry(t) {
		return t.name === "CodeExpectedError";
	}
}, F = class is extends Error {
	constructor(t) {
		super(t || "An unexpected bug occurred."), Object.setPrototypeOf(this, is.prototype);
	}
};
function ss(e, t, n = (i, s) => i === s) {
	if (e === t) return !0;
	if (!e || !t || e.length !== t.length) return !1;
	for (let i = 0, s = e.length; i < s; i++) if (!n(e[i], t[i])) return !1;
	return !0;
}
function $n(e, t) {
	let n = 0, i = e - 1;
	for (; n <= i;) {
		const s = (n + i) / 2 | 0, o = t(s);
		if (o < 0) n = s + 1;
		else if (o > 0) i = s - 1;
		else return s;
	}
	return -(n + 1);
}
function rs(e, t, n) {
	const i = e.slice(0, t), s = e.slice(t);
	return i.concat(n, s);
}
var un;
(function(e) {
	function t(o) {
		return o < 0;
	}
	e.isLessThan = t;
	function n(o) {
		return o <= 0;
	}
	e.isLessThanOrEqual = n;
	function i(o) {
		return o > 0;
	}
	e.isGreaterThan = i;
	function s(o) {
		return o === 0;
	}
	e.isNeitherLessOrGreaterThan = s, e.greaterThan = 1, e.lessThan = -1, e.neitherLessOrGreaterThan = 0;
})(un || (un = {}));
function os(e, t) {
	return (n, i) => t(e(n), e(i));
}
const as = (e, t) => e - t;
(class kt {
	static {
		this.empty = new kt((t) => {});
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
		return new kt((n) => this.iterate((i) => t(i) ? n(i) : !0));
	}
	map(t) {
		return new kt((n) => this.iterate((i) => n(t(i))));
	}
	some(t) {
		let n = !1;
		return this.iterate((i) => (n = t(i), !n)), n;
	}
	findFirst(t) {
		let n;
		return this.iterate((i) => t(i) ? (n = i, !1) : !0), n;
	}
	findLast(t) {
		let n;
		return this.iterate((i) => (t(i) && (n = i), !0)), n;
	}
	findLastMaxBy(t) {
		let n, i = !0;
		return this.iterate((s) => ((i || un.isGreaterThan(t(s, n))) && (i = !1, n = s), !0)), n;
	}
});
var qn;
function Or(e, t) {
	const n = Object.create(null);
	for (const i of e) {
		const s = t(i);
		let o = n[s];
		o || (o = n[s] = []), o.push(i);
	}
	return n;
}
(class {
	static {
		qn = Symbol.toStringTag;
	}
	constructor(e, t) {
		this.toKey = t, this._map = /* @__PURE__ */ new Map(), this[qn] = "SetWithKey";
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
var Wn, Ir = class {
	constructor(e, t) {
		this.uri = e, this.value = t;
	}
};
function Ur(e) {
	return Array.isArray(e);
}
var cn = class ot {
	static {
		this.defaultToKey = (t) => t.toString();
	}
	constructor(t, n) {
		if (this[Wn] = "ResourceMap", t instanceof ot) this.map = new Map(t.map), this.toKey = n ?? ot.defaultToKey;
		else if (Ur(t)) {
			this.map = /* @__PURE__ */ new Map(), this.toKey = n ?? ot.defaultToKey;
			for (const [i, s] of t) this.set(i, s);
		} else this.map = /* @__PURE__ */ new Map(), this.toKey = t ?? ot.defaultToKey;
	}
	set(t, n) {
		return this.map.set(this.toKey(t), new Ir(t, n)), this;
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
		for (const [i, s] of this.map) t(s.value, s.uri, this);
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
	*[(Wn = Symbol.toStringTag, Symbol.iterator)]() {
		for (const [, t] of this.map) yield [t.uri, t.value];
	}
};
var oe;
(function(e) {
	e[e.None = 0] = "None", e[e.AsOld = 1] = "AsOld", e[e.AsNew = 2] = "AsNew";
})(oe || (oe = {}));
var Dr = class {
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
function ls(e) {
	if (!e()) {
		debugger;
		e(), ge(new F("Assertion Failed"));
	}
}
function xr(e) {
	return typeof e == "string";
}
function Mr(e) {
	return !!e && typeof e[Symbol.iterator] == "function";
}
function Fr(e) {
	return typeof e > "u";
}
function st(e) {
	return !Pr(e);
}
function Pr(e) {
	return Fr(e) || e === null;
}
var hn;
(function(e) {
	function t(y) {
		return !!y && typeof y == "object" && typeof y[Symbol.iterator] == "function";
	}
	e.is = t;
	const n = Object.freeze([]);
	function i() {
		return n;
	}
	e.empty = i;
	function* s(y) {
		yield y;
	}
	e.single = s;
	function o(y) {
		return t(y) ? y : s(y);
	}
	e.wrap = o;
	function a(y) {
		return y ?? n;
	}
	e.from = a;
	function* l(y) {
		for (let S = y.length - 1; S >= 0; S--) yield y[S];
	}
	e.reverse = l;
	function u(y) {
		return !y || y[Symbol.iterator]().next().done === !0;
	}
	e.isEmpty = u;
	function c(y) {
		return y[Symbol.iterator]().next().value;
	}
	e.first = c;
	function f(y, S) {
		let N = 0;
		for (const K of y) if (S(K, N++)) return !0;
		return !1;
	}
	e.some = f;
	function d(y, S) {
		let N = 0;
		for (const K of y) if (!S(K, N++)) return !1;
		return !0;
	}
	e.every = d;
	function p(y, S) {
		for (const N of y) if (S(N)) return N;
	}
	e.find = p;
	function* k(y, S) {
		for (const N of y) S(N) && (yield N);
	}
	e.filter = k;
	function* $(y, S) {
		let N = 0;
		for (const K of y) yield S(K, N++);
	}
	e.map = $;
	function* J(y, S) {
		let N = 0;
		for (const K of y) yield* S(K, N++);
	}
	e.flatMap = J;
	function* be(...y) {
		for (const S of y) Mr(S) ? yield* S : yield S;
	}
	e.concat = be;
	function Ue(y, S, N) {
		let K = N;
		for (const He of y) K = S(K, He);
		return K;
	}
	e.reduce = Ue;
	function le(y) {
		let S = 0;
		for (const N of y) S++;
		return S;
	}
	e.length = le;
	function* X(y, S, N = y.length) {
		for (S < -y.length && (S = 0), S < 0 && (S += y.length), N < 0 ? N += y.length : N > y.length && (N = y.length); S < N; S++) yield y[S];
	}
	e.slice = X;
	function Ht(y, S = Number.POSITIVE_INFINITY) {
		const N = [];
		if (S === 0) return [N, y];
		const K = y[Symbol.iterator]();
		for (let He = 0; He < S; He++) {
			const v = K.next();
			if (v.done) return [N, e.empty()];
			N.push(v.value);
		}
		return [N, { [Symbol.iterator]() {
			return K;
		} }];
	}
	e.consume = Ht;
	async function Kt(y) {
		const S = [];
		for await (const N of y) S.push(N);
		return S;
	}
	e.asyncToArray = Kt;
	async function Yt(y) {
		let S = [];
		for await (const N of y) S = S.concat(N);
		return S;
	}
	e.asyncToArrayFlat = Yt;
})(hn || (hn = {}));
let bt = null;
(class us {
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
			idx: us.idx++
		}, this.livingDisposables.set(t, n)), n;
	}
	trackDisposable(t) {
		const n = this.getDisposableData(t);
		n.source || (n.source = (/* @__PURE__ */ new Error()).stack);
	}
	setParent(t, n) {
		const i = this.getDisposableData(t);
		i.parent = n;
	}
	markAsDisposed(t) {
		this.livingDisposables.delete(t);
	}
	markAsSingleton(t) {
		this.getDisposableData(t).isSingleton = !0;
	}
	getRootParent(t, n) {
		const i = n.get(t);
		if (i) return i;
		const s = t.parent ? this.getRootParent(this.getDisposableData(t.parent), n) : t;
		return n.set(t, s), s;
	}
	getTrackedDisposables() {
		const t = /* @__PURE__ */ new Map();
		return [...this.livingDisposables.entries()].filter(([, n]) => n.source !== null && !this.getRootParent(n, t).isSingleton).flatMap(([n]) => n);
	}
	computeLeakingDisposables(t = 10, n) {
		let i;
		if (n) i = n;
		else {
			const u = /* @__PURE__ */ new Map(), c = [...this.livingDisposables.values()].filter((d) => d.source !== null && !this.getRootParent(d, u).isSingleton);
			if (c.length === 0) return;
			const f = new Set(c.map((d) => d.value));
			if (i = c.filter((d) => !(d.parent && f.has(d.parent))), i.length === 0) throw new Error("There are cyclic diposable chains!");
		}
		if (!i) return;
		function s(u) {
			function c(d, p) {
				for (; d.length > 0 && p.some((k) => typeof k == "string" ? k === d[0] : d[0].match(k));) d.shift();
			}
			const f = u.source.split(`
`).map((d) => d.trim().replace("at ", "")).filter((d) => d !== "");
			return c(f, [
				"Error",
				/^trackDisposable \(.*\)$/,
				/^DisposableTracker.trackDisposable \(.*\)$/
			]), f.reverse();
		}
		const o = new Dr();
		for (const u of i) {
			const c = s(u);
			for (let f = 0; f <= c.length; f++) o.add(c.slice(0, f).join(`
`), u);
		}
		i.sort(os((u) => u.idx, as));
		let a = "", l = 0;
		for (const u of i.slice(0, t)) {
			l++;
			const c = s(u), f = [];
			for (let d = 0; d < c.length; d++) {
				let p = c[d];
				p = `(shared with ${o.get(c.slice(0, d + 1).join(`
`)).size}/${i.length} leaks) at ${p}`;
				const k = Or([...o.get(c.slice(0, d).join(`
`))].map(($) => s($)[d]), ($) => $);
				delete k[c[d]];
				for (const [$, J] of Object.entries(k)) J && f.unshift(`    - stacktraces of ${J.length} other leaks continue with ${$}`);
				f.unshift(p);
			}
			a += `


==================== Leaking disposable ${l}/${i.length}: ${u.value.constructor.name} ====================
${f.join(`
`)}
============================================================

`;
		}
		return i.length > t && (a += `


... and ${i.length - t} more leaking disposables

`), {
			leaks: i,
			details: a
		};
	}
});
function Wt(e) {
	return bt?.trackDisposable(e), e;
}
function jt(e) {
	bt?.markAsDisposed(e);
}
function dn(e, t) {
	bt?.setParent(e, t);
}
function Br(e, t) {}
function cs(e) {
	if (hn.is(e)) {
		const t = [];
		for (const n of e) if (n) try {
			n.dispose();
		} catch (i) {
			t.push(i);
		}
		if (t.length === 1) throw t[0];
		if (t.length > 1) throw new AggregateError(t, "Encountered errors while disposing of store");
		return Array.isArray(e) ? [] : e;
	} else if (e) return e.dispose(), e;
}
function zr(...e) {
	const t = We(() => cs(e));
	return Br(e, t), t;
}
var Vr = class {
	constructor(e) {
		this._isDisposed = !1, this._fn = e, Wt(this);
	}
	dispose() {
		if (!this._isDisposed) {
			if (!this._fn) throw new Error("Unbound disposable context: Need to use an arrow function to preserve the value of this");
			this._isDisposed = !0, jt(this), this._fn();
		}
	}
};
function We(e) {
	return new Vr(e);
}
var je = class hs {
	static {
		this.DISABLE_DISPOSED_WARNING = !1;
	}
	constructor() {
		this._toDispose = /* @__PURE__ */ new Set(), this._isDisposed = !1, Wt(this);
	}
	dispose() {
		this._isDisposed || (jt(this), this._isDisposed = !0, this.clear());
	}
	get isDisposed() {
		return this._isDisposed;
	}
	clear() {
		if (this._toDispose.size !== 0) try {
			cs(this._toDispose);
		} finally {
			this._toDispose.clear();
		}
	}
	add(t) {
		if (!t || t === Ae.None) return t;
		if (t === this) throw new Error("Cannot register a disposable on itself!");
		return dn(t, this), this._isDisposed ? hs.DISABLE_DISPOSED_WARNING || console.warn((/* @__PURE__ */ new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!")).stack) : this._toDispose.add(t), t;
	}
	delete(t) {
		if (t) {
			if (t === this) throw new Error("Cannot dispose a disposable on itself!");
			this._toDispose.delete(t), t.dispose();
		}
	}
	deleteAndLeak(t) {
		t && this._toDispose.delete(t) && dn(t, null);
	}
	assertNotDisposed() {
		this._isDisposed && ge(new F("Object disposed"));
	}
}, Ae = class {
	static {
		this.None = Object.freeze({ dispose() {} });
	}
	constructor() {
		this._store = new je(), Wt(this), dn(this._store, this);
	}
	dispose() {
		jt(this), this._store.dispose();
	}
	_register(e) {
		if (e === this) throw new Error("Cannot register a disposable on itself!");
		return this._store.add(e);
	}
}, Gr = class {
	constructor() {
		this._scopeNameToLanguageRegistration = Object.create(null);
	}
	reset() {
		this._scopeNameToLanguageRegistration = Object.create(null);
	}
	register(e) {
		this._scopeNameToLanguageRegistration[e.scopeName] = e;
	}
	getGrammarDefinition(e) {
		return this._scopeNameToLanguageRegistration[e] || null;
	}
};
const Zt = "No TM Grammar registered for this language.";
var $r = class extends Ae {
	constructor(e, t, n, i) {
		super(), this._host = e, this._initialState = n.INITIAL, this._scopeRegistry = new Gr(), this._injections = {}, this._injectedEmbeddedLanguages = {}, this._languageToScope = /* @__PURE__ */ new Map(), this._grammarRegistry = this._register(new n.Registry({
			onigLib: i,
			loadGrammar: async (s) => {
				const o = this._scopeRegistry.getGrammarDefinition(s);
				if (!o) return this._host.logTrace(`No grammar found for scope ${s}`), null;
				const a = o.location;
				try {
					const l = await this._host.readFile(a);
					return n.parseRawGrammar(l, a.path);
				} catch (l) {
					return this._host.logError(`Unable to load and parse grammar for scope ${s} from ${a}`, l), null;
				}
			},
			getInjections: (s) => {
				const o = s.split(".");
				let a = [];
				for (let l = 1; l <= o.length; l++) {
					const u = o.slice(0, l).join(".");
					a = [...a, ...this._injections[u] || []];
				}
				return a;
			}
		}));
		for (const s of t) {
			if (this._scopeRegistry.register(s), s.injectTo) {
				for (const o of s.injectTo) {
					let a = this._injections[o];
					a || (this._injections[o] = a = []), a.push(s.scopeName);
				}
				if (s.embeddedLanguages) for (const o of s.injectTo) {
					let a = this._injectedEmbeddedLanguages[o];
					a || (this._injectedEmbeddedLanguages[o] = a = []), a.push(s.embeddedLanguages);
				}
			}
			s.language && this._languageToScope.set(s.language, s.scopeName);
		}
	}
	has(e) {
		return this._languageToScope.has(e);
	}
	setTheme(e, t) {
		this._grammarRegistry.setTheme(e, t);
	}
	getColorMap() {
		return this._grammarRegistry.getColorMap();
	}
	async createGrammar(e, t) {
		const n = this._languageToScope.get(e);
		if (typeof n != "string") throw new Error(Zt);
		const i = this._scopeRegistry.getGrammarDefinition(n);
		if (!i) throw new Error(Zt);
		const s = i.embeddedLanguages;
		if (this._injectedEmbeddedLanguages[n]) {
			const l = this._injectedEmbeddedLanguages[n];
			for (const u of l) for (const c of Object.keys(u)) s[c] = u[c];
		}
		const o = Object.keys(s).length > 0;
		let a;
		try {
			a = await this._grammarRegistry.loadGrammarWithConfiguration(n, t, {
				embeddedLanguages: s,
				tokenTypes: i.tokenTypes,
				balancedBracketSelectors: i.balancedBracketSelectors,
				unbalancedBracketSelectors: i.unbalancedBracketSelectors
			});
		} catch (l) {
			throw l.message && l.message.startsWith("No grammar provided for") ? new Error(Zt) : l;
		}
		return {
			languageId: e,
			grammar: a,
			initialState: this._initialState,
			containsEmbeddedLanguages: o,
			sourceExtensionId: i.sourceExtensionId
		};
	}
};
(class Nt {
	static {
		this.Undefined = new Nt(void 0);
	}
	constructor(t) {
		this.element = t, this.next = Nt.Undefined, this.prev = Nt.Undefined;
	}
});
const qr = globalThis.performance.now.bind(globalThis.performance);
var ds = class fs {
	static create(t) {
		return new fs(t);
	}
	constructor(t) {
		this._now = t === !1 ? Date.now : qr, this._startTime = this._now(), this._stopTime = -1;
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
}, Pt;
(function(e) {
	e.None = () => Ae.None;
	function t(v, g, E) {
		return p(v, () => {}, 0, void 0, g ?? !0, void 0, E);
	}
	e.defer = t;
	function n(v) {
		return (g, E = null, b) => {
			let A = !1, T;
			return T = v((U) => {
				if (!A) return T ? T.dispose() : A = !0, g.call(E, U);
			}, null, b), A && T.dispose(), T;
		};
	}
	e.once = n;
	function i(v, g) {
		return e.once(e.filter(v, g));
	}
	e.onceIf = i;
	function s(v, g, E) {
		return f((b, A = null, T) => v((U) => b.call(A, g(U)), null, T), E);
	}
	e.map = s;
	function o(v, g, E) {
		return f((b, A = null, T) => v((U) => {
			g(U), b.call(A, U);
		}, null, T), E);
	}
	e.forEach = o;
	function a(v, g, E) {
		return f((b, A = null, T) => v((U) => g(U) && b.call(A, U), null, T), E);
	}
	e.filter = a;
	function l(v) {
		return v;
	}
	e.signal = l;
	function u(...v) {
		return (g, E = null, b) => d(zr(...v.map((A) => A((T) => g.call(E, T)))), b);
	}
	e.any = u;
	function c(v, g, E, b) {
		let A = E;
		return s(v, (T) => (A = g(A, T), A), b);
	}
	e.reduce = c;
	function f(v, g) {
		let E;
		const b = new de({
			onWillAddFirstListener() {
				E = v(b.fire, b);
			},
			onDidRemoveLastListener() {
				E?.dispose();
			}
		});
		return g?.add(b), b.event;
	}
	function d(v, g) {
		return g instanceof Array ? g.push(v) : g && g.add(v), v;
	}
	function p(v, g, E = 100, b = !1, A = !1, T, U) {
		let H, Y, De, vt = 0, it;
		const Et = new de({
			leakWarningThreshold: T,
			onWillAddFirstListener() {
				H = v((Vs) => {
					vt++, Y = g(Y, Vs), b && !De && (Et.fire(Y), Y = void 0), it = () => {
						const Gs = Y;
						Y = void 0, De = void 0, (!b || vt > 1) && Et.fire(Gs), vt = 0;
					}, typeof E == "number" ? (De && clearTimeout(De), De = setTimeout(it, E)) : De === void 0 && (De = null, queueMicrotask(it));
				});
			},
			onWillRemoveListener() {
				A && vt > 0 && it?.();
			},
			onDidRemoveLastListener() {
				it = void 0, H.dispose();
			}
		});
		return U?.add(Et), Et.event;
	}
	e.debounce = p;
	function k(v, g = 0, E, b) {
		return e.debounce(v, (A, T) => A ? (A.push(T), A) : [T], g, void 0, E ?? !0, void 0, b);
	}
	e.accumulate = k;
	function $(v, g = (b, A) => b === A, E) {
		let b = !0, A;
		return a(v, (T) => {
			const U = b || !g(T, A);
			return b = !1, A = T, U;
		}, E);
	}
	e.latch = $;
	function J(v, g, E) {
		return [e.filter(v, g, E), e.filter(v, (b) => !g(b), E)];
	}
	e.split = J;
	function be(v, g = !1, E = [], b) {
		let A = E.slice(), T = v((Y) => {
			A ? A.push(Y) : H.fire(Y);
		});
		b && b.add(T);
		const U = () => {
			A?.forEach((Y) => H.fire(Y)), A = null;
		}, H = new de({
			onWillAddFirstListener() {
				T || (T = v((Y) => H.fire(Y)), b && b.add(T));
			},
			onDidAddFirstListener() {
				A && (g ? setTimeout(U) : U());
			},
			onDidRemoveLastListener() {
				T && T.dispose(), T = null;
			}
		});
		return b && b.add(H), H.event;
	}
	e.buffer = be;
	function Ue(v, g) {
		return (b, A, T) => {
			const U = g(new X());
			return v(function(H) {
				const Y = U.evaluate(H);
				Y !== le && b.call(A, Y);
			}, void 0, T);
		};
	}
	e.chain = Ue;
	const le = Symbol("HaltChainable");
	class X {
		constructor() {
			this.steps = [];
		}
		map(g) {
			return this.steps.push(g), this;
		}
		forEach(g) {
			return this.steps.push((E) => (g(E), E)), this;
		}
		filter(g) {
			return this.steps.push((E) => g(E) ? E : le), this;
		}
		reduce(g, E) {
			let b = E;
			return this.steps.push((A) => (b = g(b, A), b)), this;
		}
		latch(g = (E, b) => E === b) {
			let E = !0, b;
			return this.steps.push((A) => {
				const T = E || !g(A, b);
				return E = !1, b = A, T ? A : le;
			}), this;
		}
		evaluate(g) {
			for (const E of this.steps) if (g = E(g), g === le) break;
			return g;
		}
	}
	function Ht(v, g, E = (b) => b) {
		const b = (...H) => U.fire(E(...H)), A = () => v.on(g, b), T = () => v.removeListener(g, b), U = new de({
			onWillAddFirstListener: A,
			onDidRemoveLastListener: T
		});
		return U.event;
	}
	e.fromNodeEventEmitter = Ht;
	function Kt(v, g, E = (b) => b) {
		const b = (...H) => U.fire(E(...H)), A = () => v.addEventListener(g, b), T = () => v.removeEventListener(g, b), U = new de({
			onWillAddFirstListener: A,
			onDidRemoveLastListener: T
		});
		return U.event;
	}
	e.fromDOMEventEmitter = Kt;
	function Yt(v, g) {
		let E, b;
		const A = new Promise((T) => {
			b = n(v)(T), _n(b, g), E = () => {
				Yn(b, g);
			};
		});
		return A.cancel = E, g && A.finally(() => Yn(b, g)), A;
	}
	e.toPromise = Yt;
	function y(v, g) {
		return v((E) => g.fire(E));
	}
	e.forward = y;
	function S(v, g, E) {
		return g(E), v((b) => g(b));
	}
	e.runAndSubscribe = S;
	class N {
		constructor(g, E) {
			this._observable = g, this._counter = 0, this._hasChanged = !1, this.emitter = new de({
				onWillAddFirstListener: () => {
					g.addObserver(this), this._observable.reportChanges();
				},
				onDidRemoveLastListener: () => {
					g.removeObserver(this);
				}
			}), E && E.add(this.emitter);
		}
		beginUpdate(g) {
			this._counter++;
		}
		handlePossibleChange(g) {}
		handleChange(g, E) {
			this._hasChanged = !0;
		}
		endUpdate(g) {
			this._counter--, this._counter === 0 && (this._observable.reportChanges(), this._hasChanged && (this._hasChanged = !1, this.emitter.fire(this._observable.get())));
		}
	}
	function K(v, g) {
		return new N(v, g).emitter.event;
	}
	e.fromObservable = K;
	function He(v) {
		return (g, E, b) => {
			let A = 0, T = !1;
			const U = {
				beginUpdate() {
					A++;
				},
				endUpdate() {
					A--, A === 0 && (v.reportChanges(), T && (T = !1, g.call(E)));
				},
				handlePossibleChange() {},
				handleChange() {
					T = !0;
				}
			};
			v.addObserver(U), v.reportChanges();
			const H = { dispose() {
				v.removeObserver(U);
			} };
			return _n(H, b), H;
		};
	}
	e.fromObservableLight = He;
})(Pt || (Pt = {}));
var Wr = class fn {
	static {
		this.all = /* @__PURE__ */ new Set();
	}
	static {
		this._idPool = 0;
	}
	constructor(t) {
		this.listenerCount = 0, this.invocationCount = 0, this.elapsedOverall = 0, this.durations = [], this.name = `${t}_${fn._idPool++}`, fn.all.add(this);
	}
	start(t) {
		this._stopWatch = new ds(), this.listenerCount = t;
	}
	stop() {
		if (this._stopWatch) {
			const t = this._stopWatch.elapsed();
			this.durations.push(t), this.elapsedOverall += t, this.invocationCount += 1, this._stopWatch = void 0;
		}
	}
};
let Kn = -1;
var jr = class _s {
	static {
		this._idPool = 1;
	}
	constructor(t, n, i = (_s._idPool++).toString(16).padStart(3, "0")) {
		this._errorHandler = t, this.threshold = n, this.name = i, this._warnCountdown = 0;
	}
	dispose() {
		this._stacks?.clear();
	}
	check(t, n) {
		const i = this.threshold;
		if (i <= 0 || n < i) return;
		this._stacks || (this._stacks = /* @__PURE__ */ new Map());
		const s = this._stacks.get(t.value) || 0;
		if (this._stacks.set(t.value, s + 1), this._warnCountdown -= 1, this._warnCountdown <= 0) {
			this._warnCountdown = i * .5;
			const [o, a] = this.getMostFrequentStack(), l = `[${this.name}] potential listener LEAK detected, having ${n} listeners already. MOST frequent listener (${a}):`;
			console.warn(l), console.warn(o);
			const u = new Kr(l, o);
			this._errorHandler(u);
		}
		return () => {
			const o = this._stacks.get(t.value) || 0;
			this._stacks.set(t.value, o - 1);
		};
	}
	getMostFrequentStack() {
		if (!this._stacks) return;
		let t, n = 0;
		for (const [i, s] of this._stacks) (!t || n < s) && (t = [i, s], n = s);
		return t;
	}
}, Hr = class gs {
	static create() {
		return new gs((/* @__PURE__ */ new Error()).stack ?? "");
	}
	constructor(t) {
		this.value = t;
	}
	print() {
		console.warn(this.value.split(`
`).slice(2).join(`
`));
	}
}, Kr = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ListenerLeakError", this.stack = t;
	}
}, Yr = class extends Error {
	constructor(e, t) {
		super(e), this.name = "ListenerRefusalError", this.stack = t;
	}
};
let Qr = 0;
var Jt = class {
	constructor(e) {
		this.value = e, this.id = Qr++;
	}
};
const Xr = 2;
var de = class {
	constructor(e) {
		this._size = 0, this._options = e, this._leakageMon = Kn > 0 || this._options?.leakWarningThreshold ? new jr(e?.onListenerError ?? ge, this._options?.leakWarningThreshold ?? Kn) : void 0, this._perfMon = this._options?._profName ? new Wr(this._options._profName) : void 0, this._deliveryQueue = this._options?.deliveryQueue;
	}
	dispose() {
		this._disposed || (this._disposed = !0, this._deliveryQueue?.current === this && this._deliveryQueue.reset(), this._listeners && (this._listeners = void 0, this._size = 0), this._options?.onDidRemoveLastListener?.(), this._leakageMon?.dispose());
	}
	get event() {
		return this._event ??= (e, t, n) => {
			if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
				const a = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
				console.warn(a);
				const l = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1], u = new Yr(`${a}. HINT: Stack shows most frequent listener (${l[1]}-times)`, l[0]);
				return (this._options?.onListenerError || ge)(u), Ae.None;
			}
			if (this._disposed) return Ae.None;
			t && (e = e.bind(t));
			const i = new Jt(e);
			let s;
			this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * .2) && (i.stack = Hr.create(), s = this._leakageMon.check(i.stack, this._size + 1)), this._listeners ? this._listeners instanceof Jt ? (this._deliveryQueue ??= new Zr(), this._listeners = [this._listeners, i]) : this._listeners.push(i) : (this._options?.onWillAddFirstListener?.(this), this._listeners = i, this._options?.onDidAddFirstListener?.(this)), this._options?.onDidAddListener?.(this), this._size++;
			const o = We(() => {
				s?.(), this._removeListener(i);
			});
			return _n(o, n), o;
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
		const i = this._deliveryQueue.current === this;
		if (this._size * Xr <= t.length) {
			let s = 0;
			for (let o = 0; o < t.length; o++) t[o] ? t[s++] = t[o] : i && s < this._deliveryQueue.end && (this._deliveryQueue.end--, s < this._deliveryQueue.i && this._deliveryQueue.i--);
			t.length = s;
		}
	}
	_deliver(e, t) {
		if (!e) return;
		const n = this._options?.onListenerError || ge;
		if (!n) {
			e.value(t);
			return;
		}
		try {
			e.value(t);
		} catch (i) {
			n(i);
		}
	}
	_deliverQueue(e) {
		const t = e.current._listeners;
		for (; e.i < e.end;) this._deliver(t[e.i++], e.value);
		e.reset();
	}
	fire(e) {
		if (this._deliveryQueue?.current && (this._deliverQueue(this._deliveryQueue), this._perfMon?.stop()), this._perfMon?.start(this._size), this._listeners) if (this._listeners instanceof Jt) this._deliver(this._listeners, e);
		else {
			const t = this._deliveryQueue;
			t.enqueue(this, e, this._listeners.length), this._deliverQueue(t);
		}
		this._perfMon?.stop();
	}
	hasListeners() {
		return this._size > 0;
	}
}, Zr = class {
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
function _n(e, t) {
	t instanceof je ? t.add(e) : Array.isArray(t) && t.push(e);
}
function Yn(e, t) {
	if (t instanceof je) t.delete(e);
	else if (Array.isArray(t)) {
		const n = t.indexOf(e);
		n !== -1 && t.splice(n, 1);
	}
	e.dispose();
}
const ms = Object.freeze(function(e, t) {
	const n = setTimeout(e.bind(t), 0);
	return { dispose() {
		clearTimeout(n);
	} };
});
var Qn;
(function(e) {
	function t(n) {
		return n === e.None || n === e.Cancelled || n instanceof Jr ? !0 : !n || typeof n != "object" ? !1 : typeof n.isCancellationRequested == "boolean" && typeof n.onCancellationRequested == "function";
	}
	e.isCancellationToken = t, e.None = Object.freeze({
		isCancellationRequested: !1,
		onCancellationRequested: Pt.None
	}), e.Cancelled = Object.freeze({
		isCancellationRequested: !0,
		onCancellationRequested: ms
	});
})(Qn || (Qn = {}));
var Jr = class {
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
		return this._isCancelled ? ms : (this._emitter || (this._emitter = new de()), this._emitter.event);
	}
	dispose() {
		this._emitter && (this._emitter.dispose(), this._emitter = null);
	}
};
function Cr(e) {
	return e;
}
var e1 = class {
	constructor(e, t) {
		this.lastCache = void 0, this.lastArgKey = void 0, typeof e == "function" ? (this._fn = e, this._computeKey = Cr) : (this._fn = t, this._computeKey = e.getCacheKey);
	}
	get(e) {
		const t = this._computeKey(e);
		return this.lastArgKey !== t && (this.lastArgKey = t, this.lastCache = this._fn(e)), this.lastCache;
	}
}, ke;
(function(e) {
	e[e.Uninitialized = 0] = "Uninitialized", e[e.Running = 1] = "Running", e[e.Completed = 2] = "Completed";
})(ke || (ke = {}));
var gn = class {
	constructor(e) {
		this.executor = e, this._state = ke.Uninitialized;
	}
	get hasValue() {
		return this._state === ke.Completed;
	}
	get value() {
		if (this._state === ke.Uninitialized) {
			this._state = ke.Running;
			try {
				this._value = this.executor();
			} catch (e) {
				this._error = e;
			} finally {
				this._state = ke.Completed;
			}
		} else if (this._state === ke.Running) throw new Error("Cannot read the value of a lazy that is being initialized");
		if (this._error) throw this._error;
		return this._value;
	}
	get rawValue() {
		return this._value;
	}
}, Bt;
(function(e) {
	e[e.MAX_SAFE_SMALL_INTEGER = 1073741824] = "MAX_SAFE_SMALL_INTEGER", e[e.MIN_SAFE_SMALL_INTEGER = -1073741824] = "MIN_SAFE_SMALL_INTEGER", e[e.MAX_UINT_8 = 255] = "MAX_UINT_8", e[e.MAX_UINT_16 = 65535] = "MAX_UINT_16", e[e.MAX_UINT_32 = 4294967295] = "MAX_UINT_32", e[e.UNICODE_SUPPLEMENTARY_PLANE_BEGIN = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(Bt || (Bt = {}));
function Ye(e) {
	return e < 0 ? 0 : e > Bt.MAX_UINT_32 ? Bt.MAX_UINT_32 : e | 0;
}
function t1(e) {
	return e.split(/\r\n|\r|\n/);
}
function n1(e, t) {
	return e < t ? -1 : e > t ? 1 : 0;
}
function i1(e, t, n = 0, i = e.length, s = 0, o = t.length) {
	for (; n < i && s < o; n++, s++) {
		const u = e.charCodeAt(n), c = t.charCodeAt(s);
		if (u < c) return -1;
		if (u > c) return 1;
	}
	const a = i - n, l = o - s;
	return a < l ? -1 : a > l ? 1 : 0;
}
function bs(e, t, n = 0, i = e.length, s = 0, o = t.length) {
	for (; n < i && s < o; n++, s++) {
		let u = e.charCodeAt(n), c = t.charCodeAt(s);
		if (u === c) continue;
		if (u >= 128 || c >= 128) return i1(e.toLowerCase(), t.toLowerCase(), n, i, s, o);
		Xn(u) && (u -= 32), Xn(c) && (c -= 32);
		const f = u - c;
		if (f !== 0) return f;
	}
	const a = i - n, l = o - s;
	return a < l ? -1 : a > l ? 1 : 0;
}
function Xn(e) {
	return e >= m.a && e <= m.z;
}
function ps(e) {
	return e >= m.A && e <= m.Z;
}
function s1(e, t) {
	return e.length === t.length && bs(e, t) === 0;
}
function r1(e, t) {
	const n = t.length;
	return n <= e.length && bs(e, t, 0, n) === 0;
}
new RegExp("(?:" + [
	/(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/.source,
	/(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/.source,
	/\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/.source
].join("|") + ")", "g");
String.fromCharCode(m.UTF8_BOM);
var ze;
(function(e) {
	e[e.Other = 0] = "Other", e[e.Prepend = 1] = "Prepend", e[e.CR = 2] = "CR", e[e.LF = 3] = "LF", e[e.Control = 4] = "Control", e[e.Extend = 5] = "Extend", e[e.Regional_Indicator = 6] = "Regional_Indicator", e[e.SpacingMark = 7] = "SpacingMark", e[e.L = 8] = "L", e[e.V = 9] = "V", e[e.T = 10] = "T", e[e.LV = 11] = "LV", e[e.LVT = 12] = "LVT", e[e.ZWJ = 13] = "ZWJ", e[e.Extended_Pictographic = 14] = "Extended_Pictographic";
})(ze || (ze = {}));
(class at {
	static {
		this._INSTANCE = null;
	}
	static getInstance() {
		return at._INSTANCE || (at._INSTANCE = new at()), at._INSTANCE;
	}
	constructor() {
		this._data = o1();
	}
	getGraphemeBreakType(t) {
		if (t < 32) return t === m.LineFeed ? ze.LF : t === m.CarriageReturn ? ze.CR : ze.Control;
		if (t < 127) return ze.Other;
		const n = this._data, i = n.length / 3;
		let s = 1;
		for (; s <= i;) if (t < n[3 * s]) s = 2 * s;
		else if (t > n[3 * s + 1]) s = 2 * s + 1;
		else return n[3 * s + 2];
		return ze.Other;
	}
});
function o1() {
	return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var mn;
(function(e) {
	e[e.zwj = 8205] = "zwj", e[e.emojiVariantSelector = 65039] = "emojiVariantSelector", e[e.enclosingKeyCap = 8419] = "enclosingKeyCap", e[e.space = 32] = "space";
})(mn || (mn = {}));
(class lt {
	static {
		this.ambiguousCharacterData = new gn(() => JSON.parse("{\"_common\":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],\"_default\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"cs\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"de\":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"es\":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"fr\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"it\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"ja\":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],\"ko\":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"pl\":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"pt-BR\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"qps-ploc\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"ru\":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"tr\":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],\"zh-hans\":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],\"zh-hant\":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}"));
	}
	static {
		this.cache = new e1((t) => {
			const n = t.split(",");
			function i(c) {
				const f = /* @__PURE__ */ new Map();
				for (let d = 0; d < c.length; d += 2) f.set(c[d], c[d + 1]);
				return f;
			}
			function s(c, f) {
				const d = new Map(c);
				for (const [p, k] of f) d.set(p, k);
				return d;
			}
			function o(c, f) {
				if (!c) return f;
				const d = /* @__PURE__ */ new Map();
				for (const [p, k] of c) f.has(p) && d.set(p, k);
				return d;
			}
			const a = this.ambiguousCharacterData.value;
			let l = n.filter((c) => !c.startsWith("_") && Object.hasOwn(a, c));
			l.length === 0 && (l = ["_default"]);
			let u;
			for (const c of l) {
				const f = i(a[c]);
				u = o(u, f);
			}
			return new lt(s(i(a._common), u));
		});
	}
	static getInstance(t) {
		return lt.cache.get(Array.from(t).join(","));
	}
	static {
		this._locales = new gn(() => Object.keys(lt.ambiguousCharacterData.value).filter((t) => !t.startsWith("_")));
	}
	static getLocales() {
		return lt._locales.value;
	}
	constructor(t) {
		this.confusableDictionary = t;
	}
	isAmbiguous(t) {
		return this.confusableDictionary.has(t);
	}
	containsAmbiguousCharacter(t) {
		for (let n = 0; n < t.length; n++) {
			const i = t.codePointAt(n);
			if (typeof i == "number" && this.isAmbiguous(i)) return !0;
		}
		return !1;
	}
	getPrimaryConfusable(t) {
		return this.confusableDictionary.get(t);
	}
	getConfusableCodePoints() {
		return new Set(this.confusableDictionary.keys());
	}
});
(class ut {
	static getRawData() {
		return JSON.parse("{\"_common\":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],\"cs\":[173,8203,12288],\"de\":[173,8203,12288],\"es\":[8203,12288],\"fr\":[173,8203,12288],\"it\":[160,173,12288],\"ja\":[173],\"ko\":[173,12288],\"pl\":[173,8203,12288],\"pt-BR\":[173,8203,12288],\"qps-ploc\":[160,173,8203,12288],\"ru\":[173,12288],\"tr\":[160,173,8203,12288],\"zh-hans\":[160,173,8203,12288],\"zh-hant\":[173,12288]}");
	}
	static {
		this._data = void 0;
	}
	static getData() {
		return this._data || (this._data = new Set([...Object.values(ut.getRawData())].flat())), this._data;
	}
	static isInvisibleCharacter(t) {
		return ut.getData().has(t);
	}
	static containsInvisibleCharacter(t) {
		for (let n = 0; n < t.length; n++) {
			const i = t.codePointAt(n);
			if (typeof i == "number" && (ut.isInvisibleCharacter(i) || i === mn.space)) return !0;
		}
		return !1;
	}
	static get codePoints() {
		return ut.getData();
	}
});
function Se(e) {
	return e === m.Slash || e === m.Backslash;
}
function vs(e) {
	return e.replace(/[\\/]/g, x.sep);
}
function a1(e) {
	return e.indexOf("/") === -1 && (e = vs(e)), /^[a-zA-Z]:(\/|$)/.test(e) && (e = "/" + e), e;
}
function Zn(e, t = x.sep) {
	if (!e) return "";
	const n = e.length, i = e.charCodeAt(0);
	if (Se(i)) {
		if (Se(e.charCodeAt(1)) && !Se(e.charCodeAt(2))) {
			let o = 3;
			const a = o;
			for (; o < n && !Se(e.charCodeAt(o)); o++);
			if (a !== o && !Se(e.charCodeAt(o + 1))) {
				for (o += 1; o < n; o++) if (Se(e.charCodeAt(o))) return e.slice(0, o + 1).replace(/[\\/]/g, t);
			}
		}
		return t;
	} else if (l1(i) && e.charCodeAt(1) === m.Colon) return Se(e.charCodeAt(2)) ? e.slice(0, 2) + t : e.slice(0, 2);
	let s = e.indexOf("://");
	if (s !== -1) {
		for (s += 3; s < n; s++) if (Se(e.charCodeAt(s))) return e.slice(0, s + 1);
	}
	return "";
}
function Jn(e, t, n, i = Tt) {
	if (e === t) return !0;
	if (!e || !t || t.length > e.length) return !1;
	if (n) {
		if (!r1(e, t)) return !1;
		if (t.length === e.length) return !0;
		let s = t.length;
		return t.charAt(t.length - 1) === i && s--, e.charAt(s) === i;
	}
	return t.charAt(t.length - 1) !== i && (t += i), e.indexOf(t) === 0;
}
function l1(e) {
	return e >= m.A && e <= m.Z || e >= m.a && e <= m.z;
}
var W;
(function(e) {
	e.inMemory = "inmemory", e.vscode = "vscode", e.internal = "private", e.walkThrough = "walkThrough", e.walkThroughSnippet = "walkThroughSnippet", e.http = "http", e.https = "https", e.file = "file", e.mailto = "mailto", e.untitled = "untitled", e.data = "data", e.command = "command", e.vscodeRemote = "vscode-remote", e.vscodeRemoteResource = "vscode-remote-resource", e.vscodeManagedRemoteResource = "vscode-managed-remote-resource", e.vscodeUserData = "vscode-userdata", e.vscodeCustomEditor = "vscode-custom-editor", e.vscodeNotebookCell = "vscode-notebook-cell", e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata", e.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff", e.vscodeNotebookCellOutput = "vscode-notebook-cell-output", e.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff", e.vscodeNotebookMetadata = "vscode-notebook-metadata", e.vscodeInteractiveInput = "vscode-interactive-input", e.vscodeSettings = "vscode-settings", e.vscodeWorkspaceTrust = "vscode-workspace-trust", e.vscodeTerminal = "vscode-terminal", e.vscodeChatCodeBlock = "vscode-chat-code-block", e.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block", e.vscodeChatEditor = "vscode-chat-editor", e.vscodeChatInput = "chatSessionInput", e.vscodeLocalChatSession = "vscode-chat-session", e.webviewPanel = "webview-panel", e.vscodeWebview = "vscode-webview", e.extension = "extension", e.vscodeFileResource = "vscode-file", e.tmp = "tmp", e.vsls = "vsls", e.vscodeSourceControl = "vscode-scm", e.commentsInput = "comment", e.codeSetting = "code-setting", e.outputChannel = "output", e.accessibleView = "accessible-view", e.chatEditingSnapshotScheme = "chat-editing-snapshot-text-model", e.chatEditingModel = "chat-editing-text-model", e.copilotPr = "copilot-pr";
})(W || (W = {}));
var u1 = class {
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
		this._serverRootPath = x.join(t ?? "/", h1(e));
	}
	getServerRootPath() {
		return this._serverRootPath;
	}
	get _remoteResourcesPath() {
		return x.join(this._serverRootPath, W.vscodeRemoteResource);
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
			return ge(a), e;
		}
		const t = e.authority;
		let n = this._hosts[t];
		n && n.indexOf(":") !== -1 && n.indexOf("[") === -1 && (n = `[${n}]`);
		const i = this._ports[t], s = this._connectionTokens[t];
		let o = `path=${encodeURIComponent(e.path)}`;
		return typeof s == "string" && (o += `&tkn=${encodeURIComponent(s)}`), se.from({
			scheme: er ? this._preferredWebSchema : W.vscodeRemoteResource,
			authority: `${n}:${i}`,
			path: this._remoteResourcesPath,
			query: o
		});
	}
};
const c1 = new u1();
function h1(e) {
	return `${e.quality ?? "oss"}-${e.commit ?? "dev"}`;
}
const d1 = "vscode-app";
new class Ot {
	constructor() {
		this.staticBrowserUris = new cn(), this.appResourcePathUrls = /* @__PURE__ */ new Map();
	}
	static {
		this.FALLBACK_AUTHORITY = d1;
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
		return t.scheme === W.vscodeRemote ? c1.rewrite(t) : t.scheme === W.file && (Cs || nr === `${W.vscodeFileResource}://${Ot.FALLBACK_AUTHORITY}`) ? t.with({
			scheme: W.vscodeFileResource,
			authority: t.authority || Ot.FALLBACK_AUTHORITY,
			query: null,
			fragment: null
		}) : this.staticBrowserUris.get(t) ?? t;
	}
	asFileUri(t) {
		const n = this.toUri(t);
		return this.uriToFileUri(n);
	}
	uriToFileUri(t) {
		return t.scheme === W.vscodeFileResource ? t.with({
			scheme: W.file,
			authority: t.authority !== Ot.FALLBACK_AUTHORITY ? t.authority : null,
			query: null,
			fragment: null
		}) : t;
	}
	toUri(t) {
		if (se.isUri(t)) return t;
		if (globalThis._VSCODE_FILE_ROOT) {
			const n = globalThis._VSCODE_FILE_ROOT;
			if (/^\w[\w\d+.-]*:\/\//.test(n)) return se.joinPath(se.parse(n, !0), t);
			const i = gr(n, t);
			return se.file(i);
		}
		return se.parse(this.toUrl(t));
	}
	registerStaticBrowserUri(t, n) {
		return this.staticBrowserUris.set(t, n), We(() => {
			this.staticBrowserUris.get(t) === n && this.staticBrowserUris.delete(t);
		});
	}
	getRegisteredBrowserUris() {
		return this.staticBrowserUris.keys();
	}
}();
var Cn;
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
	function i(o) {
		let a;
		typeof o == "string" ? a = new URL(o).searchParams : o instanceof URL ? a = o.searchParams : se.isUri(o) && (a = new URL(o.toString(!0)).searchParams);
		const l = a?.get(n);
		if (l) return t.get(l);
	}
	e.getHeadersFromQuery = i;
	function s(o, a, l) {
		if (!globalThis.crossOriginIsolated) return;
		const u = a && l ? "3" : l ? "2" : "1";
		o instanceof URLSearchParams ? o.set(n, u) : o[n] = u;
	}
	e.addSearchParam = s;
})(Cn || (Cn = {}));
function Ee(e) {
	return Mt(e, !0);
}
var In = class {
	constructor(e) {
		this._ignorePathCasing = e;
	}
	compare(e, t, n = !1) {
		return e === t ? 0 : n1(this.getComparisonKey(e, n), this.getComparisonKey(t, n));
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
			if (e.scheme === W.file) return Jn(Ee(e), Ee(t), this._ignorePathCasing(e)) && e.query === t.query && (n || e.fragment === t.fragment);
			if (ei(e.authority, t.authority)) return Jn(e.path, t.path, this._ignorePathCasing(e), "/") && e.query === t.query && (n || e.fragment === t.fragment);
		}
		return !1;
	}
	joinPath(e, ...t) {
		return se.joinPath(e, ...t);
	}
	basenameOrAuthority(e) {
		return _1(e) || e.authority;
	}
	basename(e) {
		return x.basename(e.path);
	}
	extname(e) {
		return x.extname(e.path);
	}
	dirname(e) {
		if (e.path.length === 0) return e;
		let t;
		return e.scheme === W.file ? t = se.file(pr(Ee(e))).path : (t = x.dirname(e.path), e.authority && t.length && t.charCodeAt(0) !== m.Slash && (console.error(`dirname("${e.toString})) resulted in a relative path`), t = "/")), e.with({ path: t });
	}
	normalizePath(e) {
		if (!e.path.length) return e;
		let t;
		return e.scheme === W.file ? t = se.file(_r(Ee(e))).path : t = x.normalize(e.path), e.with({ path: t });
	}
	relativePath(e, t) {
		if (e.scheme !== t.scheme || !ei(e.authority, t.authority)) return;
		if (e.scheme === W.file) {
			const s = br(Ee(e), Ee(t));
			return tt ? vs(s) : s;
		}
		let n = e.path || "/";
		const i = t.path || "/";
		if (this._ignorePathCasing(e)) {
			let s = 0;
			for (const o = Math.min(n.length, i.length); s < o && !(n.charCodeAt(s) !== i.charCodeAt(s) && n.charAt(s).toLowerCase() !== i.charAt(s).toLowerCase()); s++);
			n = i.substr(0, s) + n.substr(s);
		}
		return x.relative(n, i);
	}
	resolvePath(e, t) {
		if (e.scheme === W.file) {
			const n = se.file(mr(Ee(e), t));
			return e.with({
				authority: n.authority,
				path: n.path
			});
		}
		return t = a1(t), e.with({ path: x.resolve(e.path, t) });
	}
	isAbsolutePath(e) {
		return !!e.path && e.path[0] === "/";
	}
	isEqualAuthority(e, t) {
		return e === t || e !== void 0 && t !== void 0 && s1(e, t);
	}
	hasTrailingPathSeparator(e, t = Tt) {
		if (e.scheme === W.file) {
			const n = Ee(e);
			return n.length > Zn(n).length && n[n.length - 1] === t;
		} else {
			const n = e.path;
			return n.length > 1 && n.charCodeAt(n.length - 1) === m.Slash && !/^[a-zA-Z]:(\/$|\\$)/.test(e.fsPath);
		}
	}
	removeTrailingPathSeparator(e, t = Tt) {
		return ti(e, t) ? e.with({ path: e.path.substr(0, e.path.length - 1) }) : e;
	}
	addTrailingPathSeparator(e, t = Tt) {
		let n = !1;
		if (e.scheme === W.file) {
			const i = Ee(e);
			n = i !== void 0 && i.length === Zn(i).length && i[i.length - 1] === t;
		} else {
			t = "/";
			const i = e.path;
			n = i.length === 1 && i.charCodeAt(i.length - 1) === m.Slash;
		}
		return !n && !ti(e, t) ? e.with({ path: e.path + "/" }) : e;
	}
};
const O = new In(() => !1);
new In((e) => e.scheme === W.file ? !Js : !0);
new In((e) => !0);
O.isEqual.bind(O);
O.isEqualOrParent.bind(O);
O.getComparisonKey.bind(O);
O.basenameOrAuthority.bind(O);
const _1 = O.basename.bind(O);
O.extname.bind(O);
O.dirname.bind(O);
O.joinPath.bind(O);
O.normalizePath.bind(O);
O.relativePath.bind(O);
O.resolvePath.bind(O);
O.isAbsolutePath.bind(O);
const ei = O.isEqualAuthority.bind(O), ti = O.hasTrailingPathSeparator.bind(O);
O.removeTrailingPathSeparator.bind(O);
O.addTrailingPathSeparator.bind(O);
var ni;
(function(e) {
	e.META_DATA_LABEL = "label", e.META_DATA_DESCRIPTION = "description", e.META_DATA_SIZE = "size", e.META_DATA_MIME = "mime";
	function t(n) {
		const i = /* @__PURE__ */ new Map();
		n.path.substring(n.path.indexOf(";") + 1, n.path.lastIndexOf(";")).split(";").forEach((o) => {
			const [a, l] = o.split(":");
			a && l && i.set(a, l);
		});
		const s = n.path.substring(0, n.path.indexOf(";"));
		return s && i.set(e.META_DATA_MIME, s), i;
	}
	e.parseMetaData = t;
})(ni || (ni = {}));
var g1 = class {
	constructor(e, t) {
		this.timeoutToken = void 0, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
	}
	dispose() {
		this.cancel(), this.runner = null;
	}
	cancel() {
		this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = void 0);
	}
	schedule(e = this.timeout) {
		this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
	}
	get delay() {
		return this.timeout;
	}
	set delay(e) {
		this.timeout = e;
	}
	isScheduled() {
		return this.timeoutToken !== void 0;
	}
	flush() {
		this.isScheduled() && (this.cancel(), this.doRun());
	}
	onTimeout() {
		this.timeoutToken = void 0, this.runner && this.doRun();
	}
	doRun() {
		this.runner?.();
	}
};
(function() {
	const e = globalThis;
	typeof e.requestIdleCallback != "function" || e.cancelIdleCallback;
})();
var Ve;
(function(e) {
	e[e.Resolved = 0] = "Resolved", e[e.Rejected = 1] = "Rejected";
})(Ve || (Ve = {}));
var Es = class ws {
	static fromPromise(t) {
		const n = new ws();
		return n.settleWith(t), n;
	}
	get isRejected() {
		return this.outcome?.outcome === Ve.Rejected;
	}
	get isResolved() {
		return this.outcome?.outcome === Ve.Resolved;
	}
	get isSettled() {
		return !!this.outcome;
	}
	get value() {
		return this.outcome?.outcome === Ve.Resolved ? this.outcome?.value : void 0;
	}
	constructor() {
		this.p = new Promise((t, n) => {
			this.completeCallback = t, this.errorCallback = n;
		});
	}
	complete(t) {
		return this.isSettled ? Promise.resolve() : new Promise((n) => {
			this.completeCallback(t), this.outcome = {
				outcome: Ve.Resolved,
				value: t
			}, n();
		});
	}
	error(t) {
		return this.isSettled ? Promise.resolve() : new Promise((n) => {
			this.errorCallback(t), this.outcome = {
				outcome: Ve.Rejected,
				value: t
			}, n();
		});
	}
	settleWith(t) {
		return t.then((n) => this.complete(n), (n) => this.error(n));
	}
	cancel() {
		return this.error(new ns());
	}
}, ii;
(function(e) {
	async function t(i) {
		let s;
		const o = await Promise.all(i.map((a) => a.then((l) => l, (l) => {
			s || (s = l);
		})));
		if (typeof s < "u") throw s;
		return o;
	}
	e.settled = t;
	function n(i) {
		return new Promise(async (s, o) => {
			try {
				await i(s, o);
			} catch (a) {
				o(a);
			}
		});
	}
	e.withAsyncBody = n;
})(ii || (ii = {}));
var ue;
(function(e) {
	e[e.Initial = 0] = "Initial", e[e.DoneOK = 1] = "DoneOK", e[e.DoneError = 2] = "DoneError";
})(ue || (ue = {}));
(class re {
	static fromArray(t) {
		return new re((n) => {
			n.emitMany(t);
		});
	}
	static fromPromise(t) {
		return new re(async (n) => {
			n.emitMany(await t);
		});
	}
	static fromPromisesResolveOrder(t) {
		return new re(async (n) => {
			await Promise.all(t.map(async (i) => n.emitOne(await i)));
		});
	}
	static merge(t) {
		return new re(async (n) => {
			await Promise.all(t.map(async (i) => {
				for await (const s of i) n.emitOne(s);
			}));
		});
	}
	static {
		this.EMPTY = re.fromArray([]);
	}
	constructor(t, n) {
		this._state = ue.Initial, this._results = [], this._error = null, this._onReturn = n, this._onStateChanged = new de(), queueMicrotask(async () => {
			const i = {
				emitOne: (s) => this.emitOne(s),
				emitMany: (s) => this.emitMany(s),
				reject: (s) => this.reject(s)
			};
			try {
				await Promise.resolve(t(i)), this.resolve();
			} catch (s) {
				this.reject(s);
			} finally {
				i.emitOne = void 0, i.emitMany = void 0, i.reject = void 0;
			}
		});
	}
	[Symbol.asyncIterator]() {
		let t = 0;
		return {
			next: async () => {
				do {
					if (this._state === ue.DoneError) throw this._error;
					if (t < this._results.length) return {
						done: !1,
						value: this._results[t++]
					};
					if (this._state === ue.DoneOK) return {
						done: !0,
						value: void 0
					};
					await Pt.toPromise(this._onStateChanged.event);
				} while (!0);
			},
			return: async () => (this._onReturn?.(), {
				done: !0,
				value: void 0
			})
		};
	}
	static map(t, n) {
		return new re(async (i) => {
			for await (const s of t) i.emitOne(n(s));
		});
	}
	map(t) {
		return re.map(this, t);
	}
	static filter(t, n) {
		return new re(async (i) => {
			for await (const s of t) n(s) && i.emitOne(s);
		});
	}
	filter(t) {
		return re.filter(this, t);
	}
	static coalesce(t) {
		return re.filter(t, (n) => !!n);
	}
	coalesce() {
		return re.coalesce(this);
	}
	static async toPromise(t) {
		const n = [];
		for await (const i of t) n.push(i);
		return n;
	}
	toPromise() {
		return re.toPromise(this);
	}
	emitOne(t) {
		this._state === ue.Initial && (this._results.push(t), this._onStateChanged.fire());
	}
	emitMany(t) {
		this._state === ue.Initial && (this._results = this._results.concat(t), this._onStateChanged.fire());
	}
	resolve() {
		this._state === ue.Initial && (this._state = ue.DoneOK, this._onStateChanged.fire());
	}
	reject(t) {
		this._state === ue.Initial && (this._state = ue.DoneError, this._error = t, this._onStateChanged.fire());
	}
});
var b1 = class {
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
		if (this._finalValue) throw new F("ProducerConsumer: cannot produce after final value has been set");
	}
	_resolveOrRejectDeferred(e, t) {
		t.ok ? e.complete(t.value) : e.error(t.error);
	}
	consume() {
		if (this._unconsumedValues.length > 0 || this._finalValue) {
			const e = this._unconsumedValues.length > 0 ? this._unconsumedValues.shift() : this._finalValue;
			return e.ok ? Promise.resolve(e.value) : Promise.reject(e.error);
		} else {
			const e = new Es();
			return this._unsatisfiedConsumers.push(e), e.p;
		}
	}
};
(class ee {
	constructor(t, n) {
		this._onReturn = n, this._producerConsumer = new b1(), this._iterator = {
			next: () => this._producerConsumer.consume(),
			return: () => (this._onReturn?.(), Promise.resolve({
				done: !0,
				value: void 0
			})),
			throw: async (i) => (this._finishError(i), {
				done: !0,
				value: void 0
			})
		}, queueMicrotask(async () => {
			const i = t({
				emitOne: (s) => this._producerConsumer.produce({
					ok: !0,
					value: {
						done: !1,
						value: s
					}
				}),
				emitMany: (s) => {
					for (const o of s) this._producerConsumer.produce({
						ok: !0,
						value: {
							done: !1,
							value: o
						}
					});
				},
				reject: (s) => this._finishError(s)
			});
			if (!this._producerConsumer.hasFinalValue) try {
				await i, this._finishOk();
			} catch (s) {
				this._finishError(s);
			}
		});
	}
	static fromArray(t) {
		return new ee((n) => {
			n.emitMany(t);
		});
	}
	static fromPromise(t) {
		return new ee(async (n) => {
			n.emitMany(await t);
		});
	}
	static fromPromisesResolveOrder(t) {
		return new ee(async (n) => {
			await Promise.all(t.map(async (i) => n.emitOne(await i)));
		});
	}
	static merge(t) {
		return new ee(async (n) => {
			await Promise.all(t.map(async (i) => {
				for await (const s of i) n.emitOne(s);
			}));
		});
	}
	static {
		this.EMPTY = ee.fromArray([]);
	}
	static map(t, n) {
		return new ee(async (i) => {
			for await (const s of t) i.emitOne(n(s));
		});
	}
	static tee(t) {
		let n, i;
		const s = new Es(), o = async () => {
			if (!(!n || !i)) try {
				for await (const a of t) n.emitOne(a), i.emitOne(a);
			} catch (a) {
				n.reject(a), i.reject(a);
			} finally {
				s.complete();
			}
		};
		return [new ee(async (a) => (n = a, o(), s.p)), new ee(async (a) => (i = a, o(), s.p))];
	}
	map(t) {
		return ee.map(this, t);
	}
	static coalesce(t) {
		return ee.filter(t, (n) => !!n);
	}
	coalesce() {
		return ee.coalesce(this);
	}
	static filter(t, n) {
		return new ee(async (i) => {
			for await (const s of t) n(s) && i.emitOne(s);
		});
	}
	filter(t) {
		return ee.filter(this, t);
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
function nt(e, t) {
	return e === t;
}
function p1() {
	return (e, t) => e === t;
}
function v1(e, t, n) {
	return ss(e, t, n ?? nt);
}
function E1(e) {
	return (t, n) => ss(t, n, e ?? nt);
}
function zt(e, t) {
	if (e === t) return !0;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (!zt(e[n], t[n])) return !1;
		return !0;
	}
	if (e && typeof e == "object" && t && typeof t == "object" && Object.getPrototypeOf(e) === Object.prototype && Object.getPrototypeOf(t) === Object.prototype) {
		const n = e, i = t, s = Object.keys(n), o = Object.keys(i), a = new Set(o);
		if (s.length !== o.length) return !1;
		for (const l of s) if (!a.has(l) || !zt(n[l], i[l])) return !1;
		return !0;
	}
	return !1;
}
function w1() {
	return (e, t) => zt(e, t);
}
function L1(e, t) {
	return JSON.stringify(e) === JSON.stringify(t);
}
function y1() {
	return (e, t) => JSON.stringify(e) === JSON.stringify(t);
}
function A1() {
	return (e, t) => e.equals(t);
}
function T1(e, t, n) {
	return e == null || t === void 0 || t === null ? t === e : n(e, t);
}
function S1(e) {
	return (t, n) => t == null || n === void 0 || n === null ? n === t : e(t, n);
}
var si;
(function(e) {
	e.strict = nt, e.strictC = p1, e.array = v1, e.arrayC = E1, e.structural = zt, e.structuralC = w1, e.jsonStringify = L1, e.jsonStringifyC = y1, e.thisC = A1, e.ifDefined = T1, e.ifDefinedC = S1;
})(si || (si = {}));
let Me;
function Ls(e) {
	Me ? Me instanceof ri ? Me.loggers.push(e) : Me = new ri([Me, e]) : Me = e;
}
function G() {
	return Me;
}
let bn;
function R1(e) {
	bn = e;
}
function k1(e) {
	bn && bn(e);
}
var ri = class {
	constructor(e) {
		this.loggers = e;
	}
	handleObservableCreated(e, t) {
		for (const n of this.loggers) n.handleObservableCreated(e, t);
	}
	handleOnListenerCountChanged(e, t) {
		for (const n of this.loggers) n.handleOnListenerCountChanged(e, t);
	}
	handleObservableUpdated(e, t) {
		for (const n of this.loggers) n.handleObservableUpdated(e, t);
	}
	handleAutorunCreated(e, t) {
		for (const n of this.loggers) n.handleAutorunCreated(e, t);
	}
	handleAutorunDisposed(e) {
		for (const t of this.loggers) t.handleAutorunDisposed(e);
	}
	handleAutorunDependencyChanged(e, t, n) {
		for (const i of this.loggers) i.handleAutorunDependencyChanged(e, t, n);
	}
	handleAutorunStarted(e) {
		for (const t of this.loggers) t.handleAutorunStarted(e);
	}
	handleAutorunFinished(e) {
		for (const t of this.loggers) t.handleAutorunFinished(e);
	}
	handleDerivedDependencyChanged(e, t, n) {
		for (const i of this.loggers) i.handleDerivedDependencyChanged(e, t, n);
	}
	handleDerivedCleared(e) {
		for (const t of this.loggers) t.handleDerivedCleared(e);
	}
	handleBeginTransaction(e) {
		for (const t of this.loggers) t.handleBeginTransaction(e);
	}
	handleEndTransaction(e) {
		for (const t of this.loggers) t.handleEndTransaction(e);
	}
}, Oe;
(function(e) {
	let t = !1;
	function n() {
		t = !0;
	}
	e.enable = n;
	function i() {
		if (!t) return;
		const s = Error, o = s.stackTraceLimit;
		s.stackTraceLimit = 3;
		const a = (/* @__PURE__ */ new Error()).stack;
		return s.stackTraceLimit = o, N1.fromStack(a, 2);
	}
	e.ofCaller = i;
})(Oe || (Oe = {}));
var N1 = class ys {
	static fromStack(t, n) {
		const i = O1(t.split(`
`)[n + 1]);
		if (i) return new ys(i.fileName, i.line, i.column, i.id);
	}
	constructor(t, n, i, s) {
		this.fileName = t, this.line = n, this.column = i, this.id = s;
	}
};
function O1(e) {
	const t = e.match(/\((.*):(\d+):(\d+)\)/);
	if (t) return {
		fileName: t[1],
		line: parseInt(t[2]),
		column: parseInt(t[3]),
		id: e
	};
	const n = e.match(/at ([^\(\)]*):(\d+):(\d+)/);
	if (n) return {
		fileName: n[1],
		line: parseInt(n[2]),
		column: parseInt(n[3]),
		id: e
	};
}
var Vt = class {
	constructor(e, t, n) {
		this.owner = e, this.debugNameSource = t, this.referenceFn = n;
	}
	getDebugName(e) {
		return I1(e, this);
	}
};
const oi = /* @__PURE__ */ new Map(), pn = /* @__PURE__ */ new WeakMap();
function I1(e, t) {
	const n = pn.get(e);
	if (n) return n;
	const i = U1(e, t);
	if (i) {
		let s = oi.get(i) ?? 0;
		s++, oi.set(i, s);
		const o = s === 1 ? i : `${i}#${s}`;
		return pn.set(e, o), o;
	}
}
function U1(e, t) {
	const n = pn.get(e);
	if (n) return n;
	const i = t.owner ? x1(t.owner) + "." : "";
	let s;
	const o = t.debugNameSource;
	if (o !== void 0) if (typeof o == "function") {
		if (s = o(), s !== void 0) return i + s;
	} else return i + o;
	const a = t.referenceFn;
	if (a !== void 0 && (s = Un(a), s !== void 0)) return i + s;
	if (t.owner !== void 0) {
		const l = D1(t.owner, e);
		if (l !== void 0) return i + l;
	}
}
function D1(e, t) {
	for (const n in e) if (e[n] === t) return n;
}
const ai = /* @__PURE__ */ new Map(), li = /* @__PURE__ */ new WeakMap();
function x1(e) {
	const t = li.get(e);
	if (t) return t;
	const n = As(e) ?? "Object";
	let i = ai.get(n) ?? 0;
	i++, ai.set(n, i);
	const s = i === 1 ? n : `${n}#${i}`;
	return li.set(e, s), s;
}
function As(e) {
	const t = e.constructor;
	if (t) return t.name === "Object" ? void 0 : t.name;
}
function Un(e) {
	const t = e.toString(), n = /\/\*\*\s*@description\s*([^*]*)\*\//.exec(t);
	return (n ? n[1] : void 0)?.trim();
}
let vn;
function M1(e) {
	vn = e;
}
let Ts;
function F1(e) {
	Ts = e;
}
let Ss;
function P1(e) {
	Ss = e;
}
let En;
function B1(e) {
	En = e;
}
var z1 = class {
	get TChange() {
		return null;
	}
	reportChanges() {
		this.get();
	}
	read(e) {
		return e ? e.readObservable(this) : this.get();
	}
	map(e, t, n = Oe.ofCaller()) {
		const i = t === void 0 ? void 0 : e, s = t === void 0 ? e : t;
		return vn({
			owner: i,
			debugName: () => {
				const o = Un(s);
				if (o !== void 0) return o;
				const a = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/.exec(s.toString());
				if (a) return `${this.debugName}.${a[2]}`;
				if (!i) return `${this.debugName} (mapped)`;
			},
			debugReferenceFn: s
		}, (o) => s(this.read(o), o), n);
	}
	flatten() {
		return vn({
			owner: void 0,
			debugName: () => `${this.debugName} (flattened)`
		}, (e) => this.read(e).read(e));
	}
	recomputeInitiallyAndOnChange(e, t) {
		return e.add(Ts(this, t)), this;
	}
	keepObserved(e) {
		return e.add(Ss(this)), this;
	}
	get debugValue() {
		return this.get();
	}
	get debug() {
		return new V1(this);
	}
}, V1 = class {
	constructor(e) {
		this.observable = e;
	}
	getDependencyGraph() {
		return En(this.observable, { type: "dependencies" });
	}
	getObserverGraph() {
		return En(this.observable, { type: "observers" });
	}
}, Dn = class extends z1 {
	constructor(e) {
		super(), this._observers = /* @__PURE__ */ new Set(), G()?.handleObservableCreated(this, e);
	}
	addObserver(e) {
		const t = this._observers.size;
		this._observers.add(e), t === 0 && this.onFirstObserverAdded(), t !== this._observers.size && G()?.handleOnListenerCountChanged(this, this._observers.size);
	}
	removeObserver(e) {
		const t = this._observers.delete(e);
		t && this._observers.size === 0 && this.onLastObserverRemoved(), t && G()?.handleOnListenerCountChanged(this, this._observers.size);
	}
	onFirstObserverAdded() {}
	onLastObserverRemoved() {}
	log() {
		const e = !!G();
		return k1(this), e || G()?.handleObservableCreated(this, Oe.ofCaller()), this;
	}
	debugGetObservers() {
		return this._observers;
	}
}, B;
(function(e) {
	e[e.dependenciesMightHaveChanged = 1] = "dependenciesMightHaveChanged", e[e.stale = 2] = "stale", e[e.upToDate = 3] = "upToDate";
})(B || (B = {}));
function G1(e) {
	switch (e) {
		case B.dependenciesMightHaveChanged: return "dependenciesMightHaveChanged";
		case B.stale: return "stale";
		case B.upToDate: return "upToDate";
		default: return "<unknown>";
	}
}
var wn = class {
	get debugName() {
		return this._debugNameData.getDebugName(this) ?? "(anonymous)";
	}
	constructor(e, t, n, i) {
		this._debugNameData = e, this._runFn = t, this._changeTracker = n, this._state = B.stale, this._updateCount = 0, this._disposed = !1, this._dependencies = /* @__PURE__ */ new Set(), this._dependenciesToBeRemoved = /* @__PURE__ */ new Set(), this._isRunning = !1, this._iteration = 0, this._store = void 0, this._delayedStore = void 0, this._changeSummary = this._changeTracker?.createChangeSummary(void 0), G()?.handleAutorunCreated(this, i), this._run(), Wt(this);
	}
	dispose() {
		if (!this._disposed) {
			this._disposed = !0;
			for (const e of this._dependencies) e.removeObserver(this);
			this._dependencies.clear(), this._store !== void 0 && this._store.dispose(), this._delayedStore !== void 0 && this._delayedStore.dispose(), G()?.handleAutorunDisposed(this), jt(this);
		}
	}
	_run() {
		const e = this._dependenciesToBeRemoved;
		this._dependenciesToBeRemoved = this._dependencies, this._dependencies = e, this._state = B.upToDate;
		try {
			if (!this._disposed) {
				G()?.handleAutorunStarted(this);
				const t = this._changeSummary, n = this._delayedStore;
				n !== void 0 && (this._delayedStore = void 0);
				try {
					this._isRunning = !0, this._changeTracker && (this._changeTracker.beforeUpdate?.(this, t), this._changeSummary = this._changeTracker.createChangeSummary(t)), this._store !== void 0 && (this._store.dispose(), this._store = void 0), this._runFn(this, t);
				} catch (i) {
					_t(i);
				} finally {
					this._isRunning = !1, n !== void 0 && n.dispose();
				}
			}
		} finally {
			this._disposed || G()?.handleAutorunFinished(this);
			for (const t of this._dependenciesToBeRemoved) t.removeObserver(this);
			this._dependenciesToBeRemoved.clear();
		}
	}
	toString() {
		return `Autorun<${this.debugName}>`;
	}
	beginUpdate(e) {
		this._state === B.upToDate && (this._checkIterations(), this._state = B.dependenciesMightHaveChanged), this._updateCount++;
	}
	endUpdate(e) {
		try {
			if (this._updateCount === 1) {
				this._iteration = 1;
				do {
					if (this._checkIterations()) return;
					if (this._state === B.dependenciesMightHaveChanged) {
						this._state = B.upToDate;
						for (const t of this._dependencies) if (t.reportChanges(), this._state === B.stale) break;
					}
					this._iteration++, this._state !== B.upToDate && this._run();
				} while (this._state !== B.upToDate);
			}
		} finally {
			this._updateCount--;
		}
		ls(() => this._updateCount >= 0);
	}
	handlePossibleChange(e) {
		this._state === B.upToDate && this._isDependency(e) && (this._checkIterations(), this._state = B.dependenciesMightHaveChanged);
	}
	handleChange(e, t) {
		if (this._isDependency(e)) {
			G()?.handleAutorunDependencyChanged(this, e, t);
			try {
				(!this._changeTracker || this._changeTracker.handleChange({
					changedObservable: e,
					change: t,
					didChange: (n) => n === e
				}, this._changeSummary)) && (this._checkIterations(), this._state = B.stale);
			} catch (n) {
				_t(n);
			}
		}
	}
	_isDependency(e) {
		return this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e);
	}
	_ensureNoRunning() {
		if (!this._isRunning) throw new F("The reader object cannot be used outside its compute function!");
	}
	readObservable(e) {
		if (this._ensureNoRunning(), this._disposed) return e.get();
		e.addObserver(this);
		const t = e.get();
		return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
	}
	get store() {
		if (this._ensureNoRunning(), this._disposed) throw new F("Cannot access store after dispose");
		return this._store === void 0 && (this._store = new je()), this._store;
	}
	get delayedStore() {
		if (this._ensureNoRunning(), this._disposed) throw new F("Cannot access store after dispose");
		return this._delayedStore === void 0 && (this._delayedStore = new je()), this._delayedStore;
	}
	debugGetState() {
		return {
			isRunning: this._isRunning,
			updateCount: this._updateCount,
			dependencies: this._dependencies,
			state: this._state,
			stateStr: G1(this._state)
		};
	}
	debugRerun() {
		this._isRunning ? this._state = B.stale : this._run();
	}
	_checkIterations() {
		return this._iteration > 100 ? (_t(new F(`Autorun '${this.debugName}' is stuck in an infinite update loop.`)), !0) : !1;
	}
}, I;
(function(e) {
	e[e.initial = 0] = "initial", e[e.dependenciesMightHaveChanged = 1] = "dependenciesMightHaveChanged", e[e.stale = 2] = "stale", e[e.upToDate = 3] = "upToDate";
})(I || (I = {}));
function $1(e) {
	switch (e) {
		case I.initial: return "initial";
		case I.dependenciesMightHaveChanged: return "dependenciesMightHaveChanged";
		case I.stale: return "stale";
		case I.upToDate: return "upToDate";
		default: return "<unknown>";
	}
}
var ce = class extends Dn {
	get debugName() {
		return this._debugNameData.getDebugName(this) ?? "(anonymous)";
	}
	constructor(e, t, n, i = void 0, s, o) {
		super(o), this._debugNameData = e, this._computeFn = t, this._changeTracker = n, this._handleLastObserverRemoved = i, this._equalityComparator = s, this._state = I.initial, this._value = void 0, this._updateCount = 0, this._dependencies = /* @__PURE__ */ new Set(), this._dependenciesToBeRemoved = /* @__PURE__ */ new Set(), this._changeSummary = void 0, this._isUpdating = !1, this._isComputing = !1, this._didReportChange = !1, this._isInBeforeUpdate = !1, this._isReaderValid = !1, this._store = void 0, this._delayedStore = void 0, this._removedObserverToCallEndUpdateOn = null, this._changeSummary = this._changeTracker?.createChangeSummary(void 0);
	}
	onLastObserverRemoved() {
		this._state = I.initial, this._value = void 0, G()?.handleDerivedCleared(this);
		for (const e of this._dependencies) e.removeObserver(this);
		this._dependencies.clear(), this._store !== void 0 && (this._store.dispose(), this._store = void 0), this._delayedStore !== void 0 && (this._delayedStore.dispose(), this._delayedStore = void 0), this._handleLastObserverRemoved?.();
	}
	get() {
		if (this._observers.size === 0) {
			let e;
			try {
				this._isReaderValid = !0;
				let t;
				this._changeTracker && (t = this._changeTracker.createChangeSummary(void 0), this._changeTracker.beforeUpdate?.(this, t)), e = this._computeFn(this, t);
			} finally {
				this._isReaderValid = !1;
			}
			return this.onLastObserverRemoved(), e;
		} else {
			do {
				if (this._state === I.dependenciesMightHaveChanged) {
					for (const e of this._dependencies) if (e.reportChanges(), this._state === I.stale) break;
				}
				this._state === I.dependenciesMightHaveChanged && (this._state = I.upToDate), this._state !== I.upToDate && this._recompute();
			} while (this._state !== I.upToDate);
			return this._value;
		}
	}
	_recompute() {
		let e = !1;
		this._isComputing = !0, this._didReportChange = !1;
		const t = this._dependenciesToBeRemoved;
		this._dependenciesToBeRemoved = this._dependencies, this._dependencies = t;
		try {
			const n = this._changeSummary;
			this._isReaderValid = !0, this._changeTracker && (this._isInBeforeUpdate = !0, this._changeTracker.beforeUpdate?.(this, n), this._isInBeforeUpdate = !1, this._changeSummary = this._changeTracker?.createChangeSummary(n));
			const i = this._state !== I.initial, s = this._value;
			this._state = I.upToDate;
			const o = this._delayedStore;
			o !== void 0 && (this._delayedStore = void 0);
			try {
				this._store !== void 0 && (this._store.dispose(), this._store = void 0), this._value = this._computeFn(this, n);
			} finally {
				this._isReaderValid = !1;
				for (const a of this._dependenciesToBeRemoved) a.removeObserver(this);
				this._dependenciesToBeRemoved.clear(), o !== void 0 && o.dispose();
			}
			e = this._didReportChange || i && !this._equalityComparator(s, this._value), G()?.handleObservableUpdated(this, {
				oldValue: s,
				newValue: this._value,
				change: void 0,
				didChange: e,
				hadValue: i
			});
		} catch (n) {
			_t(n);
		}
		if (this._isComputing = !1, !this._didReportChange && e) for (const n of this._observers) n.handleChange(this, void 0);
		else this._didReportChange = !1;
	}
	toString() {
		return `LazyDerived<${this.debugName}>`;
	}
	beginUpdate(e) {
		if (this._isUpdating) throw new F("Cyclic deriveds are not supported yet!");
		this._updateCount++, this._isUpdating = !0;
		try {
			const t = this._updateCount === 1;
			if (this._state === I.upToDate && (this._state = I.dependenciesMightHaveChanged, !t)) for (const n of this._observers) n.handlePossibleChange(this);
			if (t) for (const n of this._observers) n.beginUpdate(this);
		} finally {
			this._isUpdating = !1;
		}
	}
	endUpdate(e) {
		if (this._updateCount--, this._updateCount === 0) {
			const t = [...this._observers];
			for (const n of t) n.endUpdate(this);
			if (this._removedObserverToCallEndUpdateOn) {
				const n = [...this._removedObserverToCallEndUpdateOn];
				this._removedObserverToCallEndUpdateOn = null;
				for (const i of n) i.endUpdate(this);
			}
		}
		ls(() => this._updateCount >= 0);
	}
	handlePossibleChange(e) {
		if (this._state === I.upToDate && this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e)) {
			this._state = I.dependenciesMightHaveChanged;
			for (const t of this._observers) t.handlePossibleChange(this);
		}
	}
	handleChange(e, t) {
		if (this._dependencies.has(e) && !this._dependenciesToBeRemoved.has(e) || this._isInBeforeUpdate) {
			G()?.handleDerivedDependencyChanged(this, e, t);
			let n = !1;
			try {
				n = this._changeTracker ? this._changeTracker.handleChange({
					changedObservable: e,
					change: t,
					didChange: (s) => s === e
				}, this._changeSummary) : !0;
			} catch (s) {
				_t(s);
			}
			const i = this._state === I.upToDate;
			if (n && (this._state === I.dependenciesMightHaveChanged || i) && (this._state = I.stale, i)) for (const s of this._observers) s.handlePossibleChange(this);
		}
	}
	_ensureReaderValid() {
		if (!this._isReaderValid) throw new F("The reader object cannot be used outside its compute function!");
	}
	readObservable(e) {
		this._ensureReaderValid(), e.addObserver(this);
		const t = e.get();
		return this._dependencies.add(e), this._dependenciesToBeRemoved.delete(e), t;
	}
	reportChange(e) {
		this._ensureReaderValid(), this._didReportChange = !0;
		for (const t of this._observers) t.handleChange(this, e);
	}
	get store() {
		return this._ensureReaderValid(), this._store === void 0 && (this._store = new je()), this._store;
	}
	get delayedStore() {
		return this._ensureReaderValid(), this._delayedStore === void 0 && (this._delayedStore = new je()), this._delayedStore;
	}
	addObserver(e) {
		const t = !this._observers.has(e) && this._updateCount > 0;
		super.addObserver(e), t && (this._removedObserverToCallEndUpdateOn?.delete(e) || e.beginUpdate(this));
	}
	removeObserver(e) {
		this._observers.has(e) && this._updateCount > 0 && (this._removedObserverToCallEndUpdateOn || (this._removedObserverToCallEndUpdateOn = /* @__PURE__ */ new Set()), this._removedObserverToCallEndUpdateOn.add(e)), super.removeObserver(e);
	}
	debugGetState() {
		return {
			state: this._state,
			stateStr: $1(this._state),
			updateCount: this._updateCount,
			isComputing: this._isComputing,
			dependencies: this._dependencies,
			value: this._value
		};
	}
	debugSetValue(e) {
		this._value = e;
	}
	debugRecompute() {
		this._isComputing ? this._state = I.stale : this._recompute();
	}
	setValue(e, t, n) {
		this._value = e;
		const i = this._observers;
		t.updateObserver(this, this);
		for (const s of i) s.handleChange(this, n);
	}
};
function q1(e, t, n = Oe.ofCaller()) {
	return new ce(new Vt(e.owner, e.debugName, e.debugReferenceFn), t, void 0, e.onLastObserverRemoved, e.equalsFn ?? nt, n);
}
M1(q1);
function ui(e) {
	const t = /* @__PURE__ */ new Error("BugIndicatingErrorRecovery: " + e);
	ge(t), console.error("recovered from an error that indicates a bug", t);
}
function Rs(e, t) {
	const n = new ks(e, t);
	try {
		e(n);
	} finally {
		n.finish();
	}
}
function W1(e, t, n) {
	e ? t(e) : Rs(t, n);
}
var ks = class {
	constructor(e, t) {
		this._fn = e, this._getDebugName = t, this._updatingObservers = [], G()?.handleBeginTransaction(this);
	}
	getDebugName() {
		return this._getDebugName ? this._getDebugName() : Un(this._fn);
	}
	updateObserver(e, t) {
		if (!this._updatingObservers) {
			ui("Transaction already finished!"), Rs((n) => {
				n.updateObserver(e, t);
			});
			return;
		}
		this._updatingObservers.push({
			observer: e,
			observable: t
		}), e.beginUpdate(t);
	}
	finish() {
		const e = this._updatingObservers;
		if (!e) {
			ui("transaction.finish() has already been called!");
			return;
		}
		for (let t = 0; t < e.length; t++) {
			const { observer: n, observable: i } = e[t];
			n.endUpdate(i);
		}
		this._updatingObservers = null, G()?.handleEndTransaction(this);
	}
	debugGetUpdatingObservers() {
		return this._updatingObservers;
	}
};
function j1(e, t, n = Oe.ofCaller()) {
	let i;
	return typeof e == "string" ? i = new Vt(void 0, e, void 0) : i = new Vt(e, void 0, void 0), new Gt(i, t, nt, n);
}
var Gt = class extends Dn {
	get debugName() {
		return this._debugNameData.getDebugName(this) ?? "ObservableValue";
	}
	constructor(e, t, n, i) {
		super(i), this._debugNameData = e, this._equalityComparator = n, this._value = t, G()?.handleObservableUpdated(this, {
			hadValue: !1,
			newValue: t,
			change: void 0,
			didChange: !0,
			oldValue: void 0
		});
	}
	get() {
		return this._value;
	}
	set(e, t, n) {
		if (n === void 0 && this._equalityComparator(this._value, e)) return;
		let i;
		t || (t = i = new ks(() => {}, () => `Setting ${this.debugName}`));
		try {
			const s = this._value;
			this._setValue(e), G()?.handleObservableUpdated(this, {
				oldValue: s,
				newValue: e,
				change: n,
				didChange: !0,
				hadValue: !0
			});
			for (const o of this._observers) t.updateObserver(o, this), o.handleChange(this, n);
		} finally {
			i && i.finish();
		}
	}
	toString() {
		return `${this.debugName}: ${this._value}`;
	}
	_setValue(e) {
		this._value = e;
	}
	debugGetState() {
		return { value: this._value };
	}
	debugSetValue(e) {
		this._value = e;
	}
};
function ci(...e) {
	let t, n, i, s;
	return e.length === 2 ? [n, i] = e : [t, n, i, s] = e, new Ne(new Vt(t, void 0, i), n, i, () => Ne.globalTransaction, nt, s ?? Oe.ofCaller());
}
var Ne = class extends Dn {
	constructor(e, t, n, i, s, o) {
		super(o), this._debugNameData = e, this.event = t, this._getValue = n, this._getTransaction = i, this._equalityComparator = s, this._hasValue = !1, this.handleEvent = (a) => {
			const l = this._getValue(a), u = this._value, c = !this._hasValue || !this._equalityComparator(u, l);
			let f = !1;
			c && (this._value = l, this._hasValue && (f = !0, W1(this._getTransaction(), (d) => {
				G()?.handleObservableUpdated(this, {
					oldValue: u,
					newValue: l,
					change: void 0,
					didChange: c,
					hadValue: this._hasValue
				});
				for (const p of this._observers) d.updateObserver(p, this), p.handleChange(this, void 0);
			}, () => {
				const d = this.getDebugName();
				return "Event fired" + (d ? `: ${d}` : "");
			})), this._hasValue = !0), f || G()?.handleObservableUpdated(this, {
				oldValue: u,
				newValue: l,
				change: void 0,
				didChange: c,
				hadValue: this._hasValue
			});
		};
	}
	getDebugName() {
		return this._debugNameData.getDebugName(this);
	}
	get debugName() {
		const e = this.getDebugName();
		return "From Event" + (e ? `: ${e}` : "");
	}
	onFirstObserverAdded() {
		this._subscription = this.event(this.handleEvent);
	}
	onLastObserverRemoved() {
		this._subscription.dispose(), this._subscription = void 0, this._hasValue = !1, this._value = void 0;
	}
	get() {
		return this._subscription ? (this._hasValue || this.handleEvent(void 0), this._value) : this._getValue(void 0);
	}
	debugSetValue(e) {
		this._value = e;
	}
	debugGetState() {
		return {
			value: this._value,
			hasValue: this._hasValue
		};
	}
};
(function(e) {
	e.Observer = Ne;
	function t(n, i) {
		let s = !1;
		Ne.globalTransaction === void 0 && (Ne.globalTransaction = n, s = !0);
		try {
			i();
		} finally {
			s && (Ne.globalTransaction = void 0);
		}
	}
	e.batchEventsGlobally = t;
})(ci || (ci = {}));
function Ns(e) {
	const t = new Os(!1, void 0);
	return e.addObserver(t), We(() => {
		e.removeObserver(t);
	});
}
P1(Ns);
function H1(e, t) {
	const n = new Os(!0, t);
	e.addObserver(n);
	try {
		n.beginUpdate(e);
	} finally {
		n.endUpdate(e);
	}
	return We(() => {
		e.removeObserver(n);
	});
}
F1(H1);
var Os = class {
	constructor(e, t) {
		this._forceRecompute = e, this._handleValue = t, this._counter = 0;
	}
	beginUpdate(e) {
		this._counter++;
	}
	endUpdate(e) {
		this._counter === 1 && this._forceRecompute && (this._handleValue ? this._handleValue(e.get()) : e.reportChanges()), this._counter--;
	}
	handlePossibleChange(e) {}
	handleChange(e, t) {}
};
let yt;
function K1(e) {
	yt || (yt = new Y1(), Ls(yt)), yt.addFilteredObj(e);
}
var Y1 = class {
	constructor() {
		this.indentation = 0, this.changedObservablesSets = /* @__PURE__ */ new WeakMap();
	}
	addFilteredObj(e) {
		this._filteredObjects || (this._filteredObjects = /* @__PURE__ */ new Set()), this._filteredObjects.add(e);
	}
	_isIncluded(e) {
		return this._filteredObjects?.has(e) ?? !0;
	}
	textToConsoleArgs(e) {
		return Q1([Qe(J1("|  ", this.indentation)), e]);
	}
	formatInfo(e) {
		return e.hadValue ? e.didChange ? [
			Qe(" "),
			ae(fe(e.oldValue, 70), {
				color: "red",
				strikeThrough: !0
			}),
			Qe(" "),
			ae(fe(e.newValue, 60), { color: "green" })
		] : [Qe(" (unchanged)")] : [
			Qe(" "),
			ae(fe(e.newValue, 60), { color: "green" }),
			Qe(" (initial)")
		];
	}
	handleObservableCreated(e) {
		if (e instanceof ce) {
			const t = e;
			this.changedObservablesSets.set(t, /* @__PURE__ */ new Set());
		}
	}
	handleOnListenerCountChanged(e, t) {}
	handleObservableUpdated(e, t) {
		if (this._isIncluded(e)) {
			if (e instanceof ce) {
				this._handleDerivedRecomputed(e, t);
				return;
			}
			console.log(...this.textToConsoleArgs([
				Xe("observable value changed"),
				ae(e.debugName, { color: "BlueViolet" }),
				...this.formatInfo(t)
			]));
		}
	}
	formatChanges(e) {
		if (e.size !== 0) return ae(" (changed deps: " + [...e].map((t) => t.debugName).join(", ") + ")", { color: "gray" });
	}
	handleDerivedDependencyChanged(e, t, n) {
		this._isIncluded(e) && this.changedObservablesSets.get(e)?.add(t);
	}
	_handleDerivedRecomputed(e, t) {
		if (!this._isIncluded(e)) return;
		const n = this.changedObservablesSets.get(e);
		n && (console.log(...this.textToConsoleArgs([
			Xe("derived recomputed"),
			ae(e.debugName, { color: "BlueViolet" }),
			...this.formatInfo(t),
			this.formatChanges(n),
			{ data: [{ fn: e._debugNameData.referenceFn ?? e._computeFn }] }
		])), n.clear());
	}
	handleDerivedCleared(e) {
		this._isIncluded(e) && console.log(...this.textToConsoleArgs([Xe("derived cleared"), ae(e.debugName, { color: "BlueViolet" })]));
	}
	handleFromEventObservableTriggered(e, t) {
		this._isIncluded(e) && console.log(...this.textToConsoleArgs([
			Xe("observable from event triggered"),
			ae(e.debugName, { color: "BlueViolet" }),
			...this.formatInfo(t),
			{ data: [{ fn: e._getValue }] }
		]));
	}
	handleAutorunCreated(e) {
		this._isIncluded(e) && this.changedObservablesSets.set(e, /* @__PURE__ */ new Set());
	}
	handleAutorunDisposed(e) {}
	handleAutorunDependencyChanged(e, t, n) {
		this._isIncluded(e) && this.changedObservablesSets.get(e).add(t);
	}
	handleAutorunStarted(e) {
		const t = this.changedObservablesSets.get(e);
		t && (this._isIncluded(e) && console.log(...this.textToConsoleArgs([
			Xe("autorun"),
			ae(e.debugName, { color: "BlueViolet" }),
			this.formatChanges(t),
			{ data: [{ fn: e._debugNameData.referenceFn ?? e._runFn }] }
		])), t.clear(), this.indentation++);
	}
	handleAutorunFinished(e) {
		this.indentation--;
	}
	handleBeginTransaction(e) {
		let t = e.getDebugName();
		t === void 0 && (t = ""), this._isIncluded(e) && console.log(...this.textToConsoleArgs([
			Xe("transaction"),
			ae(t, { color: "BlueViolet" }),
			{ data: [{ fn: e._fn }] }
		])), this.indentation++;
	}
	handleEndTransaction() {
		this.indentation--;
	}
};
function Q1(e) {
	const t = new Array(), n = [];
	let i = "";
	function s(a) {
		if ("length" in a) for (const l of a) l && s(l);
		else "text" in a ? (i += `%c${a.text}`, t.push(a.style), a.data && n.push(...a.data)) : "data" in a && n.push(...a.data);
	}
	s(e);
	const o = [i, ...t];
	return o.push(...n), o;
}
function Qe(e) {
	return ae(e, { color: "black" });
}
function Xe(e) {
	return ae(C1(`${e}: `, 10), {
		color: "black",
		bold: !0
	});
}
function ae(e, t = { color: "black" }) {
	function n(s) {
		return Object.entries(s).reduce((o, [a, l]) => `${o}${a}:${l};`, "");
	}
	const i = { color: t.color };
	return t.strikeThrough && (i["text-decoration"] = "line-through"), t.bold && (i["font-weight"] = "bold"), {
		text: e,
		style: n(i)
	};
}
function fe(e, t) {
	switch (typeof e) {
		case "number": return "" + e;
		case "string": return e.length + 2 <= t ? `"${e}"` : `"${e.substr(0, t - 7)}"+...`;
		case "boolean": return e ? "true" : "false";
		case "undefined": return "undefined";
		case "object": return e === null ? "null" : Array.isArray(e) ? X1(e, t) : Z1(e, t);
		case "symbol": return e.toString();
		case "function": return `[[Function${e.name ? " " + e.name : ""}]]`;
		default: return "" + e;
	}
}
function X1(e, t) {
	let n = "[ ", i = !0;
	for (const s of e) {
		if (i || (n += ", "), n.length - 5 > t) {
			n += "...";
			break;
		}
		i = !1, n += `${fe(s, t - n.length)}`;
	}
	return n += " ]", n;
}
function Z1(e, t) {
	if (typeof e.toString == "function" && e.toString !== Object.prototype.toString) {
		const o = e.toString();
		return o.length <= t ? o : o.substring(0, t - 3) + "...";
	}
	const n = As(e);
	let i = n ? n + "(" : "{ ", s = !0;
	for (const [o, a] of Object.entries(e)) {
		if (s || (i += ", "), i.length - 5 > t) {
			i += "...";
			break;
		}
		s = !1, i += `${o}: ${fe(a, t - i.length)}`;
	}
	return i += n ? ")" : " }", i;
}
function J1(e, t) {
	let n = "";
	for (let i = 1; i <= t; i++) n += e;
	return n;
}
function C1(e, t) {
	for (; e.length < t;) e += " ";
	return e;
}
var eo = class Ln {
	static createHost(t, n) {
		return new Ln(t, n);
	}
	static createClient(t, n) {
		return new Ln(t, n);
	}
	constructor(t, n) {
		this._channelFactory = t, this._getHandler = n, this._channel = this._channelFactory({
			handleNotification: (s) => {
				const o = s, a = this._getHandler().notifications[o[0]];
				if (!a) throw new Error(`Unknown notification "${o[0]}"!`);
				a(...o[1]);
			},
			handleRequest: (s) => {
				const o = s;
				try {
					return {
						type: "result",
						value: this._getHandler().requests[o[0]](...o[1])
					};
				} catch (a) {
					return {
						type: "error",
						value: a
					};
				}
			}
		});
		const i = new Proxy({}, { get: (s, o) => async (...a) => {
			const l = await this._channel.sendRequest([o, a]);
			if (l.type === "error") throw l.value;
			return l.value;
		} });
		this.api = {
			notifications: new Proxy({}, { get: (s, o) => (...a) => {
				this._channel.sendNotification([o, a]);
			} }),
			requests: i
		};
	}
};
function to(e, t) {
	const n = globalThis;
	let i = [], s;
	const { channel: o, handler: a } = no({ sendNotification: (u) => {
		s ? s.sendNotification(u) : i.push(u);
	} });
	let l;
	return (n.$$debugValueEditor_debugChannels ?? (n.$$debugValueEditor_debugChannels = {}))[e] = (u) => {
		l = t(), s = u;
		for (const c of i) u.sendNotification(c);
		return i = [], a;
	}, eo.createClient(o, () => {
		if (!l) throw new Error("Not supported");
		return l;
	});
}
function no(e) {
	let t;
	return {
		channel: (i) => (t = i, {
			sendNotification: (s) => {
				e.sendNotification(s);
			},
			sendRequest: (s) => {
				throw new Error("not supported");
			}
		}),
		handler: { handleRequest: (i) => i.type === "notification" ? t?.handleNotification(i.data) : t?.handleRequest(i.data) }
	};
}
var io = class {
	constructor() {
		this._timeout = void 0;
	}
	throttle(e, t) {
		this._timeout === void 0 && (this._timeout = setTimeout(() => {
			this._timeout = void 0, e();
		}, t));
	}
	dispose() {
		this._timeout !== void 0 && clearTimeout(this._timeout);
	}
};
function Is(e, t) {
	for (const n in t) e[n] && typeof e[n] == "object" && t[n] && typeof t[n] == "object" ? Is(e[n], t[n]) : e[n] = t[n];
}
function Us(e, t) {
	for (const n in t) t[n] === null ? delete e[n] : e[n] && typeof e[n] == "object" && t[n] && typeof t[n] == "object" ? Us(e[n], t[n]) : e[n] = t[n];
}
var so = class ct {
	static {
		this._instance = void 0;
	}
	static getInstance() {
		return ct._instance === void 0 && (ct._instance = new ct()), ct._instance;
	}
	getTransactionState() {
		const t = [], n = [...this._activeTransactions];
		if (n.length === 0) return;
		const i = n.flatMap((o) => o.debugGetUpdatingObservers() ?? []).map((o) => o.observer), s = /* @__PURE__ */ new Set();
		for (; i.length > 0;) {
			const o = i.shift();
			if (s.has(o)) continue;
			s.add(o);
			const a = this._getInfo(o, (l) => {
				s.has(l) || i.push(l);
			});
			a && t.push(a);
		}
		return {
			names: n.map((o) => o.getDebugName() ?? "tx"),
			affected: t
		};
	}
	_getObservableInfo(t) {
		const n = this._instanceInfos.get(t);
		if (!n) {
			ge(new F("No info found"));
			return;
		}
		return n;
	}
	_getAutorunInfo(t) {
		const n = this._instanceInfos.get(t);
		if (!n) {
			ge(new F("No info found"));
			return;
		}
		return n;
	}
	_getInfo(t, n) {
		if (t instanceof ce) {
			const i = [...t.debugGetObservers()];
			for (const u of i) n(u);
			const s = this._getObservableInfo(t);
			if (!s) return;
			const o = t.debugGetState(), a = {
				name: t.debugName,
				instanceId: s.instanceId,
				updateCount: o.updateCount
			}, l = [...s.changedObservables].map((u) => this._instanceInfos.get(u)?.instanceId).filter(st);
			if (o.isComputing) return {
				...a,
				type: "observable/derived",
				state: "updating",
				changedDependencies: l,
				initialComputation: !1
			};
			switch (o.state) {
				case I.initial: return {
					...a,
					type: "observable/derived",
					state: "noValue"
				};
				case I.upToDate: return {
					...a,
					type: "observable/derived",
					state: "upToDate"
				};
				case I.stale: return {
					...a,
					type: "observable/derived",
					state: "stale",
					changedDependencies: l
				};
				case I.dependenciesMightHaveChanged: return {
					...a,
					type: "observable/derived",
					state: "possiblyStale"
				};
			}
		} else if (t instanceof wn) {
			const i = this._getAutorunInfo(t);
			if (!i) return;
			const s = {
				name: t.debugName,
				instanceId: i.instanceId,
				updateCount: i.updateCount
			}, o = [...i.changedObservables].map((a) => this._instanceInfos.get(a).instanceId);
			if (t.debugGetState().isRunning) return {
				...s,
				type: "autorun",
				state: "updating",
				changedDependencies: o
			};
			switch (t.debugGetState().state) {
				case B.upToDate: return {
					...s,
					type: "autorun",
					state: "upToDate"
				};
				case B.stale: return {
					...s,
					type: "autorun",
					state: "stale",
					changedDependencies: o
				};
				case B.dependenciesMightHaveChanged: return {
					...s,
					type: "autorun",
					state: "possiblyStale"
				};
			}
		}
	}
	_formatObservable(t) {
		const n = this._getObservableInfo(t);
		if (n) return {
			name: t.debugName,
			instanceId: n.instanceId
		};
	}
	_formatObserver(t) {
		if (t instanceof ce) return {
			name: t.toString(),
			instanceId: this._getObservableInfo(t)?.instanceId
		};
		const n = this._getAutorunInfo(t);
		if (n) return {
			name: t.toString(),
			instanceId: n.instanceId
		};
	}
	constructor() {
		this._declarationId = 0, this._instanceId = 0, this._declarations = /* @__PURE__ */ new Map(), this._instanceInfos = /* @__PURE__ */ new WeakMap(), this._aliveInstances = /* @__PURE__ */ new Map(), this._activeTransactions = /* @__PURE__ */ new Set(), this._channel = to("observableDevTools", () => ({
			notifications: {
				setDeclarationIdFilter: (t) => {},
				logObservableValue: (t) => {
					console.log("logObservableValue", t);
				},
				flushUpdates: () => {
					this._flushUpdates();
				},
				resetUpdates: () => {
					this._pendingChanges = null, this._channel.api.notifications.handleChange(this._fullState, !0);
				}
			},
			requests: {
				getDeclarations: () => {
					const t = {};
					for (const n of this._declarations.values()) t[n.id] = n;
					return { decls: t };
				},
				getSummarizedInstances: () => null,
				getObservableValueInfo: (t) => ({ observers: [...this._aliveInstances.get(t).debugGetObservers()].map((n) => this._formatObserver(n)).filter(st) }),
				getDerivedInfo: (t) => {
					const n = this._aliveInstances.get(t);
					return {
						dependencies: [...n.debugGetState().dependencies].map((i) => this._formatObservable(i)).filter(st),
						observers: [...n.debugGetObservers()].map((i) => this._formatObserver(i)).filter(st)
					};
				},
				getAutorunInfo: (t) => ({ dependencies: [...this._aliveInstances.get(t).debugGetState().dependencies].map((n) => this._formatObservable(n)).filter(st) }),
				getTransactionState: () => this.getTransactionState(),
				setValue: (t, n) => {
					const i = this._aliveInstances.get(t);
					if (i instanceof ce) i.debugSetValue(n);
					else if (i instanceof Gt) i.debugSetValue(n);
					else if (i instanceof Ne) i.debugSetValue(n);
					else throw new F("Observable is not supported");
					const s = [...i.debugGetObservers()];
					for (const o of s) o.beginUpdate(i);
					for (const o of s) o.handleChange(i, void 0);
					for (const o of s) o.endUpdate(i);
				},
				getValue: (t) => {
					const n = this._aliveInstances.get(t);
					if (n instanceof ce) return fe(n.debugGetState().value, 200);
					if (n instanceof Gt) return fe(n.debugGetState().value, 200);
				},
				logValue: (t) => {
					const n = this._aliveInstances.get(t);
					if (n && "get" in n) console.log("Logged Value:", n.get());
					else throw new F("Observable is not supported");
				},
				rerun: (t) => {
					const n = this._aliveInstances.get(t);
					if (n instanceof ce) n.debugRecompute();
					else if (n instanceof wn) n.debugRerun();
					else throw new F("Observable is not supported");
				}
			}
		})), this._pendingChanges = null, this._changeThrottler = new io(), this._fullState = {}, this._flushUpdates = () => {
			this._pendingChanges !== null && (this._channel.api.notifications.handleChange(this._pendingChanges, !1), this._pendingChanges = null);
		}, Oe.enable();
	}
	_handleChange(t) {
		Us(this._fullState, t), this._pendingChanges === null ? this._pendingChanges = t : Is(this._pendingChanges, t), this._changeThrottler.throttle(this._flushUpdates, 10);
	}
	_getDeclarationId(t, n) {
		if (!n) return -1;
		let i = this._declarations.get(n.id);
		return i === void 0 && (i = {
			id: this._declarationId++,
			type: t,
			url: n.fileName,
			line: n.line,
			column: n.column
		}, this._declarations.set(n.id, i), this._handleChange({ decls: { [i.id]: i } })), i.id;
	}
	handleObservableCreated(t, n) {
		const i = {
			declarationId: this._getDeclarationId("observable/value", n),
			instanceId: this._instanceId++,
			listenerCount: 0,
			lastValue: void 0,
			updateCount: 0,
			changedObservables: /* @__PURE__ */ new Set()
		};
		this._instanceInfos.set(t, i);
	}
	handleOnListenerCountChanged(t, n) {
		const i = this._getObservableInfo(t);
		if (i) {
			if (i.listenerCount === 0 && n > 0) {
				const s = t instanceof ce ? "observable/derived" : "observable/value";
				this._aliveInstances.set(i.instanceId, t), this._handleChange({ instances: { [i.instanceId]: {
					instanceId: i.instanceId,
					declarationId: i.declarationId,
					formattedValue: i.lastValue,
					type: s,
					name: t.debugName
				} } });
			} else i.listenerCount > 0 && n === 0 && (this._handleChange({ instances: { [i.instanceId]: null } }), this._aliveInstances.delete(i.instanceId));
			i.listenerCount = n;
		}
	}
	handleObservableUpdated(t, n) {
		if (t instanceof ce) {
			this._handleDerivedRecomputed(t, n);
			return;
		}
		const i = this._getObservableInfo(t);
		i && n.didChange && (i.lastValue = fe(n.newValue, 30), i.listenerCount > 0 && this._handleChange({ instances: { [i.instanceId]: { formattedValue: i.lastValue } } }));
	}
	handleAutorunCreated(t, n) {
		const i = {
			declarationId: this._getDeclarationId("autorun", n),
			instanceId: this._instanceId++,
			updateCount: 0,
			changedObservables: /* @__PURE__ */ new Set()
		};
		this._instanceInfos.set(t, i), this._aliveInstances.set(i.instanceId, t), i && this._handleChange({ instances: { [i.instanceId]: {
			instanceId: i.instanceId,
			declarationId: i.declarationId,
			runCount: 0,
			type: "autorun",
			name: t.debugName
		} } });
	}
	handleAutorunDisposed(t) {
		const n = this._getAutorunInfo(t);
		n && (this._handleChange({ instances: { [n.instanceId]: null } }), this._instanceInfos.delete(t), this._aliveInstances.delete(n.instanceId));
	}
	handleAutorunDependencyChanged(t, n, i) {
		const s = this._getAutorunInfo(t);
		s && s.changedObservables.add(n);
	}
	handleAutorunStarted(t) {}
	handleAutorunFinished(t) {
		const n = this._getAutorunInfo(t);
		n && (n.changedObservables.clear(), n.updateCount++, this._handleChange({ instances: { [n.instanceId]: { runCount: n.updateCount } } }));
	}
	handleDerivedDependencyChanged(t, n, i) {
		const s = this._getObservableInfo(t);
		s && s.changedObservables.add(n);
	}
	_handleDerivedRecomputed(t, n) {
		const i = this._getObservableInfo(t);
		if (!i) return;
		const s = fe(n.newValue, 30);
		i.updateCount++, i.changedObservables.clear(), i.lastValue = s, i.listenerCount > 0 && this._handleChange({ instances: { [i.instanceId]: {
			formattedValue: s,
			recomputationCount: i.updateCount
		} } });
	}
	handleDerivedCleared(t) {
		const n = this._getObservableInfo(t);
		n && (n.lastValue = void 0, n.changedObservables.clear(), n.listenerCount > 0 && this._handleChange({ instances: { [n.instanceId]: { formattedValue: void 0 } } }));
	}
	handleBeginTransaction(t) {
		this._activeTransactions.add(t);
	}
	handleEndTransaction(t) {
		this._activeTransactions.delete(t);
	}
};
function ro(e, t) {
	const n = t?.debugNamePostProcessor ?? ((o) => o), i = pt.from(e, n);
	if (!i) return "";
	const s = /* @__PURE__ */ new Set();
	return t.type === "observers" ? xs(i, 0, s, t).trim() : Ds(i, 0, s, t).trim();
}
function Ds(e, t, n, i) {
	const s = "		".repeat(t), o = [];
	if (n.has(e.sourceObj)) return o.push(`${s}* ${e.type} ${e.name} (already listed)`), o.join(`
`);
	if (n.add(e.sourceObj), o.push(`${s}* ${e.type} ${e.name}:`), o.push(`${s}  value: ${fe(e.value, 50)}`), o.push(`${s}  state: ${e.state}`), e.dependencies.length > 0) {
		o.push(`${s}  dependencies:`);
		for (const a of e.dependencies) {
			const l = pt.from(a, i.debugNamePostProcessor ?? ((u) => u)) ?? pt.unknown(a);
			o.push(Ds(l, t + 1, n, i));
		}
	}
	return o.join(`
`);
}
function xs(e, t, n, i) {
	const s = "		".repeat(t), o = [];
	if (n.has(e.sourceObj)) return o.push(`${s}* ${e.type} ${e.name} (already listed)`), o.join(`
`);
	if (n.add(e.sourceObj), o.push(`${s}* ${e.type} ${e.name}:`), o.push(`${s}  value: ${fe(e.value, 50)}`), o.push(`${s}  state: ${e.state}`), e.observers.length > 0) {
		o.push(`${s}  observers:`);
		for (const a of e.observers) {
			const l = pt.from(a, i.debugNamePostProcessor ?? ((u) => u)) ?? pt.unknown(a);
			o.push(xs(l, t + 1, n, i));
		}
	}
	return o.join(`
`);
}
var pt = class Ze {
	static from(t, n) {
		if (t instanceof wn) {
			const i = t.debugGetState();
			return new Ze(t, n(t.debugName), "autorun", void 0, i.stateStr, Array.from(i.dependencies), []);
		} else if (t instanceof ce) {
			const i = t.debugGetState();
			return new Ze(t, n(t.debugName), "derived", i.value, i.stateStr, Array.from(i.dependencies), Array.from(t.debugGetObservers()));
		} else if (t instanceof Gt) {
			const i = t.debugGetState();
			return new Ze(t, n(t.debugName), "observableValue", i.value, "upToDate", [], Array.from(t.debugGetObservers()));
		} else if (t instanceof Ne) {
			const i = t.debugGetState();
			return new Ze(t, n(t.debugName), "fromEvent", i.value, i.hasValue ? "upToDate" : "initial", [], Array.from(t.debugGetObservers()));
		}
	}
	static unknown(t) {
		return new Ze(t, "(unknown)", "unknown", void 0, "unknown", [], []);
	}
	constructor(t, n, i, s, o, a, l) {
		this.sourceObj = t, this.name = n, this.type = i, this.value = s, this.state = o, this.dependencies = a, this.observers = l;
	}
};
B1(ro);
R1(K1);
nn && nn.VSCODE_DEV_DEBUG_OBSERVABLES && Ls(so.getInstance());
var V = class te {
	static fromTo(t, n) {
		return new te(t, n);
	}
	static addRange(t, n) {
		let i = 0;
		for (; i < n.length && n[i].endExclusive < t.start;) i++;
		let s = i;
		for (; s < n.length && n[s].start <= t.endExclusive;) s++;
		if (i === s) n.splice(i, 0, t);
		else {
			const o = Math.min(t.start, n[i].start), a = Math.max(t.endExclusive, n[s - 1].endExclusive);
			n.splice(i, s - i, new te(o, a));
		}
	}
	static tryCreate(t, n) {
		if (!(t > n)) return new te(t, n);
	}
	static ofLength(t) {
		return new te(0, t);
	}
	static ofStartAndLength(t, n) {
		return new te(t, t + n);
	}
	static emptyAt(t) {
		return new te(t, t);
	}
	constructor(t, n) {
		if (this.start = t, this.endExclusive = n, t > n) throw new F(`Invalid range: ${this.toString()}`);
	}
	get isEmpty() {
		return this.start === this.endExclusive;
	}
	delta(t) {
		return new te(this.start + t, this.endExclusive + t);
	}
	deltaStart(t) {
		return new te(this.start + t, this.endExclusive);
	}
	deltaEnd(t) {
		return new te(this.start, this.endExclusive + t);
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
		return new te(Math.min(this.start, t.start), Math.max(this.endExclusive, t.endExclusive));
	}
	intersect(t) {
		const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
		if (n <= i) return new te(n, i);
	}
	intersectionLength(t) {
		const n = Math.max(this.start, t.start), i = Math.min(this.endExclusive, t.endExclusive);
		return Math.max(0, i - n);
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
		if (this.isEmpty) throw new F(`Invalid clipping range: ${this.toString()}`);
		return Math.max(this.start, Math.min(this.endExclusive - 1, t));
	}
	clipCyclic(t) {
		if (this.isEmpty) throw new F(`Invalid clipping range: ${this.toString()}`);
		return t < this.start ? this.endExclusive - (this.start - t) % this.length : t >= this.endExclusive ? this.start + (t - this.start) % this.length : t;
	}
	map(t) {
		const n = [];
		for (let i = this.start; i < this.endExclusive; i++) n.push(t(i));
		return n;
	}
	forEach(t) {
		for (let n = this.start; n < this.endExclusive; n++) t(n);
	}
	joinRightTouching(t) {
		if (this.endExclusive !== t.start) throw new F(`Invalid join: ${this.toString()} and ${t.toString()}`);
		return new te(this.start, t.endExclusive);
	}
	withMargin(t, n) {
		return n === void 0 && (n = t), new te(this.start - t, this.endExclusive + n);
	}
}, $t = class Fe {
	constructor(t, n) {
		this.lineNumber = t, this.column = n;
	}
	with(t = this.lineNumber, n = this.column) {
		return t === this.lineNumber && n === this.column ? this : new Fe(t, n);
	}
	delta(t = 0, n = 0) {
		return this.with(Math.max(1, this.lineNumber + t), Math.max(1, this.column + n));
	}
	equals(t) {
		return Fe.equals(this, t);
	}
	static equals(t, n) {
		return !t && !n ? !0 : !!t && !!n && t.lineNumber === n.lineNumber && t.column === n.column;
	}
	isBefore(t) {
		return Fe.isBefore(this, t);
	}
	static isBefore(t, n) {
		return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column < n.column;
	}
	isBeforeOrEqual(t) {
		return Fe.isBeforeOrEqual(this, t);
	}
	static isBeforeOrEqual(t, n) {
		return t.lineNumber < n.lineNumber ? !0 : n.lineNumber < t.lineNumber ? !1 : t.column <= n.column;
	}
	static compare(t, n) {
		const i = t.lineNumber | 0, s = n.lineNumber | 0;
		return i === s ? (t.column | 0) - (n.column | 0) : i - s;
	}
	clone() {
		return new Fe(this.lineNumber, this.column);
	}
	toString() {
		return "(" + this.lineNumber + "," + this.column + ")";
	}
	static lift(t) {
		return new Fe(t.lineNumber, t.column);
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
}, hi = class P {
	constructor(t, n, i, s) {
		t > i || t === i && n > s ? (this.startLineNumber = i, this.startColumn = s, this.endLineNumber = t, this.endColumn = n) : (this.startLineNumber = t, this.startColumn = n, this.endLineNumber = i, this.endColumn = s);
	}
	isEmpty() {
		return P.isEmpty(this);
	}
	static isEmpty(t) {
		return t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn;
	}
	containsPosition(t) {
		return P.containsPosition(this, t);
	}
	static containsPosition(t, n) {
		return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column < t.startColumn || n.lineNumber === t.endLineNumber && n.column > t.endColumn);
	}
	static strictContainsPosition(t, n) {
		return !(n.lineNumber < t.startLineNumber || n.lineNumber > t.endLineNumber || n.lineNumber === t.startLineNumber && n.column <= t.startColumn || n.lineNumber === t.endLineNumber && n.column >= t.endColumn);
	}
	containsRange(t) {
		return P.containsRange(this, t);
	}
	static containsRange(t, n) {
		return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn < t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn > t.endColumn);
	}
	strictContainsRange(t) {
		return P.strictContainsRange(this, t);
	}
	static strictContainsRange(t, n) {
		return !(n.startLineNumber < t.startLineNumber || n.endLineNumber < t.startLineNumber || n.startLineNumber > t.endLineNumber || n.endLineNumber > t.endLineNumber || n.startLineNumber === t.startLineNumber && n.startColumn <= t.startColumn || n.endLineNumber === t.endLineNumber && n.endColumn >= t.endColumn);
	}
	plusRange(t) {
		return P.plusRange(this, t);
	}
	static plusRange(t, n) {
		let i, s, o, a;
		return n.startLineNumber < t.startLineNumber ? (i = n.startLineNumber, s = n.startColumn) : n.startLineNumber === t.startLineNumber ? (i = n.startLineNumber, s = Math.min(n.startColumn, t.startColumn)) : (i = t.startLineNumber, s = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, a = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, a = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, a = t.endColumn), new P(i, s, o, a);
	}
	intersectRanges(t) {
		return P.intersectRanges(this, t);
	}
	static intersectRanges(t, n) {
		let i = t.startLineNumber, s = t.startColumn, o = t.endLineNumber, a = t.endColumn;
		const l = n.startLineNumber, u = n.startColumn, c = n.endLineNumber, f = n.endColumn;
		return i < l ? (i = l, s = u) : i === l && (s = Math.max(s, u)), o > c ? (o = c, a = f) : o === c && (a = Math.min(a, f)), i > o || i === o && s > a ? null : new P(i, s, o, a);
	}
	equalsRange(t) {
		return P.equalsRange(this, t);
	}
	static equalsRange(t, n) {
		return !t && !n ? !0 : !!t && !!n && t.startLineNumber === n.startLineNumber && t.startColumn === n.startColumn && t.endLineNumber === n.endLineNumber && t.endColumn === n.endColumn;
	}
	getEndPosition() {
		return P.getEndPosition(this);
	}
	static getEndPosition(t) {
		return new $t(t.endLineNumber, t.endColumn);
	}
	getStartPosition() {
		return P.getStartPosition(this);
	}
	static getStartPosition(t) {
		return new $t(t.startLineNumber, t.startColumn);
	}
	toString() {
		return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
	}
	setEndPosition(t, n) {
		return new P(this.startLineNumber, this.startColumn, t, n);
	}
	setStartPosition(t, n) {
		return new P(t, n, this.endLineNumber, this.endColumn);
	}
	collapseToStart() {
		return P.collapseToStart(this);
	}
	static collapseToStart(t) {
		return new P(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
	}
	collapseToEnd() {
		return P.collapseToEnd(this);
	}
	static collapseToEnd(t) {
		return new P(t.endLineNumber, t.endColumn, t.endLineNumber, t.endColumn);
	}
	delta(t) {
		return new P(this.startLineNumber + t, this.startColumn, this.endLineNumber + t, this.endColumn);
	}
	isSingleLine() {
		return this.startLineNumber === this.endLineNumber;
	}
	static fromPositions(t, n = t) {
		return new P(t.lineNumber, t.column, n.lineNumber, n.column);
	}
	static lift(t) {
		return t ? new P(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
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
			const i = t.startLineNumber | 0, s = n.startLineNumber | 0;
			if (i === s) {
				const o = t.startColumn | 0, a = n.startColumn | 0;
				if (o === a) {
					const l = t.endLineNumber | 0, u = n.endLineNumber | 0;
					return l === u ? (t.endColumn | 0) - (n.endColumn | 0) : l - u;
				}
				return o - a;
			}
			return i - s;
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
}, qe = class Z {
	static ofLength(t, n) {
		return new Z(t, t + n);
	}
	static fromRange(t) {
		return new Z(t.startLineNumber, t.endLineNumber);
	}
	static fromRangeInclusive(t) {
		return new Z(t.startLineNumber, t.endLineNumber + 1);
	}
	static {
		this.compareByStart = os((t) => t.startLineNumber, as);
	}
	static subtract(t, n) {
		return n ? t.startLineNumber < n.startLineNumber && n.endLineNumberExclusive < t.endLineNumberExclusive ? [new Z(t.startLineNumber, n.startLineNumber), new Z(n.endLineNumberExclusive, t.endLineNumberExclusive)] : n.startLineNumber <= t.startLineNumber && t.endLineNumberExclusive <= n.endLineNumberExclusive ? [] : n.endLineNumberExclusive < t.endLineNumberExclusive ? [new Z(Math.max(n.endLineNumberExclusive, t.startLineNumber), t.endLineNumberExclusive)] : [new Z(t.startLineNumber, Math.min(n.startLineNumber, t.endLineNumberExclusive))] : [t];
	}
	static joinMany(t) {
		if (t.length === 0) return [];
		let n = new di(t[0].slice());
		for (let i = 1; i < t.length; i++) n = n.getUnion(new di(t[i].slice()));
		return n.ranges;
	}
	static join(t) {
		if (t.length === 0) throw new F("lineRanges cannot be empty");
		let n = t[0].startLineNumber, i = t[0].endLineNumberExclusive;
		for (let s = 1; s < t.length; s++) n = Math.min(n, t[s].startLineNumber), i = Math.max(i, t[s].endLineNumberExclusive);
		return new Z(n, i);
	}
	static deserialize(t) {
		return new Z(t[0], t[1]);
	}
	constructor(t, n) {
		if (t > n) throw new F(`startLineNumber ${t} cannot be after endLineNumberExclusive ${n}`);
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
		return new Z(this.startLineNumber + t, this.endLineNumberExclusive + t);
	}
	deltaLength(t) {
		return new Z(this.startLineNumber, this.endLineNumberExclusive + t);
	}
	get length() {
		return this.endLineNumberExclusive - this.startLineNumber;
	}
	join(t) {
		return new Z(Math.min(this.startLineNumber, t.startLineNumber), Math.max(this.endLineNumberExclusive, t.endLineNumberExclusive));
	}
	toString() {
		return `[${this.startLineNumber},${this.endLineNumberExclusive})`;
	}
	intersect(t) {
		const n = Math.max(this.startLineNumber, t.startLineNumber), i = Math.min(this.endLineNumberExclusive, t.endLineNumberExclusive);
		if (n <= i) return new Z(n, i);
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
		return this.isEmpty ? null : new hi(this.startLineNumber, 1, this.endLineNumberExclusive - 1, Number.MAX_SAFE_INTEGER);
	}
	toExclusiveRange() {
		return new hi(this.startLineNumber, 1, this.endLineNumberExclusive, 1);
	}
	mapToLineArray(t) {
		const n = [];
		for (let i = this.startLineNumber; i < this.endLineNumberExclusive; i++) n.push(t(i));
		return n;
	}
	forEach(t) {
		for (let n = this.startLineNumber; n < this.endLineNumberExclusive; n++) t(n);
	}
	serialize() {
		return [this.startLineNumber, this.endLineNumberExclusive];
	}
	toOffsetRange() {
		return new V(this.startLineNumber - 1, this.endLineNumberExclusive - 1);
	}
	distanceToRange(t) {
		return this.endLineNumberExclusive <= t.startLineNumber ? t.startLineNumber - this.endLineNumberExclusive : t.endLineNumberExclusive <= this.startLineNumber ? this.startLineNumber - t.endLineNumberExclusive : 0;
	}
	distanceToLine(t) {
		return this.contains(t) ? 0 : t < this.startLineNumber ? this.startLineNumber - t : t - this.endLineNumberExclusive;
	}
	addMargin(t, n) {
		return new Z(this.startLineNumber - t, this.endLineNumberExclusive + n);
	}
}, di = class Je {
	constructor(t = []) {
		this._normalizedRanges = t;
	}
	get ranges() {
		return this._normalizedRanges;
	}
	addRange(t) {
		if (t.length === 0) return;
		const n = Gn(this._normalizedRanges, (s) => s.endLineNumberExclusive >= t.startLineNumber), i = Ft(this._normalizedRanges, (s) => s.startLineNumber <= t.endLineNumberExclusive) + 1;
		if (n === i) this._normalizedRanges.splice(n, 0, t);
		else if (n === i - 1) {
			const s = this._normalizedRanges[n];
			this._normalizedRanges[n] = s.join(t);
		} else {
			const s = this._normalizedRanges[n].join(this._normalizedRanges[i - 1]).join(t);
			this._normalizedRanges.splice(n, i - n, s);
		}
	}
	contains(t) {
		const n = Vn(this._normalizedRanges, (i) => i.startLineNumber <= t);
		return !!n && n.endLineNumberExclusive > t;
	}
	intersects(t) {
		const n = Vn(this._normalizedRanges, (i) => i.startLineNumber < t.endLineNumberExclusive);
		return !!n && n.endLineNumberExclusive > t.startLineNumber;
	}
	getUnion(t) {
		if (this._normalizedRanges.length === 0) return t;
		if (t._normalizedRanges.length === 0) return this;
		const n = [];
		let i = 0, s = 0, o = null;
		for (; i < this._normalizedRanges.length || s < t._normalizedRanges.length;) {
			let a = null;
			if (i < this._normalizedRanges.length && s < t._normalizedRanges.length) {
				const l = this._normalizedRanges[i], u = t._normalizedRanges[s];
				l.startLineNumber < u.startLineNumber ? (a = l, i++) : (a = u, s++);
			} else i < this._normalizedRanges.length ? (a = this._normalizedRanges[i], i++) : (a = t._normalizedRanges[s], s++);
			o === null ? o = a : o.endLineNumberExclusive >= a.startLineNumber ? o = new qe(o.startLineNumber, Math.max(o.endLineNumberExclusive, a.endLineNumberExclusive)) : (n.push(o), o = a);
		}
		return o !== null && n.push(o), new Je(n);
	}
	subtractFrom(t) {
		const n = Gn(this._normalizedRanges, (a) => a.endLineNumberExclusive >= t.startLineNumber), i = Ft(this._normalizedRanges, (a) => a.startLineNumber <= t.endLineNumberExclusive) + 1;
		if (n === i) return new Je([t]);
		const s = [];
		let o = t.startLineNumber;
		for (let a = n; a < i; a++) {
			const l = this._normalizedRanges[a];
			l.startLineNumber > o && s.push(new qe(o, l.startLineNumber)), o = l.endLineNumberExclusive;
		}
		return o < t.endLineNumberExclusive && s.push(new qe(o, t.endLineNumberExclusive)), new Je(s);
	}
	toString() {
		return this._normalizedRanges.map((t) => t.toString()).join(", ");
	}
	getIntersection(t) {
		const n = [];
		let i = 0, s = 0;
		for (; i < this._normalizedRanges.length && s < t._normalizedRanges.length;) {
			const o = this._normalizedRanges[i], a = t._normalizedRanges[s], l = o.intersect(a);
			l && !l.isEmpty && n.push(l), o.endLineNumberExclusive < a.endLineNumberExclusive ? i++ : s++;
		}
		return new Je(n);
	}
	getWithDelta(t) {
		return new Je(this._normalizedRanges.map((n) => n.delta(t)));
	}
}, oo = class {
	constructor(e) {
		this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
	}
	getCount() {
		return this.values.length;
	}
	insertValues(e, t) {
		e = Ye(e);
		const n = this.values, i = this.prefixSum, s = t.length;
		return s === 0 ? !1 : (this.values = new Uint32Array(n.length + s), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + s), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
	}
	setValue(e, t) {
		return e = Ye(e), t = Ye(t), this.values[e] === t ? !1 : (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
	}
	removeValues(e, t) {
		e = Ye(e), t = Ye(t);
		const n = this.values, i = this.prefixSum;
		if (e >= n.length) return !1;
		const s = n.length - e;
		return t >= s && (t = s), t === 0 ? !1 : (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(i.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
	}
	getTotalSum() {
		return this.values.length === 0 ? 0 : this._getPrefixSum(this.values.length - 1);
	}
	getPrefixSum(e) {
		return e < 0 ? 0 : (e = Ye(e), this._getPrefixSum(e));
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
		let t = 0, n = this.values.length - 1, i = 0, s = 0, o = 0;
		for (; t <= n;) if (i = t + (n - t) / 2 | 0, s = this.prefixSum[i], o = s - this.values[i], e < o) n = i - 1;
		else if (e >= s) t = i + 1;
		else break;
		return new ao(i, e - o);
	}
}, ao = class {
	constructor(e, t) {
		this.index = e, this.remainder = t, this._prefixSumIndexOfResultBrand = void 0, this.index = e, this.remainder = t;
	}
}, lo = class {
	constructor(e, t, n, i) {
		this._uri = e, this._lines = t, this._eol = n, this._versionId = i, this._lineStarts = null, this._cachedTextValue = null;
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
		for (const n of t) this._acceptDeleteRange(n.range), this._acceptInsertText(new $t(n.range.startLineNumber, n.range.startColumn), n.text);
		this._versionId = e.versionId, this._cachedTextValue = null;
	}
	_ensureLineStarts() {
		if (!this._lineStarts) {
			const e = this._eol.length, t = this._lines.length, n = new Uint32Array(t);
			for (let i = 0; i < t; i++) n[i] = this._lines[i].length + e;
			this._lineStarts = new oo(n);
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
		const n = t1(t);
		if (n.length === 1) {
			this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
			return;
		}
		n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
		const i = new Uint32Array(n.length - 1);
		for (let s = 1; s < n.length; s++) this._lines.splice(e.lineNumber + s - 1, 0, n[s]), i[s - 1] = n[s].length + this._eol.length;
		this._lineStarts && this._lineStarts.insertValues(e.lineNumber, i);
	}
}, Ce;
(function(e) {
	e[e.Unknown = 0] = "Unknown", e[e.Invalid = 3] = "Invalid", e[e.LF = 1] = "LF", e[e.CRLF = 2] = "CRLF";
})(Ce || (Ce = {}));
function xn(e) {
	let t = 0, n = 0, i = 0, s = Ce.Unknown;
	for (let o = 0, a = e.length; o < a; o++) {
		const l = e.charCodeAt(o);
		l === m.CarriageReturn ? (t === 0 && (n = o), t++, o + 1 < a && e.charCodeAt(o + 1) === m.LineFeed ? (s |= Ce.CRLF, o++) : s |= Ce.Invalid, i = o + 1) : l === m.LineFeed && (s |= Ce.LF, t === 0 && (n = o), t++, i = o + 1);
	}
	return t === 0 && (n = e.length), [
		t,
		n,
		e.length - i,
		s
	];
}
var fi;
(function(e) {
	e[e.Null = 0] = "Null", e[e.PlainText = 1] = "PlainText";
})(fi || (fi = {}));
var Q;
(function(e) {
	e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough";
})(Q || (Q = {}));
var Ie;
(function(e) {
	e[e.None = 0] = "None", e[e.DefaultForeground = 1] = "DefaultForeground", e[e.DefaultBackground = 2] = "DefaultBackground";
})(Ie || (Ie = {}));
var yn;
(function(e) {
	e[e.Other = 0] = "Other", e[e.Comment = 1] = "Comment", e[e.String = 2] = "String", e[e.RegEx = 3] = "RegEx";
})(yn || (yn = {}));
var z;
(function(e) {
	e[e.LANGUAGEID_MASK = 255] = "LANGUAGEID_MASK", e[e.TOKEN_TYPE_MASK = 768] = "TOKEN_TYPE_MASK", e[e.BALANCED_BRACKETS_MASK = 1024] = "BALANCED_BRACKETS_MASK", e[e.FONT_STYLE_MASK = 30720] = "FONT_STYLE_MASK", e[e.FOREGROUND_MASK = 16744448] = "FOREGROUND_MASK", e[e.BACKGROUND_MASK = 4278190080] = "BACKGROUND_MASK", e[e.ITALIC_MASK = 2048] = "ITALIC_MASK", e[e.BOLD_MASK = 4096] = "BOLD_MASK", e[e.UNDERLINE_MASK = 8192] = "UNDERLINE_MASK", e[e.STRIKETHROUGH_MASK = 16384] = "STRIKETHROUGH_MASK", e[e.SEMANTIC_USE_ITALIC = 1] = "SEMANTIC_USE_ITALIC", e[e.SEMANTIC_USE_BOLD = 2] = "SEMANTIC_USE_BOLD", e[e.SEMANTIC_USE_UNDERLINE = 4] = "SEMANTIC_USE_UNDERLINE", e[e.SEMANTIC_USE_STRIKETHROUGH = 8] = "SEMANTIC_USE_STRIKETHROUGH", e[e.SEMANTIC_USE_FOREGROUND = 16] = "SEMANTIC_USE_FOREGROUND", e[e.SEMANTIC_USE_BACKGROUND = 32] = "SEMANTIC_USE_BACKGROUND", e[e.LANGUAGEID_OFFSET = 0] = "LANGUAGEID_OFFSET", e[e.TOKEN_TYPE_OFFSET = 8] = "TOKEN_TYPE_OFFSET", e[e.BALANCED_BRACKETS_OFFSET = 10] = "BALANCED_BRACKETS_OFFSET", e[e.FONT_STYLE_OFFSET = 11] = "FONT_STYLE_OFFSET", e[e.FOREGROUND_OFFSET = 15] = "FOREGROUND_OFFSET", e[e.BACKGROUND_OFFSET = 24] = "BACKGROUND_OFFSET";
})(z || (z = {}));
var Pe = class {
	static getLanguageId(e) {
		return (e & z.LANGUAGEID_MASK) >>> z.LANGUAGEID_OFFSET;
	}
	static getTokenType(e) {
		return (e & z.TOKEN_TYPE_MASK) >>> z.TOKEN_TYPE_OFFSET;
	}
	static containsBalancedBrackets(e) {
		return (e & z.BALANCED_BRACKETS_MASK) !== 0;
	}
	static getFontStyle(e) {
		return (e & z.FONT_STYLE_MASK) >>> z.FONT_STYLE_OFFSET;
	}
	static getForeground(e) {
		return (e & z.FOREGROUND_MASK) >>> z.FOREGROUND_OFFSET;
	}
	static getBackground(e) {
		return (e & z.BACKGROUND_MASK) >>> z.BACKGROUND_OFFSET;
	}
	static getClassNameFromMetadata(e) {
		let t = "mtk" + this.getForeground(e);
		const n = this.getFontStyle(e);
		return n & Q.Italic && (t += " mtki"), n & Q.Bold && (t += " mtkb"), n & Q.Underline && (t += " mtku"), n & Q.Strikethrough && (t += " mtks"), t;
	}
	static getInlineStyleFromMetadata(e, t) {
		const n = this.getForeground(e), i = this.getFontStyle(e);
		let s = `color: ${t[n]};`;
		i & Q.Italic && (s += "font-style: italic;"), i & Q.Bold && (s += "font-weight: bold;");
		let o = "";
		return i & Q.Underline && (o += " underline"), i & Q.Strikethrough && (o += " line-through"), o && (s += `text-decoration:${o};`), s;
	}
	static getPresentationFromMetadata(e) {
		const t = this.getForeground(e), n = this.getFontStyle(e);
		return {
			foreground: t,
			italic: !!(n & Q.Italic),
			bold: !!(n & Q.Bold),
			underline: !!(n & Q.Underline),
			strikethrough: !!(n & Q.Strikethrough)
		};
	}
};
const _i = Object.create(null);
function r(e, t) {
	if (xr(t)) {
		const n = _i[t];
		if (n === void 0) throw new Error(`${e} references an unknown codicon: ${t}`);
		t = n;
	}
	return _i[e] = t, { id: e };
}
const uo = {
	add: r("add", 6e4),
	plus: r("plus", 6e4),
	gistNew: r("gist-new", 6e4),
	repoCreate: r("repo-create", 6e4),
	lightbulb: r("lightbulb", 60001),
	lightBulb: r("light-bulb", 60001),
	repo: r("repo", 60002),
	repoDelete: r("repo-delete", 60002),
	gistFork: r("gist-fork", 60003),
	repoForked: r("repo-forked", 60003),
	gitPullRequest: r("git-pull-request", 60004),
	gitPullRequestAbandoned: r("git-pull-request-abandoned", 60004),
	recordKeys: r("record-keys", 60005),
	keyboard: r("keyboard", 60005),
	tag: r("tag", 60006),
	gitPullRequestLabel: r("git-pull-request-label", 60006),
	tagAdd: r("tag-add", 60006),
	tagRemove: r("tag-remove", 60006),
	person: r("person", 60007),
	personFollow: r("person-follow", 60007),
	personOutline: r("person-outline", 60007),
	personFilled: r("person-filled", 60007),
	sourceControl: r("source-control", 60008),
	mirror: r("mirror", 60009),
	mirrorPublic: r("mirror-public", 60009),
	star: r("star", 60010),
	starAdd: r("star-add", 60010),
	starDelete: r("star-delete", 60010),
	starEmpty: r("star-empty", 60010),
	comment: r("comment", 60011),
	commentAdd: r("comment-add", 60011),
	alert: r("alert", 60012),
	warning: r("warning", 60012),
	search: r("search", 60013),
	searchSave: r("search-save", 60013),
	logOut: r("log-out", 60014),
	signOut: r("sign-out", 60014),
	logIn: r("log-in", 60015),
	signIn: r("sign-in", 60015),
	eye: r("eye", 60016),
	eyeUnwatch: r("eye-unwatch", 60016),
	eyeWatch: r("eye-watch", 60016),
	circleFilled: r("circle-filled", 60017),
	primitiveDot: r("primitive-dot", 60017),
	closeDirty: r("close-dirty", 60017),
	debugBreakpoint: r("debug-breakpoint", 60017),
	debugBreakpointDisabled: r("debug-breakpoint-disabled", 60017),
	debugHint: r("debug-hint", 60017),
	terminalDecorationSuccess: r("terminal-decoration-success", 60017),
	primitiveSquare: r("primitive-square", 60018),
	edit: r("edit", 60019),
	pencil: r("pencil", 60019),
	info: r("info", 60020),
	issueOpened: r("issue-opened", 60020),
	gistPrivate: r("gist-private", 60021),
	gitForkPrivate: r("git-fork-private", 60021),
	lock: r("lock", 60021),
	mirrorPrivate: r("mirror-private", 60021),
	close: r("close", 60022),
	removeClose: r("remove-close", 60022),
	x: r("x", 60022),
	repoSync: r("repo-sync", 60023),
	sync: r("sync", 60023),
	clone: r("clone", 60024),
	desktopDownload: r("desktop-download", 60024),
	beaker: r("beaker", 60025),
	microscope: r("microscope", 60025),
	vm: r("vm", 60026),
	deviceDesktop: r("device-desktop", 60026),
	file: r("file", 60027),
	more: r("more", 60028),
	ellipsis: r("ellipsis", 60028),
	kebabHorizontal: r("kebab-horizontal", 60028),
	mailReply: r("mail-reply", 60029),
	reply: r("reply", 60029),
	organization: r("organization", 60030),
	organizationFilled: r("organization-filled", 60030),
	organizationOutline: r("organization-outline", 60030),
	newFile: r("new-file", 60031),
	fileAdd: r("file-add", 60031),
	newFolder: r("new-folder", 60032),
	fileDirectoryCreate: r("file-directory-create", 60032),
	trash: r("trash", 60033),
	trashcan: r("trashcan", 60033),
	history: r("history", 60034),
	clock: r("clock", 60034),
	folder: r("folder", 60035),
	fileDirectory: r("file-directory", 60035),
	symbolFolder: r("symbol-folder", 60035),
	logoGithub: r("logo-github", 60036),
	markGithub: r("mark-github", 60036),
	github: r("github", 60036),
	terminal: r("terminal", 60037),
	console: r("console", 60037),
	repl: r("repl", 60037),
	zap: r("zap", 60038),
	symbolEvent: r("symbol-event", 60038),
	error: r("error", 60039),
	stop: r("stop", 60039),
	variable: r("variable", 60040),
	symbolVariable: r("symbol-variable", 60040),
	array: r("array", 60042),
	symbolArray: r("symbol-array", 60042),
	symbolModule: r("symbol-module", 60043),
	symbolPackage: r("symbol-package", 60043),
	symbolNamespace: r("symbol-namespace", 60043),
	symbolObject: r("symbol-object", 60043),
	symbolMethod: r("symbol-method", 60044),
	symbolFunction: r("symbol-function", 60044),
	symbolConstructor: r("symbol-constructor", 60044),
	symbolBoolean: r("symbol-boolean", 60047),
	symbolNull: r("symbol-null", 60047),
	symbolNumeric: r("symbol-numeric", 60048),
	symbolNumber: r("symbol-number", 60048),
	symbolStructure: r("symbol-structure", 60049),
	symbolStruct: r("symbol-struct", 60049),
	symbolParameter: r("symbol-parameter", 60050),
	symbolTypeParameter: r("symbol-type-parameter", 60050),
	symbolKey: r("symbol-key", 60051),
	symbolText: r("symbol-text", 60051),
	symbolReference: r("symbol-reference", 60052),
	goToFile: r("go-to-file", 60052),
	symbolEnum: r("symbol-enum", 60053),
	symbolValue: r("symbol-value", 60053),
	symbolRuler: r("symbol-ruler", 60054),
	symbolUnit: r("symbol-unit", 60054),
	activateBreakpoints: r("activate-breakpoints", 60055),
	archive: r("archive", 60056),
	arrowBoth: r("arrow-both", 60057),
	arrowDown: r("arrow-down", 60058),
	arrowLeft: r("arrow-left", 60059),
	arrowRight: r("arrow-right", 60060),
	arrowSmallDown: r("arrow-small-down", 60061),
	arrowSmallLeft: r("arrow-small-left", 60062),
	arrowSmallRight: r("arrow-small-right", 60063),
	arrowSmallUp: r("arrow-small-up", 60064),
	arrowUp: r("arrow-up", 60065),
	bell: r("bell", 60066),
	bold: r("bold", 60067),
	book: r("book", 60068),
	bookmark: r("bookmark", 60069),
	debugBreakpointConditionalUnverified: r("debug-breakpoint-conditional-unverified", 60070),
	debugBreakpointConditional: r("debug-breakpoint-conditional", 60071),
	debugBreakpointConditionalDisabled: r("debug-breakpoint-conditional-disabled", 60071),
	debugBreakpointDataUnverified: r("debug-breakpoint-data-unverified", 60072),
	debugBreakpointData: r("debug-breakpoint-data", 60073),
	debugBreakpointDataDisabled: r("debug-breakpoint-data-disabled", 60073),
	debugBreakpointLogUnverified: r("debug-breakpoint-log-unverified", 60074),
	debugBreakpointLog: r("debug-breakpoint-log", 60075),
	debugBreakpointLogDisabled: r("debug-breakpoint-log-disabled", 60075),
	briefcase: r("briefcase", 60076),
	broadcast: r("broadcast", 60077),
	browser: r("browser", 60078),
	bug: r("bug", 60079),
	calendar: r("calendar", 60080),
	caseSensitive: r("case-sensitive", 60081),
	check: r("check", 60082),
	checklist: r("checklist", 60083),
	chevronDown: r("chevron-down", 60084),
	chevronLeft: r("chevron-left", 60085),
	chevronRight: r("chevron-right", 60086),
	chevronUp: r("chevron-up", 60087),
	chromeClose: r("chrome-close", 60088),
	chromeMaximize: r("chrome-maximize", 60089),
	chromeMinimize: r("chrome-minimize", 60090),
	chromeRestore: r("chrome-restore", 60091),
	circleOutline: r("circle-outline", 60092),
	circle: r("circle", 60092),
	debugBreakpointUnverified: r("debug-breakpoint-unverified", 60092),
	terminalDecorationIncomplete: r("terminal-decoration-incomplete", 60092),
	circleSlash: r("circle-slash", 60093),
	circuitBoard: r("circuit-board", 60094),
	clearAll: r("clear-all", 60095),
	clippy: r("clippy", 60096),
	closeAll: r("close-all", 60097),
	cloudDownload: r("cloud-download", 60098),
	cloudUpload: r("cloud-upload", 60099),
	code: r("code", 60100),
	collapseAll: r("collapse-all", 60101),
	colorMode: r("color-mode", 60102),
	commentDiscussion: r("comment-discussion", 60103),
	creditCard: r("credit-card", 60105),
	dash: r("dash", 60108),
	dashboard: r("dashboard", 60109),
	database: r("database", 60110),
	debugContinue: r("debug-continue", 60111),
	debugDisconnect: r("debug-disconnect", 60112),
	debugPause: r("debug-pause", 60113),
	debugRestart: r("debug-restart", 60114),
	debugStart: r("debug-start", 60115),
	debugStepInto: r("debug-step-into", 60116),
	debugStepOut: r("debug-step-out", 60117),
	debugStepOver: r("debug-step-over", 60118),
	debugStop: r("debug-stop", 60119),
	debug: r("debug", 60120),
	deviceCameraVideo: r("device-camera-video", 60121),
	deviceCamera: r("device-camera", 60122),
	deviceMobile: r("device-mobile", 60123),
	diffAdded: r("diff-added", 60124),
	diffIgnored: r("diff-ignored", 60125),
	diffModified: r("diff-modified", 60126),
	diffRemoved: r("diff-removed", 60127),
	diffRenamed: r("diff-renamed", 60128),
	diff: r("diff", 60129),
	diffSidebyside: r("diff-sidebyside", 60129),
	discard: r("discard", 60130),
	editorLayout: r("editor-layout", 60131),
	emptyWindow: r("empty-window", 60132),
	exclude: r("exclude", 60133),
	extensions: r("extensions", 60134),
	eyeClosed: r("eye-closed", 60135),
	fileBinary: r("file-binary", 60136),
	fileCode: r("file-code", 60137),
	fileMedia: r("file-media", 60138),
	filePdf: r("file-pdf", 60139),
	fileSubmodule: r("file-submodule", 60140),
	fileSymlinkDirectory: r("file-symlink-directory", 60141),
	fileSymlinkFile: r("file-symlink-file", 60142),
	fileZip: r("file-zip", 60143),
	files: r("files", 60144),
	filter: r("filter", 60145),
	flame: r("flame", 60146),
	foldDown: r("fold-down", 60147),
	foldUp: r("fold-up", 60148),
	fold: r("fold", 60149),
	folderActive: r("folder-active", 60150),
	folderOpened: r("folder-opened", 60151),
	gear: r("gear", 60152),
	gift: r("gift", 60153),
	gistSecret: r("gist-secret", 60154),
	gist: r("gist", 60155),
	gitCommit: r("git-commit", 60156),
	gitCompare: r("git-compare", 60157),
	compareChanges: r("compare-changes", 60157),
	gitMerge: r("git-merge", 60158),
	githubAction: r("github-action", 60159),
	githubAlt: r("github-alt", 60160),
	globe: r("globe", 60161),
	grabber: r("grabber", 60162),
	graph: r("graph", 60163),
	gripper: r("gripper", 60164),
	heart: r("heart", 60165),
	home: r("home", 60166),
	horizontalRule: r("horizontal-rule", 60167),
	hubot: r("hubot", 60168),
	inbox: r("inbox", 60169),
	issueReopened: r("issue-reopened", 60171),
	issues: r("issues", 60172),
	italic: r("italic", 60173),
	jersey: r("jersey", 60174),
	json: r("json", 60175),
	bracket: r("bracket", 60175),
	kebabVertical: r("kebab-vertical", 60176),
	key: r("key", 60177),
	law: r("law", 60178),
	lightbulbAutofix: r("lightbulb-autofix", 60179),
	linkExternal: r("link-external", 60180),
	link: r("link", 60181),
	listOrdered: r("list-ordered", 60182),
	listUnordered: r("list-unordered", 60183),
	liveShare: r("live-share", 60184),
	loading: r("loading", 60185),
	location: r("location", 60186),
	mailRead: r("mail-read", 60187),
	mail: r("mail", 60188),
	markdown: r("markdown", 60189),
	megaphone: r("megaphone", 60190),
	mention: r("mention", 60191),
	milestone: r("milestone", 60192),
	gitPullRequestMilestone: r("git-pull-request-milestone", 60192),
	mortarBoard: r("mortar-board", 60193),
	move: r("move", 60194),
	multipleWindows: r("multiple-windows", 60195),
	mute: r("mute", 60196),
	noNewline: r("no-newline", 60197),
	note: r("note", 60198),
	octoface: r("octoface", 60199),
	openPreview: r("open-preview", 60200),
	package: r("package", 60201),
	paintcan: r("paintcan", 60202),
	pin: r("pin", 60203),
	play: r("play", 60204),
	run: r("run", 60204),
	plug: r("plug", 60205),
	preserveCase: r("preserve-case", 60206),
	preview: r("preview", 60207),
	project: r("project", 60208),
	pulse: r("pulse", 60209),
	question: r("question", 60210),
	quote: r("quote", 60211),
	radioTower: r("radio-tower", 60212),
	reactions: r("reactions", 60213),
	references: r("references", 60214),
	refresh: r("refresh", 60215),
	regex: r("regex", 60216),
	remoteExplorer: r("remote-explorer", 60217),
	remote: r("remote", 60218),
	remove: r("remove", 60219),
	replaceAll: r("replace-all", 60220),
	replace: r("replace", 60221),
	repoClone: r("repo-clone", 60222),
	repoForcePush: r("repo-force-push", 60223),
	repoPull: r("repo-pull", 60224),
	repoPush: r("repo-push", 60225),
	report: r("report", 60226),
	requestChanges: r("request-changes", 60227),
	rocket: r("rocket", 60228),
	rootFolderOpened: r("root-folder-opened", 60229),
	rootFolder: r("root-folder", 60230),
	rss: r("rss", 60231),
	ruby: r("ruby", 60232),
	saveAll: r("save-all", 60233),
	saveAs: r("save-as", 60234),
	save: r("save", 60235),
	screenFull: r("screen-full", 60236),
	screenNormal: r("screen-normal", 60237),
	searchStop: r("search-stop", 60238),
	server: r("server", 60240),
	settingsGear: r("settings-gear", 60241),
	settings: r("settings", 60242),
	shield: r("shield", 60243),
	smiley: r("smiley", 60244),
	sortPrecedence: r("sort-precedence", 60245),
	splitHorizontal: r("split-horizontal", 60246),
	splitVertical: r("split-vertical", 60247),
	squirrel: r("squirrel", 60248),
	starFull: r("star-full", 60249),
	starHalf: r("star-half", 60250),
	symbolClass: r("symbol-class", 60251),
	symbolColor: r("symbol-color", 60252),
	symbolConstant: r("symbol-constant", 60253),
	symbolEnumMember: r("symbol-enum-member", 60254),
	symbolField: r("symbol-field", 60255),
	symbolFile: r("symbol-file", 60256),
	symbolInterface: r("symbol-interface", 60257),
	symbolKeyword: r("symbol-keyword", 60258),
	symbolMisc: r("symbol-misc", 60259),
	symbolOperator: r("symbol-operator", 60260),
	symbolProperty: r("symbol-property", 60261),
	wrench: r("wrench", 60261),
	wrenchSubaction: r("wrench-subaction", 60261),
	symbolSnippet: r("symbol-snippet", 60262),
	tasklist: r("tasklist", 60263),
	telescope: r("telescope", 60264),
	textSize: r("text-size", 60265),
	threeBars: r("three-bars", 60266),
	thumbsdown: r("thumbsdown", 60267),
	thumbsup: r("thumbsup", 60268),
	tools: r("tools", 60269),
	triangleDown: r("triangle-down", 60270),
	triangleLeft: r("triangle-left", 60271),
	triangleRight: r("triangle-right", 60272),
	triangleUp: r("triangle-up", 60273),
	twitter: r("twitter", 60274),
	unfold: r("unfold", 60275),
	unlock: r("unlock", 60276),
	unmute: r("unmute", 60277),
	unverified: r("unverified", 60278),
	verified: r("verified", 60279),
	versions: r("versions", 60280),
	vmActive: r("vm-active", 60281),
	vmOutline: r("vm-outline", 60282),
	vmRunning: r("vm-running", 60283),
	watch: r("watch", 60284),
	whitespace: r("whitespace", 60285),
	wholeWord: r("whole-word", 60286),
	window: r("window", 60287),
	wordWrap: r("word-wrap", 60288),
	zoomIn: r("zoom-in", 60289),
	zoomOut: r("zoom-out", 60290),
	listFilter: r("list-filter", 60291),
	listFlat: r("list-flat", 60292),
	listSelection: r("list-selection", 60293),
	selection: r("selection", 60293),
	listTree: r("list-tree", 60294),
	debugBreakpointFunctionUnverified: r("debug-breakpoint-function-unverified", 60295),
	debugBreakpointFunction: r("debug-breakpoint-function", 60296),
	debugBreakpointFunctionDisabled: r("debug-breakpoint-function-disabled", 60296),
	debugStackframeActive: r("debug-stackframe-active", 60297),
	circleSmallFilled: r("circle-small-filled", 60298),
	debugStackframeDot: r("debug-stackframe-dot", 60298),
	terminalDecorationMark: r("terminal-decoration-mark", 60298),
	debugStackframe: r("debug-stackframe", 60299),
	debugStackframeFocused: r("debug-stackframe-focused", 60299),
	debugBreakpointUnsupported: r("debug-breakpoint-unsupported", 60300),
	symbolString: r("symbol-string", 60301),
	debugReverseContinue: r("debug-reverse-continue", 60302),
	debugStepBack: r("debug-step-back", 60303),
	debugRestartFrame: r("debug-restart-frame", 60304),
	debugAlt: r("debug-alt", 60305),
	callIncoming: r("call-incoming", 60306),
	callOutgoing: r("call-outgoing", 60307),
	menu: r("menu", 60308),
	expandAll: r("expand-all", 60309),
	feedback: r("feedback", 60310),
	gitPullRequestReviewer: r("git-pull-request-reviewer", 60310),
	groupByRefType: r("group-by-ref-type", 60311),
	ungroupByRefType: r("ungroup-by-ref-type", 60312),
	account: r("account", 60313),
	gitPullRequestAssignee: r("git-pull-request-assignee", 60313),
	bellDot: r("bell-dot", 60314),
	debugConsole: r("debug-console", 60315),
	library: r("library", 60316),
	output: r("output", 60317),
	runAll: r("run-all", 60318),
	syncIgnored: r("sync-ignored", 60319),
	pinned: r("pinned", 60320),
	githubInverted: r("github-inverted", 60321),
	serverProcess: r("server-process", 60322),
	serverEnvironment: r("server-environment", 60323),
	pass: r("pass", 60324),
	issueClosed: r("issue-closed", 60324),
	stopCircle: r("stop-circle", 60325),
	playCircle: r("play-circle", 60326),
	record: r("record", 60327),
	debugAltSmall: r("debug-alt-small", 60328),
	vmConnect: r("vm-connect", 60329),
	cloud: r("cloud", 60330),
	merge: r("merge", 60331),
	export: r("export", 60332),
	graphLeft: r("graph-left", 60333),
	magnet: r("magnet", 60334),
	notebook: r("notebook", 60335),
	redo: r("redo", 60336),
	checkAll: r("check-all", 60337),
	pinnedDirty: r("pinned-dirty", 60338),
	passFilled: r("pass-filled", 60339),
	circleLargeFilled: r("circle-large-filled", 60340),
	circleLarge: r("circle-large", 60341),
	circleLargeOutline: r("circle-large-outline", 60341),
	combine: r("combine", 60342),
	gather: r("gather", 60342),
	table: r("table", 60343),
	variableGroup: r("variable-group", 60344),
	typeHierarchy: r("type-hierarchy", 60345),
	typeHierarchySub: r("type-hierarchy-sub", 60346),
	typeHierarchySuper: r("type-hierarchy-super", 60347),
	gitPullRequestCreate: r("git-pull-request-create", 60348),
	runAbove: r("run-above", 60349),
	runBelow: r("run-below", 60350),
	notebookTemplate: r("notebook-template", 60351),
	debugRerun: r("debug-rerun", 60352),
	workspaceTrusted: r("workspace-trusted", 60353),
	workspaceUntrusted: r("workspace-untrusted", 60354),
	workspaceUnknown: r("workspace-unknown", 60355),
	terminalCmd: r("terminal-cmd", 60356),
	terminalDebian: r("terminal-debian", 60357),
	terminalLinux: r("terminal-linux", 60358),
	terminalPowershell: r("terminal-powershell", 60359),
	terminalTmux: r("terminal-tmux", 60360),
	terminalUbuntu: r("terminal-ubuntu", 60361),
	terminalBash: r("terminal-bash", 60362),
	arrowSwap: r("arrow-swap", 60363),
	copy: r("copy", 60364),
	personAdd: r("person-add", 60365),
	filterFilled: r("filter-filled", 60366),
	wand: r("wand", 60367),
	debugLineByLine: r("debug-line-by-line", 60368),
	inspect: r("inspect", 60369),
	layers: r("layers", 60370),
	layersDot: r("layers-dot", 60371),
	layersActive: r("layers-active", 60372),
	compass: r("compass", 60373),
	compassDot: r("compass-dot", 60374),
	compassActive: r("compass-active", 60375),
	azure: r("azure", 60376),
	issueDraft: r("issue-draft", 60377),
	gitPullRequestClosed: r("git-pull-request-closed", 60378),
	gitPullRequestDraft: r("git-pull-request-draft", 60379),
	debugAll: r("debug-all", 60380),
	debugCoverage: r("debug-coverage", 60381),
	runErrors: r("run-errors", 60382),
	folderLibrary: r("folder-library", 60383),
	debugContinueSmall: r("debug-continue-small", 60384),
	beakerStop: r("beaker-stop", 60385),
	graphLine: r("graph-line", 60386),
	graphScatter: r("graph-scatter", 60387),
	pieChart: r("pie-chart", 60388),
	bracketDot: r("bracket-dot", 60389),
	bracketError: r("bracket-error", 60390),
	lockSmall: r("lock-small", 60391),
	azureDevops: r("azure-devops", 60392),
	verifiedFilled: r("verified-filled", 60393),
	newline: r("newline", 60394),
	layout: r("layout", 60395),
	layoutActivitybarLeft: r("layout-activitybar-left", 60396),
	layoutActivitybarRight: r("layout-activitybar-right", 60397),
	layoutPanelLeft: r("layout-panel-left", 60398),
	layoutPanelCenter: r("layout-panel-center", 60399),
	layoutPanelJustify: r("layout-panel-justify", 60400),
	layoutPanelRight: r("layout-panel-right", 60401),
	layoutPanel: r("layout-panel", 60402),
	layoutSidebarLeft: r("layout-sidebar-left", 60403),
	layoutSidebarRight: r("layout-sidebar-right", 60404),
	layoutStatusbar: r("layout-statusbar", 60405),
	layoutMenubar: r("layout-menubar", 60406),
	layoutCentered: r("layout-centered", 60407),
	target: r("target", 60408),
	indent: r("indent", 60409),
	recordSmall: r("record-small", 60410),
	errorSmall: r("error-small", 60411),
	terminalDecorationError: r("terminal-decoration-error", 60411),
	arrowCircleDown: r("arrow-circle-down", 60412),
	arrowCircleLeft: r("arrow-circle-left", 60413),
	arrowCircleRight: r("arrow-circle-right", 60414),
	arrowCircleUp: r("arrow-circle-up", 60415),
	layoutSidebarRightOff: r("layout-sidebar-right-off", 60416),
	layoutPanelOff: r("layout-panel-off", 60417),
	layoutSidebarLeftOff: r("layout-sidebar-left-off", 60418),
	blank: r("blank", 60419),
	heartFilled: r("heart-filled", 60420),
	map: r("map", 60421),
	mapHorizontal: r("map-horizontal", 60421),
	foldHorizontal: r("fold-horizontal", 60421),
	mapFilled: r("map-filled", 60422),
	mapHorizontalFilled: r("map-horizontal-filled", 60422),
	foldHorizontalFilled: r("fold-horizontal-filled", 60422),
	circleSmall: r("circle-small", 60423),
	bellSlash: r("bell-slash", 60424),
	bellSlashDot: r("bell-slash-dot", 60425),
	commentUnresolved: r("comment-unresolved", 60426),
	gitPullRequestGoToChanges: r("git-pull-request-go-to-changes", 60427),
	gitPullRequestNewChanges: r("git-pull-request-new-changes", 60428),
	searchFuzzy: r("search-fuzzy", 60429),
	commentDraft: r("comment-draft", 60430),
	send: r("send", 60431),
	sparkle: r("sparkle", 60432),
	insert: r("insert", 60433),
	mic: r("mic", 60434),
	thumbsdownFilled: r("thumbsdown-filled", 60435),
	thumbsupFilled: r("thumbsup-filled", 60436),
	coffee: r("coffee", 60437),
	snake: r("snake", 60438),
	game: r("game", 60439),
	vr: r("vr", 60440),
	chip: r("chip", 60441),
	piano: r("piano", 60442),
	music: r("music", 60443),
	micFilled: r("mic-filled", 60444),
	repoFetch: r("repo-fetch", 60445),
	copilot: r("copilot", 60446),
	lightbulbSparkle: r("lightbulb-sparkle", 60447),
	robot: r("robot", 60448),
	sparkleFilled: r("sparkle-filled", 60449),
	diffSingle: r("diff-single", 60450),
	diffMultiple: r("diff-multiple", 60451),
	surroundWith: r("surround-with", 60452),
	share: r("share", 60453),
	gitStash: r("git-stash", 60454),
	gitStashApply: r("git-stash-apply", 60455),
	gitStashPop: r("git-stash-pop", 60456),
	vscode: r("vscode", 60457),
	vscodeInsiders: r("vscode-insiders", 60458),
	codeOss: r("code-oss", 60459),
	runCoverage: r("run-coverage", 60460),
	runAllCoverage: r("run-all-coverage", 60461),
	coverage: r("coverage", 60462),
	githubProject: r("github-project", 60463),
	mapVertical: r("map-vertical", 60464),
	foldVertical: r("fold-vertical", 60464),
	mapVerticalFilled: r("map-vertical-filled", 60465),
	foldVerticalFilled: r("fold-vertical-filled", 60465),
	goToSearch: r("go-to-search", 60466),
	percentage: r("percentage", 60467),
	sortPercentage: r("sort-percentage", 60467),
	attach: r("attach", 60468),
	goToEditingSession: r("go-to-editing-session", 60469),
	editSession: r("edit-session", 60470),
	codeReview: r("code-review", 60471),
	copilotWarning: r("copilot-warning", 60472),
	python: r("python", 60473),
	copilotLarge: r("copilot-large", 60474),
	copilotWarningLarge: r("copilot-warning-large", 60475),
	keyboardTab: r("keyboard-tab", 60476),
	copilotBlocked: r("copilot-blocked", 60477),
	copilotNotConnected: r("copilot-not-connected", 60478),
	flag: r("flag", 60479),
	lightbulbEmpty: r("lightbulb-empty", 60480),
	symbolMethodArrow: r("symbol-method-arrow", 60481),
	copilotUnavailable: r("copilot-unavailable", 60482),
	repoPinned: r("repo-pinned", 60483),
	keyboardTabAbove: r("keyboard-tab-above", 60484),
	keyboardTabBelow: r("keyboard-tab-below", 60485),
	gitPullRequestDone: r("git-pull-request-done", 60486),
	mcp: r("mcp", 60487),
	extensionsLarge: r("extensions-large", 60488),
	layoutPanelDock: r("layout-panel-dock", 60489),
	layoutSidebarLeftDock: r("layout-sidebar-left-dock", 60490),
	layoutSidebarRightDock: r("layout-sidebar-right-dock", 60491),
	copilotInProgress: r("copilot-in-progress", 60492),
	copilotError: r("copilot-error", 60493),
	copilotSuccess: r("copilot-success", 60494),
	chatSparkle: r("chat-sparkle", 60495),
	searchSparkle: r("search-sparkle", 60496),
	editSparkle: r("edit-sparkle", 60497),
	copilotSnooze: r("copilot-snooze", 60498),
	sendToRemoteAgent: r("send-to-remote-agent", 60499),
	commentDiscussionSparkle: r("comment-discussion-sparkle", 60500),
	chatSparkleWarning: r("chat-sparkle-warning", 60501),
	chatSparkleError: r("chat-sparkle-error", 60502),
	collection: r("collection", 60503),
	newCollection: r("new-collection", 60504),
	thinking: r("thinking", 60505),
	build: r("build", 60506),
	commentDiscussionQuote: r("comment-discussion-quote", 60507),
	cursor: r("cursor", 60508),
	eraser: r("eraser", 60509),
	fileText: r("file-text", 60510),
	quotes: r("quotes", 60512),
	rename: r("rename", 60513),
	runWithDeps: r("run-with-deps", 60514),
	debugConnected: r("debug-connected", 60515),
	strikethrough: r("strikethrough", 60516),
	openInProduct: r("open-in-product", 60517),
	indexZero: r("index-zero", 60518),
	agent: r("agent", 60519),
	editCode: r("edit-code", 60520),
	repoSelected: r("repo-selected", 60521),
	skip: r("skip", 60522),
	mergeInto: r("merge-into", 60523),
	gitBranchChanges: r("git-branch-changes", 60524),
	gitBranchStagedChanges: r("git-branch-staged-changes", 60525),
	gitBranchConflicts: r("git-branch-conflicts", 60526),
	gitBranch: r("git-branch", 60527),
	gitBranchCreate: r("git-branch-create", 60527),
	gitBranchDelete: r("git-branch-delete", 60527),
	searchLarge: r("search-large", 60528),
	terminalGitBash: r("terminal-git-bash", 60529),
	windowActive: r("window-active", 60530),
	forward: r("forward", 60531),
	download: r("download", 60532),
	clockface: r("clockface", 60533),
	unarchive: r("unarchive", 60534),
	sessionInProgress: r("session-in-progress", 60535),
	collectionSmall: r("collection-small", 60536),
	vmSmall: r("vm-small", 60537),
	cloudSmall: r("cloud-small", 60538),
	addSmall: r("add-small", 60539),
	removeSmall: r("remove-small", 60540),
	worktreeSmall: r("worktree-small", 60541),
	worktree: r("worktree", 60542)
}, co = {
	dialogError: r("dialog-error", "error"),
	dialogWarning: r("dialog-warning", "warning"),
	dialogInfo: r("dialog-info", "info"),
	dialogClose: r("dialog-close", "close"),
	treeItemExpanded: r("tree-item-expanded", "chevron-down"),
	treeFilterOnTypeOn: r("tree-filter-on-type-on", "list-filter"),
	treeFilterOnTypeOff: r("tree-filter-on-type-off", "list-selection"),
	treeFilterClear: r("tree-filter-clear", "close"),
	treeItemLoading: r("tree-item-loading", "loading"),
	menuSelection: r("menu-selection", "check"),
	menuSubmenu: r("menu-submenu", "chevron-right"),
	menuBarMore: r("menubar-more", "more"),
	scrollbarButtonLeft: r("scrollbar-button-left", "triangle-left"),
	scrollbarButtonRight: r("scrollbar-button-right", "triangle-right"),
	scrollbarButtonUp: r("scrollbar-button-up", "triangle-up"),
	scrollbarButtonDown: r("scrollbar-button-down", "triangle-down"),
	toolBarMore: r("toolbar-more", "more"),
	quickInputBack: r("quick-input-back", "arrow-left"),
	dropDownButton: r("drop-down-button", 60084),
	symbolCustomColor: r("symbol-customcolor", 60252),
	exportIcon: r("export", 60332),
	workspaceUnspecified: r("workspace-unspecified", 60355),
	newLine: r("newline", 60394),
	thumbsDownFilled: r("thumbsdown-filled", 60435),
	thumbsUpFilled: r("thumbsup-filled", 60436),
	gitFetch: r("git-fetch", 60445),
	lightbulbSparkleAutofix: r("lightbulb-sparkle-autofix", 60447),
	debugBreakpointPending: r("debug-breakpoint-pending", 60377)
}, w = {
	...uo,
	...co
};
var ho = class {
	constructor() {
		this._tokenizationSupports = /* @__PURE__ */ new Map(), this._factories = /* @__PURE__ */ new Map(), this._onDidChange = new de(), this.onDidChange = this._onDidChange.event, this._colorMap = null;
	}
	handleChange(e) {
		this._onDidChange.fire({
			changedLanguages: e,
			changedColorMap: !1
		});
	}
	register(e, t) {
		return this._tokenizationSupports.set(e, t), this.handleChange([e]), We(() => {
			this._tokenizationSupports.get(e) === t && (this._tokenizationSupports.delete(e), this.handleChange([e]));
		});
	}
	get(e) {
		return this._tokenizationSupports.get(e) || null;
	}
	registerFactory(e, t) {
		this._factories.get(e)?.dispose();
		const n = new fo(this, e, t);
		return this._factories.set(e, n), We(() => {
			const i = this._factories.get(e);
			!i || i !== n || (this._factories.delete(e), i.dispose());
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
		return this._colorMap && this._colorMap.length > Ie.DefaultBackground ? this._colorMap[Ie.DefaultBackground] : null;
	}
}, fo = class extends Ae {
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
}, An = class {
	constructor(e, t, n) {
		this.tokens = e, this.fontInfo = t, this.endState = n, this._encodedTokenizationResultBrand = void 0;
	}
}, gi;
(function(e) {
	e[e.Increase = 0] = "Increase", e[e.Decrease = 1] = "Decrease";
})(gi || (gi = {}));
var h;
(function(e) {
	e[e.Method = 0] = "Method", e[e.Function = 1] = "Function", e[e.Constructor = 2] = "Constructor", e[e.Field = 3] = "Field", e[e.Variable = 4] = "Variable", e[e.Class = 5] = "Class", e[e.Struct = 6] = "Struct", e[e.Interface = 7] = "Interface", e[e.Module = 8] = "Module", e[e.Property = 9] = "Property", e[e.Event = 10] = "Event", e[e.Operator = 11] = "Operator", e[e.Unit = 12] = "Unit", e[e.Value = 13] = "Value", e[e.Constant = 14] = "Constant", e[e.Enum = 15] = "Enum", e[e.EnumMember = 16] = "EnumMember", e[e.Keyword = 17] = "Keyword", e[e.Text = 18] = "Text", e[e.Color = 19] = "Color", e[e.File = 20] = "File", e[e.Reference = 21] = "Reference", e[e.Customcolor = 22] = "Customcolor", e[e.Folder = 23] = "Folder", e[e.TypeParameter = 24] = "TypeParameter", e[e.User = 25] = "User", e[e.Issue = 26] = "Issue", e[e.Tool = 27] = "Tool", e[e.Snippet = 28] = "Snippet";
})(h || (h = {}));
var mi;
(function(e) {
	const t = /* @__PURE__ */ new Map();
	t.set(h.Method, w.symbolMethod), t.set(h.Function, w.symbolFunction), t.set(h.Constructor, w.symbolConstructor), t.set(h.Field, w.symbolField), t.set(h.Variable, w.symbolVariable), t.set(h.Class, w.symbolClass), t.set(h.Struct, w.symbolStruct), t.set(h.Interface, w.symbolInterface), t.set(h.Module, w.symbolModule), t.set(h.Property, w.symbolProperty), t.set(h.Event, w.symbolEvent), t.set(h.Operator, w.symbolOperator), t.set(h.Unit, w.symbolUnit), t.set(h.Value, w.symbolValue), t.set(h.Enum, w.symbolEnum), t.set(h.Constant, w.symbolConstant), t.set(h.Enum, w.symbolEnum), t.set(h.EnumMember, w.symbolEnumMember), t.set(h.Keyword, w.symbolKeyword), t.set(h.Snippet, w.symbolSnippet), t.set(h.Text, w.symbolText), t.set(h.Color, w.symbolColor), t.set(h.File, w.symbolFile), t.set(h.Reference, w.symbolReference), t.set(h.Customcolor, w.symbolCustomColor), t.set(h.Folder, w.symbolFolder), t.set(h.TypeParameter, w.symbolTypeParameter), t.set(h.User, w.account), t.set(h.Issue, w.issues), t.set(h.Tool, w.tools);
	function n(a) {
		let l = t.get(a);
		return l || (console.info("No codicon found for CompletionItemKind " + a), l = w.symbolProperty), l;
	}
	e.toIcon = n;
	function i(a) {
		switch (a) {
			case h.Method: return L(798, "Method");
			case h.Function: return L(799, "Function");
			case h.Constructor: return L(800, "Constructor");
			case h.Field: return L(801, "Field");
			case h.Variable: return L(802, "Variable");
			case h.Class: return L(803, "Class");
			case h.Struct: return L(804, "Struct");
			case h.Interface: return L(805, "Interface");
			case h.Module: return L(806, "Module");
			case h.Property: return L(807, "Property");
			case h.Event: return L(808, "Event");
			case h.Operator: return L(809, "Operator");
			case h.Unit: return L(810, "Unit");
			case h.Value: return L(811, "Value");
			case h.Constant: return L(812, "Constant");
			case h.Enum: return L(813, "Enum");
			case h.EnumMember: return L(814, "Enum Member");
			case h.Keyword: return L(815, "Keyword");
			case h.Text: return L(816, "Text");
			case h.Color: return L(817, "Color");
			case h.File: return L(818, "File");
			case h.Reference: return L(819, "Reference");
			case h.Customcolor: return L(820, "Custom Color");
			case h.Folder: return L(821, "Folder");
			case h.TypeParameter: return L(822, "Type Parameter");
			case h.User: return L(823, "User");
			case h.Issue: return L(824, "Issue");
			case h.Tool: return L(825, "Tool");
			case h.Snippet: return L(826, "Snippet");
			default: return "";
		}
	}
	e.toLabel = i;
	const s = /* @__PURE__ */ new Map();
	s.set("method", h.Method), s.set("function", h.Function), s.set("constructor", h.Constructor), s.set("field", h.Field), s.set("variable", h.Variable), s.set("class", h.Class), s.set("struct", h.Struct), s.set("interface", h.Interface), s.set("module", h.Module), s.set("property", h.Property), s.set("event", h.Event), s.set("operator", h.Operator), s.set("unit", h.Unit), s.set("value", h.Value), s.set("constant", h.Constant), s.set("enum", h.Enum), s.set("enum-member", h.EnumMember), s.set("enumMember", h.EnumMember), s.set("keyword", h.Keyword), s.set("snippet", h.Snippet), s.set("text", h.Text), s.set("color", h.Color), s.set("file", h.File), s.set("reference", h.Reference), s.set("customcolor", h.Customcolor), s.set("folder", h.Folder), s.set("type-parameter", h.TypeParameter), s.set("typeParameter", h.TypeParameter), s.set("account", h.User), s.set("issue", h.Issue), s.set("tool", h.Tool);
	function o(a, l) {
		let u = s.get(a);
		return typeof u > "u" && !l && (u = h.Property), u;
	}
	e.fromString = o;
})(mi || (mi = {}));
var bi;
(function(e) {
	e[e.Deprecated = 1] = "Deprecated";
})(bi || (bi = {}));
var pi;
(function(e) {
	e[e.None = 0] = "None", e[e.KeepWhitespace = 1] = "KeepWhitespace", e[e.InsertAsSnippet = 4] = "InsertAsSnippet";
})(pi || (pi = {}));
var vi;
(function(e) {
	e[e.Word = 0] = "Word", e[e.Line = 1] = "Line", e[e.Suggest = 2] = "Suggest";
})(vi || (vi = {}));
var Ei;
(function(e) {
	e[e.Invoke = 0] = "Invoke", e[e.TriggerCharacter = 1] = "TriggerCharacter", e[e.TriggerForIncompleteCompletions = 2] = "TriggerForIncompleteCompletions";
})(Ei || (Ei = {}));
var wi;
(function(e) {
	e[e.Automatic = 0] = "Automatic", e[e.Explicit = 1] = "Explicit";
})(wi || (wi = {}));
var Li;
(function(e) {
	e[e.Code = 1] = "Code", e[e.Label = 2] = "Label";
})(Li || (Li = {}));
var yi;
(function(e) {
	e[e.Accepted = 0] = "Accepted", e[e.Rejected = 1] = "Rejected", e[e.Ignored = 2] = "Ignored";
})(yi || (yi = {}));
var Ai;
(function(e) {
	e[e.Invoke = 1] = "Invoke", e[e.Auto = 2] = "Auto";
})(Ai || (Ai = {}));
var Ti;
(function(e) {
	e[e.Automatic = 0] = "Automatic", e[e.PasteAs = 1] = "PasteAs";
})(Ti || (Ti = {}));
var Si;
(function(e) {
	e[e.Invoke = 1] = "Invoke", e[e.TriggerCharacter = 2] = "TriggerCharacter", e[e.ContentChange = 3] = "ContentChange";
})(Si || (Si = {}));
var Ri;
(function(e) {
	e[e.Text = 0] = "Text", e[e.Read = 1] = "Read", e[e.Write = 2] = "Write";
})(Ri || (Ri = {}));
var _;
(function(e) {
	e[e.File = 0] = "File", e[e.Module = 1] = "Module", e[e.Namespace = 2] = "Namespace", e[e.Package = 3] = "Package", e[e.Class = 4] = "Class", e[e.Method = 5] = "Method", e[e.Property = 6] = "Property", e[e.Field = 7] = "Field", e[e.Constructor = 8] = "Constructor", e[e.Enum = 9] = "Enum", e[e.Interface = 10] = "Interface", e[e.Function = 11] = "Function", e[e.Variable = 12] = "Variable", e[e.Constant = 13] = "Constant", e[e.String = 14] = "String", e[e.Number = 15] = "Number", e[e.Boolean = 16] = "Boolean", e[e.Array = 17] = "Array", e[e.Object = 18] = "Object", e[e.Key = 19] = "Key", e[e.Null = 20] = "Null", e[e.EnumMember = 21] = "EnumMember", e[e.Struct = 22] = "Struct", e[e.Event = 23] = "Event", e[e.Operator = 24] = "Operator", e[e.TypeParameter = 25] = "TypeParameter";
})(_ || (_ = {}));
_.Array, L(827, "array"), _.Boolean, L(828, "boolean"), _.Class, L(829, "class"), _.Constant, L(830, "constant"), _.Constructor, L(831, "constructor"), _.Enum, L(832, "enumeration"), _.EnumMember, L(833, "enumeration member"), _.Event, L(834, "event"), _.Field, L(835, "field"), _.File, L(836, "file"), _.Function, L(837, "function"), _.Interface, L(838, "interface"), _.Key, L(839, "key"), _.Method, L(840, "method"), _.Module, L(841, "module"), _.Namespace, L(842, "namespace"), _.Null, L(843, "null"), _.Number, L(844, "number"), _.Object, L(845, "object"), _.Operator, L(846, "operator"), _.Package, L(847, "package"), _.Property, L(848, "property"), _.String, L(849, "string"), _.Struct, L(850, "struct"), _.TypeParameter, L(851, "type parameter"), _.Variable, L(852, "variable");
var ki;
(function(e) {
	e[e.Deprecated = 1] = "Deprecated";
})(ki || (ki = {}));
var Ni;
(function(e) {
	const t = /* @__PURE__ */ new Map();
	t.set(_.File, w.symbolFile), t.set(_.Module, w.symbolModule), t.set(_.Namespace, w.symbolNamespace), t.set(_.Package, w.symbolPackage), t.set(_.Class, w.symbolClass), t.set(_.Method, w.symbolMethod), t.set(_.Property, w.symbolProperty), t.set(_.Field, w.symbolField), t.set(_.Constructor, w.symbolConstructor), t.set(_.Enum, w.symbolEnum), t.set(_.Interface, w.symbolInterface), t.set(_.Function, w.symbolFunction), t.set(_.Variable, w.symbolVariable), t.set(_.Constant, w.symbolConstant), t.set(_.String, w.symbolString), t.set(_.Number, w.symbolNumber), t.set(_.Boolean, w.symbolBoolean), t.set(_.Array, w.symbolArray), t.set(_.Object, w.symbolObject), t.set(_.Key, w.symbolKey), t.set(_.Null, w.symbolNull), t.set(_.EnumMember, w.symbolEnumMember), t.set(_.Struct, w.symbolStruct), t.set(_.Event, w.symbolEvent), t.set(_.Operator, w.symbolOperator), t.set(_.TypeParameter, w.symbolTypeParameter);
	function n(o) {
		let a = t.get(o);
		return a || (console.info("No codicon found for SymbolKind " + o), a = w.symbolProperty), a;
	}
	e.toIcon = n;
	const i = /* @__PURE__ */ new Map();
	i.set(_.File, h.File), i.set(_.Module, h.Module), i.set(_.Namespace, h.Module), i.set(_.Package, h.Module), i.set(_.Class, h.Class), i.set(_.Method, h.Method), i.set(_.Property, h.Property), i.set(_.Field, h.Field), i.set(_.Constructor, h.Constructor), i.set(_.Enum, h.Enum), i.set(_.Interface, h.Interface), i.set(_.Function, h.Function), i.set(_.Variable, h.Variable), i.set(_.Constant, h.Constant), i.set(_.String, h.Text), i.set(_.Number, h.Value), i.set(_.Boolean, h.Value), i.set(_.Array, h.Value), i.set(_.Object, h.Value), i.set(_.Key, h.Keyword), i.set(_.Null, h.Value), i.set(_.EnumMember, h.EnumMember), i.set(_.Struct, h.Struct), i.set(_.Event, h.Event), i.set(_.Operator, h.Operator), i.set(_.TypeParameter, h.TypeParameter);
	function s(o) {
		let a = i.get(o);
		return a === void 0 && (console.info("No completion kind found for SymbolKind " + o), a = h.File), a;
	}
	e.toCompletionKind = s;
})(Ni || (Ni = {}));
(class Re {
	static {
		this.Comment = new Re("comment");
	}
	static {
		this.Imports = new Re("imports");
	}
	static {
		this.Region = new Re("region");
	}
	static fromValue(t) {
		switch (t) {
			case "comment": return Re.Comment;
			case "imports": return Re.Imports;
			case "region": return Re.Region;
		}
		return new Re(t);
	}
	constructor(t) {
		this.value = t;
	}
});
var Oi;
(function(e) {
	e[e.AIGenerated = 1] = "AIGenerated";
})(Oi || (Oi = {}));
var Ii;
(function(e) {
	e[e.Invoke = 0] = "Invoke", e[e.Automatic = 1] = "Automatic";
})(Ii || (Ii = {}));
var Ui;
(function(e) {
	function t(n) {
		return !n || typeof n != "object" ? !1 : typeof n.id == "string" && typeof n.title == "string";
	}
	e.is = t;
})(Ui || (Ui = {}));
var Di;
(function(e) {
	e[e.Collapsed = 0] = "Collapsed", e[e.Expanded = 1] = "Expanded";
})(Di || (Di = {}));
var xi;
(function(e) {
	e[e.Unresolved = 0] = "Unresolved", e[e.Resolved = 1] = "Resolved";
})(xi || (xi = {}));
var Mi;
(function(e) {
	e[e.Current = 0] = "Current", e[e.Outdated = 1] = "Outdated";
})(Mi || (Mi = {}));
var Fi;
(function(e) {
	e[e.Editing = 0] = "Editing", e[e.Preview = 1] = "Preview";
})(Fi || (Fi = {}));
var Pi;
(function(e) {
	e[e.Published = 0] = "Published", e[e.Draft = 1] = "Draft";
})(Pi || (Pi = {}));
var Bi;
(function(e) {
	e[e.Type = 1] = "Type", e[e.Parameter = 2] = "Parameter";
})(Bi || (Bi = {}));
new ho();
var zi;
(function(e) {
	e[e.None = 0] = "None", e[e.Option = 1] = "Option", e[e.Default = 2] = "Default", e[e.Preferred = 3] = "Preferred";
})(zi || (zi = {}));
const _o = new class {
	clone() {
		return this;
	}
	equals(e) {
		return this === e;
	}
}();
function go(e, t) {
	const n = new Uint32Array(2);
	return n[0] = 0, n[1] = (e << z.LANGUAGEID_OFFSET | yn.Other << z.TOKEN_TYPE_OFFSET | Q.None << z.FONT_STYLE_OFFSET | Ie.DefaultForeground << z.FOREGROUND_OFFSET | Ie.DefaultBackground << z.BACKGROUND_OFFSET) >>> 0, new An(n, [], t === null ? _o : t);
}
var mo = class {
	constructor(e) {
		this._default = e, this._store = [];
	}
	get(e) {
		return e < this._store.length ? this._store[e] : this._default;
	}
	set(e, t) {
		for (; e >= this._store.length;) this._store[this._store.length] = this._default;
		this._store[e] = t;
	}
	replace(e, t, n) {
		if (e >= this._store.length) return;
		if (t === 0) {
			this.insert(e, n);
			return;
		} else if (n === 0) {
			this.delete(e, t);
			return;
		}
		const i = this._store.slice(0, e), s = this._store.slice(e + t), o = bo(n, this._default);
		this._store = i.concat(o, s);
	}
	delete(e, t) {
		t === 0 || e >= this._store.length || this._store.splice(e, t);
	}
	insert(e, t) {
		if (t === 0 || e >= this._store.length) return;
		const n = [];
		for (let i = 0; i < t; i++) n[i] = this._default;
		this._store = rs(this._store, e, n);
	}
};
function bo(e, t) {
	const n = [];
	for (let i = 0; i < e; i++) n[i] = t;
	return n;
}
new gn(() => new Uint8Array(256));
function It(e, t) {
	return e[t] * 2 ** 24 + e[t + 1] * 2 ** 16 + e[t + 2] * 2 ** 8 + e[t + 3];
}
function Ut(e, t, n) {
	e[n + 3] = t, t = t >>> 8, e[n + 2] = t, t = t >>> 8, e[n + 1] = t, t = t >>> 8, e[n] = t;
}
var qt = class Be {
	static createEmpty(t, n) {
		const i = Be.defaultTokenMetadata, s = new Uint32Array(2);
		return s[0] = t.length, s[1] = i, new Be(s, t, n);
	}
	static createFromTextAndMetadata(t, n) {
		let i = 0, s = "";
		const o = new Array();
		for (const { text: a, metadata: l } of t) o.push(i + a.length, l), i += a.length, s += a;
		return new Be(new Uint32Array(o), s, n);
	}
	static convertToEndOffset(t, n) {
		const i = (t.length >>> 1) - 1;
		for (let s = 0; s < i; s++) t[s << 1] = t[s + 1 << 1];
		t[i << 1] = n;
	}
	static findIndexInTokensArray(t, n) {
		if (t.length <= 2) return 0;
		let i = 0, s = (t.length >>> 1) - 1;
		for (; i < s;) {
			const o = i + Math.floor((s - i) / 2), a = t[o << 1];
			if (a === n) return o + 1;
			a < n ? i = o + 1 : a > n && (s = o);
		}
		return i;
	}
	static {
		this.defaultTokenMetadata = (Q.None << z.FONT_STYLE_OFFSET | Ie.DefaultForeground << z.FOREGROUND_OFFSET | Ie.DefaultBackground << z.BACKGROUND_OFFSET) >>> 0;
	}
	constructor(t, n, i) {
		this._lineTokensBrand = void 0, (t.length > 1 ? t[t.length - 2] : 0) !== n.length && ge(/* @__PURE__ */ new Error("Token length and text length do not match!")), this._tokens = t, this._tokensCount = this._tokens.length >>> 1, this._text = n, this.languageIdCodec = i;
	}
	getTextLength() {
		return this._text.length;
	}
	equals(t) {
		return t instanceof Be ? this.slicedEquals(t, 0, this._tokensCount) : !1;
	}
	slicedEquals(t, n, i) {
		if (this._text !== t._text || this._tokensCount !== t._tokensCount) return !1;
		const s = n << 1, o = s + (i << 1);
		for (let a = s; a < o; a++) if (this._tokens[a] !== t._tokens[a]) return !1;
		return !0;
	}
	getLineContent() {
		return this._text;
	}
	getCount() {
		return this._tokensCount;
	}
	getStartOffset(t) {
		return t > 0 ? this._tokens[t - 1 << 1] : 0;
	}
	getMetadata(t) {
		return this._tokens[(t << 1) + 1];
	}
	getLanguageId(t) {
		const n = this._tokens[(t << 1) + 1], i = Pe.getLanguageId(n);
		return this.languageIdCodec.decodeLanguageId(i);
	}
	getStandardTokenType(t) {
		const n = this._tokens[(t << 1) + 1];
		return Pe.getTokenType(n);
	}
	getForeground(t) {
		const n = this._tokens[(t << 1) + 1];
		return Pe.getForeground(n);
	}
	getClassName(t) {
		const n = this._tokens[(t << 1) + 1];
		return Pe.getClassNameFromMetadata(n);
	}
	getInlineStyle(t, n) {
		const i = this._tokens[(t << 1) + 1];
		return Pe.getInlineStyleFromMetadata(i, n);
	}
	getPresentation(t) {
		const n = this._tokens[(t << 1) + 1];
		return Pe.getPresentationFromMetadata(n);
	}
	getEndOffset(t) {
		return this._tokens[t << 1];
	}
	findTokenIndexAtOffset(t) {
		return Be.findIndexInTokensArray(this._tokens, t);
	}
	inflate() {
		return this;
	}
	sliceAndInflate(t, n, i) {
		return new po(this, t, n, i);
	}
	sliceZeroCopy(t) {
		return this.sliceAndInflate(t.start, t.endExclusive, 0);
	}
	withInserted(t) {
		if (t.length === 0) return this;
		let n = 0, i = 0, s = "";
		const o = new Array();
		let a = 0;
		for (;;) {
			const l = n < this._tokensCount ? this._tokens[n << 1] : -1, u = i < t.length ? t[i] : null;
			if (l !== -1 && (u === null || l <= u.offset)) {
				s += this._text.substring(a, l);
				const c = this._tokens[(n << 1) + 1];
				o.push(s.length, c), n++, a = l;
			} else if (u) {
				if (u.offset > a) {
					s += this._text.substring(a, u.offset);
					const c = this._tokens[(n << 1) + 1];
					o.push(s.length, c), a = u.offset;
				}
				s += u.text, o.push(s.length, u.tokenMetadata), i++;
			} else break;
		}
		return new Be(new Uint32Array(o), s, this.languageIdCodec);
	}
	getTokensInRange(t) {
		const n = new Eo(), i = this.findTokenIndexAtOffset(t.start), s = this.findTokenIndexAtOffset(t.endExclusive);
		for (let o = i; o <= s; o++) {
			const a = new V(this.getStartOffset(o), this.getEndOffset(o)).intersectionLength(t);
			a > 0 && n.add(a, this.getMetadata(o));
		}
		return n.build();
	}
	getTokenText(t) {
		const n = this.getStartOffset(t), i = this.getEndOffset(t);
		return this._text.substring(n, i);
	}
	forEach(t) {
		const n = this.getCount();
		for (let i = 0; i < n; i++) t(i);
	}
	toString() {
		let t = "";
		return this.forEach((n) => {
			t += `[${this.getTokenText(n)}]{${this.getClassName(n)}}`;
		}), t;
	}
}, po = class Ms {
	constructor(t, n, i, s) {
		this._source = t, this._startOffset = n, this._endOffset = i, this._deltaOffset = s, this._firstTokenIndex = t.findTokenIndexAtOffset(n), this.languageIdCodec = t.languageIdCodec, this._tokensCount = 0;
		for (let o = this._firstTokenIndex, a = t.getCount(); o < a && !(t.getStartOffset(o) >= i); o++) this._tokensCount++;
	}
	getMetadata(t) {
		return this._source.getMetadata(this._firstTokenIndex + t);
	}
	getLanguageId(t) {
		return this._source.getLanguageId(this._firstTokenIndex + t);
	}
	getLineContent() {
		return this._source.getLineContent().substring(this._startOffset, this._endOffset);
	}
	equals(t) {
		return t instanceof Ms ? this._startOffset === t._startOffset && this._endOffset === t._endOffset && this._deltaOffset === t._deltaOffset && this._source.slicedEquals(t._source, this._firstTokenIndex, this._tokensCount) : !1;
	}
	getCount() {
		return this._tokensCount;
	}
	getStandardTokenType(t) {
		return this._source.getStandardTokenType(this._firstTokenIndex + t);
	}
	getForeground(t) {
		return this._source.getForeground(this._firstTokenIndex + t);
	}
	getEndOffset(t) {
		const n = this._source.getEndOffset(this._firstTokenIndex + t);
		return Math.min(this._endOffset, n) - this._startOffset + this._deltaOffset;
	}
	getClassName(t) {
		return this._source.getClassName(this._firstTokenIndex + t);
	}
	getInlineStyle(t, n) {
		return this._source.getInlineStyle(this._firstTokenIndex + t, n);
	}
	getPresentation(t) {
		return this._source.getPresentation(this._firstTokenIndex + t);
	}
	findTokenIndexAtOffset(t) {
		return this._source.findTokenIndexAtOffset(t + this._startOffset - this._deltaOffset) - this._firstTokenIndex;
	}
	getTokenText(t) {
		const n = this._firstTokenIndex + t, i = this._source.getStartOffset(n), s = this._source.getEndOffset(n);
		let o = this._source.getTokenText(n);
		return i < this._startOffset && (o = o.substring(this._startOffset - i)), s > this._endOffset && (o = o.substring(0, o.length - (s - this._endOffset))), o;
	}
	forEach(t) {
		for (let n = 0; n < this.getCount(); n++) t(n);
	}
}, vo = class ht {
	static fromLineTokens(t) {
		const n = [];
		for (let i = 0; i < t.getCount(); i++) n.push(new Tn(t.getEndOffset(i) - t.getStartOffset(i), t.getMetadata(i)));
		return ht.create(n);
	}
	static create(t) {
		return new ht(t);
	}
	constructor(t) {
		this._tokenInfo = t;
	}
	toLineTokens(t, n) {
		return qt.createFromTextAndMetadata(this.map((i, s) => ({
			text: i.substring(t),
			metadata: s.metadata
		})), n);
	}
	forEach(t) {
		let n = 0;
		for (const i of this._tokenInfo) t(new V(n, n + i.length), i), n += i.length;
	}
	map(t) {
		const n = [];
		let i = 0;
		for (const s of this._tokenInfo) {
			const o = new V(i, i + s.length);
			n.push(t(o, s)), i += s.length;
		}
		return n;
	}
	slice(t) {
		const n = [];
		let i = 0;
		for (const s of this._tokenInfo) {
			const o = i, a = o + s.length;
			if (a > t.start) {
				if (o >= t.endExclusive) break;
				const l = Math.max(0, t.start - o), u = Math.max(0, a - t.endExclusive);
				n.push(new Tn(s.length - l - u, s.metadata));
			}
			i += s.length;
		}
		return ht.create(n);
	}
	append(t) {
		const n = this._tokenInfo.concat(t._tokenInfo);
		return ht.create(n);
	}
}, Tn = class {
	constructor(e, t) {
		this.length = e, this.metadata = t;
	}
}, Eo = class {
	constructor() {
		this._tokens = [];
	}
	add(e, t) {
		this._tokens.push(new Tn(e, t));
	}
	build() {
		return vo.create(this._tokens);
	}
};
const xe = new Uint32Array(0).buffer;
var we = class Sn {
	static deleteBeginning(t, n) {
		return t === null || t === xe ? t : Sn.delete(t, 0, n);
	}
	static deleteEnding(t, n) {
		if (t === null || t === xe) return t;
		const i = rt(t), s = i[i.length - 2];
		return Sn.delete(t, n, s);
	}
	static delete(t, n, i) {
		if (t === null || t === xe || n === i) return t;
		const s = rt(t), o = s.length >>> 1;
		if (n === 0 && s[s.length - 2] === i) return xe;
		const a = qt.findIndexInTokensArray(s, n), l = a > 0 ? s[a - 1 << 1] : 0;
		if (i < s[a << 1]) {
			const p = i - n;
			for (let k = a; k < o; k++) s[k << 1] -= p;
			return t;
		}
		let u, c;
		l !== n ? (s[a << 1] = n, u = a + 1 << 1, c = n) : (u = a << 1, c = l);
		const f = i - n;
		for (let p = a + 1; p < o; p++) {
			const k = s[p << 1] - f;
			k > c && (s[u++] = k, s[u++] = s[(p << 1) + 1], c = k);
		}
		if (u === s.length) return t;
		const d = new Uint32Array(u);
		return d.set(s.subarray(0, u), 0), d.buffer;
	}
	static append(t, n) {
		if (n === xe) return t;
		if (t === xe) return n;
		if (t === null) return t;
		if (n === null) return null;
		const i = rt(t), s = rt(n), o = s.length >>> 1, a = new Uint32Array(i.length + s.length);
		a.set(i, 0);
		let l = i.length;
		const u = i[i.length - 2];
		for (let c = 0; c < o; c++) a[l++] = s[c << 1] + u, a[l++] = s[(c << 1) + 1];
		return a.buffer;
	}
	static insert(t, n, i) {
		if (t === null || t === xe) return t;
		const s = rt(t), o = s.length >>> 1;
		let a = qt.findIndexInTokensArray(s, n);
		a > 0 && s[a - 1 << 1] === n && a--;
		for (let l = a; l < o; l++) s[l << 1] += i;
		return t;
	}
};
function rt(e) {
	return e instanceof Uint32Array ? e : new Uint32Array(e);
}
var Vi = class Fs {
	static deserialize(t, n, i) {
		const s = new Uint32Array(t.buffer), o = It(t, n);
		n += 4;
		const a = It(t, n);
		n += 4;
		const l = [];
		for (let u = 0; u < a; u++) {
			const c = It(t, n);
			n += 4, l.push(s.subarray(n / 4, n / 4 + c / 4)), n += c;
		}
		return i.push(new Fs(o, l)), n;
	}
	get startLineNumber() {
		return this._startLineNumber;
	}
	get endLineNumber() {
		return this._startLineNumber + this._tokens.length - 1;
	}
	constructor(t, n) {
		this._startLineNumber = t, this._tokens = n;
	}
	getLineRange() {
		return new qe(this._startLineNumber, this._startLineNumber + this._tokens.length);
	}
	getLineTokens(t) {
		return this._tokens[t - this._startLineNumber];
	}
	appendLineTokens(t) {
		this._tokens.push(t);
	}
	serializeSize() {
		let t = 0;
		t += 4, t += 4;
		for (let n = 0; n < this._tokens.length; n++) {
			const i = this._tokens[n];
			if (!(i instanceof Uint32Array)) throw new Error("Not supported!");
			t += 4, t += i.byteLength;
		}
		return t;
	}
	serialize(t, n) {
		Ut(t, this._startLineNumber, n), n += 4, Ut(t, this._tokens.length, n), n += 4;
		for (let i = 0; i < this._tokens.length; i++) {
			const s = this._tokens[i];
			if (!(s instanceof Uint32Array)) throw new Error("Not supported!");
			Ut(t, s.byteLength, n), n += 4, t.set(new Uint8Array(s.buffer), n), n += s.byteLength;
		}
		return n;
	}
	applyEdit(t, n) {
		const [i, s] = xn(n);
		this._acceptDeleteRange(t), this._acceptInsertText(new $t(t.startLineNumber, t.startColumn), i, s);
	}
	_acceptDeleteRange(t) {
		if (t.startLineNumber === t.endLineNumber && t.startColumn === t.endColumn) return;
		const n = t.startLineNumber - this._startLineNumber, i = t.endLineNumber - this._startLineNumber;
		if (i < 0) {
			const s = i - n;
			this._startLineNumber -= s;
			return;
		}
		if (!(n >= this._tokens.length)) {
			if (n < 0 && i >= this._tokens.length) {
				this._startLineNumber = 0, this._tokens = [];
				return;
			}
			if (n === i) {
				this._tokens[n] = we.delete(this._tokens[n], t.startColumn - 1, t.endColumn - 1);
				return;
			}
			if (n >= 0) if (this._tokens[n] = we.deleteEnding(this._tokens[n], t.startColumn - 1), i < this._tokens.length) {
				const s = we.deleteBeginning(this._tokens[i], t.endColumn - 1);
				this._tokens[n] = we.append(this._tokens[n], s), this._tokens.splice(n + 1, i - n);
			} else this._tokens[n] = we.append(this._tokens[n], null), this._tokens = this._tokens.slice(0, n + 1);
			else {
				const s = -n;
				this._startLineNumber -= s, this._tokens[i] = we.deleteBeginning(this._tokens[i], t.endColumn - 1), this._tokens = this._tokens.slice(i);
			}
		}
	}
	_acceptInsertText(t, n, i) {
		if (n === 0 && i === 0) return;
		const s = t.lineNumber - this._startLineNumber;
		if (s < 0) {
			this._startLineNumber += n;
			return;
		}
		if (!(s >= this._tokens.length)) {
			if (n === 0) {
				this._tokens[s] = we.insert(this._tokens[s], t.column - 1, i);
				return;
			}
			this._tokens[s] = we.deleteEnding(this._tokens[s], t.column - 1), this._tokens[s] = we.insert(this._tokens[s], t.column - 1, i), this._insertLines(t.lineNumber, n);
		}
	}
	_insertLines(t, n) {
		if (n === 0) return;
		const i = [];
		for (let s = 0; s < n; s++) i[s] = null;
		this._tokens = rs(this._tokens, t, i);
	}
}, wo = class {
	static deserialize(e) {
		let t = 0;
		const n = It(e, t);
		t += 4;
		const i = [];
		for (let s = 0; s < n; s++) t = Vi.deserialize(e, t, i);
		return i;
	}
	constructor() {
		this._tokens = [];
	}
	add(e, t) {
		if (this._tokens.length > 0) {
			const n = this._tokens[this._tokens.length - 1];
			if (n.endLineNumber + 1 === e) {
				n.appendLineTokens(t);
				return;
			}
		}
		this._tokens.push(new Vi(e, [t]));
	}
	finalize() {
		return this._tokens;
	}
	serialize() {
		const e = this._serializeSize(), t = new Uint8Array(e);
		return this._serialize(t), t;
	}
	_serializeSize() {
		let e = 0;
		e += 4;
		for (let t = 0; t < this._tokens.length; t++) e += this._tokens[t].serializeSize();
		return e;
	}
	_serialize(e) {
		let t = 0;
		Ut(e, this._tokens.length, t), t += 4;
		for (let n = 0; n < this._tokens.length; n++) t = this._tokens[n].serialize(e, t);
	}
}, Gi;
(function(e) {
	e[e.CHEAP_TOKENIZATION_LENGTH_LIMIT = 2048] = "CHEAP_TOKENIZATION_LENGTH_LIMIT";
})(Gi || (Gi = {}));
var Lo = class {
	constructor(e, t) {
		this.tokenizationSupport = t, this.initialState = this.tokenizationSupport.getInitialState(), this.store = new yo(e);
	}
	getStartState(e) {
		return this.store.getStartState(e, this.initialState);
	}
	getFirstInvalidLine() {
		return this.store.getFirstInvalidLine(this.initialState);
	}
}, yo = class {
	constructor(e) {
		this.lineCount = e, this._tokenizationStateStore = new Ao(), this._invalidEndStatesLineNumbers = new To(), this._invalidEndStatesLineNumbers.addRange(new V(1, e + 1));
	}
	getEndState(e) {
		return this._tokenizationStateStore.getEndState(e);
	}
	setEndState(e, t) {
		if (!t) throw new F("Cannot set null/undefined state");
		this._invalidEndStatesLineNumbers.delete(e);
		const n = this._tokenizationStateStore.setEndState(e, t);
		return n && e < this.lineCount && this._invalidEndStatesLineNumbers.addRange(new V(e + 1, e + 2)), n;
	}
	acceptChange(e, t) {
		this.lineCount += t - e.length, this._tokenizationStateStore.acceptChange(e, t), this._invalidEndStatesLineNumbers.addRangeAndResize(new V(e.startLineNumber, e.endLineNumberExclusive), t);
	}
	acceptChanges(e) {
		for (const t of e) {
			const [n] = xn(t.text);
			this.acceptChange(new qe(t.range.startLineNumber, t.range.endLineNumber + 1), n + 1);
		}
	}
	invalidateEndStateRange(e) {
		this._invalidEndStatesLineNumbers.addRange(new V(e.startLineNumber, e.endLineNumberExclusive));
	}
	getFirstInvalidEndStateLineNumber() {
		return this._invalidEndStatesLineNumbers.min;
	}
	getFirstInvalidEndStateLineNumberOrMax() {
		return this.getFirstInvalidEndStateLineNumber() || Number.MAX_SAFE_INTEGER;
	}
	allStatesValid() {
		return this._invalidEndStatesLineNumbers.min === null;
	}
	getStartState(e, t) {
		return e === 1 ? t : this.getEndState(e - 1);
	}
	getFirstInvalidLine(e) {
		const t = this.getFirstInvalidEndStateLineNumber();
		if (t === null) return null;
		const n = this.getStartState(t, e);
		if (!n) throw new F("Start state must be defined");
		return {
			lineNumber: t,
			startState: n
		};
	}
}, Ao = class {
	constructor() {
		this._lineEndStates = new mo(null);
	}
	getEndState(e) {
		return this._lineEndStates.get(e);
	}
	setEndState(e, t) {
		const n = this._lineEndStates.get(e);
		return n && n.equals(t) ? !1 : (this._lineEndStates.set(e, t), !0);
	}
	acceptChange(e, t) {
		let n = e.length;
		t > 0 && n > 0 && (n--, t--), this._lineEndStates.replace(e.startLineNumber, n, t);
	}
	acceptChanges(e) {
		for (const t of e) {
			const [n] = xn(t.text);
			this.acceptChange(new qe(t.range.startLineNumber, t.range.endLineNumber + 1), n + 1);
		}
	}
}, To = class {
	constructor() {
		this._ranges = [];
	}
	getRanges() {
		return this._ranges;
	}
	get min() {
		return this._ranges.length === 0 ? null : this._ranges[0].start;
	}
	removeMin() {
		if (this._ranges.length === 0) return null;
		const e = this._ranges[0];
		return e.start + 1 === e.endExclusive ? this._ranges.shift() : this._ranges[0] = new V(e.start + 1, e.endExclusive), e.start;
	}
	delete(e) {
		const t = this._ranges.findIndex((n) => n.contains(e));
		if (t !== -1) {
			const n = this._ranges[t];
			n.start === e ? n.endExclusive === e + 1 ? this._ranges.splice(t, 1) : this._ranges[t] = new V(e + 1, n.endExclusive) : n.endExclusive === e + 1 ? this._ranges[t] = new V(n.start, e) : this._ranges.splice(t, 1, new V(n.start, e), new V(e + 1, n.endExclusive));
		}
	}
	addRange(e) {
		V.addRange(e, this._ranges);
	}
	addRangeAndResize(e, t) {
		let n = 0;
		for (; !(n >= this._ranges.length || e.start <= this._ranges[n].endExclusive);) n++;
		let i = n;
		for (; !(i >= this._ranges.length || e.endExclusive < this._ranges[i].start);) i++;
		const s = t - e.length;
		for (let o = i; o < this._ranges.length; o++) this._ranges[o] = this._ranges[o].delta(s);
		if (n === i) {
			const o = new V(e.start, e.start + t);
			o.isEmpty || this._ranges.splice(n, 0, o);
		} else {
			const o = new V(Math.min(e.start, this._ranges[n].start), Math.max(e.endExclusive, this._ranges[i - 1].endExclusive) + s);
			o.isEmpty ? this._ranges.splice(n, i - n) : this._ranges.splice(n, i - n, o);
		}
	}
	toString() {
		return this._ranges.map((e) => e.toString()).join(" + ");
	}
}, So = class extends Ae {
	get onDidEncounterLanguage() {
		return this._onDidEncounterLanguage.event;
	}
	constructor(e, t, n, i, s, o, a) {
		super(), this._grammar = e, this._initialState = t, this._containsEmbeddedLanguages = n, this._createBackgroundTokenizer = i, this._backgroundTokenizerShouldOnlyVerifyTokens = s, this._reportTokenizationTime = o, this._reportSlowTokenization = a, this._seenLanguages = [], this._onDidEncounterLanguage = this._register(new de());
	}
	get backgroundTokenizerShouldOnlyVerifyTokens() {
		return this._backgroundTokenizerShouldOnlyVerifyTokens();
	}
	getInitialState() {
		return this._initialState;
	}
	tokenize(e, t, n) {
		throw new Error("Not supported!");
	}
	createBackgroundTokenizer(e, t) {
		if (this._createBackgroundTokenizer) return this._createBackgroundTokenizer(e, t);
	}
	tokenizeEncoded(e, t, n) {
		const i = Math.random() * 1e4 < 1, s = this._reportSlowTokenization || i, o = s ? new ds(!0) : void 0, a = this._grammar.tokenizeLine2(e, n, 500);
		if (s) {
			const u = o.elapsed();
			(i || u > 32) && this._reportTokenizationTime(u, e.length, i);
		}
		if (a.stoppedEarly) return console.warn(`Time limit reached when tokenizing line: ${e.substring(0, 100)}`), new An(a.tokens, a.fonts, n);
		if (this._containsEmbeddedLanguages) {
			const u = this._seenLanguages, c = a.tokens;
			for (let f = 0, d = c.length >>> 1; f < d; f++) {
				const p = c[(f << 1) + 1], k = Pe.getLanguageId(p);
				u[k] || (u[k] = !0, this._onDidEncounterLanguage.fire(k));
			}
		}
		let l;
		return n.equals(a.ruleStack) ? l = n : l = a.ruleStack, new An(a.tokens, a.fonts, l);
	}
}, Ro = class extends Ae {
	get backgroundTokenizerShouldOnlyVerifyTokens() {
		return this._actual.backgroundTokenizerShouldOnlyVerifyTokens;
	}
	constructor(e, t, n, i) {
		super(), this._encodedLanguageId = e, this._actual = t, this._maxTokenizationLineLength = i, this._register(Ns(this._maxTokenizationLineLength)), this._register(n);
	}
	getInitialState() {
		return this._actual.getInitialState();
	}
	tokenize(e, t, n) {
		throw new Error("Not supported!");
	}
	tokenizeEncoded(e, t, n) {
		return e.length >= this._maxTokenizationLineLength.get() ? go(this._encodedLanguageId, n) : this._actual.tokenizeEncoded(e, t, n);
	}
	createBackgroundTokenizer(e, t) {
		if (this._actual.createBackgroundTokenizer) return this._actual.createBackgroundTokenizer(e, t);
	}
};
function ko() {
	return (e) => ({
		fontFamily: e.fontFamily ?? "",
		fontSize: e.fontSize ?? "",
		lineHeight: e.lineHeight ?? 0
	});
}
var $i;
(function(e) {
	e[e.Flush = 1] = "Flush", e[e.LineChanged = 2] = "LineChanged", e[e.LinesDeleted = 3] = "LinesDeleted", e[e.LinesInserted = 4] = "LinesInserted", e[e.EOLChanged = 5] = "EOLChanged";
})($i || ($i = {}));
var No = class Ps {
	constructor(t = []) {
		this._annotations = [], this._annotations = t;
	}
	setAnnotations(t) {
		for (const n of t.annotations) {
			const i = this._getStartIndexOfIntersectingAnnotation(n.range.start), s = this._getEndIndexOfIntersectingAnnotation(n.range.endExclusive);
			n.annotation !== void 0 ? this._annotations.splice(i, s - i, {
				range: n.range,
				annotation: n.annotation
			}) : this._annotations.splice(i, s - i);
		}
	}
	getAnnotationsIntersecting(t) {
		const n = this._getStartIndexOfIntersectingAnnotation(t.start), i = this._getEndIndexOfIntersectingAnnotation(t.endExclusive);
		return this._annotations.slice(n, i);
	}
	_getStartIndexOfIntersectingAnnotation(t) {
		const n = $n(this._annotations.length, (s) => this._annotations[s].range.start - t);
		let i;
		if (n >= 0) i = n;
		else {
			const s = this._annotations[-(n + 2)]?.range;
			s && t >= s.start && t <= s.endExclusive ? i = -(n + 2) : i = -(n + 1);
		}
		return i;
	}
	_getEndIndexOfIntersectingAnnotation(t) {
		const n = $n(this._annotations.length, (s) => this._annotations[s].range.endExclusive - t);
		let i;
		if (n >= 0) i = n + 1;
		else {
			const s = this._annotations[-(n + 1)]?.range;
			s && t >= s.start && t <= s.endExclusive ? i = -n : i = -(n + 1);
		}
		return i;
	}
	getAllAnnotations() {
		return this._annotations.slice();
	}
	applyEdit(t) {
		const n = this._annotations.slice(), i = [], s = [];
		let o = 0;
		for (const a of t.replacements) {
			for (;;) {
				const u = n[0];
				if (!u) break;
				const c = u.range;
				if (c.endExclusive >= a.replaceRange.start) break;
				n.shift();
				const f = {
					range: c.delta(o),
					annotation: u.annotation
				};
				f.range.isEmpty ? s.push(f) : i.push(f);
			}
			const l = [];
			for (;;) {
				const u = n[0];
				if (!u || !u.range.intersectsOrTouches(a.replaceRange)) break;
				n.shift(), l.push(u);
			}
			for (let u = l.length - 1; u >= 0; u--) {
				const c = l[u];
				let f = c.range;
				const d = u === 0 && a.replaceRange.endExclusive > f.start && a.replaceRange.start < f.endExclusive, p = f.intersect(a.replaceRange).length;
				f = f.deltaEnd(-p + (d ? a.newText.length : 0));
				const k = f.start - a.replaceRange.start;
				k > 0 && (f = f.delta(-k)), !d && k >= 0 && (f = f.delta(a.newText.length)), f = f.delta(-(a.newText.length - a.replaceRange.length)), n.unshift({
					annotation: c.annotation,
					range: f
				});
			}
			o += a.newText.length - a.replaceRange.length;
		}
		for (;;) {
			const a = n[0];
			if (!a) break;
			n.shift();
			const l = {
				annotation: a.annotation,
				range: a.range.delta(o)
			};
			l.range.isEmpty ? s.push(l) : i.push(l);
		}
		return this._annotations = i, s;
	}
	clone() {
		return new Ps(this._annotations.slice());
	}
}, Oo = class Rn {
	static create(t) {
		return new Rn(t);
	}
	constructor(t) {
		this._annotations = t;
	}
	get annotations() {
		return this._annotations;
	}
	rebase(t) {
		const n = new No(this._annotations);
		n.applyEdit(t), this._annotations = n.getAllAnnotations();
	}
	serialize(t) {
		return this._annotations.map((n) => {
			const i = {
				start: n.range.start,
				endExclusive: n.range.endExclusive
			};
			return n.annotation ? {
				range: i,
				annotation: t(n.annotation)
			} : {
				range: i,
				annotation: void 0
			};
		});
	}
	static deserialize(t, n) {
		return new Rn(t.map((i) => {
			const s = new V(i.range.start, i.range.endExclusive);
			return i.annotation ? {
				range: s,
				annotation: n(i.annotation)
			} : {
				range: s,
				annotation: void 0
			};
		}));
	}
}, Io = class extends lo {
	constructor(e, t, n, i, s, o, a, l) {
		super(e, t, n, i), this._host = s, this._languageId = o, this._encodedLanguageId = a, this._tokenizerWithStateStore = null, this._isDisposed = !1, this._maxTokenizationLineLength = j1(this, -1), this._tokenizeDebouncer = new g1(() => this._tokenize(), 10), this._maxTokenizationLineLength.set(l, void 0), this._resetTokenization();
	}
	dispose() {
		this._isDisposed = !0, super.dispose();
	}
	onLanguageId(e, t) {
		this._languageId = e, this._encodedLanguageId = t, this._resetTokenization();
	}
	onEvents(e) {
		super.onEvents(e), this._tokenizerWithStateStore?.store.acceptChanges(e.changes), this._tokenizeDebouncer.schedule();
	}
	acceptMaxTokenizationLineLength(e) {
		this._maxTokenizationLineLength.set(e, void 0);
	}
	retokenize(e, t) {
		this._tokenizerWithStateStore && (this._tokenizerWithStateStore.store.invalidateEndStateRange(new qe(e, t)), this._tokenizeDebouncer.schedule());
	}
	async _resetTokenization() {
		this._tokenizerWithStateStore = null;
		const e = this._languageId, t = this._encodedLanguageId, n = await this._host.getOrCreateGrammar(e, t);
		if (!(this._isDisposed || e !== this._languageId || t !== this._encodedLanguageId || !n)) {
			if (n.grammar) {
				const i = new Ro(this._encodedLanguageId, new So(n.grammar, n.initialState, !1, void 0, () => !1, (s, o, a) => {
					this._host.reportTokenizationTime(s, e, n.sourceExtensionId, o, a);
				}, !1), Ae.None, this._maxTokenizationLineLength);
				this._tokenizerWithStateStore = new Lo(this._lines.length, i);
			} else this._tokenizerWithStateStore = null;
			this._tokenize();
		}
	}
	async _tokenize() {
		if (this._isDisposed || !this._tokenizerWithStateStore) return;
		if (!this._diffStateStacksRefEqFn) {
			const { diffStateStacksRefEq: t } = await import("./main-BOZvI764.js").then(function(n) {
				return n.main;
			});
			this._diffStateStacksRefEqFn = t;
		}
		const e = (/* @__PURE__ */ new Date()).getTime();
		for (;;) {
			let t = 0;
			const n = new wo(), i = new Uo(), s = [];
			for (;;) {
				const l = this._tokenizerWithStateStore.getFirstInvalidLine();
				if (l === null || t > 200) break;
				t++;
				const u = this._lines[l.lineNumber - 1], c = this._tokenizerWithStateStore.tokenizationSupport.tokenizeEncoded(u, !0, l.startState);
				if (this._tokenizerWithStateStore.store.setEndState(l.lineNumber, c.endState)) {
					const f = this._diffStateStacksRefEqFn(l.startState, c.endState);
					i.setState(l.lineNumber, f);
				} else i.setState(l.lineNumber, null);
				if (qt.convertToEndOffset(c.tokens, u.length), n.add(l.lineNumber, c.tokens), s.push(...this._getFontTokensUpdate(l.lineNumber, c)), (/* @__PURE__ */ new Date()).getTime() - e > 20) break;
			}
			if (t === 0) break;
			const o = Oo.create(s).serialize(ko()), a = i.getStateDeltas();
			if (this._host.setTokensAndStates(this._versionId, n.serialize(), o, a), (/* @__PURE__ */ new Date()).getTime() - e > 20) {
				Yi(() => this._tokenize());
				return;
			}
		}
	}
	_getFontTokensUpdate(e, t) {
		const n = [], i = this._getOffsetAtLineStart(e), s = this._getOffsetAtLineStart(e + 1), o = s > 0 ? s - 1 : 0;
		if (n.push({
			range: new V(i, o),
			annotation: void 0
		}), t.fontInfo.length) for (const a of t.fontInfo) {
			const l = this._getOffsetAtLineStart(e);
			n.push({
				range: new V(l + a.startIndex, l + a.endIndex),
				annotation: {
					fontFamily: a.fontFamily ?? void 0,
					fontSize: a.fontSize ?? void 0,
					lineHeight: a.lineHeight ?? void 0
				}
			});
		}
		return n;
	}
	_getOffsetAtLineStart(e) {
		return this._ensureLineStarts(), e - 1 > 0 ? this._lineStarts.getPrefixSum(e - 2) : 0;
	}
}, Uo = class {
	constructor() {
		this._lastStartLineNumber = -1, this._stateDeltas = [];
	}
	setState(e, t) {
		e === this._lastStartLineNumber + 1 ? this._stateDeltas[this._stateDeltas.length - 1].stateDeltas.push(t) : this._stateDeltas.push({
			startLineNumber: e,
			stateDeltas: [t]
		}), this._lastStartLineNumber = e;
	}
	getStateDeltas() {
		return this._stateDeltas;
	}
}, Do = class kn {
	static {
		this.CHANNEL_NAME = "textMateWorkerHost";
	}
	static getChannel(t) {
		return t.getChannel(kn.CHANNEL_NAME);
	}
	static setChannel(t, n) {
		t.setChannel(kn.CHANNEL_NAME, n);
	}
};
function xo(e) {
	return new Mo(e);
}
var Mo = class {
	constructor(e) {
		this._requestHandlerBrand = void 0, this._models = /* @__PURE__ */ new Map(), this._grammarCache = [], this._grammarFactory = Promise.resolve(null), this._host = Do.getChannel(e);
	}
	async $init(e) {
		const t = e.grammarDefinitions.map((n) => ({
			location: se.revive(n.location),
			language: n.language,
			scopeName: n.scopeName,
			embeddedLanguages: n.embeddedLanguages,
			tokenTypes: n.tokenTypes,
			injectTo: n.injectTo,
			balancedBracketSelectors: n.balancedBracketSelectors,
			unbalancedBracketSelectors: n.unbalancedBracketSelectors,
			sourceExtensionId: n.sourceExtensionId
		}));
		this._grammarFactory = this._loadTMGrammarFactory(t, e.onigurumaWASMUri);
	}
	async _loadTMGrammarFactory(e, t) {
		const n = await import("./main-BOZvI764.js").then(function(o) {
			return o.main;
		}), i = await import("./main2-k1ZxVDYg.js").then(function(o) {
			return o.main;
		}), s = await (await fetch(t)).arrayBuffer();
		return await i.loadWASM(s), new $r({
			logTrace: (o) => {},
			logError: (o, a) => console.error(o, a),
			readFile: (o) => this._host.$readFile(o)
		}, e, n, Promise.resolve({
			createOnigScanner: (o) => i.createOnigScanner(o),
			createOnigString: (o) => i.createOnigString(o)
		}));
	}
	$acceptNewModel(e) {
		const t = se.revive(e.uri), n = this;
		this._models.set(e.controllerId, new Io(t, e.lines, e.EOL, e.versionId, {
			async getOrCreateGrammar(i, s) {
				const o = await n._grammarFactory;
				return o ? (n._grammarCache[s] || (n._grammarCache[s] = o.createGrammar(i, s)), n._grammarCache[s]) : Promise.resolve(null);
			},
			setTokensAndStates(i, s, o, a) {
				n._host.$setTokensAndStates(e.controllerId, i, s, o, a);
			},
			reportTokenizationTime(i, s, o, a, l) {
				n._host.$reportTokenizationTime(i, s, o, a, l);
			}
		}, e.languageId, e.encodedLanguageId, e.maxTokenizationLineLength));
	}
	$acceptModelChanged(e, t) {
		this._models.get(e).onEvents(t);
	}
	$retokenize(e, t, n) {
		this._models.get(e).retokenize(t, n);
	}
	$acceptModelLanguageChanged(e, t, n) {
		this._models.get(e).onLanguageId(t, n);
	}
	$acceptRemovedModel(e) {
		const t = this._models.get(e);
		t && (t.dispose(), this._models.delete(e));
	}
	async $acceptTheme(e, t) {
		(await this._grammarFactory)?.setTheme(e, t);
	}
	$acceptMaxTokenizationLineLength(e, t) {
		this._models.get(e).acceptMaxTokenizationLineLength(t);
	}
};
const en = "default", Fo = "$initialize";
var ie;
(function(e) {
	e[e.Request = 0] = "Request", e[e.Reply = 1] = "Reply", e[e.SubscribeEvent = 2] = "SubscribeEvent", e[e.Event = 3] = "Event", e[e.UnsubscribeEvent = 4] = "UnsubscribeEvent";
})(ie || (ie = {}));
var Po = class {
	constructor(e, t, n, i, s) {
		this.vsWorker = e, this.req = t, this.channel = n, this.method = i, this.args = s, this.type = ie.Request;
	}
}, qi = class {
	constructor(e, t, n, i) {
		this.vsWorker = e, this.seq = t, this.res = n, this.err = i, this.type = ie.Reply;
	}
}, Bo = class {
	constructor(e, t, n, i, s) {
		this.vsWorker = e, this.req = t, this.channel = n, this.eventName = i, this.arg = s, this.type = ie.SubscribeEvent;
	}
}, zo = class {
	constructor(e, t, n) {
		this.vsWorker = e, this.req = t, this.event = n, this.type = ie.Event;
	}
}, Vo = class {
	constructor(e, t) {
		this.vsWorker = e, this.req = t, this.type = ie.UnsubscribeEvent;
	}
}, Go = class {
	constructor(e) {
		this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null), this._pendingEmitters = /* @__PURE__ */ new Map(), this._pendingEvents = /* @__PURE__ */ new Map();
	}
	setWorkerId(e) {
		this._workerId = e;
	}
	async sendMessage(e, t, n) {
		const i = String(++this._lastSentReq);
		return new Promise((s, o) => {
			this._pendingReplies[i] = {
				resolve: s,
				reject: o
			}, this._send(new Po(this._workerId, i, e, t, n));
		});
	}
	listen(e, t, n) {
		let i = null;
		const s = new de({
			onWillAddFirstListener: () => {
				i = String(++this._lastSentReq), this._pendingEmitters.set(i, s), this._send(new Bo(this._workerId, i, e, t, n));
			},
			onDidRemoveLastListener: () => {
				this._pendingEmitters.delete(i), this._send(new Vo(this._workerId, i)), i = null;
			}
		});
		return s.event;
	}
	handleMessage(e) {
		!e || !e.vsWorker || this._workerId !== -1 && e.vsWorker !== this._workerId || this._handleMessage(e);
	}
	createProxyToRemoteChannel(e, t) {
		return new Proxy(Object.create(null), { get: (n, i) => (typeof i == "string" && !n[i] && (zs(i) ? n[i] = (s) => this.listen(e, i, s) : Bs(i) ? n[i] = this.listen(e, i, void 0) : i.charCodeAt(0) === m.DollarSign && (n[i] = async (...s) => (await t?.(), this.sendMessage(e, i, s)))), n[i]) });
	}
	_handleMessage(e) {
		switch (e.type) {
			case ie.Reply: return this._handleReplyMessage(e);
			case ie.Request: return this._handleRequestMessage(e);
			case ie.SubscribeEvent: return this._handleSubscribeEventMessage(e);
			case ie.Event: return this._handleEventMessage(e);
			case ie.UnsubscribeEvent: return this._handleUnsubscribeEventMessage(e);
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
				const i = /* @__PURE__ */ new Error();
				i.name = e.err.name, i.message = e.err.message, i.stack = e.err.stack, n = i;
			}
			t.reject(n);
			return;
		}
		t.resolve(e.res);
	}
	_handleRequestMessage(e) {
		const t = e.req;
		this._handler.handleMessage(e.channel, e.method, e.args).then((n) => {
			this._send(new qi(this._workerId, t, n, void 0));
		}, (n) => {
			n.detail instanceof Error && (n.detail = on(n.detail)), this._send(new qi(this._workerId, t, void 0, on(n)));
		});
	}
	_handleSubscribeEventMessage(e) {
		const t = e.req, n = this._handler.handleEvent(e.channel, e.eventName, e.arg)((i) => {
			this._send(new zo(this._workerId, t, i));
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
		if (e.type === ie.Request) for (let n = 0; n < e.args.length; n++) {
			const i = e.args[n];
			i instanceof ArrayBuffer && t.push(i);
		}
		else e.type === ie.Reply && e.res instanceof ArrayBuffer && t.push(e.res);
		this._handler.sendMessage(e, t);
	}
};
function Bs(e) {
	return e[0] === "o" && e[1] === "n" && ps(e.charCodeAt(2));
}
function zs(e) {
	return /^onDynamic/.test(e) && ps(e.charCodeAt(9));
}
var $o = class {
	constructor(e, t) {
		this._localChannels = /* @__PURE__ */ new Map(), this._remoteChannels = /* @__PURE__ */ new Map(), this._protocol = new Go({
			sendMessage: (n, i) => {
				e(n, i);
			},
			handleMessage: (n, i, s) => this._handleMessage(n, i, s),
			handleEvent: (n, i, s) => this._handleEvent(n, i, s)
		}), this.requestHandler = t(this);
	}
	onmessage(e) {
		this._protocol.handleMessage(e);
	}
	_handleMessage(e, t, n) {
		if (e === en && t === Fo) return this.initialize(n[0]);
		const i = e === en ? this.requestHandler : this._localChannels.get(e);
		if (!i) return Promise.reject(/* @__PURE__ */ new Error(`Missing channel ${e} on worker thread`));
		const s = i[t];
		if (typeof s != "function") return Promise.reject(/* @__PURE__ */ new Error(`Missing method ${t} on worker thread channel ${e}`));
		try {
			return Promise.resolve(s.apply(i, n));
		} catch (o) {
			return Promise.reject(o);
		}
	}
	_handleEvent(e, t, n) {
		const i = e === en ? this.requestHandler : this._localChannels.get(e);
		if (!i) throw new Error(`Missing channel ${e} on worker thread`);
		if (zs(t)) {
			const s = i[t];
			if (typeof s != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
			const o = s.call(i, n);
			if (typeof o != "function") throw new Error(`Missing dynamic event ${t} on request handler.`);
			return o;
		}
		if (Bs(t)) {
			const s = i[t];
			if (typeof s != "function") throw new Error(`Missing event ${t} on request handler.`);
			return s;
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
let Nn = !1;
function qo(e) {
	if (Nn) throw new Error("WebWorker already initialized!");
	Nn = !0;
	const t = new $o((n) => globalThis.postMessage(n), (n) => e(n));
	return globalThis.onmessage = (n) => {
		t.onmessage(n.data);
	}, t;
}
function Wo(e) {
	globalThis.onmessage = (t) => {
		Nn || qo(e);
	};
}
Wo(xo);
