'use strict'

import { storiesOf } from '@kadira/storybook'
import React from 'react'
import Repos from './index'

storiesOf('Repos', module)
  .add('With title prop', () => (
    <Repos
      title={"Favoritos"}
    />
  ))
  .add('with repos', () => (
    <Repos
      title={"Favoritos"}
      repos={[{
        link: '#',
        name: "Repositorio favorito"
      }]}
    />
  ))