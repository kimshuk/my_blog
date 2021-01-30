'use strict'

module.exports = {
  url: 'https://jeesookim.com',
  pathPrefix: '/',
  title: `Jeesoo's Blog`,
  description: 'Blog about anything I learned or worth mentioning',
  postsPerPage: 4,
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
    job: 'Web Developer',
    photo: '/src/images/my_profile.png',
    bio: 'My Bio is empty',
    contacts: {
      email: 'jeesoo2002@gmail.com',
      github: 'kimshuk',
      linkedin: 'andrew-kim-72b5598b',
      website: 'www.jeesookim.com'
    }
  }
}