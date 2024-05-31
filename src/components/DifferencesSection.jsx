import Button from "./Button/Button.jsx";
import {differences} from "../data.js";
import {useState} from "react";

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null)

    // let content = 'Нажми на кнопку';
    function handleClick(type) {
        // console.log('button click', type)
        setContentType(type)
        //  content = type
    }

    return (
        <section>
            <h3>Чем мы отличаемся от других</h3>

            <Button
                isActive={contentType === 'way'}
                onClick={() => handleClick('way')}

            >Доступность
            </Button>
            <Button
                isActive={contentType === 'easy'}
                onClick={() => handleClick('easy')}
            >Консентрация
            </Button>
            <Button
                isActive={contentType === 'program'}
                onClick={() => handleClick('program')}
            >Покупка
            </Button>

            {/*{!contentType ? <p>Нажми на кнопку</p> : null}*/}
            {/*{contentType ? <p>{differences[contentType]}</p> : null}*/}
            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}

        </section>
    )
}