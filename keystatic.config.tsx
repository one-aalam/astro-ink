import { config, fields, singleton, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    post: collection({
        label: 'Posts',
        path: 'src/content/blog/*',
        slugField: 'slug',
        schema: {
          title: fields.text({ label: 'Title' }),
          slug: fields.text({
            label: 'Slug',
            validation: { length: { min: 4 } },
          }),
          description: fields.text({ label: 'Description' }),
          tags: fields.text({ label: 'Tags' }),
          author: fields.text({ label: 'Author' }),
          authorImage: fields.text({ label: 'AuthorImage' }),
          authorTwitter: fields.text({ label: 'Author Twitter' }),
          date: fields.date({ label: 'Publish Date' }),
          image: fields.image({ label: 'Hero Image' }),
          category: fields.text({ label: 'Category' }),
          content: fields.document({
            label: 'Content',
            formatting: true,
            dividers: true,
            links: true,
          }),
        },
      }),
    //   people: collection({
    //     label: 'People',
    //     path: 'src/content/people/*/',
    //     slugField: 'username',
    //     schema: {
    //       name: fields.text({ label: 'Name' }),
    //       username: fields.text({
    //         label: 'Username',
    //         validation: { length: { min: 4 } },
    //       }),
    //     },
    //   }),
  },
  singletons: {
    settings: singleton({
        label: 'Settings',
        schema: {
          something: fields.checkbox({ label: 'Something' }),
          logo: fields.image({ label: 'Logo' }),
        },
      }),
  }
})
