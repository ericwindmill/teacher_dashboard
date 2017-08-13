const state = {

}

const mutations = {

}

const actions = {
  requestAssignments: async ({commit}) => {
    let resp = await fetch('https://api.edmodo.com/assignments?access_token=12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d')
    let data = await (resp.json())
    console.log(data)
    return data
  }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}