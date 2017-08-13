const state = {
  assignments: []
}

const mutations = {
  'RECEIVE_ASSIGNMENTS' (state, assignments) {
    state.assignments = []
    assignments.forEach(assignment => {
      state.assignments.push(assignment)
    })
  }
}

const actions = {
  requestAssignments: async ({commit}) => {
    let resp = await fetch('https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d')
    let data = await (resp.json())
    commit('RECEIVE_ASSIGNMENTS', data)
  }
}

const getters = {
  assignments: state => {
    return state.assignments
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}