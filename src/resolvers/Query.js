const { forwardTo } = require("prisma-binding");

const Query = {
    groceries: forwardTo("db")
    // Above function is equal to:
    // async groceries(parent, args, ctx, info) {
    //     return await ctx.db.query.groceries();
    // }
};

module.exports = Query;
