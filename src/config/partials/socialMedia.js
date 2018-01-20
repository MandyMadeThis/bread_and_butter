module.exports = {
  name: 'Social media',
  settings: [
    {
      type: 'header',
      content: 'Accounts'
    },
    {
      type: 'text',
      id: 'social_facebook',
      default: 'https://www.facebook.com/breadandbutter.to/',
      label: 'Facebook'
    },
    {
      type: 'text',
      id: 'social_instagram',
      default: 'https://www.instagram.com/breadandbutter.to/',
      label: 'Instagram'
    },
    {
      type: 'text',
      id: 'social_youtube',
      info: 'example: https://www.youtube.com/user/breadandbutter',
      label: 'YouTube'
    },
    {
      type: 'text',
      id: 'social_vimeo',
      info: 'example: https://vimeo.com/breadandbutter',
      label: 'Vimeo'
    },
    {
      type: 'text',
      id: 'social_google_plus',
      info: 'example: https://plus.google.com/+breadandbutter',
      label: 'Google Plus'
    },
    {
      type: 'text',
      id: 'social_twitter',
      info: 'example: https://twitter.com/breadandbutter',
      label: 'Twitter'
    },
    {
      type: 'text',
      id: 'social_pinterest',
      info: 'example: https://www.pinterest.com/breadandbutter',
      label: 'Pinterest'
    }
  ]
}
