import uuidv4 from "uuid";

const DEFAULT_NOTE = {
  title: "Title",
  msg: "",
  type: "TEXT" // T0D0-List, IMAGE, etc.
};

const state = {
  notes: [],
  currentNoteId: null
};

const mutations = {
  ADD_NOTE: state =>
    state.notes.push({ ...DEFAULT_NOTE, uuid: uuidv4(), date: new Date() }),
  REMOVE_NOTE: (state, id) =>
    (state.notes = state.notes.filter(el => el.uuid !== id)),
  SET_CURRENT_NOTE: (state, id) => (state.currentNoteId = id)
};

const getters = {
  notes: state => state.notes,
  currentNoteId: state => state.currentNoteId,
  currentNote: state =>
    state.notes.find(el => el.uuid === state.currentNoteId) || ""
};

const actions = {
  addNote({ commit }) {
    commit("ADD_NOTE");
  },
  removeNote({ commit }, payload) {
    commit("REMOVE_NOTE", payload);
  },
  setCurrentNoteId({ commit }, payload) {
    commit("SET_CURRENT_NOTE", payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
