import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AssignmentsContainer from '@/components/assignment/AssignmentsContainer'
import NewAssignment from '@/components/assignment/NewAssignment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/:assignmentid',
          component: AssignmentsContainer,
          name: 'Assignment'
        }
      ]
    },
    { path: '*', redirect: {name: 'Home'}}
  ]
})
