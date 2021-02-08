import React from 'react';
import { makeStyles, Tooltip } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  contactsLink: {
    border: '0',
    display: 'flex',
    margin: '0.25rem',
    color: theme.palette.primary.main,

    '&:hover': {
      color: theme.palette.secondary.main
    },
    '&:focus': {
      color: theme.palette.secondary.main
    }
  },
  contactsLinkList: {
    display: 'flex',
    flexFlow: 'row wrap',
    marginBottom: '1.025rem'
  }
}))

const Contacts = ({contacts}) => {
  const classes = useStyles();
  const {github, website, email, linkedin} = contacts;

  return (
    <div className={classes.contactsLinkList}>
      <Tooltip title="github">
        <a 
          className={classes.contactsLink}
          href={`https://www.github.com/${github}`}
          rel='noreferrer noopener'
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </Tooltip>
      <Tooltip title="website">
        <a
          className={classes.contactsLink}
          href={`https://${website}`}
          rel='noreferrer noopener'
          target="_blank"
        >
          <LanguageRoundedIcon />
        </a>
      </Tooltip>
      <Tooltip title="email">
        <a
          className={classes.contactsLink}
          href={`mailto:${email}`}
          rel='noreferrer noopener'
          target="_blank"
        >
          <AlternateEmailRoundedIcon />
        </a>
      </Tooltip>
      <Tooltip title="linked in">
        <a
          className={classes.contactsLink}
          href={`https://www.linkedin.com/in/${linkedin}`}
          rel='noreferrer noopener'
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </Tooltip>
    </div>
  )
}

export default Contacts;