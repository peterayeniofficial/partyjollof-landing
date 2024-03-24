import { config, fields, collection } from "@keystatic/core";

const REPO_NAME = "partyjollof-landing";
const REPO_OWNER = "peterayeniofficial";

export default config({
  storage: {
    kind: "github",
    repo: `${REPO_OWNER}/${REPO_NAME}`,
  },
  collections: {
    movies: collection({
      label: "Movies",
      slugField: "title",
      path: "src/content/movies/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              length: {
                min: 1,
              },
            },
          },
        }),
        overview: fields.text({
          label: "Overview/Synopsis",
          multiline: true,
        }),
        imageUrl: fields.text({
          label: "Image URL",
        }),
        trailer: fields.text({
          label: "Trailer URL",
          description: "Get Trailer URL from YouTube",
        }),
        country: fields.select({
          label: "Country",
          description: "The movie's country",
          options: [
            { label: "Nigeria", value: "NG" },
            { label: "South Africa", value: "ZA" },
            { label: "Ghana", value: "GH" },
            { label: "Kenya", value: "KE" },
            { label: "Uganda", value: "UG" },
            { label: "Egypt", value: "EG" },
          ],
          defaultValue: "NG",
        }),
        status: fields.multiselect({
          label: "Status",
          description: "The movie's current release status",
          options: [
            { label: "Cinema", value: "cinema" },
            { label: "Coming Soon", value: "coming-soon" },
            { label: "Streaming", value: "streaming" },
            { label: "On DVD/Blu-ray", value: "on-dvd-blu-ray" },
          ],
          defaultValue: ["coming-soon"],
        }),
        streamingon: fields.multiselect({
          label: "Streaming Platrorm",
          description: "The movie's is currently streaming on",
          options: [
            { label: "Netflix", value: "netflix" },
            { label: "Prime Video", value: "prime-video" },
            { label: "Disney", value: "disney" },
            { label: "YouTube", value: "youtube" },
            { label: "Showmax", value: "showmax" },
            { label: "Iroko Tv", value: "irokotv" },
          ],
          defaultValue: ["netflix"],
        }),
        rating: fields.multiselect({
          label: "Rating",
          options: [
            { label: "G (General Audiences)", value: "G" },
            { label: "PG (Parental Guidance Suggested)", value: "PG" },
            { label: "PG-13 (Parents Strongly Cautioned)", value: "PG-13" },
            { label: "R (Restricted)", value: "R" },
            { label: "NC-17 (Adults Only)", value: "NC-17" },
          ],
          defaultValue: ["G"],
        }),
        genre: fields.multiselect({
          label: "Genre",
          options: [
            { label: "Action", value: "action" },
            { label: "Adventure", value: "adventure" },
            { label: "Drama", value: "drama" },
            { label: "Comedy", value: "comedy" },
            { label: "Crime and Mystery", value: "crime-and-mystery" },
            { label: "Death Game", value: "death-game" },
            { label: "Fantasy", value: "fantasy" },
            { label: "Historical", value: "historical" },
            { label: "Horror", value: "horror" },
            { label: "Romance", value: "romance" },
            { label: "Science Fiction", value: "science-fiction" },
            { label: "Thriller", value: "thriller" },
          ],
          defaultValue: ["comedy", "drama", "drama"],
        }),
        originalLanguage: fields.text({
          label: "Original Language",
        }),

        casts: fields.array(
          fields.object({
            name: fields.text({ label: "Full Name" }),
            role: fields.text({
              label: "Role",
            }),
          }),
          {
            label: "Casts",
            slugField: "name",
            itemLabel: (props) => props.fields.name.value,
          }
        ),
        directors: fields.array(
          fields.text({ label: "Full Name" }),
          // Labelling options
          {
            label: "Directors",
            itemLabel: (props) => props.value,
          }
        ),
        producers: fields.array(
          fields.text({ label: "Full Name" }),
          // Labelling options
          {
            label: "Producers",
            itemLabel: (props) => props.value,
          }
        ),
        writers: fields.array(
          fields.text({ label: "Full Name" }),
          // Labelling options
          {
            label: "Writers",
            itemLabel: (props) => props.value,
          }
        ),
        releaseDate: fields.date({
          label: "Release Date",
        }),
        runtime: fields.integer({
          label: "Runtime",
          description: "Runtime in minutes",
        }),
        distributor: fields.text({
          label: "Distributor",
        }),
        productionCos: fields.array(
          fields.text({ label: "Name" }),
          // Labelling options
          {
            label: "Prodiction Co",
            itemLabel: (props) => props.value,
          }
        ),
      },
    }),
    // tvshows: collection({
    //   label: "TV Shows",
    //   slugField: "title",
    //   path: "src/content/tvshows/*",
    //   format: { data: "json" },
    //   schema: {
    //     title: fields.slug({ name: { label: "Title" } }),
    //     content: fields.document({
    //       label: "Content",
    //       formatting: true,
    //       dividers: true,
    //       links: true,
    //       images: true,
    //     }),
    //   },
    // }),
    // people: collection({
    //   label: "People",
    //   slugField: "name",
    //   path: "src/content/people/*",
    //   format: { data: "json" },
    //   schema: {
    //     name: fields.slug({ name: { label: "Full Name" } }),
    //     bio: fields.document({
    //       label: "Bio",
    //       formatting: true,
    //       dividers: true,
    //       links: true,
    //     }),
    //   },
    // }),
  },
});
