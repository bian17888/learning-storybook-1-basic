import React from 'react';
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import MajorBanner from '../components/major.banner'
import MinorBanner from '../components/minor.banner'
import withSeeAlso from '../.storybook/panel/SeeAlso/index'

storiesOf('Component | Banner/Major', module)
    .addDecorator(withSeeAlso)
    .addParameters({
        seeAlso: { story: 'Component | Banner/Minor', label: 'Beck - Minor Banners hh' },
    })
    .add('with only title', () => {
        const title = text('Title', 'title')
        const photo = text('Photo', 'People Outdoors/shutterstock_116403520.jpg')
        return (<MajorBanner
            title={title}
            photo={photo}
        />)
    })
    .add('with all text options', () => (
        <MajorBanner
            title="title"
            subtitle="subtitle"
            body="body"
            photo="People Outdoors/shutterstock_116403520.jpg"
        />
    ))

storiesOf('Component | Banner/Minor', module)
    .add('no pictures', () => (
        <MinorBanner
            title="title"
            subtitle="subtitle"
            body="body"
        />
    ))
    .add('with pictures', () => (
        <MinorBanner
            title="title"
            subtitle="subtitle"
            body="body"
            leftPhoto="Products/boots/shutterstock_66842440.jpg"
            rightPhoto="Products/boots/shutterstock_1121278055.jpg"
        />
    ))