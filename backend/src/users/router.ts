import { Router } from "express";
import { userHandlers } from "./handlers";
import validator from "../../lib/middleware/validator";
import {
  SignInDataSchema,
  SignUpDataSchema,
  UpdateUserSchema,
} from "./zod-schemas";
import { SearchQuerySchema, UsernameParamSchema } from "../../lib/zod-schemas";

const userRouter = Router({
  mergeParams: true,
});

userRouter.post(
  "/sign-in",
  validator(SignInDataSchema),
  userHandlers.signInHandler
);

userRouter.post(
  "/sign-up",
  validator(SignUpDataSchema),
  userHandlers.signUpHandler
);

userRouter
  .route("/")
  .put(validator(UpdateUserSchema), userHandlers.updateUserHandler)
  .get(validator(SearchQuerySchema, "query"), userHandlers.getUsersListHandler);

export default userRouter;
