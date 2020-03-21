import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions"

import CallToAction from '../components/form/cta-button';

storiesOf('button', module)
    .add('call to action', () => (
        <CallToAction label="submit" onClick={action("button-click")} />
    ))