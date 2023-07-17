import { configureStore } from "@reduxjs/toolkit";
import { adminsApi } from "./services/admin";

console.log(adminsApi)

const store = configureStore({
    reducer: {
        [adminsApi.reducerPath]: adminsApi.reducer,
    },
    middleware: (gDM) => gDM().concat(adminsApi.middleware)
});



export default store;


//middleware
//when we take data from db called query
//when we perform any update oon server called mutations