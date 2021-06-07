import React, {FC} from 'react'
import styled from 'styled-components'
import { ViewStyle } from 'react-native'

type RowProps = {
    direction?: string
    justifyContent?: string
    width?: number | string
    children: React.ReactNode
  } &ViewStyle

const Row: FC<RowProps> = ({ children, direction,justifyContent,width,...props }) => {
  return <Horizontal direction={direction} justifyContent={justifyContent} width={width}  style={{ ...props }}>
      {children}
      </Horizontal>
}

const Horizontal = styled.View<RowProps>`
flexWrap: wrap
flex-direction : row
align-self:${props => props.direction || 'center'}
justify-content: ${props => props.justifyContent || 'space-around'}
width: ${props => props.width || '100%'}
`

export default Row
