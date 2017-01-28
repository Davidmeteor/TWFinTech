'use strict'

const {
    FETCH_FIN_DATA_START,
    FETCH_FIN_DATA_SUCCESS,
} = require('../../lib/constants').default

export function fetchFinData() {
  return {
    type: FETCH_FIN_DATA_START,
  }
}

export function fetchFinDataSuccess(data:any) {
  return {
    type: FETCH_FIN_DATA_SUCCESS,
    payload: data,
    /*
    payload: {
        pie: {
              Offshore: data.pie.Offshore,
              OnshoreETF: data.pie.OnshoreETF,
              OnshoreMF: data.pie.OnshoreMF,
              OnshoreMMF: data.pie.OnshoreMMF,
          },
        MMF: {
            numberofrecord: data.MMF.numberofrecord,
        }  
    },
    */
  }
}