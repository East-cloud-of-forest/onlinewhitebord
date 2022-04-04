Vue.component('memoform-component', {
  props : ["rules", "memolist", "formopen"],
  template : `<v-dialog v-model="formopen" max-width="450">
      <v-card>
        <v-card-title class="accent white--text">
          메모작성
        </v-card-title>
        <v-form class="px-8 pb-4" @submit.prevent="addMemo" ref="form">
          <v-text-field label="메모의 제목을 입력해주세요" dense counter maxlength="25" clearable
            class="mt-7 headline alingcenter" :rules="rules" required height="40" v-model="memotitle" v-if="formopen">
          </v-text-field>
          <v-textarea outlined name="input-7-4" label="메모 내용" class="mt-7" counter clearable v-model="memocontent">
          </v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="closeMemoForm" class="error">
              취소
            </v-btn>
            <v-btn class="success" type="submit">
              등록
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>`,
  data() {
    return {
      memotitle: '',
      memocontent: '',
    }
  },
  methods: {
    closeMemoForm() {
      this.$emit('closememoform')
    },
    addMemo() {
      this.$emit('addmemo', this)
      this.memotitle = ''
      this.memocontent = ''
    }
  },
})