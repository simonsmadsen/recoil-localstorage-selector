const { atom, selector,useRecoilState, useRecoilValue, useSetRecoilState }  = require('recoil')

module.exports = (atom, key, defaultValue) => {
    let persistedValue = null
    const persistValue = window.localStorage.getItem(`persist_${key}_atom`)
    if(persistValue){
      persistedValue = JSON.parse(persistValue)
    }
    return selector({
      key: key,
      get: ({get}) => {
        const atomValue = get(atom)
        return JSON.stringify(atomValue) == JSON.stringify(defaultValue)
          ? persistedValue
          : atomValue
      },
      set: ({set}, newValue) => {
        set(atom, newValue)
        window.localStorage.setItem(
          `persist_${key}_atom`,
          JSON.stringify(newValue)
        )
      }
  })
}