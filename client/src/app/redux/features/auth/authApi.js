import { apiSlice } from "../api/apiSlice";
import { userRegistration, userTemporary, userLoggedIn } from "./authSlice";

export const authapi = apiSlice.injectEndpoints({
    overrideExisting: true, // Allow overriding existing endpoints
    endpoints: (builder) => ({
        registration: builder.mutation({
            query: (data) => ({
                url: "registration",
                method: "POST",
                body: data,
                credentials: "include", // Include credentials like cookies
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    dispatch(
                        userRegistration({
                            token: result.data.activationToken,
                        })
                    );

                    // Dispatch the second action
                    dispatch(
                        userTemporary({
                            tempuser: result.data.user,
                        })
                    );
                } catch (error) {
                    console.error("Error in registration mutation:", error);
                }
            },
        }),
        activation: builder.mutation({
            query: ({ activation_token, activation_code }) => ({
                url: "activate-user",
                method: "POST",
                body: {
                    activation_token,
                    activation_code,
                },
            }),
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "login",
                method: "POST",
                body: { email, password },
                credentials: "include",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(
                        userLoggedIn({
                            token: result.data.activationToken,
                            user: result.data.user,
                        })
                    );
                } catch (error) {
                    console.log("Error in login mutation:", error);
                }
            },
        }),
    }),
});

export const { useRegistrationMutation, useActivationMutation, useLoginMutation } = authapi;
