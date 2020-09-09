<template>
  <div>
    <div class="col-large push-top">
      <h1>{{ thread.title }}</h1>
      <p>
        By <a href="#" class="link-unstyled">Robin</a>,
        <AppDate :timestamp="thread.publishedAt" />
      </p>
      <PostList :posts="posts" />
      <PostEditor :threadId="id" />
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";

export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    thread() {
      return this.$store.state.threads[this.id];
    },

    posts() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(this.$store.state.posts).filter(post =>
        postIds.includes(post[".key"])
      );
    }
  }
  // ,
  // methods: {
  //   addPost({ post }) {
  //     const postId = post[".key"];
  //     this.$store.dispatch("createPost", post);
  //   }
  // }
};
</script>

<style scoped></style>
