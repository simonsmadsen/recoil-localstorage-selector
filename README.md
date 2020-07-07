# Recoil Localstorage Selector

## Installation

```
yarn add recoil-localstorage-selector
```

## Usage

```
import localStorageSelector from 'recoil-localstorage-selector'

const defaultValue = 0

const countAtom = atom({
  key: 'countState',
  default: defaultValue,
})

const countPersist = localStorageSelector(
  countAtom,  'countPersistState', defaultValue
)
```
Function description:
```
localStorageSelector(atom, selectorKey, defaultValue)
```

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)