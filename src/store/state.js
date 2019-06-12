export default {
  loginInfo: {
    mobile: '',
    loginToken: ''
  },
  userInfo: { // 用户信息
    id: '',
    display_name: '',
    nickname: '',
    email: '',
    phone_number: '',
    api_ln: '',
    activated: true,
    invite: '',
    notice: 0,
    valid_account: [],
    omt: {},
    stat: {
      trade_count: 0,
      good_count: 0,
      good_rate: '0'
    },
    default_collection: {}
  },
  myAds: {
    list: []
  },
  deposit: {
    account: [],
    deposit_channels: {},
    deposits_history: []
  },
  withdraw: {
    default_source_id: '',
    fund_sources: [],
    withdraw_channels: {},
    withdraws: []
  },
  bankList: [],
  countryList: [],
  collectionList: [],
  userToken: null, // 登录后header必携带
  axiosCancel: {}, // axios的CancelToken
  device: 0, // 设备 0--PC端 1--手机端,
  isFirstLogin: 1
}
