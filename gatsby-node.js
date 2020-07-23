const path = require('path');

// For creating nodes from markdown files
// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNodeField } = actions;

//     if(node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allContentfulBlogPost (
                sort: {
                    fields:publishedDate,
                    order:ASC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        excerpt {
                            excerpt
                        }
                    }

                    next {
                        title
                        slug
                    }

                    previous {
                        title
                        slug
                    }
                }
            }
        }
    `);

    res.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
                next: edge.next,
                previous: edge.previous
            }
        })
    })
}