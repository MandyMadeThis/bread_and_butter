module.exports = {
  name: 'Social media',
  settings: [
    {
      "type": "image_picker",
      "id": "share_image",
      "label": "Share image",
      "info": "This image is used when you share pages such as home page. For product, collection or article pages, the featured image will be used instead."
    },
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
      id: 'social_twitter',
      default: 'https://twitter.com/breadnbutterTO',
      label: 'Twitter'
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
      id: 'social_pinterest',
      info: 'example: https://www.pinterest.com/breadandbutter',
      label: 'Pinterest'
    }
  ]
}
