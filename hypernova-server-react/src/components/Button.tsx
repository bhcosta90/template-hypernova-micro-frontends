import React from 'react';
import { InputText } from '@dafiti/poc-lib-frontend-new-web'

export const Button = () => <div>
    <button onClick={() => alert('click me!')}>
        Hello World 123
    </button>
    <InputText />
</div>

export default Button