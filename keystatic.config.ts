import { config, fields, collection } from '@keystatic/core';

const REPO_NAME = 'partyjollof-landing'
const REPO_OWNER = 'peterayeniofficial'

export default config({
  storage: {
    kind: 'github',
    repo: `${REPO_OWNER}/${REPO_NAME}`
 },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    movies: collection({
      label: 'Movies',
      slugField: 'title',
      path: 'src/content/movies/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        overview: fields.text({
          label: 'Overview',
          multiline: true
        }),
        imageUrl: fields.text({
          label: 'Image URL',
        }),
        trailer: fields.text({
          label: 'Trailer URL',
        }),
        playingAt: fields.text({
          label: 'Cinema URL',
        }),
        status: fields.select({
          label: 'Status',
          description: "The person's role at the company",
          options: [
            { label: 'Designer', value: 'designer' },
            { label: 'Developer', value: 'developer' },
            { label: 'Product manager', value: 'product-manager' },
          ],
          defaultValue: 'designer'
        }) 

      },
    }),
    tvshows: collection({
      label: 'TV Shows',
      slugField: 'title',
      path: 'src/content/tvshows/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});