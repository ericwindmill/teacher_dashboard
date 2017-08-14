const state = {
  assignments: [],
  newAssignment: {
    title: '',
    description: '',
    due_at: '',
    lock_after_due: false
  }
}

const mutations = {
  'RECEIVE_ASSIGNMENTS' (state, assignments) {
    state.assignments = []
    assignments.forEach(assignment => {
      state.assignments.push(assignment)
    })
  },
  'ADD_ASSIGNMENT' (state, assignment) {
    state.assignments.push(assignment)
  },
  'RESET_NEW_ASSIGNMENT_FIELDS' (state) {
    state.newAssignment.title = '',
    state.newAssignment.description = '',
    state.newAssignment.due_at = '',
    state.newAssignment.lock_after_due = false
  }
}

const actions = {
  requestAssignments: async ({commit}) => {
    let resp = await fetch('https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d&per_page=10')
    let data = await (resp.json())
    commit('RECEIVE_ASSIGNMENTS', data)
  },
  addAssignment: async ({commit}, assignment) => {
    await commit('ADD_ASSIGNMENT', assignment)
    commit('RESET_NEW_ASSIGNMENT_FIELDS')

  },
  resetNewAssignmentFields: ({commit}) => {
    commit('RESET_NEW_ASSIGNMENT_FIELDS')
  }
}

const getters = {
  assignments: state => {
    return state.assignments
  },
  newAssignment: state => {
    return state.newAssignment
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}