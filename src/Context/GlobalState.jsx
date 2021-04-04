import React, { useState, useEffect } from 'react'

import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../Firebase/firebase'

export const HomeActive = React.createContext()
export const MessagesActive = React.createContext()
export const ProfileActive = React.createContext()
// Firebase Storage
export const UploadProgress = React.createContext()
export const ProgressError = React.createContext()
export const FileUrl = React.createContext()
export const UploadToStorage = React.createContext()
// FireStorage end
const GlobalState = ({ children }) => {
  const [isHome, setIsHome] = useState(true)
  const [isMessages, setIsMessages] = useState()
  const [isProfile, setIsProfile] = useState()
  // Firebase Storage
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [url, setUrl] = useState('')

  const uploadToStorage = (file) => {
    // references
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')
    console.log(file.name)

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        // get percentage with this formula
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
      },
      async () => {
        // this function fires when upload is complete
        const url = await storageRef.getDownloadURL()

        // call timestamp function and assign to var
        const createdAt = timestamp()

        // adds image url to firestore collection
        collectionRef.add({ url, createdAt })
        setUrl(url)
      }
    )
  }

  return (
    <HomeActive.Provider value={[isHome, setIsHome]}>
      <MessagesActive.Provider value={[isMessages, setIsMessages]}>
        <ProfileActive.Provider value={[isProfile, setIsProfile]}>
          {/* Firebase Storage Provider */}
          <UploadProgress.Provider value={[progress, setProgress]}>
            <ProgressError.Provider value={[error, setError]}>
              <FileUrl.Provider value={[url, setUrl]}>
                <UploadToStorage.Provider value={uploadToStorage}>
                  {children}
                </UploadToStorage.Provider>
              </FileUrl.Provider>
            </ProgressError.Provider>
          </UploadProgress.Provider>
        </ProfileActive.Provider>
      </MessagesActive.Provider>
    </HomeActive.Provider>
  )
}

export default GlobalState
