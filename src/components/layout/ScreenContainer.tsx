import React,{FC} from 'react'
import styled from 'styled-components'
import { ViewStyle } from 'react-native'

type ScreenContainerProps = {
  backgroundColor?: string
  widthPercentage?: number
  children: React.ReactNode
}&ViewStyle

const ScreenContainer: FC<ScreenContainerProps> = ({
  backgroundColor,
  widthPercentage,
  children,
  ...props
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      widthPercentage={widthPercentage}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{...props}}
      
    >
      {children}
    </Container>
  )
}

export default ScreenContainer

type ContainerProps = {
  backgroundColor: string
  widthPercentage: number
}

const Container = styled.View<ContainerProps>`
  width: ${props =>props.widthPercentage || '100%'}
  align-self: center
  flex: 1
  background-color: ${props => props.backgroundColor || 'transparent'}
`
