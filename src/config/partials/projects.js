module.exports = {
  name: 'Projects Images',
  settings: [
    {
      type: 'paragraph',
      content: 'Use this area to assign images to your projects collections (blogs). First choose the blog name and then assign an image to it. Make sure you have chosen the same three blogs as menu items the Navigation menu, for the Projects drop down menu.'
    },
    {
      type: 'header',
      content: 'Projects Collection #1'
    },
    {
      type: 'blog',
      label: 'Choose Blog #1',
      id: 'projects_collection_1'
    },
    {
      type: 'image_picker',
      id: 'projects_collection_img_1',
      label: 'Choose Blog #1 Image',
      info: 'Assign image to the Blog you chose above. Recommended Size: 1920px X 1280px'
    },
    {
      type: 'header',
      content: 'Projects Collection #2'
    },  
    {
      type: 'blog',
      label: 'Choose Blog #2',
      id: 'projects_collection_2'
    },
    {
      type: 'image_picker',
      id: 'projects_collection_img_2',
      label: 'Choose Blog Image',
      info: 'Assign image to the Blog you chose above. Recommended Size: 1920px X 1280px'
    },
    {
      type: 'header',
      content: 'Projects Collection #3'
    },
    {
      type: 'blog',
      label: 'Choose Blog #3',
      id: 'projects_collection_3'
    },
    {
      type: 'image_picker',
      id: 'projects_collection_img_3',
      label: 'Choose Blog #3 Image',
      info: 'Assign image to the Blog you chose above. Recommended Size: 1920px X 1280px'
    }
  ]
}