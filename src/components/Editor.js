import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as EditorWindow } from 'react-codemirror2'
import { RiExpandLeftRightLine,RiContractLeftRightLine } from 'react-icons/ri' 

export default function Editor(props) {

    const{
        displayTitle,
        language,
        value,
        setValue
    } = props

    const [open,setOpen] = useState(true)

    const handleChange = (editor, data, value) => {
        setValue(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayTitle}
                <button 
                    className='expand-contract-btn'
                    onClick={()=>setOpen(prevOpen=>!prevOpen)}
                >
                    {open ? <RiContractLeftRightLine /> : <RiExpandLeftRightLine />}
                </button>               
            </div>

            <EditorWindow 
                onBeforeChange={handleChange}
                className='editor-window'
                options={{
                    lineWrapping: true,
                    mode: language,
                    lineNumbers: true,
                    theme:'material'
                }} 
                value={value}              
            />
                
        </div>
    )
}
