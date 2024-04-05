import Content from './Mounted';
import { useState} from 'react';


// mounted/unmounted
function Content() {
    const [show, setShow] = useState(false);
    return(
        <div>
            <button onClick={() => 
                setShow(!show)}>Toggle</button>
            {show && <Content/>}
        </div>

    )
 }
export default Content;