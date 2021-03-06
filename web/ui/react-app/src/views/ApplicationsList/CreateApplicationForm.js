import React, { useState, useContext, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-go'
import { useHistory, useLocation } from 'react-router-dom'

import '../../css/editor.css'
import { RootContext } from '../../context'
import { Space } from 'antd'

const CreateApplicationForm = () => {
  const history = useHistory()
  const location = useLocation()
  const app = useContext(RootContext)
  const [name, onChangeName] = useState('')
  const [code, onChangeEditor] = useState('')
  const [cloned, setClone] = useState('')

  const now = new Date()
  const timestamp = `${now.getUTCFullYear()}-${now.getUTCMonth()}-${now.getUTCDate()}-${now.getUTCHours()}-${now.getUTCMinutes()}-${now.getUTCSeconds()}`
  const params = new URLSearchParams(location.search)
  const n = params.get('n')

  useEffect(() => {
    if (!cloned && app.apps) {
      const _app = app.apps.find(x => x.name === n)
      if (_app) {
        onChangeName(`${n}-${timestamp}`)
        onChangeEditor(_app.scenario)
        setClone(true)
      }
    }
  })

  return <div className='create-application-form'>
    <div className='card'>
      <div className='create-form-header'>
        <h2>Create new application</h2>
        <div className='form-submit'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={() => {
              app.submitCreate({ name, scenario: code })
            }}
          >
            {n ? 'Clone Application' : 'Create Application'}
          </button>
          <button
            className='btn btn-cancel'
            type='button'
            onClick={() => history.goBack()}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className='form-group'>
        <label className='form-label' htmlFor='name'>Application name:</label>
        <input
          type='text'
          name='name'
          className='form-input'
          placeholder='Enter application name'
          onChange={e => onChangeName(e.target.value)}
          value={name}
        />
      </div>
      <div className='form-group'>
        <label className='form-label' htmlFor='scenario'>Scenario:</label>
        <div className='editor-container'>
          <Editor
            value={code}
            onValueChange={c => onChangeEditor(c)}
            highlight={code => highlight(code, languages.go, 'go')}
            padding={16}
            tabSize={4}
            insertSpaces
            className='editor'
            autoFocus
            style={{
              fontFamily: '"Arial", "Open Sans", monospace',
              fontSize: 14
            }}
          />
        </div>
      </div>
    </div>
  </div>
}

export default CreateApplicationForm
