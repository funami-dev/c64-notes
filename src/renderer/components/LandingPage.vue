<template>
  <div id="wrapper">
    <div>
      <textarea name=""
                id=""
                cols="30"
                rows="10"
                v-model="currentNote.msg"></textarea>
    </div>
    <div class="notes--list">
      <ul>
        <li v-for="note in notes"
            :key="note.uuid"
            @click="setCurrentNoteId(note.uuid)">{{note.title}} <span
                @click="removeNote(note.uuid)">(-)</span></li>
      </ul>
      <ul>
        <li @click="addNote">(+)add</li>
        <li @click="open('https://twitter.com/fvnami')">(∆)fvnami</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "landing-page",
  computed: {
    currentNote() {
      console.log(this.currentNoteId);

      return this.notes.find(el => el.uuid === this.currentNoteId) || "";
    }
  },
  data() {
    return {
      currentNoteId: null,
      notes: [
        {
          uuid: "fewneh9ehe9hweffvhewfnewu9",
          title: "lorem lauren",
          msg: "sanfk efef ef wefwkvwj  enfkwfw",
          date: null
        },
        {
          uuid: "fewneh9effhe9hwevhewfnewu9",
          title: "vmdvmm3m3f lauren",
          msg: "sanewfewfwefwkvwj  enfkwfw",
          date: null
        },
        {
          uuid: "fewneh9ehe9hwevhewfnewu9",
          title: "lorfewfwefwefewem lauren",
          msg: "feveewfewfwkvwj  enfkwfw",
          date: null
        },
        {
          uuid: "edefefefe",
          title: "fewfewfewf lauren",
          msg: "fewf efl ewfwfwwkvwj  enfkwfw",
          date: null
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
        uuid: "scdcd",
        title: "1",
        msg: "",
        date: ""
      });
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
