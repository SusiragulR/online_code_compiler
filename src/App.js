import { useEffect, useState } from 'react';
import './index.css';
import Editor from './components/Editor'
import useLocalStorage from './hooks/useLocalStorage';

function App() {

    const [html,setHtml] = useLocalStorage('html','')
    const [css,setCss] = useLocalStorage('css','')
    const [js,setJs] = useLocalStorage('js','')
    const [srcDoc,setSrcDoc] = useState('')

    useEffect(()=>{
        const timeOut = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
            `)
        }, 500)

        return () => clearTimeout(timeOut)
    })
    return (
        <>
            <header className='titleCard'>Codespace</header>
            <div className="panel top-panel">
                <Editor 
                    displayTitle='HTML'
                    language='xml'
                    value={html}
                    setValue={setHtml}
                />
                <Editor 
                    displayTitle='CSS'
                    language='css'
                    value={css}
                    setValue={setCss}
                />
                <Editor 
                    displayTitle='JS'
                    language='javascript'
                    value={js}
                    setValue={setJs}
                />
            </div>
            <header className='titleCard'>Output</header>
            <div className="panel outputSpace">
                <iframe srcDoc={srcDoc}
                    title='output'
                    sandbox='allow-scripts' 
                    width="100%"
                    height="100%"
                />
            </div>
        </>
    );
}

export default App;
