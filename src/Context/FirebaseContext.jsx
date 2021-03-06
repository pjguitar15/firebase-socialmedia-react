import React, { useState } from 'react'
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../Firebase/firebase'
import { useAuth } from '../Context/AuthProvider.jsx'
// Firebase Storage
export const UploadProgress = React.createContext()
export const ProgressError = React.createContext()
export const FileUrl = React.createContext()
export const UploadToStorage = React.createContext()
export const LikePost = React.createContext()
// FireStorage end

const FirebaseContext = ({ children }) => {
  // Firebase Storage
  const [progress, setProgress] = useState(0)
  const [uploadError, setUploadError] = useState('')
  const [url, setUrl] = useState('')

  // useAuth
  const { currentUser } = useAuth()

  const collectionRef = projectFirestore.collection('posts')
  const uploadToStorage = (file, title, description) => {
    // references
    const storageRef = projectStorage.ref(file.name)
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        // get percentage with this formula
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100

        setProgress(percentage)
      },
      (err) => {
        setUploadError(err)
      },
      async () => {
        // this function fires when upload is complete
        const url = await storageRef.getDownloadURL()
        // url is created successfully here

        // call timestamp function and assign to var
        const createdAt = timestamp()

        // adds image url to firestore collection
        collectionRef.add({
          likes: 0,
          comments: [],
          title,
          description,
          email: currentUser.email,
          url,
          createdAt,
        })
        setUrl(url)
      }
    )
  }

  const likePost = (item) => {
    collectionRef
      .doc(item.id)
      .update({ ...item, likes: item.likes + 1 })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <UploadProgress.Provider value={[progress, setProgress]}>
      <ProgressError.Provider value={[uploadError, setUploadError]}>
        <FileUrl.Provider value={[url, setUrl]}>
          <UploadToStorage.Provider value={uploadToStorage}>
            <LikePost.Provider value={likePost}>{children}</LikePost.Provider>
          </UploadToStorage.Provider>
        </FileUrl.Provider>
      </ProgressError.Provider>
    </UploadProgress.Provider>
  )
}

export default FirebaseContext
