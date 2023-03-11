import { stockProvider } from "../providers";
const stockResolver = {
    Query: {
        stocks: async (_, args) => {
            return stockProvider.getStocks(args.input);
        },
    },
};
export { stockResolver };
