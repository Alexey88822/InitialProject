import React, { FC } from "react";
import { IntlProvider } from "react-intl";

import { AppRoutes } from "pages/AppRoutes";
import { LOCALES } from "i18n/locales";
import { messages } from "i18n/messages";

interface Props {
}

export const App: FC<Props> = () => {
    const locale = LOCALES.RUSSIAN;

    return(
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={LOCALES.RUSSIAN}>
            <AppRoutes/>
        </IntlProvider>
    )
}