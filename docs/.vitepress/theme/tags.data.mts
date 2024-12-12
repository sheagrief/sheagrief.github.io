import { createContentLoader } from "vitepress";
import type { ContentData } from "vitepress";

interface PostsForTag {
  tag: string;
  posts: { title: string; url: string }[];
}

declare const data: PostsForTag[];
export { data };

function hasOwnProperty(obj: unknown, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

export default createContentLoader(["posts/*/*.md", "notes/*.md"], {
  transform(raw: ContentData[]): PostsForTag[] {
    // group post by frontmatter.tags
    const postsByTag = raw.reduce((acc, post) => {
      if (post.frontmatter.draft) {
        return acc;
      }

      const tags: string[] = post.frontmatter.tags ?? [];
      tags.forEach((tag) => {
        if (!hasOwnProperty(acc, tag)) {
          acc[tag] = [];
        }

        acc[tag].push({
          title: post.frontmatter.title,
          url: post.url,
        });
      });

      return acc;
    }, {} as Record<string, PostsForTag["posts"][number][]>);

    return (
      Object.entries(postsByTag)
        // タグの名前順にソート
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([tag, posts]) => {
          return {
            tag,
            // TODO: 記事を日付順にソート
            posts,
          };
        })
    );
  },
});
