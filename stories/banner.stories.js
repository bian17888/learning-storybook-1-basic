import React, { Component } from 'react';
import { storiesOf } from '@storybook/react'

import MajorBanner from '../components/major.banner'
import MinorBanner from '../components/minor.banner'

storiesOf('Component | Banner/Major', module)
    .add('with only title', () => (
        <MajorBanner title="title" photo="People Outdoors/shutterstock_116403520.jpg" />
    ))
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