import { ResourceProps } from "@refinedev/core"
import { NavIconExampleBlogPosts, NavIconExampleCategories, NavIconExamples } from "../../resources/nav-icons"
import { Route } from "react-router";
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "./blog-posts";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./categories";
import { DataProviderNames } from "../../contexts/data-providers";

export const RESOURCE_BLOG_POSTS = "blog_posts";

export const ExamplesResources = () => {
    return [
        {
            name: "Examples",
            meta: {
                icon: <NavIconExamples />,
            },
        },
        {
            name: RESOURCE_BLOG_POSTS,
            list: "/blog-posts",
            create: "/blog-posts/create",
            edit: "/blog-posts/edit/:id",
            show: "/blog-posts/show/:id",
            meta: {
                dataProviderName: DataProviderNames.REFINE_FAKE_REST_API,
                canDelete: true,
                icon: <NavIconExampleBlogPosts />,
                parent: "Examples",
            },
        },
        {
            name: "categories",
            list: "/categories",
            create: "/categories/create",
            edit: "/categories/edit/:id",
            show: "/categories/show/:id",
            meta: {
                dataProviderName: DataProviderNames.REFINE_FAKE_REST_API,
                canDelete: true,
                icon: <NavIconExampleCategories />,
                parent: "Examples",
            },
        },
    ];
}
export const ExamplesRouteBlogPosts = () => {
    return (
        <Route path="/blog-posts">
            <Route index element={<BlogPostList />} />
            <Route path="create" element={<BlogPostCreate />} />
            <Route path="edit/:id" element={<BlogPostEdit />} />
            <Route path="show/:id" element={<BlogPostShow />} />
        </Route>
    );
}

export const ExamplesRouteCategories = () => {
    return (
        <Route path="/categories">
            <Route index element={<CategoryList />} />
            <Route path="create" element={<CategoryCreate />} />
            <Route path="edit/:id" element={<CategoryEdit />} />
            <Route path="show/:id" element={<CategoryShow />} />
        </Route>
    );
}
