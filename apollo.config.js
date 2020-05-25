module.exports = {
  client: {
    name: 'Country app thing',
    includes: ['src/**/*.{tsx,ts}'],
    service: {
      name: 'Country',
      localSchemaFile: './schema.graphql',
    },
  },
};
