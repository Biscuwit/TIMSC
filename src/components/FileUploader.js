import { React, useState } from 'react'
import XLSX from 'xlsx'
import firebase from 'firebase'

const firestore = firebase.firestore()

function FileUploader() {
    const [parsedData, setParsedData] = useState()
    const handleFile = (e) => {
        const file = e.target.files[0]

        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;

        reader.onload = e => {
            /* Parse data */
            const result = e.target.result;
            const workBook = XLSX.read(result, {
                type: rABS ? "binary" : "array",
                bookVBA: true
            });
            /* Get first worksheet */
            const workSheetName = workBook.SheetNames[0];
            const workSheet = workBook.Sheets[workSheetName];
            /* Convert array of arrays */
            const jsonData = XLSX.utils.sheet_to_json(workSheet);
            console.log(jsonData);
            setParsedData({ test: jsonData })
        };

        if (rABS) {
            reader.readAsBinaryString(file);
        } else {
            reader.readAsArrayBuffer(file);
        }
    }

    const handleSubmit = () => {
        firestore.collection('test').add(parsedData).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    }

    return (
        <div>
            <input type='file' onChange={handleFile} />
            <input type='button' onClick={handleSubmit} value='Upload data' />

            <input type='button' onClick={() => { console.log(parsedData); }} value='Log' />
        </div>
    )
}

export default FileUploader
