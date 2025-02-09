import React from 'react';
import {
  createStyles,
  Overlay,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
} from '@mantine/core';
import { Link } from 'gatsby';
import Logo from '../assets/opf-logo.png';
import Concrete from '../assets/concrete.png';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage: `url(${Concrete})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingTop: theme.spacing.xl * 8,
    paddingBottom: theme.spacing.xl * 8,
    zIndex: 0,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: theme.spacing.xl * 5,
      paddingBottom: theme.spacing.xl * 5,
    },
  },

  title: {
    color: theme.white,
    fontSize: 55,
    fontWeight: 600,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
      marginBottom: theme.spacing.md * 1,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
      lineHeight: 1.3,
    },
  },

  title2: {
    color: theme.white,
    fontSize: 40,
    fontWeight: 600,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2,
      marginBottom: theme.spacing.md * 1,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 25,
      lineHeight: 1.3,
    },
  },

  linkedText: {
    textDecoration: 'none',
    color: '#ffcc00',

    '&:hover': {
      textDecoration: '#ffcc00 underline',
      color: '#808080',
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.sm * 0.2,
      width: 250,
      fontSize: theme.fontSizes.md * 1.1,
      marginLeft: theme.spacing.lg * 2,
    },

    '@media (max-width: 360px)': {
      marginLeft: theme.spacing.lg,
    },

    '&:hover': {
      color: '#fcc419',
      backgroundColor: 'black',
    },
  },
}));

export function MeetUp() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <img src={Logo} width={'35%'} alt=""></img>
        <Title className={classes.title2}>
          Data science community &#38; community cloud
          <br />
          &#62;&#62;Bi-weekly meetup
        </Title>
        <Group>
          <Text size="xl" color="dimmed" className={classes.description}>
            <p>
              Join our meetup every other Tuesday @ 11:00 ET on{' '}
              <Link
                to="https://meet.google.com/eyb-yegj-gji"
                className={classes.linkedText}
              >
                google meet
              </Link>{' '}
              .
            </p>
            <p>! No meetup on Tuesday, November 1st, 2022 !</p>
            <p>
              &#62;&#62;Next Meeting is on Tuesday, November 15th, 2022 at 11:00
              ET.
            </p>
          </Text>
          <List size="lg" color="dimmed" className={classes.description}>
            Ways to participate
            <List.Item>
              Sign up for the{' '}
              <Link
                to="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/"
                className={classes.linkedText}
              >
                mailing list
              </Link>{' '}
              .
            </List.Item>
            <List.Item>
              Add it to your{' '}
              <Link
                to="https://calendar.google.com/calendar/u/2?cid=N3QyMm1ydm92amNmdTZqZm5ucDRuMmtkZTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                className={classes.linkedText}
              >
                calendar
              </Link>{' '}
              !
            </List.Item>
            <List.Item>
              Join our meetup every other Tuesday @ 11:00 ET on{' '}
              <Link
                to="https://meet.google.com/eyb-yegj-gji"
                className={classes.linkedText}
              >
                google meet
              </Link>{' '}
              .
            </List.Item>
            <List.Item>
              Introduce yourself on{' '}
              <Link
                to="https://join.slack.com/t/operatefirst/shared_invite/zt-o2gn4wn8-O39g7sthTAuPCvaCNRnLww"
                className={classes.linkedText}
              >
                slack
              </Link>{' '}
              in the{' '}
              <Link
                to="https://operatefirst.slack.com/archives/C02KY881CJE"
                className={classes.linkedText}
              >
                #data-science
              </Link>{' '}
              channel.
            </List.Item>
            <List.Item>
              Present or suggest a topic by creating an{' '}
              <Link
                to="https://github.com/operate-first/operate-first-data-science-community/issues/new?assignees=&labels=&template=topic_submission.md"
                className={classes.linkedText}
              >
                issue
              </Link>{' '}
              here.
            </List.Item>
            <List.Item>
              Check out our{' '}
              <Link
                to="https://github.com/operate-first"
                className={classes.linkedText}
              >
                GitHub
              </Link>{' '}
              repos.
            </List.Item>
            <List.Item>
              Watch previous sessions on{' '}
              <Link
                to="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg"
                className={classes.linkedText}
              >
                YouTube
              </Link>{' '}
              !
            </List.Item>
          </List>
        </Group>
        <Group>
          <Link to="https://lists.operate-first.cloud/admin/lists/community.lists.operate-first.cloud/">
            <Button size="lg" radius="xl" className={classes.control}>
              Sign up
            </Button>
          </Link>
          <Link to="https://calendar.google.com/calendar/u/2?cid=N3QyMm1ydm92amNmdTZqZm5ucDRuMmtkZTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">
            <Button size="lg" radius="xl" className={classes.control}>
              Add calendar
            </Button>
          </Link>
          <Link to="https://www.youtube.com/channel/UCe87bwqlGoBQs2RvMQZ5_sg?sub_confirmation=1">
            <Button size="lg" radius="xl" className={classes.control}>
              Follow us on YouTube
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
