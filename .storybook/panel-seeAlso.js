import React from 'react';
import addons from '@storybook/addons';

class SeeAlso extends React.Component {
    render() {
        return <div>see also!</div>
    }
}

addons.register('pluralsight-see-also', (api) => {
    addons.addPanel('pluralsight-see-also/Panel', {
        title: 'See Also',
        render: ({ key }) => <SeeAlso key="key" api={api} />
    })
})