import React from 'react'
import { TextStyle } from 'react-native'
import styled from 'styled-components'


type TypographyProps = {
  text: string
  size?: number
  fontWeight?: number | string
  textAlign?: string
} & TextStyle

const Typography: React.FC<TypographyProps> = ({
  text,
  color = 'black',
  size = 14,
  fontWeight,
 
  ...props
}: TypographyProps) => {
  return (
    <Text
      size={size}
      color={color}
      fw={fontWeight}
      style={{ ...props }}
    >
      {text}
    </Text>
  )
}

export default Typography

type TextProps = {
  color?: string
  size: number
  textAlign?: string
  [anyOtherProp: string]: any
}

const Text = styled.Text<TextProps>`
  font-size: ${props =>props.size}px;
  font-weight: ${props => props.fw || '800'};
  color: ${props => props.color};
  
  
`