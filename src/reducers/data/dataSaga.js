import { call, fork, take, put } from 'redux-saga/effects'
import * as dataActions from './dataActions'
import ApiFactory from '../../api/apiFactory'
import I18n from '../../lib/i18n'

const {
  FETCH_FIN_DATA_START,
} = require('../../lib/constants').default

const api = new ApiFactory()

export function* fetchfindata(payload) {
  try {
      const DATAPATH = '/data/'
      const data = yield call([api, api.readDataBaseOnce], DATAPATH)
      console.log(data)
      yield put(dataActions.fetchFinDataSuccess({
        MMF: data.MMF,
        OnshoreAUM: data.OnshoreAUM,
        pie: data.pie,
      }))
  } catch (error) {
      console.log(error)
  }
}

export function* watchFetchFinData() {
  while (true) {
    const { payload } = yield take(FETCH_FIN_DATA_START)
    yield fork(fetchfindata, payload)
  }
}

export default [
  fork(watchFetchFinData),
]