import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { grey } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material'
import { themeCustome } from './theme'
import { prefixer, stylisPlugins } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'




const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
})

const ThemeLayout = ({children}) => {

  
  return (
    <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={themeCustome}>
      {children}
    </ThemeProvider>
    </CacheProvider>
  )
}

export default ThemeLayout