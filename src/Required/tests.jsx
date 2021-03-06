/* eslint-env node, mocha */
/* eslint no-console: 0 */
/* eslint-disable no-magic-numbers, no-multi-str, no-unused-expressions */

import React        from 'react';
import { mount }    from 'enzyme';

import { Required } from '../index';

describe( 'Required', () =>
{
    let wrapper;

    beforeEach( () =>
    {
        wrapper  = mount( <Required /> );
    } );

    describe( 'render()', () =>
    {
        it( 'should contain exactly one Required', () =>
        {
            expect( wrapper ).to.have.length( 1 );
        } );
    } );

    describe( 'props', () =>
    {
        describe( 'isRequired', () =>
        {
            it( 'should be "true" by default', () =>
            {
                expect( wrapper.prop( 'isRequired' ) ).to.be.true;
            } );
        } );
    } );
} );
