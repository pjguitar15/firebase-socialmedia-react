import React, { useState, useEffect, useContext } from 'react'
import { Modal } from 'antd'
// import from LoginSignUp styled component
import {
  TextInput,
  FormGroup,
} from '../../../../LoginSignUp/Styles/InputField.style.jsx'
// import Alert from react bootstrap
import { Alert, ProgressBar } from 'react-bootstrap'
// import firebase storage from global context
import {
  UploadProgress,
  ProgressError,
  FileUrl,
  UploadToStorage,
} from '../../../../../Context/FirebaseContext.jsx'

const ModalContent = ({ visible, setVisible }) => {
  const [file, setFile] = useState(null)
  // form validation error
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  // Modal Form
  const [postTitle, setPostTitle] = useState('')
  const [postDescription, setPostDescription] = useState('')

  // Firebase useContext
  const [progress] = useContext(UploadProgress)
  const [uploadError, setUploadError] = useContext(ProgressError)
  const [url] = useContext(FileUrl)
  const uploadToStorage = useContext(UploadToStorage)
  // allowed types
  const types = ['image/png', 'image/jpeg']

  // onClick
  const postHandler = () => {
    // validate post
    if (!postTitle) {
      setError('Please enter title')
    } else if (!postDescription) {
      setError('Please enter description')
    } else if (!file) {
      setError('Photo is required')
    } else {
      setError('')
      setLoading(true)
      uploadToStorage(file, postTitle, postDescription)
    }
  }

  // onChange
  const storeFileData = (e) => {
    const selected = e.target.files[0]

    if (selected && types.includes(selected.type)) {
      setUploadError('')
      setFile(selected)
    } else {
      setUploadError('Only image files are supported!')
      setFile(null)
    }
  }

  useEffect(() => {
    // if loading done, set state back to null
    if (url) {
      setLoading(false)
      setVisible(false)
      setUploadError('')
      setPostTitle('')
      setPostDescription('')
    }
  }, [url])

  return (
    <>
      {/* Modal */}
      <Modal
        title='Add a post!'
        centered
        visible={visible}
        onOk={postHandler}
        onCancel={() => setVisible(false)}
        width={1000}
        okText='Post'
      >
        <div className='col-8 mx-auto'>
          {uploadError && <Alert variant='danger'>{uploadError}</Alert>}
          {error && <Alert variant='danger'>{error}</Alert>}
          <FormGroup>
            <FormGroup>
              <h6>Upload a photo</h6>
              <input onChange={storeFileData} type='file' />
            </FormGroup>
            <h6>Post Title</h6>
            <TextInput
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              placeholder='Enter title'
            />
          </FormGroup>
          <FormGroup>
            <h6>Post Description</h6>
            <TextInput
              value={postDescription}
              onChange={(e) => setPostDescription(e.target.value)}
              placeholder='Enter description'
            />
          </FormGroup>
          {loading && <ProgressBar animated now={progress} />}
        </div>
      </Modal>
    </>
  )
}

export default ModalContent
