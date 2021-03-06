/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0*/
/* eslint-disable no-magic-numbers, no-multi-str, no-unused-expressions */

import React        from 'react';
import { mount }    from 'enzyme';

import IconButton   from '../IconButton';

import Tag          from './index';


describe( 'Tag', () =>
{
    let wrapper;

    beforeEach( () =>
    {
        wrapper = mount( <Tag /> );
    } );

    it( 'should render <Tag/>', () =>
    {
        expect( wrapper.find( Tag ) ).to.have.length( 1 );
    } );

    it( 'should have its component name as default className', () =>
    {
        expect( wrapper.find( '.tag__default' ) ).to.have.length( 1 );
    } );

    it( 'should have an IconButton as a child', () =>
    {
        expect( wrapper.find( IconButton ) ).to.have.length( 1 );
    } );

    describe( 'read-only state', () =>
    {
        beforeEach( () =>
        {
            wrapper = mount( <Tag isReadOnly /> );
        } );

        it( 'should have an IconButton as a child with isReadOnly set', () =>
        {
            expect( wrapper.find( IconButton ) ).to.have.length( 1 );
            expect( wrapper.find( IconButton ).prop( 'isReadOnly' ) )
                .to.be.true;
        } );
    } );

    it( 'should have an IconButton with control theme and close icon as a \
child', () =>
        {
            expect( wrapper.find( IconButton ).props().iconTheme )
                .to.equal( 'control' );
            expect( wrapper.find( IconButton ).props().iconType )
                .to.equal( 'close' );
        } );

    it( 'should have a string as a label when prop label is passed', () =>
    {
        const label = 'Tag Label';
        const props = {
            label
        };
        wrapper = mount( <Tag { ...props } /> );
        expect( wrapper.text() ).to.be.equal( label );
    } );

    it( 'should trigger onClick callbacks when IconButton clicked', () =>
    {
        const callBack = sinon.spy();
        const props = {
            onClick : callBack
        };
        wrapper = mount( <Tag { ...props } /> );
        wrapper.driver().clickClose();
        expect( callBack.calledOnce ).to.be.true;
    } );
} );
