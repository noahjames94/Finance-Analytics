import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/logo.png'
import Wordmark from '../../assets/wordmark.png'
import Logo1 from '../../assets/logo1.jpg'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'34px'} src={Logo1} alt="logo" />
          </UniIcon>
          <img width={'84px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Logo1} alt="logo" />
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
