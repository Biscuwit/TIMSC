import React from 'react'
import Logout from './Logout'
import FileUploader from './FileUploader'
import firebase from 'firebase'
import {useCollection} from 'react-firebase-hooks/firestore'

function Admin() {
    const [value, loading, error] = useCollection(
        firebase.firestore().collection('test'))
    console.log(value, loading, error);
    return (
        <div>
            <FileUploader/>
            <Logout/>
            {(
          <span>
            {value ? value.docs.map(doc => (
              <React.Fragment key={doc.id}>
                <pre>
                {JSON.stringify(doc.data(), null, 2)},{' '}
                </pre>
              </React.Fragment>
            )): null}
          </span>
        )}
        </div>
    )
}

export default Admin
