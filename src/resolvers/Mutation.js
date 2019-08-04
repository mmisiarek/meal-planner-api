const Mutation = {
    /* SAMPLE QUERY
        mutation createGrocery {
            createGrocery(data: {
                name: "Brocolli"
                kcal: 123
                fat: 1
                protein: 4
                carbs: 1
            }) {
                id
                name
            }
        }
    */
    async createGrocery(parent, args, ctx, info) {
        const newGrocery = args.data;
        const entry = await ctx.db.mutation.createGrocery(
            { data: newGrocery },
            info
        );
        return entry;
    }
};

module.exports = Mutation;
