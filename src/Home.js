import React from 'react'
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'

import FroalaEditorComponent from 'react-froala-wysiwyg'

const Home = () => {
  return (
    <div>
      <div id="editor"></div>
      <FroalaEditorComponent tag="textarea" />
    </div>
  )
}

export default Home
