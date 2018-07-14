module.exports = {
  Query: {
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id
          }
        },
        info
      );
    },
    products: (_, args, context, info) => {
      return context.prisma.query.products(
        {
          where: {
            title_contains: args.searchString
          }
        },
        info
      );
    }
  }
  // Mutation: {
  //   createDraft: (_, args, context, info) => {
  //     // ...
  //   },
  //   publish: (_, args, context, info) => {
  //     // ...
  //   },
  //   deletePost: (_, args, context, info) => {
  //     // ...
  //   },
  //   signup: (_, args, context, info) => {
  //     // ...
  //   }
  // }
};
