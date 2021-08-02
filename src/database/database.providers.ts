import * as mongoose from "mongoose";
import {DB_PROVIDER} from "../constants";

export const databaseProviders = [{
    provide: DB_PROVIDER,
    useFactory: async () =>  {
        (mongoose as any).Promise = global.Promise;
        return await mongoose.connect(`${process.env.DB_DRIVER}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,{ useNewUrlParser: true });
    }
}]