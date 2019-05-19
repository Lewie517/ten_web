<template>
  <div class="wrapper release-tc">
    <div class="release-box">
      <h3>发布问题</h3><br>
      <input id="appendedPrependedInput" type="text" v-model="title" class="appendedPrependedInput" placeholder="    标题"><br>
      <div class="editor">
        <div
          class="quill-editor"
          :content="content"
          @change="onEditorChange($event)"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @ready="onEditorReady($event)"
          v-quill:myQuillEditor="editorOption"
        ></div>

        <div class="btns">
          <button class="sui-btn btn-danger btn-release" @click="save()">发布</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import '~/assets/css/page-sj-qa-submit.css'
import problemApi from '@/api/problem'
import {getUser} from '@/utils/auth'
export default {

  data () {
      return {
        content: '',
        title:'',
        editorOption: {
          placeholder: '请开始您的表演',
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'align': [] }]
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      }
    },
    mounted() {
      console.log('app init, my quill insrance object is:', this.myQuillEditor)
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
      save(){
          problemApi.save({ content:this.content,title:this.title,userid:getUser().userid,name:getUser().name }  ).then(res=>{
              this.$message({
                  message: res.data.message,
                  type: (res.data.flag?'success':'error'),
                  showClose: true
              })
              if(res.data.flag){
                  this.$router.push('/qa/label')
              }
          })
      }
    }

}
</script>

<style>

.quill-editor {
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}

</style>

