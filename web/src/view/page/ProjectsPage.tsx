import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { ColorName, Colors } from '../../../../common/src/colors'
import { H2 } from '../../style/header'
import { Spacer } from '../../style/spacer'
import { style } from '../../style/styled'
import { BodyText } from '../../style/text'
import { Link } from '../nav/Link'
import { AppRouteParams, getPlaygroundPath } from '../nav/route'
import { Page } from './Page'

interface ProjectsPageProps extends RouteComponentProps, AppRouteParams {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ProjectsPage(props: ProjectsPageProps) {
  return (
    <Page>
      <Section>
        <ProjectOverview />
        <Spacer $h5 />
        <ProjectRequirements />
        <Spacer $h5 />
        <ProjectIdeas />
        <Spacer $h5 />
        <SprintSchedule />
      </Section>
    </Page>
  )
}

function ProjectOverview() {
  return (
    <>
      <H2>Course Project</H2>
      <Spacer $h4 />
      <BodyText>
        The goal of the course project is to gain hands-on experience building and deploying a scalable web service on
        the internet. This is a "learn by doing" course so we'll spend time in lectures and lab sessions building
        features, watching them fail at scale, and then fixing them. 😉
      </BodyText>
      <Spacer $h4 />
      <BodyText>
        This class website is built on the framework you'll use for your project. During lectures we'll add new features
        to the <Link to={getPlaygroundPath()}>playground</Link>. The website source code is located{' '}
        <Link href="https://github.com/scalableinternetservices/cs188">here</Link>.
      </BodyText>
    </>
  )
}

function ProjectRequirements() {
  return (
    <>
      <H2>Project Requirements</H2>
      <Spacer $h4 />
      <BodyText>
        <ul className="pl4">
          <li>Must be deployable (and load-testable) web applications of non-trivial complexity</li>
          <li>Must be developed in teams of 4</li>
          <li>
            Must use the class project framework located <Link href="https://github.com/rothfels/bespin">here</Link>
          </li>
          <li>Must use TypeScript (or JavaScript)</li>
          <li>Must use at least 4 MySQL tables</li>
          <li>
            Must use at least 2 <code>JOIN</code> relations
          </li>
          <li>Must use at least 1 "background" process running regardless of user activity</li>
        </ul>
      </BodyText>
    </>
  )
}

function ProjectIdeas() {
  return (
    <>
      <H2>Project Ideas</H2>
      <Spacer $h4 />
      <BodyText>
        <ul className="pl4">
          <li>
            Implement some portion of one of the YCombinator{' '}
            <Link href="https://www.ycombinator.com/rfs/">"Startup ideas we would like to fund"</Link>
          </li>
          <li>
            Build something around a large dataset. Use data from e.g.{' '}
            <Link href="https://www.data.gov/">data.gov</Link> or{' '}
            <Link href="https://registry.opendata.aws/">Amazon's public datasets</Link>.
          </li>
          <li>
            Build something for the government. See the{' '}
            <Link href="https://sunlightfoundation.com/our-work/">Sunlight Foundation</Link> for ideas.
          </li>
          <li>
            Build something around public APIs. For example, the{' '}
            <Link href="https://developer.nytimes.com/">New York Times Developer API</Link> has APIs covering geography,
            movie reviews, and more.
          </li>
          <li>
            <i>{'<your idea here>'}</i>
          </li>
        </ul>
      </BodyText>
    </>
  )
}

function SprintSchedule() {
  return (
    <>
      <H2>Sprint Schedule</H2>
      <Spacer $h4 />
      <Table>
        <colgroup>
          <col span={1} style={{ width: '15%' }} />
          <col span={1} style={{ width: '85%' }} />
        </colgroup>
        <tbody>
          <Sprint
            day="Fri Oct 2"
            title="Setup dev environment"
            href="https://docs.google.com/document/d/12isxPg-dxCgTa77nkj9t-TN1HlDELdAF4UlLEXIf5bo/edit?usp=sharing"
            checklistFull={[
              {
                name: 'follow Quickstart section until you have a running dev server',
                href: 'https://github.com/rothfels/bespin#quickstart',
              },
              {
                name: 'learn TypeScript',
                href: 'https://www.typescriptlang.org/docs/handbook/intro.html',
              },
              {
                name: 'learn React',
                href: 'https://reactjs.org/tutorial/tutorial.html',
              },
              {
                name: 'write a React component in TypeScript / Storybook',
                href: 'https://github.com/rothfels/bespin#run-react-storybook',
              },
            ]}
          />
          <Sprint
            day="Fri Oct 9"
            title="Plan project"
            href="https://docs.google.com/document/d/1pfmcYeQUrjhExrIvhix1nujUVdzFHoaAUlhVCNp9v-w/edit?usp=sharing"
            checklistFull={[
              {
                name: "create a free GitHub account if you don't have one",
                href: 'https://github.com/join',
              },
              {
                name: 'meet with your group and decide what you want to build this quarter',
              },
              {
                name: 'plan a few features with your group (no coding)',
              },
              {
                name: 'present your project plan to John/TAs and get approval',
              },
              {
                name: 'give John/TAs your project name/slug',
              },
              {
                name: 'join the scalableinternetservices GitHub org',
                href: 'https://github.com/orgs/scalableinternetservices',
              },
              {
                name: 'have one team member follow the project Quickstart and push your initialized project to GitHub',
                href: 'https://github.com/rothfels/bespin#quickstart',
              },
              {
                name: 'list all project group members in your README and provide an image with each of your faces :)',
              },
            ]}
          />
          <Sprint
            day="Fri Oct 16"
            title="Write features"
            href="https://docs.google.com/document/d/18IjeGIWeoSl-jmChdWBNLeaQwQ2Wl9BFcMHnkCIvTE4/edit?usp=sharing"
            checklist={[
              'plan out features with your teammates',
              'work with teammates to learn the starter code: try adding a database model, GraphQL API/query, React component, etc.',
              'modify the starter code and start implement your features',
              'commit and push code to GitHub',
            ]}
          />
          <Sprint
            day="Fri Oct 23"
            title="Write features"
            href="https://docs.google.com/document/d/1aXqzKLXtzXPNRHMGAUUoGBjy-fT3wIGeAE9TnWAG4Mo/edit?usp=sharing"
            checklist={[
              'plan out features with your teammates',
              'work with teammates to learn the starter code: try adding a database model, GraphQL API/query, React component, etc.',
              'modify the starter code and start implement your features',
              'commit and push code to GitHub',
            ]}
          />
          <Sprint
            day="Fri Oct 30"
            title="Write features"
            href="https://docs.google.com/document/d/1nTnp3iIGZ5fpIpDVBciBoFAJ0f792RL_W6kmT6HrJnQ/edit?usp=sharing"
            checklist={['modify the starter code implement your features', 'commit and push code to GitHub']}
          />
          <Sprint
            day="Fri Nov 6"
            title="Write features, write a load test, setup honeycomb"
            href="https://docs.google.com/document/d/12iT5Vk24B1I9ZVMBCYAceW4tDe8dSWYX478YqJRRAWY/edit?usp=sharing"
            checklist={[
              'finish implementing features',
              'write a load test user script',
              'setup honeycomb project',
              'run load test against local dev server',
              'explore data in honeycomb',
            ]}
          />
          <Sprint
            day="Fri Nov 13"
            title="Deploy code on AWS, try different scaling configurations"
            checklist={['run terraform', 'run load test against AWS resources', 'delete terraform resources']}
          />
          <Sprint
            day="Fri Nov 20"
            title="Deploy code on AWS, try different scaling configurations"
            checklist={['run terraform', 'run load test against AWS resources', 'delete terraform resources']}
          />
          <Sprint day="Fri Nov 27" title="Thanksgiving (no lab)" />
          <Sprint
            day="Fri Dec 4"
            title="Deploy code on AWS, try different scaling configurations"
            checklist={['run terraform', 'run load test against AWS resources', 'delete terraform resources']}
          />
          <Sprint day="Fri Dec 11" title="Project presentations" />
        </tbody>
      </Table>
    </>
  )
}

interface ChecklistItem {
  name: string
  href?: string
}

function Sprint(props: {
  day: string
  href?: string
  title: string
  checklist?: string[]
  checklistFull?: ChecklistItem[]
}) {
  return (
    <TR>
      <TD style={{ textAlign: 'center' }}>
        <BodyText>{props.day}</BodyText>
      </TD>
      <TD>
        <BodyText>
          <b>{props.href ? <Link href={props.href}>{props.title}</Link> : props.title}</b>
          {props.checklist && (
            <>
              <Spacer $h3 />
              <ul className="pl4">
                {props.checklist.map((str, i) => (
                  <li key={i}>{str}</li>
                ))}
              </ul>
            </>
          )}
          {props.checklistFull && (
            <>
              <Spacer $h3 />
              <ul className="pl4">
                {props.checklistFull.map((item, i) => (
                  <li key={i}>{item.href ? <Link href={item.href}>{item.name}</Link> : item.name}</li>
                ))}
              </ul>
            </>
          )}
        </BodyText>
      </TD>
    </TR>
  )
}

const Table = style('table', 'w-100 ba b--black')

const Section = style('div', 'mb4 mid-gray ba b--mid-gray br2 pa3', (p: { $color?: ColorName }) => ({
  borderLeftColor: Colors[p.$color || 'lemon'] + '!important',
  borderLeftWidth: '3px',
}))

const TR = style('tr', 'ba b--black')

const TD = style('td', 'mid-gray pa3 v-mid', { minWidth: '7em' })
