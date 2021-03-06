export const DEFAULT_CVC_LENGTH = 3
export const DEFAULT_ZIP_LENGTH = 5
export const DEFAULT_CARD_FORMAT = /(\d{1,4})/g
export const DEFAULT_CARD_TYPE = 'VISA'
export const REGEX_FOR_NUMBER = /^-?\d*\.?\d*$/

export const CARD_TYPES = {
  amex: {
    name: 'Amex',
    color: 'green'
  },
  visa: {
    name: 'Visa',
    color: 'lime'
  },
  diners: {
    name: 'Diners',
    color: 'orange'
  },
  discover: {
    name: 'Discover',
    color: 'purple'
  },
  jcb: {
    name: 'Jcb',
    color: 'red'
  },
  jcb15: {
    name: 'Jcb',
    color: 'red'
  },
  maestro: {
    name: 'Maestro',
    color: 'yellow'
  },
  mastercard: {
    name: 'Mastercard',
    color: 'lightblue'
  },
  unionpay: {
    name: 'Unipay',
    color: 'cyan'
  }
}

export const CARD_TYPE_TO_IMAGE_MAPPER = {
  'VISA': 'visa.png',
  'MASTERCARD': 'mastercard.png',
  'AMEX': 'amex.png',
  'MAESTRO': 'amex.png',
  'RUPAY': 'amex.png',
  'JCB': 'jcb.png',
  'UNIONPAY': 'unionpay.png',
  'DINERS': 'dinersclub.png'
}