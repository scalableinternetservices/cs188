import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import { ColorName, Colors } from '../../../../common/src/colors'
import { H2 } from '../../style/header'
import { Spacer } from '../../style/spacer'
import { style } from '../../style/styled'
import { BodyText, IntroText } from '../../style/text'
import { Link } from '../nav/Link'
import { AppRouteParams } from '../nav/route'
import { Page } from './Page'

interface LecturesPageProps extends RouteComponentProps, AppRouteParams {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LecturesPage(props: LecturesPageProps) {
  return (
    <Page>
      <Section>
        <H2>Lectures</H2>
        <Spacer $h4 />
        <IntroText>Lecture slides and code will be posted regularly. Schedule subject to change.</IntroText>
        <Spacer $h4 />
        <Table>
          <tbody>
            <Lecture
              day="Thu Oct 1"
              title="Course intro"
              href="/app/assets/lectures/CS188_10_1_20.pdf"
              description="Course overview. Demo: how a web app fails."
            />
            <Lecture
              day="Tue Oct 6"
              title="HTTP, HTML, CSS"
              href="/app/assets/lectures/CS188_10_6_20.pdf"
              description="HTTP protocol in depth. Demo: Chrome dev tools, course website under the hood."
              requiredReading={[
                {
                  title: 'High Performance Browser Networking, chapter 1',
                  href: 'https://hpbn.co/primer-on-latency-and-bandwidth/',
                },
                {
                  title: 'High Performance Browser Networking, chapter 2',
                  href: 'https://hpbn.co/building-blocks-of-tcp/',
                },
              ]}
            />
            <Lecture
              day="Tue Oct 8"
              title="JavaScript"
              href="/app/assets/lectures/CS188_10_8_20.pdf"
              description="The JavaScript renaissance. Demo: building a web app."
              requiredReading={[
                {
                  title: 'TS Deep Dive, JavaScript (** read up to and including "Truthy")',
                  href: 'https://basarat.gitbook.io/typescript/recap',
                },
                {
                  title: 'TS Deep Dive, Future JavaScript Now (** read up to and including "Async Await")',
                  href: 'https://basarat.gitbook.io/typescript/future-javascript',
                },
              ]}
            />
            <Lecture
              day="Thu Oct 13"
              title="Application server architecture"
              href="/app/assets/lectures/CS188_10_13_20.pdf"
              description="Building an efficient appserver. Demo: building a web app."
            />
            <Lecture
              day="Thu Oct 15"
              title="API design, GraphQL"
              href="/app/assets/lectures/CS188_10_15_20.pdf"
              description="Designing an API. Demo: interactive GraphQL explorer."
            />
            <Lecture
              day="Tue Oct 20"
              title="State management & server-side caching"
              href="/app/assets/lectures/CS188_10_20_20.pdf"
              description="Managing state and caching on the server. Demo: TypeORM."
            />
            <Lecture
              day="Thu Oct 22"
              title="State management & client-side caching"
              href="/app/assets/lectures/CS188_10_22_20.pdf"
              description="Managing state and caching on the client. Demo: Apollo."
            />
            <Lecture
              day="Tue Oct 27"
              title="Relational databases & SQL"
              href="/app/assets/lectures/CS188_10_27_20.pdf"
              description="Guest lecture: DC Posch"
            />
            <Lecture
              day="Thu Oct 29"
              title="Scaling relational databases"
              href="/app/assets/lectures/CS188_10_29_20.pdf"
              description="Techniques for scaling relational databases."
            />
            <Lecture
              day="Tue Nov 3"
              title="Load testing"
              href="/app/assets/lectures/CS188_11_3_20.pdf"
              description="Writing load tests. Demo: load testing the course website."
            />
            <Lecture
              day="Thu Nov 5"
              title="Monitoring and observability"
              href="/app/assets/lectures/CS188_11_5_20.pdf"
              description="Measuring how your server is working. Guest lecture: Max Edmands."
            />
            <Lecture
              day="Tue Nov 10"
              title="Shipping software in real life"
              href="/app/assets/lectures/CS188_11_10_20.pdf"
              description="Working with other people & shipping like a pro. Guest lecture: Quinn Slack"
            />
            <Lecture
              day="Thu Nov 12"
              title="Debugging performance problems"
              href="/app/assets/lectures/CS188_11_12_20.pdf"
              description="Demo: investigating the course website."
            />
            <Lecture
              day="Tue Nov 17"
              title="Fetching & publishing"
              href="/app/assets/lectures/CS188_11_17_20.pdf"
              description="Updating your app with new data in real time. Demo: polling, GraphQL subscriptions."
            />
            <Lecture
              day="Thu Nov 19"
              title="High availability; serverless computing; AWS; terraform"
              href="/app/assets/lectures/CS188_11_19_20.pdf"
              description="Scaling code with and without servers. Demo: terraform, AWS."
            />
            <Lecture
              day="Tue Nov 24"
              title="Intelligent systems"
              href="/app/assets/lectures/CS188_11_24_20.pdf"
              description="Using ML in your internet service. Guest lecture: Andrew Mutz."
            />
            <Lecture day="Thu Nov 26" title="Thanksgiving (no lecture)" />
            <Lecture
              day="Tue Dec 1"
              title="Course review"
              href="/app/assets/lectures/CS188_12_1_20.pdf"
              description="Reviewing the scaling toolset. Demo: horizontal and vertical scaling on AWS."
            />
            <Lecture
              day="Tue Dec 3"
              title="NoSQL"
              href="/app/assets/lectures/CS188_12_3_20.pdf"
              description="Scaling databases without SQL"
            />
            <Lecture
              day="Thu Dec 8"
              title="High performance networking, no JavaScript"
              href="#"
              description="Using HTTP/2, CDNs, and edge computing; coding in the browser without JavaScript. Demo: Next.js, Netlify."
            />

            <Lecture day="Thu Dec 10" title="Project Presentations" />
          </tbody>
        </Table>
      </Section>
    </Page>
  )
}

interface RequiredReading {
  title: string
  href: string
}

function Lecture(props: {
  day: string
  title: string
  description?: string
  href?: string
  requiredReading?: RequiredReading[]
}) {
  return (
    <TR>
      <TD>{props.day}</TD>
      <TD>
        <BodyText>
          <b>{props.href ? <Link href={props.href}>{props.title}</Link> : props.title}</b>

          {props.description && (
            <>
              <Spacer $h2 />
              <i>{props.description}</i>
            </>
          )}
          {props.requiredReading && (
            <>
              <Spacer $h4 />
              <b>Reading</b>
              <Spacer $h2 />
              <ul className="ml4">
                {props.requiredReading.map((rr, i) => (
                  <li key={i}>
                    <Link href={rr.href}>{rr.title}</Link>
                  </li>
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
