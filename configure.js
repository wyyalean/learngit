export default {
  DEFAULT_LANGUAGE: 'zh-HK',
  CHAT_TIMEOUT: 90000,
  ACTIVITIES_URL: '/hc/api/internal/recent_activities',
  axios_TIMEOUT: 10000,
  axios_BASEURL: 'http://192.168.2.48:8081/',
  ZENDESK_DOMAIN_URL: '/',
  CONF_PAYMENT_LIST: [
    'alipay',
    'bank',
    'local',
  ],
  CONF_DECIMAL_ASSET: 8,
  CONF_DECIMAL_BASE: 4,
  CONF_DECIMAL_LEGAL: 2,
  CONF_DECIMAL_MAX: 16,
  CONF_CURRENCY_IMAGE_LIST: {
   
  },
  CONF_DIGITAL_CURRENCY_LIST: [
    {
      currency: 'dai',
      targetCurrency: 'usd',
      buyLimit: 0,
      sellLimit: 50,
    },
    {
      currency: 'eth',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 0.01,
    },
    {
      currency: 'omt',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 3000,
    },
    {
      currency: 'ring',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 1000,
    },
    {
      currency: 'kton',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 5,
    },
    {
      currency: 'gold',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 5,
    },
    {
      currency: 'wood',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 5,
    },
    {
      currency: 'hho',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 5,
    },
    {
      currency: 'fire',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 5,
    },
    {
      currency: 'sioo',
      targetCurrency: 'dai',
      buyLimit: 50,
      sellLimit: 5,
    },
  ],

  qrCode_invite: {
    left: 260,
    top: 751,
    size: 230,
    multiple: 4,
  },
  qrCode_adShare: {
    left: 132,
    top: 410,
    size: 110,
    multiple: 4,
  },
  postfixImg: '',
  HOME_CAROUSEL: {
    defaultIndex: 1,
    speed: 5000,
    list: [],
  },
  LIST_NUMBER_PER_PAGE: 20,

  
};
