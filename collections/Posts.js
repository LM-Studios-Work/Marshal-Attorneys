const formatSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const populateSlug = ({ data, operation, value }) => {
  if (typeof value === "string" && value.trim()) {
    return formatSlug(value)
  }

  if (operation === "create" && typeof data?.title === "string") {
    return formatSlug(data.title)
  }

  return value
}

export const Posts = {
  slug: "posts",
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["title", "slug", "publishedDate", "updatedAt"],
    useAsTitle: "title",
  },
  labels: {
    singular: "Article",
    plural: "Articles",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeValidate: [populateSlug],
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
        position: "sidebar",
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "content",
              type: "richText",
              required: true,
            },
          ],
        },
        {
          name: "seo",
          label: "SEO",
          fields: [
            {
              name: "metaTitle",
              type: "text",
              maxLength: 70,
            },
            {
              name: "metaDescription",
              type: "textarea",
              maxLength: 160,
            },
          ],
        },
      ],
    },
  ],
}
