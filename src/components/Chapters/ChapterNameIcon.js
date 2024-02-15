import styled from 'styled-components';
const CONTENT = {
  59: '900',
  60: '901',
  48: '902',
  1: '904',
  2: '905',
  3: '906',
  4: '907',
  5: '908',
  38: '909',
  39: '90a',
  6: '90b',
  7: '90c',
  8: '90d',
  9: '90e',
  10: '90f',
  11: '910',
  12: '911',
  13: '912',
  14: '913',
  15: '914',
  16: '915',
  17: '916',
  18: '917',
  19: '918',
  20: '919',
  21: '91a',
  22: '91b',
  23: '91c',
  24: '91d',
  25: '91e',
  26: '91f',
  27: '920',
  28: '921',
  29: '922',
  30: '923',
  31: '924',
  32: '925',
  33: '926',
  40: '927',
  41: '928',
  42: '929',
  43: '92a',
  44: '92b',
  45: '92c',
  46: '92d',
  34: '92e',
  35: '92f',
  36: '930',
  37: '931',
  47: '932',
  49: '933',
  50: '934',
  51: '935',
  52: '936',
  53: '937',
  54: '938',
  55: '939',
  56: '93a',
  57: '93b',
  58: '93c',
  79: '93d',
  80: '93e',
  81: '93f',
  82: '940',
  61: '941',
  62: '942',
  63: '943',
  64: '944',
  65: '945',
  66: '946',
  67: '947',
  68: '948',
  69: '949',
  70: '94a',
  71: '94b',
  72: '94c',
  73: '94d',
  74: '94e',
  75: '94f',
  76: '950',
  77: '951',
  78: '952',
  83: '953',
  84: '954',
  85: '955',
  86: '956',
  87: '957',
  88: '958',
  89: '959',
  90: '95a',
  91: '95b',
  92: '95c',
  93: '95d',
  94: '95e',
  95: '95f',
  96: '960',
  97: '961',
  98: '962',
  99: '963',
  100: '964',
  101: '965',
  102: '966',
  103: '967',
  104: '968',
  105: '969',
  106: '96a',
  107: '96b',
  108: '96c',
  109: '96d',
  110: '96e',
  111: '96f',
  112: '970',
  113: '971',
  114: '972',
};
export default styled.span.attrs(({ color }) => ({ style: { color } }))`
  font-family: 'surah_names' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  font-size: 40px;
  float: right;
  transition: color .5s ease;
  ${'' /* color: #672CBC; */}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  &:before {
    content: '${({ id, size }) => String.raw`\e${CONTENT[id] || '903'}`}';
  }
`;
