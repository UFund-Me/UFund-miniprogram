const get = (url, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      success: res => {
        resolve(res.data)
      },
      fail: reject
    })
  })
}

const post = (url, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: 'POST',
      success: res => {
        resolve(res.data)
      },
      fail: reject
    })
  })
}

export { get, post }
