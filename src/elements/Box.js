import React from 'react'
import { View } from 'react-native'

export const Box = (props) => {
  const {
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    pt = 0,
    pb = 0,
    pl = 0,
    pr = 0,
    flex = 0,
    width = '100%',
    align = 'flex-start',
    direction = 'column',
    justify = 'flex-start',
    background = 'transparent',
    children,
  } = props
  return (
    <View
      style={{
        flex,
        width,
        marginTop: mt,
        marginLeft: ml,
        paddingTop: pt,
        marginRight: mr,
        paddingLeft: pl,
        marginBottom: mb,
        paddingRight: pr,
        paddingBottom: pb,
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        backgroundColor: background,
      }}
    >
      {children}
    </View>
  )
}
