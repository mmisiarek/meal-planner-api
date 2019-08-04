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
    createGrocery(parent, args, ctx, info) {
        const { name } = args.data;
        return {
            id: "43lkfjlq",
            name: name,
            kcal: 51,
            fat: 4,
            protein: 4,
            carbs: 40
        };
    }
};

module.exports = Mutation;
