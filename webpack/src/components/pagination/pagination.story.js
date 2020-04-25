'use strict'

import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', module)

stories.add("without props", () => (
  <Pagination/>
))

stories.add("with total and active page", () => (
  <Pagination
    total={10}
    activePage={5}
  />
))

stories.add("with pagelink", () => (
  <Pagination
    total={3}
    activePage={1}
    pageLink="http://mypage.com/page/%page%"
  />
))

stories.add("with callback", () => (
  <Pagination
    total={15}
    activePage={7}
    pageLink="http://mypage.com/page/%page%"
    onClick={(page) => {
      return (
        window.alert(page)
      )
    }}
  />
))