<template>
  <div id="wrapper">
    <div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="currentNote.msg"
      ></textarea>
    </div>
    <div class="notes--list">
      <ul>
        <li
          v-for="note in notes"
          :key="note.uuid"
          @click="setCurrentNoteId(note.uuid)"
        >
          <input v-if="editMode" type="text" v-model="note.title" />
          <span v-else>{{ note.title }}</span>
          <span @click="toggleTitle()">({{ editMode ? " " : "/" }})</span>
          <span @click="removeNote(note.uuid)">(-)</span>
        </li>
      </ul>
      <ul>
        <li @click="addNote">(+)add</li>
        <li @click="open('https://twitter.com/fvnami')">(∆)fvnami</li>
      </ul>
    </div>
  </div>
</template>

<script>
import uuidv4 from "uuid";

export default {
  name: "landing-page",
  computed: {
    currentNote() {
      return this.notes.find(el => el.uuid === this.currentNoteId) || "";
    }
  },
  data() {
    return {
      currentNoteId: null,
      editMode: false,
      notes: [
        {
          uuid: uuidv4(),
          title: "lorem lauren",
          msg: "sanfk efef ef wefwkvwj  enfkwfw",
          date: new Date()
        }
      ]
    };
  },
  methods: {
    removeNote(id) {
      this.notes = this.notes.filter(el => el.uuid !== id);
    },
    addNote() {
      this.notes.push({
        uuid: uuidv4(),
        title: "Title",
        msg: "",
        date: new Date()
      });
    },
    toggleTitle() {
      this.editMode = !this.editMode;
    },
    setCurrentNoteId(id) {
      this.currentNoteId = id;
    },
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/_variables.scss";

#wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  textarea {
    background: none;
    border: 0;
    color: $primary;
    outline: none;
    resize: none;
    width: 100%;
    height: 100%;
  }
  input {
    background: none;
    border: 0;
    color: $primary;
    outline: none;
  }
  .notes--list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
