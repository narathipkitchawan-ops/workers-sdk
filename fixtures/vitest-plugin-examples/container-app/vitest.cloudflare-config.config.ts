import { cloudflareTest } from "@cloudflare/vitest-plugin";
import { defineProject, mergeConfig } from "vitest/config";
import configShared from "../../../vitest.shared";

export default mergeConfig(
	configShared,
	defineProject({
		plugins: [
			cloudflareTest({
				// Define the same Worker and Containers in `cloudflare.config.ts`
				config: true,
			}),
		],
		test: {
			include: ["test/container.test.ts"],
			name: "container-app-cloudflare-config",
		},
	})
);
