import { fileURLToPath } from "node:url";
import createMDX from "@next/mdx";
import createJiti from "jiti";
import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Load and verify environment variables
jiti("./src/lib/shared/infrastructure/env");

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	eslint: {
		ignoreDuringBuilds: true,
	},
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	options: {
		remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
		rehypePlugins: [],
	},
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
