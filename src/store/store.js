import { configureStore } from "@reduxjs/toolkit";
import roles from "./rolesSlice";




export const store = configureStore ({
    reducer: {
        roles: roles,
    }
});



