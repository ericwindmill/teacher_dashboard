const state = {
  assignments: []
}

const mutations = {
  'RECEIVE_ASSIGNMENTS' (state, assignments) {
    // assignments.forEach(assignment => {
    //   state.assignments.push(assignment)
    // })
    state.assignments = assignments
  },
  'ADD_ASSIGNMENT' (state, assignment) {
    state.assignments.push(assignment)
  }
}

const actions = {
  requestAssignments: async ({commit}) => {
    let resp = await fetch('https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d&per_page=10')
    let data = await (resp.json())
    commit('RECEIVE_ASSIGNMENTS', data)
  },
  addAssignment: async ({commit}, assignment) => {
    commit('ADD_ASSIGNMENT', assignment)
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