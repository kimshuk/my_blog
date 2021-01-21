'use strict'

module.exports = {
  url: 'https://jeesookim.com',
  pathPrefix: '/',
  title: `Jeesoo's Blog`,
  description: 'Blog about anything I learned or worth mentioning',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/about'
    },
    {
      label: 'Contact me',
      path: '/contact-me'
    }
  ],
  author: {
    name: 'Andrew Kim',
    photo: '/static/images/avatars/my_profile.png',
    bio: 'My Bio',
    job: 'Web Developer',
    contacts: {
      email: 'jeesoo2002@gmail.com',
      github: 'kimshuk',
      linkedin: 'andrew-kim-72b5598b',
      website: 'www.jeesookim.com'
    }
  }
}