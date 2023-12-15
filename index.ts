enum PostType {
  Text = "Text",
  Image = "Image",
  Article = "Article",
}

interface TextPost {
  text: string;
  type: PostType.Text;
}

interface ImagePost {
  image: string;
  type: PostType.Image;
}

interface ArticlePost {
  description: string;
  type: PostType.Article;
}

interface BasicPost {
  id: string;
  title: string;
}

type Post = BasicPost & (TextPost | ImagePost | ArticlePost);

const textPost: Post = {
  id: "123",
  title: "title",
  type: PostType.Article,
  description: "13",
};
