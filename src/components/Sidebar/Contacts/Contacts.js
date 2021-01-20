import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import AlternateEmailRoundedIcon from '@material-ui/icons/AlternateEmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contacts = ({contacts}) => {
  console.log(contacts);
  const {github, website, email, linkedin} = contacts;
  return (
    <>
      <a 
        href={`https://www.github.com/${github}`}
        target="_blank"
      >
        <GitHubIcon />
      </a>
      <a
        href={`https://${website}`}
        target="_blank"
      >
        <LanguageRoundedIcon />
      </a>
      <a
        href={`mailto:${email}`}
        target="_blank"
      >
        <AlternateEmailRoundedIcon />
      </a>
      <a
        href={`https://www.linkedin.com/in/${linkedin}`}
        target="_blank"
      >
        <LinkedInIcon />
      </a>
    </>
  )
}

export default Contacts;