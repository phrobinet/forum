import Vue from "vue";
import Router from "vue-router";
import PageHome from "@/pages/PageHome";
import PageThreadShow from "@/pages/PageThreadShow";
// import sourceData from "@/data";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: PageHome
    },
    {
      path: "/thread/create",
      props: true,
      name: "ThreadCreate",
      component: () =>
        import(
          /* webpackChunkName: "Profile page" */ "../pages/PageThreadCreate"
        )
    },
    {
      path: "/thread/:id",
      name: "ThreadShow",
      component: PageThreadShow,
      // beforeEnter: (to, from, next) => {
      //   const exist = sourceData.threads.find(
      //     thread => thread.id === to.params.id
      //   );
      //   if (exist) {
      //     next()
      //   } else {
      //     next({ name: 'NotFound' })
      //   }
      // },
      props: true
    },
    {
      path: "/forum/:id",
      name: "Forum",
      props: true,
      component: () =>
        import(/* webpackChunkName: "Forum page" */ "../pages/PageForum")
    },
    {
      path: "/category/:id",
      props: true,
      name: "Category",
      component: () =>
        import(/* webpackChunkName: "Category page" */ "../pages/PageCategory")
    },
    {
      path: "/me",
      props: true,
      name: "Profile",
      component: () =>
        import(/* webpackChunkName: "Profile page" */ "../pages/PageProfile")
    },
    {
      path: "/me/edit",
      props: { edit: true },
      name: "ProfileEdit",
      component: () =>
        import(/* webpackChunkName: "Profile page" */ "../pages/PageProfile")
    },
    {
      path: "*",
      name: "NotFound",
      // component: PageNotFound
      component: () =>
        import(/* webpackChunkName: "Not Found page"  */ "@/pages/PageNotFound")
    }
  ],
  mode: "history"
});
