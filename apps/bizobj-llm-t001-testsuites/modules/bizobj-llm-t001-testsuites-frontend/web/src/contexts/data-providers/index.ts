import { DataProviders } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";

const BACKEND = "api.default";
const REFINE_FAKE_REST_API = "api.fake-rest.refine.dev";

export const DataProviderNames = { DEFAULT: BACKEND, REFINE_FAKE_REST_API};

const defaultDataProvider = dataProvider("/api");

export const AppDataProviders: DataProviders = {
    default: defaultDataProvider
}
AppDataProviders[BACKEND] = defaultDataProvider;
AppDataProviders[REFINE_FAKE_REST_API] = dataProvider("https://api.fake-rest.refine.dev");
