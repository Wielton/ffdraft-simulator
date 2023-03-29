import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
// import colors from 'vuetify/lib/util/colors'

const lightTheme = {
  dark: false,
  colors: {
    background: 'white'
}
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  defaultTheme: 'lightTheme',
  theme: {
    themes: {
    lightTheme
}
  }
})
