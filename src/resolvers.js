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
    },
    carts: (_, args, context, info) => {
      return context.prisma.query.carts(null, info);
    }
  },
  Mutation: {
    createCart: (_, args, context, info) => {
      return context.prisma.mutation.createCart(
        {
          data: { product: { connect: { id: args.productId } } }
        },
        info
      );
    },
    deleteCart: (_, args, context, info) => {
      return context.prisma.mutation.deleteCart(
        { where: { id: args.id } },
        info
      );
    }
  }
};
