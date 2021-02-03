import React from 'react';

function ErrorPanel(props) {
    return(
        <div className={props.className}>
            <h1>Erro</h1>
            <p>Um erro inesperado aconteceu. Tente novamente</p>
        </div>
    )
}

export default ErrorPanel;