import axios from 'axios';
import { getAccessToken } from './utils';

const instance = axios.create({
  timeout: 60000,

});

// Add a request interceptor
instance.interceptors.request.use(
  async config => {
    const tokenData = await getAccessToken();
    if (tokenData && !instance.skipToken) {
      config.headers['Authorization'] = `${tokenData}`;
    }
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(undefined, async error => {
  const originalRequest = error.config;
  if (error.response?.status === 401) {
    console.log('401 Error inside Interceptor', error.response);
    const token = await updateAccessToken();
    console.log('UPDATED TOKEN-->', token);
    if (originalRequest.method === 'post') {
      const a = await post(originalRequest.url, originalRequest.data);
      return Promise.resolve(a);
    } else if (originalRequest.method === 'get') {
      const a = await get(originalRequest.url);
      return Promise.resolve(a);
    } else if (originalRequest.method === 'put') {
      const a = await put(originalRequest.url, originalRequest.data);
      return Promise.resolve(a);
    } else if (originalRequest.method === 'patch') {
      const a = await patch(originalRequest.url, originalRequest.data);
      return Promise.resolve(a);
    } else {
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
});

export const setupResponseInterceptor = store => {
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.message === 'Network Error') {
        console.log('CAUGHT IN INTERCEPTOR ------->BAD NETWORK CONNECTION3332');
        store.dispatch(setError("Network Error"));
      }

      if (error.response?.status === 503 || error.response?.status === 500) {
        store.dispatch(setError("Something Went Wrong"));
      }

      return Promise.reject(error);
    },
  );
};

export const get = url => {
  // store.dispatch(setLoading(true));
  return new Promise((resolve, reject) => {
    instance
      .get(url)
      .then(result => {
        // store.dispatch(setLoading(false));
        resolve(result);
      })
      .catch(error => {
        // store.dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const getwithHeader = (url, header) => {
  return new Promise((resolve, reject) => {
    instance
      .get(url)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export const postWithHeader = (url, data, header) => {
  store.dispatch(setLoading(true));
  console.log("inside post with header", url, data, header)
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, header)
      .then(result => {
        store.dispatch(setLoading(false));
        console.log("res", result)
        resolve(result);
      })
      .catch(error => {
        console.log("err", error)
        store.dispatch(setLoading(false));
        reject(error);
      });
  });
};

export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const putWithHeader = (url, data, header) => {
  return new Promise((resolve, reject) => {
    instance
      .put(url, data, header)
      .then(result => {
        if (result.status === 200) {
          resolve(result.data);
        } else {
          reject(result.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const remove = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(url, {
        data,
      })
      .then(result => {
        if (result.status === 200) {
          resolve(result.data);
        } else {
          reject(result.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const patch = (url, data) => {
  return new Promise((resolve, reject) => {
    instance
      .patch(url, data)
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};
