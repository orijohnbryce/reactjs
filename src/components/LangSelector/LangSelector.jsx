import React from 'react'
import { useTranslation } from 'react-i18next'

const LangSelector = () => {
    const { i18n } = useTranslation()


    return (
        <div>
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                <option value="en">English</option>
                <option value="he">עברית</option>
                <option value="pt">Portuguese</option>
            </select>
        </div>
    )
}

export default LangSelector
