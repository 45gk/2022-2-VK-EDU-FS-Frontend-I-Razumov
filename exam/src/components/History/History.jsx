import React, {useEffect, useRef} from 'react'
import './History.scss';
import Translate from "../Translate/Translate";

export default function History({translates}) {
    const history = translates.map((translate) => {
        return (
            <Translate  orig={translate.orig}
                        transl={translate.transl}
                        origLang={translate.origLang}
                        translLang={translate.translLang}

                    />
        )
    });

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView();
    });

    return (
        <section className={'history-block'}>
            {history}
            <div ref={divRef}/>
        </section>
    )
}

