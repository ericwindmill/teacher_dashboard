const state = {
  submissions: []
}

const mutations = {
  'RECEIVE_SUBMISSIONS' (state, submissions) {
    state.submissions = []
    submissions.forEach(submission => {
      state.submissions.push(submission)
    })
  }
}

const actions = {
  requestSubmissions: async ({commit}, assignmentId) => {
    let resp = await fetch(`https://api.edmodo.com/assignment_submissions?assignment_id=${assignmentId}&assignment_creator_id=73240721&access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d`)
    let data = await (resp.json())
    commit('RECEIVE_SUBMISSIONS', data)
  }
}

const getters = {
  submissions: state => {
    return state.submissions
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}