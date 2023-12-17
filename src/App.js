import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
const alanKey = '77b7ba8e8621b17f5db4f5b80366d78c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key : alanKey,
            onCommand : ({command}) => {
                if(command === 'testCommand'){
                    alert("connected to alan api");
                }
            }
        })
    },[]);

    return (
        <div>
            <h1>Alan ai news app</h1>
        </div>
    )
}

export default App;