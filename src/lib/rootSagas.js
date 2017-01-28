import authSaga from '../reducers/auth/authSaga'
import mainSaga from '../reducers/main/mainSaga'
import dataSaga from '../reducers/data/dataSaga'

export default function* sagas() {
  yield [
    ...authSaga,
    ...mainSaga,
    ...dataSaga,
  ]
}
