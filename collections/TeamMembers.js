export const TeamMembers = {
  slug: "team-members",
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["name", "role", "sortOrder", "isActive", "updatedAt"],
    group: "Team",
    useAsTitle: "name",
  },
  labels: {
    singular: "Team Member",
    plural: "Team Members",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      required: true,
    },
    {
      name: "expertise",
      type: "array",
      label: "Areas of Expertise",
      admin: {
        description:
          "Optional bullet points shown inside the team member profile modal.",
      },
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "sortOrder",
      type: "number",
      defaultValue: 0,
      admin: {
        description:
          "Lower numbers appear first. Use 10, 20, 30, etc. so you can insert people between existing entries later.",
        position: "sidebar",
      },
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
      label: "Show on website",
      admin: {
        position: "sidebar",
      },
    },
  ],
}
