import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { Login } from '../auth/Login'
import { AppRouteParams, PlaygroundApp } from '../nav/route'
import { Candy } from '../playground/Candy'
import { Demo } from '../playground/Demo'
import { Surveys } from '../playground/Surveys'
import { Page } from './Page'

interface PlaygroundPageProps extends RouteComponentProps, AppRouteParams {}

export function PlaygroundPage(props: PlaygroundPageProps) {
  return <Page>{getPlaygroundApp(props.app)}</Page>
}

function getPlaygroundApp(app?: PlaygroundApp) {
  if (!app) {
    return <div>choose an app</div>
  }
  switch (app) {
    case PlaygroundApp.DEMO:
      return <Demo />
    case PlaygroundApp.CANDY:
      return <Candy />
    case PlaygroundApp.SURVEYS:
      return <Surveys />
    case PlaygroundApp.LOGIN:
      return <Login />
    default:
      throw new Error('no app found')
  }
}
