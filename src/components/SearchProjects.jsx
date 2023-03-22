import { useState } from "react";
import '../style/searchProjects.scss';

const SearchProjects = ({requestProjects,errorText}) => {

    const [text,setText] = useState('');

    return (
        <div className="searchProjects">
            <input 
                className="searchProjects__input" 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Начните вводить текст для поиска (не менее трех символов)' />
            <button 
                onClick={() => requestProjects(text)} 
                className="searchProjects__request">
                    Запрос
            </button>
            {errorText ? <h4>Введите не менее трех символов</h4> : null}
        </div>
    )
}

export default SearchProjects;