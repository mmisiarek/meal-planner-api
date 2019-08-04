const Query = {
    groceries(parent, args, ctx, info) {
        return [
            {
                id: "43lkfjlq",
                name: "Potato",
                kcal: 51,
                fat: 4,
                protein: 4,
                carbs: 40
            }
        ];
    }
};

module.exports = Query;
