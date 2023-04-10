import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "~/env.mjs";
import { createTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";

// export API handler
export default createNextApiHandler({
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ error, path }) => {
          // eslint-disable-next-line no-console
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
  router: appRouter,
});
