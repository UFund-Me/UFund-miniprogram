interface ResponseData<T> {
  success: boolean
  data: T,
  message?: string
  statistics?: {
    date: string,
  }
}

const get = <T>(url: string, params: any = {}): Promise<ResponseData<T>> => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      success: res => {
        resolve(res.data as ResponseData<T>)
      },
      fail: reject
    })
  })
}

const post = <T>(url: string, params: any = {}): Promise<ResponseData<T>> => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: 'POST',
      success: res => {
        resolve(res.data as ResponseData<T>)
      },
      fail: reject
    })
  })
}

export { get, post }
