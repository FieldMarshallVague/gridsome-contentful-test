<template>
  <Layout>
    <p>Articles:</p>
    <!-- <ul>
      <li v-for="item in $page.posts.edges" :key="item.node.id">
        <g-link :to="item.node.path"> {{item.node.title}} </g-link>
      </li>
    </ul> -->
    <ul>
      <li v-for="{ node } in $page.posts.edges" :key="node.id">
        <g-link :to="node.path"> {{node.title}} </g-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allContentfulBlogPost {
    edges {
      node {
        id,
        path,
        title,
        slug
      }
    }
  }
}
</page-query>